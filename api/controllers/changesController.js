'use strict';

exports.send = function(req, res) {
  console.log('SEND');
  console.log(req.body);

  
  var mysql = require('mysql');
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
  
  connection.connect();
  
  connection.query('SELECT * FOM Changes', function(err, rows, fields) {
    if (err) throw err;
  
    console.log('The solution is: ', rows);
  });
  
  connection.end();

  res.json('OK - send');
};

exports.get = function(req, res) {
    console.log('GET');
    console.log(req.body);

    

    res.json('OK - get');
};