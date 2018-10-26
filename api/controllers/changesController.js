'use strict';

exports.send = function(req, res) {
  console.log('SEND');
  console.log(req.body);
  res.json('OK - send');
};

exports.get = function(req, res) {
    console.log('GET');
    console.log(req.body);
    res.json('OK - get');
};