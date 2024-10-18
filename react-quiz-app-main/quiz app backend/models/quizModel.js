const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "A Quiz must have a Question"],
  },
  options: {
    type: [String],
    validate: {
      validator: function (arr) {
        // Check if options array contains exactly 4 elements
        return arr.length === 4;
      },
      message: "A Quiz must have exactly 4 options",
    },
    required: [true, "A Quiz must have options"],
  },
  correctOption: {
    type: Number,
    required: [true, "A Quiz must have a Question"],
  },
  points: {
    type: Number,
    required: [true, "A Quiz must have a Question"],
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
