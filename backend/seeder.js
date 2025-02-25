const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("./models/Question");

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Who developed JavaScript?",
    options: ["Brendan Eich", "James Gosling", "Guido van Rossum", "Dennis Ritchie"],
    correctAnswer: "Brendan Eich",
  },
  {
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    correctAnswer: "Stack",
  },
  {
    question: "React is developed by which company?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correctAnswer: "Facebook",
  },
  {
    question: "Which of these is NOT a JavaScript framework?",
    options: ["React", "Django", "Vue", "Angular"],
    correctAnswer: "Django",
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Coded Styling System"],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to define a table row?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    correctAnswer: "<tr>",
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    correctAnswer: "MongoDB",
  },
  {
    question: "Which keyword is used to define a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "Which programming language is known as the 'Mother of All Languages'?",
    options: ["C", "Assembly", "COBOL", "Fortran"],
    correctAnswer: "C",
  },
];

const seedDB = async () => {
  await Question.deleteMany();
  await Question.insertMany(questions);
  console.log("✅ 10 Questions inserted successfully!");
  mongoose.connection.close();
};

seedDB();
