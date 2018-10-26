'use strict';

exports.send = function(req, res) {
  console.log('SEND');
  console.log(req.body);

  var SparkPost = require('sparkpost');
  var sparky = new SparkPost(); // uses process.env.SPARKPOST_API_KEY
  
  sparky.transmissions.send({
      options: {
        sandbox: true
      },
      content: {
        from: 'testing@' + process.env.SPARKPOST_SANDBOX_DOMAIN, // 'testing@sparkpostbox.com'
        subject: 'Oh hey!',
        html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
      },
      recipients: [
        {address: 'warmemotions@gmail.com'}
      ]
    })
    .then(data => {
      console.log('Woohoo! You just sent your first mailing!');
      console.log(data);
    })
    .catch(err => {
      console.log('Whoops! Something went wrong');
      console.log(err);
    });

    req.body.GitChanges.forEach(x => {
        
      
    });

  res.json('OK - send');
};

exports.get = function(req, res) {
    console.log('GET');
    console.log(req.body);
    res.json('OK - get');
};