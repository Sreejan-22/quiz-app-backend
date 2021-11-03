const { Router } = require("express");
const {
  getAllResultsOfUser,
  saveResult,
} = require("../controllers/quizresults.controller");
const { checkAuthentication } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/results/:email", checkAuthentication, getAllResultsOfUser);
router.post("/results", checkAuthentication, saveResult);

module.exports = router;
