import React, { useState, useEffect } from "react";
import Button from "../components/Button/button"
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import Input from "../components/Input/input";

function SignIn(){
    const [user, userSet] = useState([])
    const [pass, passSet] = useState([])

    return(
        <div>
            <Input 
            name = "Username"
            onChange = {handleInputChange}>
            </Input>

            <Input 
            name = "Password">
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
