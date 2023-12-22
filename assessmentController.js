// assessmentController.js

const Assessment = require('./assessmentModel');
const User = require('./userModel');

// Get all assessments
exports.getAllAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find().populate('user').populate('content');
    res.status(200).json({
      status: 'success',
      results: assessments.length,
      data: {
        assessments
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Get a specific assessment
exports.getAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id).populate('user').populate('content');
    res.status(200).json({
      status: 'success',
      data: {
        assessment
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Create a new assessment
exports.createAssessment = async (req, res) => {
  try {
    const newAssessment = await Assessment.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        assessment: newAssessment
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

// Update an assessment
exports.updateAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        assessment
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Delete an assessment
exports.deleteAssessment = async (req, res) => {
  try {
    await Assessment.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
