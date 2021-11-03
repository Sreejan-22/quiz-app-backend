const QuizResult = require("../models/quizresult.model");

const saveResult = async (req, res) => {
  try {
    const newResult = await QuizResult.create(req.body);
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
    const { email } = req.body;
    const temp = await QuizResult.find({ email });
    const results = temp ? temp : [];
    res.status(201).json({ success: true, results });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Failed to save result", error: err });
  }
};

module.exports = {
  saveResult,
  getAllResultsOfUser,
};
