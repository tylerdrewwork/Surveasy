import React from "react";


function Radio(props){
    return(
        <div>
        <input {...props} id = {props.name} placeholder = {props.name} type="radio">
        </input>
        <label for = {props.name}>{props.name}</label>
        
        </div>
    )
}

export default Radio;