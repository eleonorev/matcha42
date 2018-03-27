var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/suscribe', function (req, res) {
  var data = req.body;
  request.post('http://localhost:3000/users', { req: data})
  res.render('index', {data: data });
});

module.exports = router;
