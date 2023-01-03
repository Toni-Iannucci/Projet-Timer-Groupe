const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  projectName: { type: String, required: true }, 
});

// Export du model
module.exports = mongoose.model('Project', projectSchema);