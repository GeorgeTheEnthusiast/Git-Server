'use strict';

exports.send = function(req, res) {
  console.log('SEND');
  console.log(req.body);

  var SparkPost = require('sparkpost');
  var sparky = new SparkPost(); // uses process.env.SPARKPOST_API_KEY
  
  var transmission = {
    options: {
      sandbox: true
    },
    content: {
      from: 'testing@' + process.env.SPARKPOST_SANDBOX_DOMAIN, // 'testing@sparkpostbox.com'
      //from: 'warmemotions@gmail.com',
      subject: 'New files from Git repo',
      html:`Sending ${req.body.GitChanges.length} files...`,
      attachments:[]
    },
    recipients: [
      {address: 'warmemotions@gmail.com'}
    ]
  };

  req.body.GitChanges.forEach(x => {
    transmission.content.attachments.push({
        type:'application/octet-stream',
        name:x.FileName,
        data:x.Base64Content
    });
  });

  sparky.transmissions.send(transmission)
    .then(data => {
      console.log('Woohoo! You just sent your first mailing!');
      console.log(data);
    })
    .catch(err => {
      console.log('Whoops! Something went wrong');
      console.log(err);
    });

    

  res.json('OK - send');
};

exports.get = function(req, res) {
    console.log('GET');
    console.log(req.body);
    res.json('OK - get');
};