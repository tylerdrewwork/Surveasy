import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
import API from "../utils/API";
import "./style.css";
import CreateSurvey from "../components/createSurvey/createSurvey";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";
import SurveyList from "../components/SurveyList/surveyList";
import { Container, Grid, Row, Col } from "react-bootstrap";
import Input from "../components/Input/input.js";

function Edit() {
  const [survey, setSurvey] = useState({});
  const [curSurvey, setCurSurvey] = useState({});
  let token;
  let selectedSurvey;
  useEffect(() => {
    uploadSurveys();
    console.log(token);
  }, []);

  function uploadSurveys() {
    token = localStorage.getItem(`token`);

    API.getUserSurveys(token)
      .then((res) => {
        setSurvey(res.data);
        accessSurvey(localStorage.getItem(`currentSurvey`));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function accessSurvey(id) {
    selectedSurvey = id;
    console.log(selectedSurvey);
    localStorage.setItem("currentSurvey", id);
    var r = getIndex(id);
    setCurSurvey(survey[r]);
    console.log(curSurvey);
  }

  function getIndex(id) {
    return survey.findIndex((obj) => obj._id === id);
  }

  function renderSurvey() {
    if (!curSurvey) {
      return <div className="back-div" id="displaySurvey"></div>;
      {
        <div className="back-div" id="displaySurvey">
          {Object.keys(curSurvey.questions).map((key) => (
            <h1>{curSurvey.questions[key].question}</h1>
          ))}
        </div>;
      }
    }
  }

  function editSurvey() {}

  return (
    //navbar will be set up here
    // ---- Have the log out button link here
    //starting the side survey page
    <div>
      <NavigationSurvey />
      <Row float="center">
        <Col sx={3} md={3}>
          <div className="back-div">
            {Object.keys(survey).map((key) => (
              <SurveyList
                name={survey[key].title}
                onClick={() => accessSurvey(survey[key]._id)}
              ></SurveyList>
            ))}
          </div>
        </Col>
        <Col sx={8} md={9}>
          {/* {renderSurvey()} */}
          <div className="back-div" id="displaySurvey">
          
            {Object.keys(survey).map((key) => (
              <SurveyList
                name={survey[key].title}
                onClick={() => accessSurvey(survey[key]._id)}
              ></SurveyList>
            ))}
            <Input >
            
            </Input>
          </div>
          {/*<div className="back-div" id="displaySurvey">
                {Object.keys(curSurvey.questions).map((key) => (
                    <h1>{curSurvey.questions[key].question}</h1>
                ))} */}
          {/* <h3>
                {curSurvey.active == null
                  ? ""
                  : "Active : " + curSurvey.active.toString()}
              </h3> */}
          {/* </div>} */}
        </Col>
      </Row>
    </div>
  );
}

export default Edit;