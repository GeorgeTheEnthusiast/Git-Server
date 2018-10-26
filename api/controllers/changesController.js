'use strict';

exports.send = function(req, res) {
  console.log('SEND');
  console.log(req.body);
  var fs = require('fs');

    req.body.gitChanges.foreach(x => {
        
        fs.writeFile(x.fileName, x.content, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved to " + x.fileName);
        }); 
    });

  res.json('OK - send');
};

exports.get = function(req, res) {
    console.log('GET');
    console.log(req.body);
    res.json('OK - get');
};