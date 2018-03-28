var mongoose = require('mongoose');
var Post = mongoose.model('Post');


exports.list_all_posts = function(req, res) {
  Post.find({}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

exports.create_a_post = function(req, res) {
  console.log(req.body);
  var new_post = new Post(req.body);
  new_post.save(function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.read_a_post = function(req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.read_by_author = function(req, res) {
  Post.find({ authorId : req.params.authorId}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.update_a_post = function(req, res) {
  Post.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};


exports.delete_a_post = function(req, res) {
  Post.remove({
    _id: req.params.postId
  }, function(err, post) {
    if (err)
      res.send(err);
    res.json({ message: 'Post successfully deleted' });
  });
};
