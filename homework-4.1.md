# Homework 4.1 - Arrays and Dictionaries

* looking for some array and dictionary examples to comment on

'''javascript
`node-mysql / lib / ConnectionConfig.js:71`
//A list named defaultFlags is defined
var defaultFlags = [ "LONG_PASSWORD", "FOUND_ROWS", "LONG_FLAG",
                        "CONNECT_WITH_DB", "ODBC", "LOCAL_FILES",
                        "IGNORE_SPACE", "PROTOCOL_41", "IGNORE_SIGPIPE",
                        "TRANSACTIONS", "RESERVED", "SECURE_CONNECTION",
                        "MULTI_RESULTS" ];
'''
  
'''javascript
`node-mysql / lib / ConnectionConfig.js:90`
//A dictionary named options is defined with 3 keys
var options = {
    host     : url.hostname,
    port     : url.port,
    database : url.pathname.substr(1),
  };
'''