import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";
import API from "../utils/API";
import Input from "../components/Input/input";
import "./style.css";
import CreateSurvey from "../components/createSurvey/createSurvey";
import Navigation from "../components/NavBar/navbar";

import SurveyList from "../components/SurveyList/surveyList";
import { Container, Grid, Row, Col, ListGroup } from "react-bootstrap";
function Admin() {
  const [survey, setSurvey] = useState({});
  const [curSurvey, setCurSurvey] = useState({});
  //   const [token, setToken] = useState({});

  useEffect(() => {
    uploadSurveys();
    console.log(survey);
  }, []);

  function uploadSurveys() {
    let token = localStorage.getItem(`token`);

    API.getUserSurveys(token)
      .then((res) => {
        setSurvey(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setSurvey({
      1: {
        title: "Test survey 1!",
        active: true,
        public: true,
        questions: [
          {
            question: "Favorite color?",
            choices: [
              { choice: "Red" },
              { choice: "Blue" },
              { choice: "Green" },
              { choice: "Incandescent Yellow" },
            ],
          },
          {
            question: "Favorite vehicle?",
            choices: [
              { choice: "car" },
              { choice: "truck" },
              { choice: "ufo" },
            ],
          },
          {
            question: "Favorite number?",
            choices: [
              { choice: "5" },
              { choice: "5" },
              { choice: "" },
              { choice: "10000000000000000000000" },
              { choice: "what's a number" },
            ],
          },
        ],
      },
      2: {
        title: "Test survey 2!",
        active: true,
        public: true,
        questions: [
          {
            question: "Favorite color?",
            choices: [
              { choice: "Red" },
              { choice: "Blue" },
              { choice: "Green" },
              { choice: "Incandescent Yellow" },
            ],
          },
          {
            question: "Favorite vehicle?",
            choices: [
              { choice: "car" },
              { choice: "truck" },
              { choice: "ufo" },
            ],
          },
          {
            question: "Favorite number?",
            choices: [
              { choice: "5" },
              { choice: "5" },
              { choice: "" },
              { choice: "10000000000000000000000" },
              { choice: "what's a number" },
            ],
          },
        ],
      },
    });
  }

  function accessSurvey(id) {
    console.log(id);
  }

  return (
    //navbar will be set up here
    // ---- Have the log out button link here
    //starting the side survey page
    <div>
      <Navigation />

      <Row float="center">
        <Col sx={3} md={3}>
          <div className="back-div">
            {Object.keys(survey).map((key) => (
              <SurveyList
                name={survey[key].title}
                onClick={() => accessSurvey(survey[key].title)}
              ></SurveyList>
            ))}
          </div>
        </Col>

        <Col md={2} float="center">
          <SurveyList name="Edit Survey"></SurveyList>
        </Col>

        <Col md={2} float="center">
          <SurveyList name="Analytics"></SurveyList>
        </Col>

        <Col md={2} float="center">
          <SurveyList name="Admin"></SurveyList>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Admin;