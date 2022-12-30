const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  taskName: { type: String, required: true },
  projectName: { type: String, required: true },
  userId: { type: Number, required: true },
  personne: { type: String, required: true },
  tempsTotal: { type: Number, required: true },
});

// Export du model 
module.exports = mongoose.model('Thing', thingSchema);