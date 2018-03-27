var express = require('express');
var router = express.Router();

var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/suscribe', function (req, res) {
  var data = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  }

  request.post({
    url: 'http://localhost:3000/users',
    form: data
  },
  function (err, httpResponse, body) {
         console.log(err, body);
       }
  );
  res.render('index', {data: data });
});

module.exports = router;
