import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";
import { useParams } from "react-router-dom";

function TakeSurvey() {
  let { id } = useParams();

  API.getUserSurveyById(id)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));

  return (
    <div>
      <NavigationSurvey />
    </div>
  );
}

export default TakeSurvey;
