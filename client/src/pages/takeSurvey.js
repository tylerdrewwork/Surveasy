import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";

function TakeSurvey() {
  return (
    <div>
      <NavigationSurvey />
    </div>
  );
}

export default TakeSurvey;
