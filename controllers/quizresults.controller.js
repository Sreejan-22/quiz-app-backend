const QuizResult = require("../models/quizresult.model");

const saveResult = async (req, res) => {
  try {
    const { email, category, score } = req.body;
    const newResult = await QuizResult.create({ email, category, score });
    res
      .status(201)
      .json({ success: true, message: "Result saved", result: newResult });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Failed to save result", error: err });
  }
};

const getAllResultsOfUser = async (req, res) => {
  try {
    const { email } = req.params;
    const temp = await QuizResult.find({ email }).sort({ createdAt: -1 });

    res.status(201).json({ success: true, results: temp });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Failed to fetch results", error: err });
  }
};

module.exports = {
  saveResult,
  getAllResultsOfUser,
};
