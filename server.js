'use strict';

let express = require('express'),
config = require('./config/config'),
app = express(),
server;

server = app.listen(config.port);
console.log('Server is listening on port: ', config.port);