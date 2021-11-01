const { Router } = require("express");
const { getQuestionsOfCategory } = require("../controllers/quiz.controller");

const router = Router();

router.get("/quiz/:category", getQuestionsOfCategory);

module.exports = router;
