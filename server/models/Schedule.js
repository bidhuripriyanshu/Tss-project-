const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  route: String,
  departure: String,
  arrival: String,
});

module.exports = mongoose.model('Schedule', scheduleSchema);
