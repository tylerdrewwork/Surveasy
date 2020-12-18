import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";

import Input from "../components/Input/input";

import SurveyList from "../components/SurveyList/surveyList"
import {Container, Grid, Row, Col} from "react-bootstrap";
function Admin() {
  return (
    //navbar will be set up here 
    // ---- Have the log out button link here 
    //starting the side survey page 
    <div>
      <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>

    </div>
  );
}

export default Admin;