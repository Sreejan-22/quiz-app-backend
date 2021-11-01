const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionModel = new Schema({
  // 3 categories - sports, politics, history
  category: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  correctAnswerIndex: {
    type: Number,
    required: true,
  },
});

const Question = mongoose.model("question", questionModel);
module.exports = Question;
