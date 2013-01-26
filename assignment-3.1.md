* variables have descriptive names
* variables do not use proper camel case convention

```javascript
var IEEE_754_BINARY_64_PRECISION = Math.pow(2, 53);
var MAX_PACKET_LENGTH            = Math.pow(2, 24) - 1;
var PacketHeader                 = require('./PacketHeader');
```

* whitespace makes it easy to read
* this file does not have any comments
* every statement ends with a semicolon;

```javascript
module.exports = Parser;
function Parser(options) {
  options = options || {};

  this._buffer            = new Buffer(0);
  this._longPacketBuffers = [];
  this._offset            = 0;
  this._packetEnd         = null;
  this._packetHeader      = null;
  this._onPacket          = options.onPacket || function() {};
  this._nextPacketNumber  = 0;
  this._encoding          = 'utf-8';
  this._paused            = false;
}

Parser.prototype.write = function(buffer) {
  this.append(buffer);

  while (true) {
    if (this._paused) {
      return;
    }

    if (!this._packetHeader) {
      if (this._bytesRemaining() < 4) {
        break;
      }

      this._packetHeader = new PacketHeader(
        this.parseUnsignedNumber(3),
        this.parseUnsignedNumber(1)
      );

      this._trackAndVerifyPacketNumber(this._packetHeader.number);
    }

    if (this._bytesRemaining() < this._packetHeader.length) {
      break;
    }

    this._packetEnd = this._offset + this._packetHeader.length;

    if (this._packetHeader.length === MAX_PACKET_LENGTH) {
      this._longPacketBuffers.push(this._buffer.slice(this._offset, this._packetEnd));

      this._advanceToNextPacket();
      continue;
    }

    this._combineLongPacketBuffers();

    // Try...finally to ensure exception safety. Unfortunately this is costing
    // us up to ~10% performance in some benchmarks.
    var hadException = true;
    try {
      this._onPacket(this._packetHeader);
      hadException = false;
    } finally {
      this._advanceToNextPacket();

      // If we had an exception, the parser while loop will be broken out
      // of after the finally block. So we need to make sure to re-enter it
      // to continue parsing any bytes that may already have been received.
      if (hadException) {
        process.nextTick(this.write.bind(this));
      }
    }
  }
};

Parser.prototype.append = function(newBuffer) {
  // If resume() is called, we don't pass a buffer to write()
  if (!newBuffer) {
    return;
  }

  var oldBuffer = this._buffer;
  var bytesRemaining = this._bytesRemaining();
  var newLength = bytesRemaining + newBuffer.length;

  var combinedBuffer = (this._offset > newLength)
    ? oldBuffer.slice(0, newLength)
    : new Buffer(newLength);

  oldBuffer.copy(combinedBuffer, 0, this._offset);
  newBuffer.copy(combinedBuffer, bytesRemaining);

  this._buffer = combinedBuffer;
  this._offset = 0;
};

```