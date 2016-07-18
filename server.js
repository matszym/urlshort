'use strict';

let express = require('express'),
config = require('./config/config'),
app = express(),
mongoose = require('mongoose'),
Promise = require('bluebird'),
db,
server;

mongoose.Promise = Promise;

require('./models/url.server.model.js');

db = mongoose.connect(config.mongo);

require('./routes/url.server.route.js')(app);

server = app.listen(config.port);
console.log('Server is listening on port: ', config.port);