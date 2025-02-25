import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <h3>Your Score: {state?.score}/10</h3>
      <button onClick={() => navigate("/")}>Restart</button>
    </div>
  );
};

export default Result;
