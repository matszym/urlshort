module.exports = function(app) {
  'use strict';

  let urlCtrl = require('../controllers/url.server.controller.js');

  app.get('/new/:url/*', urlCtrl.validateUrl, urlCtrl.generateShortUrl, urlCtrl.saveUrl);
  app.get('/:id', urlCtrl.getUrl);
}
