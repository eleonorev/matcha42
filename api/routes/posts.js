var express = require('express');
var router = express.Router();
var postsList = require('../controllers/posts');

  router.get('/', postsList.list_all_posts);
  router.post('/', postsList.create_a_post);
  router.get('/:authorId', postsList.read_by_author);
  router.get('/:id', postsList.read_a_post)
  router.put('/:id', postsList.update_a_post)
  router.delete('/:id', postsList.delete_a_post);

module.exports = router;
