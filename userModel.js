// userModel.js

const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  preferences: {
    learningStyle: {
      type: String,
      enum: ['visual', 'auditory', 'kinesthetic'],
      default: 'visual'
    },
    interests: [String]
  },
  progress: {
    type: Map,
    of: Number
  },
  performance: {
    type: Map,
    of: Number
  }
});

// Define methods for the user schema (if any)

// Compile the schema into a model and export it
module.exports = mongoose.model('User', UserSchema);
