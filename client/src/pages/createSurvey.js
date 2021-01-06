import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
import API from "../utils/API";
import "./style.css";
import { Container, Grid, Row, Col } from "react-bootstrap";
import Create from "../components/createSurvey/createSurvey";
import NavbarSurvey from "../components/NavBarSurvey/navbarSurvey";

function CreateSurvey() {
  return (
    <div>
      <NavbarSurvey />
      <Create></Create>
    </div>
  );
}

export default CreateSurvey;
