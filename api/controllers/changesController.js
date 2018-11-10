'use strict';

exports.send = function(req, res) {
  console.log('SEND');
  console.log(req.body);
  
  var mysql = require('mysql');

  var connection = mysql.createConnection(process.env.JAWSDB_URL);
 
  connection.connect();
  var groupId = Math.random().toString(36).substr(2, 9);

  req.body.GitChanges.forEach(x => {
    var changeType = '';

    switch(x.ChangeType){
        case 0:
        changeType = 'Unset';
        break;
        case 1:
        changeType = 'Add';
        break;
        case 2:
        changeType = 'Modify';
        break;
        case 3:
        changeType = 'Delete';
        break;
    };
    x.Path = x.Path.replace(/\\/g, "\\\\");

    console.log(`Inserting ${x.FileName}...`);

    var sql = `INSERT INTO changes (Path, ChangeType, FileName, Content, Created, GroupId) VALUES ('${x.Path}', '${changeType}', '${x.FileName}', '${x.Base64Content}', '${new Date().toJSON()}', '${groupId}')`;

    connection.commit(sql, function(err, rows, fields) {
    
      if (err) throw err;
    
      
    });
  });

  connection.end();

  res.json('OK - send');
};

exports.get = function(req, res) {
    console.log('GET');
    console.log(req.headers);

    var mysql = require('mysql');

    var connection = mysql.createConnection(process.env.JAWSDB_URL);
   
    connection.connect();
    var groupId = Math.random().toString(36).substr(2, 9);
  
    req.body.GitChanges.forEach(x => {
      var changeType = '';
  
      switch(x.ChangeType){
          case 0:
          changeType = 'Unset';
          break;
          case 1:
          changeType = 'Add';
          break;
          case 2:
          changeType = 'Modify';
          break;
          case 3:
          changeType = 'Delete';
          break;
      };
      x.Path = x.Path.replace(/\\/g, "\\\\");
  
      console.log(`Inserting ${x.FileName}...`);
  
      var sql = `INSERT INTO changes (Path, ChangeType, FileName, Content, Created, GroupId) VALUES ('${x.Path}', '${changeType}', '${x.FileName}', '${x.Base64Content}', '${new Date().toJSON()}', '${groupId}')`;
  
      connection.commit(sql, function(err, rows, fields) {
      
        if (err) throw err;
      
        
      });
    });
  
    connection.end();

    res.json('OK - get');
};