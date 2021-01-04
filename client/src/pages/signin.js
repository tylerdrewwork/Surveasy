import React, { useState, useEffect } from "react";
import Button from "../components/Button/button"
import Input from "../components/Input/input";
import API from "../utils/API"
import { useHistory } from 'react-router-dom';
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap"

function SignIn() {
    const [formCred, setFormCred] = useState({})
    const history = useHistory();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormCred({ ...formCred, [name]: value })

    };

    function handleFormSubmit(event) {
        event.preventDefault();

        if (formCred.username && formCred.password) {
            API.getAuthorization({
                username: formCred.username,
                password: formCred.password
            }).then(result => {
                console.log("This is what is returned");
                console.log(result);
                localStorage.setItem('token', result.data.token);
                history.push('/admin');
            }).catch(err => console.log(err));
        }
    };

    return (

        <div className="back-div">
            <Row md={5} float="center">
                <Col sx={3} md={12} >
                    <Input
                        onChange={handleInputChange}
                        name="username">
                    </Input>
                </Col>
                <Col sx={3} md={12} >
                    <Input
                        onChange={handleInputChange}
                        name="password">
                    </Input>
                </Col>
                <Col sx={3} md={12} >
                    <Button
                        name="Sign In"
                        onClick={handleFormSubmit}>
                    </Button>
                </Col>
            </Row>
        </div>

    );
}

export default SignIn
