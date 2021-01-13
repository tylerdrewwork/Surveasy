import React from "react";
import "./question.css";

function Question(props) {
  return <div className={props.className}>{props.question}</div>;
}

export default Question;
