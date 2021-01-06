import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";
import { useParams } from "react-router-dom";
import { get } from "mongoose";

function TakeSurvey() {
    const [ survey, setSurvey ] = useState({});
    let { id } = useParams();

    useEffect(() => {
        getSurveyById();
    }, [])

  function getSurveyById() {
  API.getUserSurveyById(id)
    .then((res) => {
      console.log(res.data);
      setSurvey(res.data);
    })
    .catch((err) => console.log(err));
}

  return (
    <div>
      <NavigationSurvey />
      <Container>
          <Row>
              <Col>
              {survey.title}
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default TakeSurvey;
