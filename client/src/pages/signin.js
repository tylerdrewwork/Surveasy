import React, { useState, useEffect } from "react";
import Button from "../components/Button/button"
import Input from "../components/Input/input";
import API from "../utils/API"
import { useHistory } from 'react-router-dom';
import "./style.css";
import {Grid, Row, Col} from "react-bootstrap"

function SignIn(){
    const [formCred, setFormCred] = useState({})
    const history = useHistory();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormCred({...formCred, [name]: value})
        
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        
        if (formCred.username && formCred.password) {
            API.getUsername({
                username : formCred.username, 
                password : formCred.password
            }).then(() => history.push('/admin')
            ).catch(err => console.log(err));
        }
    };

    return(
        <div className = "back-div">
            <Input 
             onChange = {handleInputChange}
             name = "username">
            </Input>

            <Input 
            onChange = {handleInputChange}
            name = "password">
            </Input>

            <Button  
            name = "Sign In"
            onClick = {handleFormSubmit}>
            </Button>

            
        </div>
    );
}

export default SignIn
