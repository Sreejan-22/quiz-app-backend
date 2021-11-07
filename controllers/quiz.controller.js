const fs = require("fs").promises;
const data = require("../data/sports.json");
const Question = require("../models/question.model");

const getQuestionsOfCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const questions = await Question.find({ category });
    res.status(200).json({ success: true, questions });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to fetch questions",
      error: err,
    });
  }
};

const insertData = async (req, res) => {
  try {
    const sports = await fs.readFile(`./data/sports.json`, "utf-8");
    const history = await fs.readFile(`./data/history.json`, "utf-8");
    const politics = await fs.readFile(`./data/politics.json`, "utf-8");

    const sportsQuestions = JSON.parse(sports).questions;
    const historyQuestions = JSON.parse(history).questions;
    const politicsQuestions = JSON.parse(politics).questions;

    const questions = [
      ...sportsQuestions,
      ...historyQuestions,
      ...politicsQuestions,
    ];

    console.log(questions);

    const insertedData = await Question.insertMany(questions, { limit: 30 });
    res.status(201).json({ success: true, message: "Questions stored in DB" });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to store questions",
      error: err,
    });
  }
};

const deleteAll = async (req, res) => {
  try {
    const temp = await Question.deleteMany({});
    res.status(200).json({ success: true, message: "All data deleted" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Failed to delete data",
      error: err,
    });
  }
};

module.exports = {
  getQuestionsOfCategory,
  insertData,
  deleteAll,
};
