import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import API from "../utils/API";
import Input from "../components/Input/input";
import CreateSurvey from "../components/createSurvey/createSurvey";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";
import SurveyList from "../components/SurveyList/surveyList";
import { Container, Row, Col } from "react-bootstrap";

function Admin() {
  const [survey, setSurvey] = useState({});
  const [curSurvey, setCurSurvey] = useState({});
  let token;
  let selectedSurvey;
  useEffect(() => {
    uploadSurveys();
    console.log(token);
    console.log(survey);
  }, []);

  useEffect(() => {
    console.log(curSurvey);
  }, [curSurvey]);

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
  }

  function getIndex(id) {
    return survey.findIndex((obj) => obj._id === id);
  }

  function displayLink() {
    if (curSurvey._id == null) {
      return "";
    }
    return (
      <NavLink
        to={{
          pathname: `survey/${curSurvey._id}`,
        }}
      >
        https://surveasy.herokuapp.com/survey/{curSurvey._id}
      </NavLink>
    );
  }

  return (
    <div>
      <NavigationSurvey />

      <Container fluid>
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
          <Col>
            <div className="back-div" id="displaySurvey">
              <h1>{curSurvey.title}</h1>
              <h3>
                {curSurvey.active == null
                  ? ""
                  : "Active : " + curSurvey.active.toString()}
              </h3>
            </div>
            <Col>
              <div className="back-div" id="displaySurvey">
                <h3>{displayLink()}</h3>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Admin;
