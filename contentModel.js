// contentModel.js

const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['video', 'article', 'quiz']
  },
  topic: {
    type: String,
    required: true,
    trim: true
  },
  difficultyLevel: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  description: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    required: true,
    trim: true
  },
  recommendedByAI: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Content', ContentSchema);
