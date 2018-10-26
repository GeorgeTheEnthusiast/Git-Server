'use strict';
module.exports = function(app) {
  var changes = require('../controllers/changesController');

  // todoList Routes
  app.route('/send')
    .post(changes.send);

  app.route('/get')
    .get(changes.get);
};