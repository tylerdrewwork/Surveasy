import React from "react";
import "./survey-list.css";

function SurveyList(props){
    return(
        <div {...props} placeholder = {props.name}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default SurveyList;