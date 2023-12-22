const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./userController');
const contentRoutes = require('./contentController');
const assessmentRoutes = require('./assessmentController');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/assessments', assessmentRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = app;
