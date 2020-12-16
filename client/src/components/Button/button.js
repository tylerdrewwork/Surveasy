import React from "react";
import "./button.css";

function Button(props){
    return(
        <button className = "example_d" {...props}>
            {props.name}
        </button>
    )
}

export default Button;