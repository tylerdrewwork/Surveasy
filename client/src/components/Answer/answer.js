import React from "react";
import "./answer.css";

function Answer(props) {
    return (
      // <form>
      <>
        <input type="radio" id={props.choiceId} name="choice" value={props.answer} onClick={props.handleSelectFunction}/>
        <label for={props.choiceId}>{props.answer}</label>
      </>
      // </form>
    );
};

export default Answer;