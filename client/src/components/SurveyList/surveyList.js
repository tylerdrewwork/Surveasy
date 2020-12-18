import React from "react";
import "./survey-list.css";

function SurveyList(props){
    return(
       
            <div className = "div-init" {...props} placeholder = {props.name}>
                <h1 className = "answer-options">{props.name}</h1>
            </div>
        

    )
}

export default SurveyList;