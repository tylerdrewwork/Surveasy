import React from "react";
import "./answer.css";

function Answer(props) {
    return (
      <form>
        <label>
          {/* <input type="radio" value={props.answer} /> */}
          {props.answer}</label>
      </form>
    );
};

export default Answer;