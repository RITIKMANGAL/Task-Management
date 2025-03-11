const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
