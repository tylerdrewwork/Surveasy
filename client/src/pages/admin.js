import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";
import API from "../utils/API"
import Input from "../components/Input/input";
import "./style.css";
import CreateSurvey from "../components/createSurvey/createSurvey";
import Navigation from "../components/NavBar/navbar";
import { Line } from "react-chartjs-2";




import SurveyList from "../components/SurveyList/surveyList"
import {Container, Grid, Row, Col} from "react-bootstrap";
function Admin() {
  const [survey, setSurvey] = useState({});
  const [curSurvey, setCurSurvey] = useState({});
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  useEffect(() => {
    uploadSurveys()
    console.log(survey);
  }, [])

  function uploadSurveys() {
    // API.getSurvey()
    //   .then(res => 
    //     setSurvey(res.data)
    //   )
    //   .catch(err => console.log(err));
    setSurvey({
        1:
            {
                title: "Test survey 1!",
                active: true,
                public: true,
                questions: [
                    {
                        question: "Favorite color?",
                        choices: [
                            {choice: "Red", votes : 5},
                            {choice: "Blue", votes : 7},
                            {choice: "Green", votes : 6},
                            {choice: "Incandescent Yellow", votes : 2},
                        ]
                    },
                    {
                        question: "Favorite vehicle?",
                        choices: [
                            {choice: "car", votes : 6},
                            {choice: "truck", votes : 7},
                            {choice: "ufo", votes : 9},
                        ]
                    },
                    {
                        question: "Favorite number?",
                        choices: [
                            {choice: "5", votes : 4},
                            {choice: "5", votes : 3},
                            {choice: "", votes : 7},
                            {choice: "10000000000000000000000", votes : 6},
                            {choice: "what's a number", votes : 1},
                        ]
                    }
                ]
            },
        2: {
                title: "Test survey 2!",
                active: true,
                public: true,
                questions: [
                    {
                        question: "Favorite color?",
                        choices: [
                            {choice: "Red", votes : 3},
                            {choice: "Blue", votes : 6},
                            {choice: "Green", votes : 9},
                            {choice: "Incandescent Yellow", votes : 1},
                        ]
                    },
                    {
                        question: "Favorite vehicle?",
                        choices: [
                            {choice: "car", votes : 9},
                            {choice: "truck", votes : 5},
                            {choice: "ufo", votes : 1},
                        ]
                    },
                    {
                        question: "Favorite number?",
                        choices: [
                            {choice: "5", votes : 7},
                            {choice: "8", votes : 2},
                            {choice: "", votes : 6},
                            {choice: "10000000000000000000000", votes : 4},
                            {choice: "what's a number", votes : 3},
                        ]
                    }
                ]
            }
    })
   

  };

  function accessSurvey(id){
        console.log("this is the key")
  }


  return (
          
    //navbar will be set up here 
    // ---- Have the log out button link here 
    //starting the side survey page 
    <div>
     <Navigation />
     <Line data={data} />
      <Row float="center">

          <Col sx={3} md ={3}>
              <div className = "back-div">
              {Object.keys(survey).map(key => (

                    <SurveyList name = {survey[key].title} onClick={() => accessSurvey(survey[key].title)} >
                    </SurveyList>
               ))}
                



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