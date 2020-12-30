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

        // if (formCred.username && formCred.password) {
        API.getUserSurveys("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmU4ZWQzZmZkY2ZhNTBjODRlODE2M2YiLCJ1c2VybmFtZSI6ImJlc3R1c2VyIiwiaWF0IjoxNjA5MjkyMTI4fQ.w6a7A2gZaC45Q8u3uuf_bPlBzxF_gj83Mk1l_MMvwys").then(result => {
            console.log(result);
            history.push('/admin');
        }).catch(err => console.log(err));
        // }
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
