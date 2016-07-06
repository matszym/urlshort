'use strict';

let express = require('express'),
config = require('./config/config'),
app = express(),
mongoose = require('mongoose'),
db,
server;

db = mongoose.connect(config.mongo);

server = app.listen(config.port);
console.log('Server is listening on port: ', config.port);