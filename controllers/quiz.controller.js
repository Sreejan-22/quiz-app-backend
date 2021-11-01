const fs = require("fs").promises;
const data = require("../data/sports.json");
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

const insertData = async (req, res) => {
  // fs.readFile("./data/sports.json", "utf-8", (err, jsonString) => {
  //   if (err) {
  //     console.log("File read failed: ", err);
  //     return;
  //   } else {
  //     try {
  //       const jsonData = JSON.parse(jsonString);
  //       const questions = jsonData.questions;
  //       Question.insertMany(questions, function (err, result) {
  //         if (err) {
  //           res.send(err);
  //         } else {
  //           res.send(result);
  //         }
  //       });
  //       console.log(createdData);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // });
  try {
    const { category } = req.params;
    const jsonString = await fs.readFile(`./data/${category}.json`, "utf-8");
    const jsonData = JSON.parse(jsonString);
    const questions = jsonData.questions;
    const insertedData = await Question.insertMany(questions);
    res.status(201).json({ success: true, message: "Questions stored in DB" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Failed to store questions",
      error: err,
    });
  }
};

module.exports = {
  getQuestionsOfCategory,
  insertData,
};
