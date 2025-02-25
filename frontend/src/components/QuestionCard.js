import React from "react";

const QuestionCard = ({ question, onSelect }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      {question.options.map(opt => (
        <button key={opt} onClick={() => onSelect(question._id, opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
