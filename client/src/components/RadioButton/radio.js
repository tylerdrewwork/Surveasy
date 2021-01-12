import React from "react";


function Radio(props){
    return(
        <div>
        <input {...props} id = {props.name} placeholder = {props.name} type="radio" value = {props.name}>
        </input>
        <span {...props} style={{ marginLeft: "5px" }}>{props.name}</span>

        
        </div>
    )
}

export default Radio;