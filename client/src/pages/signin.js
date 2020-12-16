import React, { useState, useEffect } from "react";
import Button from "../components/Button/button"
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import Input from "../components/Input/input";

function SignIn(){
    const [formCred, setFormCred] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormCred({...formCred, [name]: value})
        
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(formCred.username);
        console.log(formCred.password);
        if (formCred.username && formCred.password) {
            console.log(formCred.username);
            console.log(formCred.password);
        }
    };

    return(
        <div>
            <Input 
             onChange = {handleInputChange}
             name = "username"
            >
            </Input>

            <Input 
            onChange = {handleInputChange}
            name = "password"
            >
            </Input>

            <Button  
            name = "Sign In"
            onClick = {handleFormSubmit}
            >
            </Button>

            
        </div>
    );
}

export default SignIn
