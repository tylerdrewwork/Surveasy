import React, { useState, useEffect } from "react";
import Button from "../components/Button/button"
import Input from "../components/Input/input";
import API from "../utils/API"
import { useHistory } from 'react-router-dom';


function SignIn(){
    const [formCred, setFormCred] = useState({})

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
            }).then(() => this.props.history.push('/admin')
            )
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
