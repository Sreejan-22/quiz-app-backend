const { Router } = require("express");
const {
  getQuestionsOfCategory,
  insertData,
} = require("../controllers/quiz.controller");

const router = Router();

router.get("/quiz/:category", getQuestionsOfCategory);
router.post("/quiz/:category", insertData);

module.exports = router;
