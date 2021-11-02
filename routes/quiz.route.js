const { Router } = require("express");
const {
  getQuestionsOfCategory,
  insertData,
} = require("../controllers/quiz.controller");
const { checkAuthentication } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/quiz/:category", checkAuthentication, getQuestionsOfCategory);
router.post("/quiz/:category", insertData);

module.exports = router;
