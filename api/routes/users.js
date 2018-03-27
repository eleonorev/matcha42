

var express = require('express');
var router = express.Router();
var usersList = require('../controllers/users');

  router.get('/', usersList.list_all_users);
  router.post('/', usersList.create_a_user);

  router.get('/:id', usersList.read_a_user)
  router.put('/:id', usersList.update_a_user)
  router.delete('/:id', usersList.delete_a_user);

module.exports = router;
