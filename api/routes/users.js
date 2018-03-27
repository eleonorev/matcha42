

var express = require('express');
var router = express.Router();
var usersList = require('../controllers/users');

  router.get('/', usersList.list_all_users);
  router.post('/', usersList.create_a_user);
  //
  // app.route('/users/:userId')
  //   .get(usersList.read_a_user)
  //   .put(usersList.update_a_user)
  //   .delete(usersList.delete_a_user);

module.exports = router;
