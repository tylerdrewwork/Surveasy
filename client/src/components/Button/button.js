import React from "react";
import "./button.css";

function Button(props){
    return(
        <button className = "btn">
            {props.name}
        </button>
    )
}

export default Button;