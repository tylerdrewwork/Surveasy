import React from "react";
import "./input.css";

function Input(props){
    return(
        <div className={`form-input ${props.className}`}>
        <label for={`form-${props.name}`}>{props.name}</label>
        <input {...props} id={`form-${props.name}`} className="form-field" placeholder = {props.name}></input>
        </div>
    )
}

export default Input;