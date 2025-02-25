import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/questions")
      .then((response) => setQuestions(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        questions.length > 0 ? (
          <>
            <h1>{questions[currentQuestion].question}</h1>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={selectedAnswer ? 
                  (option === questions[currentQuestion].correctAnswer ? "correct" : "wrong") 
                  : ""}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer}
              >
                {option}
              </button>
            ))}
          </>
        ) : (
          <p>Loading questions...</p>
        )
      ) : (
        <div>
          <h1>Quiz Completed!</h1>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
