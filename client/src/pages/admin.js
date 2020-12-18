import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";

import Input from "../components/Input/input";
import "./style.css";
import {Grid, Row, Col} from "react-bootstrap"
import SurveyList from "../components/SurveyList/surveyList"

function Admin() {
  return (
    //navbar will be set up here 
    // ---- Have the log out button link here 
    //starting the side survey page 
    <div>
      <Row md ={5} float="center">
          <Col sx={3} md ={3}>
              
                  <SurveyList
                  name = "Ice Cream Survey"
                  >
                  </SurveyList>

                  <SurveyList
                  name = "Italian Food Survey"
                  >
                  </SurveyList>

                  <SurveyList
                  name = "Mexican Food Survey"
                  >
                  </SurveyList>

                  <SurveyList
                  name = "New Survey"
                  >
                  </SurveyList>
              
          </Col>
          <Col sx={3} md={3}>
             
                  <SurveyList
                  name = "Ice Cream Survey"
                  >
                  </SurveyList>

                  <SurveyList
                  name = "Italian Food Survey"
                  >
                  </SurveyList>

                  <SurveyList
                  name = "Mexican Food Survey"
                  >
                  </SurveyList>

                  <SurveyList
                  name = "New Survey"
                  >
                  </SurveyList>
              
          </Col>
      </Row>

    </div>
  );
}

export default Admin;