const { Router } = require("express");
const {
  getQuestionsOfCategory,
  insertData,
  deleteAll,
} = require("../controllers/quiz.controller");
const { checkAuthentication } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/quiz/:category", checkAuthentication, getQuestionsOfCategory);
router.post("/quiz", insertData);
router.delete("/quiz", deleteAll);

module.exports = router;
