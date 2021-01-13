import React from "react";
import "./answer.css";

function Answer(props) {
  return (
    <div className="props.className" >
      <input className={`${props.className}-input`} type="radio" id={props.choiceId} name="choice" value={props.answer} onClick={props.handleSelectFunction} />
      <label className={`${props.className}-label`} for={props.choiceId}>{props.answer}</label>
    </div>
  );
};

export default Answer;