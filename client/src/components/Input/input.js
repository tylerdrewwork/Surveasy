import React from "react";
import "./input.css";

function Input(props){
    return(
        <input {...props} className="create-survey__input form-field" placeholder = {props.name}>
            
        </input>
    )
}

export default Input;