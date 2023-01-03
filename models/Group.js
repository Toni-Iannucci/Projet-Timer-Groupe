const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
  groupName: { type: String, required: true },
});

// Export du model
module.exports = mongoose.model('Group', groupSchema);