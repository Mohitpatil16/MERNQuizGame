const Quiz = require("../models/Quiz");

// Get quiz questions
const getQuestions = async (req, res) => {
  try {
    const questions = await Quiz.find().limit(10);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions" });
  }
};

// Evaluate answers
const submitAnswers = async (req, res) => {
  try {
    const { answers } = req.body; // { questionId: selectedOption }
    const questions = await Quiz.find();
    
    let score = 0;
    let correctAnswers = {};
    
    questions.forEach((q) => {
      if (answers[q._id] === q.correctAnswer) {
        score++;
      }
      correctAnswers[q._id] = q.correctAnswer;
    });

    res.json({ score, correctAnswers });
  } catch (error) {
    res.status(500).json({ message: "Error evaluating answers" });
  }
};

module.exports = { getQuestions, submitAnswers };
