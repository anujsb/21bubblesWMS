import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide Title"],
    trim: true,
    maxlength: [20, "Title can not be more than 20 characters"],
  },

  AssignedTo: {
    type: String,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

// module.exports = mongoose.model("Task", TaskSchema);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
