'use strict';

let mongoose = require('mongoose'),
Schema = mongoose.Schema,
urlSchema;

urlSchema = new Schema({
  _id: {
    type: String
  },
  original_url: {
    type: String,
    required: true
  },
  short_url: {
    type: String,
    required: true
  }
});

mongoose.model('Url', urlSchema);