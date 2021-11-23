const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field cannot be empty'],
    trim: true,
    maxlength: [20, 'Name field cannot have more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
