// database.js

const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error', error);
    process.exit(1);
  }
};

module.exports = connectDB;
