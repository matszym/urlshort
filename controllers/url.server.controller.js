'use strict';
let shortid = require('shortid'),
mongoose = require('mongoose'),
UrlModel = mongoose.model('Url');

exports.validateUrl = function(req, res, next) {
  if (req.body.originalUrl) {
    req.url = {
      original_url: req.body.originalUrl
    }
    next();
  }
  else {
    res.send('Provided url is not valid');
  }
}

exports.generateShortUrl = function(req, res, next) {
  let id = shortid.generate();

  req.url._id = id;
  req.url.short_url = req.protocol + 
  "//" + 
  req.host + 
  '/' + 
  id;

  next();
}

exports.saveUrls = function(req, res, next) {
  UrlModel.save(req.url)
  .then(url => res.send(url))
  .catch(() => exports.generateShortUrl(req, res, next));
}