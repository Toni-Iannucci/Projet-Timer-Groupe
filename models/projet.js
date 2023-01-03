const mongoose = require('mongoose');

const projetSchema = mongoose.Schema({
  projectName: { type: String, required: true }, 
});

// Export du model
module.exports = mongoose.model('Projet', projetSchema);