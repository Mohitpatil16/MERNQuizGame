const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// Get all questions
router.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
