const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  taskName: { type: String, required: true },
  projectName: { type: String, required: true },
  userId: { type: String, required: true },
  personne: { type: String, required: true },
  tempsTotal: { type: Number, required: true },
});

// Export du model
module.exports = mongoose.model('Task', taskSchema);