'use strict';

exports.send = function(req, res) {
  console.log('SEND');
  console.log(req);
  res.json('OK - send');
};

exports.get = function(req, res) {
    console.log('GET');
    console.log(req);
    res.json('OK - get');
};