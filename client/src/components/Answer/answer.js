import React from "react";
import "./answer";

function Answer(answer) {
    return (
      <div onClick="#">
        {answer}
      </div>
    );
};

export default Answer;