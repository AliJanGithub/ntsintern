const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Note title is required"],
    trim: true,
    minlength: [1, "Title cannot be empty"],
    maxlength: [100, "Title must be less than 100 characters"]
  },
  description: {
    type: String,
    required: [true, "Note description is required"],
    trim: true,
    minlength: [1, "Description cannot be empty"],
    maxlength: [1000, "Description must be less than 1000 characters"]
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Note", noteSchema);
