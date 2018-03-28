'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

var PostSchema = new Schema({

  title: {
    type: String,
    required: 'Need complete name'
  },
  authorId: {
    type: String
  },
  content: {
    type: String
  },
  image: {
    type: Array
  },
  tags: {
    type: Array
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'posted']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Post', PostSchema);
