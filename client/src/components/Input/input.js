import React from "react";
import "./input.css";

function Input(props){
    return(
        <input {...props} placeholder = {props.name}>
            
        </input>
    )
}

export default Input;