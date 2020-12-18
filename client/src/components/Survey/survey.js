import React from "react";
import "./survey.css";
import Answer from "../Answer/answer";
import Question from "../Question/question";

function Survey(props) {
  return (
    <div className="back-div" {...props}>
      <Question /> 
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </div>
  );
}

export default Survey;
