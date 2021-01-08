import React from "react";
import "./answer.css";

function Answer(props) {
    return (
      <>
        <input type="radio" id={props.choiceId} name="choice" value={props.answer} onClick={props.handleSelectFunction}/>
        <label for={props.choiceId}>{props.answer}</label>
      </>
    );
};

export default Answer;