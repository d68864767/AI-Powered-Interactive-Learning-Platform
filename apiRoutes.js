// apiRoutes.js

const express = require('express');
const router = express.Router();

const userController = require('./userController');
const contentController = require('./contentController');
const assessmentController = require('./assessmentController');

// User routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Content routes
router.get('/content', contentController.getAllContent);
router.get('/content/:id', contentController.getContent);
router.post('/content', contentController.createContent);
router.put('/content/:id', contentController.updateContent);
router.delete('/content/:id', contentController.deleteContent);

// Assessment routes
router.get('/assessments', assessmentController.getAllAssessments);
router.get('/assessments/:id', assessmentController.getAssessment);
router.post('/assessments', assessmentController.createAssessment);
router.put('/assessments/:id', assessmentController.updateAssessment);
router.delete('/assessments/:id', assessmentController.deleteAssessment);

module.exports = router;
