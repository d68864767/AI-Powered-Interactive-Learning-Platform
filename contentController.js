// contentController.js

const Content = require('./contentModel');

// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.status(200).json({
      status: 'success',
      results: content.length,
      data: {
        content
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Get a single content by ID
exports.getContent = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        content
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Create a new content
exports.createContent = async (req, res) => {
  try {
    const newContent = await Content.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        content: newContent
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

// Update content
exports.updateContent = async (req, res) => {
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        content
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Delete content
exports.deleteContent = async (req, res) => {
  try {
    await Content.findByIdAndDelete(req.params.id);
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
