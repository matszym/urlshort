'use strict';
let shortid = require('shortid'),
mongoose = require('mongoose'),
UrlModel = mongoose.model('Url');

exports.validateUrl = function(req, res, next) {
  let urlValidator = /.+:\/\/.+\..+/; // validates url
  const userProvidedUrl = req.url.slice(5); // req.url starts with /new/
  
  if (userProvidedUrl.match(urlValidator)) {
    req.myUrl = {
      original_url: userProvidedUrl
    }
    next();
  }
  else {
    res.send('Provided url is not valid');
  }
}

exports.generateShortUrl = function(req, res, next) {
  let id = shortid.generate();

  req.myUrl._id = id;
  req.myUrl.short_url = req.protocol + 
  "://" + 
  req.hostname + 
  '/' + 
  id;
  next();
}

exports.saveUrl = function(req, res, next) {
  UrlModel.create(req.myUrl)
  .then(url => res.send({
    original_url: url.original_url,
    short_url: url.short_url
  }))
  .catch(e => console.log(e));
}

exports.getUrl = function(req, res, next) {
  UrlModel.findById(req.params.id)
  .then(doc => res.redirect(doc.original_url))
  .catch(e => console.log(e));
}
