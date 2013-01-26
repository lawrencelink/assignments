```javascript
* variables have descriptive names
* variables do not use proper camel case convention

var IEEE_754_BINARY_64_PRECISION = Math.pow(2, 53);
var MAX_PACKET_LENGTH            = Math.pow(2, 24) - 1;
var PacketHeader                 = require('./PacketHeader');

* whitespace makes it easy to read
* this file does not have any comments
* every statement ends with a semicolon;

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

```