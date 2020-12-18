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
      <Row float="center">
      
          <Col sx={3} md ={3}>
              <div className = "back-div">
                  <SurveyList name = "Ice Cream Survey">
                  </SurveyList>

                  <SurveyList name = "Italian Food Survey">
                  </SurveyList>

                  <SurveyList name = "Mexican Food Survey">
                  </SurveyList>

                  <SurveyList name = "New Survey">
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