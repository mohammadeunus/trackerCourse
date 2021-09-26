/* eslint-disable */ 

const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Post', postSchema);