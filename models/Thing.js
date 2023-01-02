const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  taskName: { type: String, required: true },
  projectName: { type: String, required: true },
  userId: { type: Number, required: true },
  personne: { type: String, required: true },
  tempsTotal: { type: Number, required: true },
  
  title: {
    type: String,
    required: true
  },
  description: String,
  totalDuration: {
    type: Number,
    default: 0
  }
});

// Export du model 
module.exports = mongoose.model('Thing', thingSchema);