const Question = require("../models/question.model");

const getQuestionsOfCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const questions = Question.find({ category });
    res.status(200).json({ success: true, questions });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to fetch questions",
      error: err,
    });
  }
};
