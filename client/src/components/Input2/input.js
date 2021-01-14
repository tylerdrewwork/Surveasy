import React from "react";
import "./input.css";

function Input(props){
    return(
        <div data-key={props["data-key"]}>

        <input {...props} id={`form-${props.name}`} className="form-field" placeholder = {props.name}></input>
        </div>

        // <input {...props} placeholder = {props.name}>
            
        // </input>
    )
}

export default Input;