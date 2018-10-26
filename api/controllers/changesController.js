'use strict';

exports.send = function(req, res) {
  console.log('SEND');
  console.log(req.body);

  
  var mysql = require('mysql');
  console.log('Creating connection... ' + process.env.JAWSDB_URL);
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
  console.log('Connecting...');
  connection.connect();
  console.log('Queyring...');
  connection.query('SELECT * FOM kasmzcclpa4gw80o.Changes', function(err, rows, fields) {
    console.log('Returning some data...');
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