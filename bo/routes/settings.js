var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('settings');
  res.render('Settings/index', {
    title: "Bonjour"
  } );
});

module.exports = router;
