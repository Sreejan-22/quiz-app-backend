const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizResultSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { createdAt: true }
);

const QuizResult = mongoose.model("quizresult", quizResultSchema);
module.exports = QuizResult;
