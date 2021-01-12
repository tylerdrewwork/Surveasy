import React from "react";
import "./input.css";

function Input(props){
    return(
        <input {...props} id = {props.name} placeholder = {props.name} type="radio">
        <label for={props.name} >{props.name} </label></input>
    )
}

export default Input;