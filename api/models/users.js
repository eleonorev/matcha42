'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

  name: {
    type: String,
    required: 'Need complete name'
  },
  username: {
    type: String,
    required: 'Need username'
  },
  password: {
    type: String,
    required: 'Need password'
  },
  bio: {
    type: String
  },
  photo: {
    type: Array
  },
  tags: {
    type: Array
  },
  sexe: {
    type: Boolean
  },
  sexe_interest: {
    type: Boolean
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('User', UserSchema);
