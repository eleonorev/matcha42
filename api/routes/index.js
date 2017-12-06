var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res) {
  var Cat = mongoose.model('Cat', { name: String });

  var kitty = new Cat({ name: 'Zildjian' });
  kitty.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });
  res.render('index', { data: kitty.name });
});

module.exports = router;
