const express = require("express");

const quizController = require("./../controllers/quizController");

const router = express.Router();

router.route("/all-questions").get(quizController.getAllQuizzs);

module.exports = router;
