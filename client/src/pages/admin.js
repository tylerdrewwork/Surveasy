import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";
import API from "../utils/API"
import Input from "../components/Input/input";

import SurveyList from "../components/SurveyList/surveyList"
import {Container, Grid, Row, Col} from "react-bootstrap";
function Admin() {
  const [survey, setSurvey] = useState({});
  const [curSurvey, setCurSurvey] = useState({});
  
  useEffect(() => {
    uploadSurveys()
  }, [])

  function uploadSurveys() {
    // API.getSurvey()
    //   .then(res => 
    //     setSurvey(res.data)
    //   )
    //   .catch(err => console.log(err));
    setSurvey({
        title: "Test survey!",
        active: true,
        public: true,
        questions: [
            {
                question: "Favorite color?",
                choices: [
                    {choice: "Red"},
                    {choice: "Blue"},
                    {choice: "Green"},
                    {choice: "Incandescent Yellow"},
                ]
            },
            {
                question: "Favorite vehicle?",
                choices: [
                    {choice: "car"},
                    {choice: "truck"},
                    {choice: "ufo"},
                ]
            },
            {
                question: "Favorite number?",
                choices: [
                    {choice: "5"},
                    {choice: "5"},
                    {choice: ""},
                    {choice: "10000000000000000000000"},
                    {choice: "what's a number"},
                ]
            }
        ]
    })

  };

  function accessSurvey(id){

  }

  return (
    //navbar will be set up here 
    // ---- Have the log out button link here 
    //starting the side survey page 
    <div>
      <Row float="center">

          <Col sx={3} md ={3}>
              <div className = "back-div">


                <SurveyList name = {survey.title} onClick={() => accessSurvey(survey.title)} >
                </SurveyList>


              </div>
          </Col>

          <Col md ={2} float="center">
            <SurveyList name = "Edit Survey">
            </SurveyList>
          </Col>

          <Col md ={2} float="center">
              <SurveyList name = "Analytics">
              </SurveyList>
          </Col>

          <Col md ={2} float="center">
              <SurveyList name = "Admin">
              </SurveyList>
          </Col>

      </Row>


    </div>
  );
}

export default Admin;