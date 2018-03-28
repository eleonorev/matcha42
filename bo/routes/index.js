var express = require('express');
var router = express.Router();

var request = require('request');
var froalaEditor = require('froala-editor');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: "Bonjour"
  } );
});

router.post('/send_post', function (req, res) {
  var data = {
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    tags: req.body.tags
  }

  request.post({
    url: 'http://localhost:3000/posts',
    form: data
  },
  function (err, httpResponse, body) {
         console.log(err, body);
       }
  );
  res.render('index', {data: data });
});

module.exports = router;
