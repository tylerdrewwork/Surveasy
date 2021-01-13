import React from "react";
import "./radio.css"

function Radio(props){
    return(
        <div>
        <input {...props} id = {props.name} placeholder = {props.name} type="checkbox" value = {props.name}>
        </input>
        <span {...props} style={{ marginLeft: "5px" }}>{props.name}</span>

        
        </div>
    )
}

export default Radio;