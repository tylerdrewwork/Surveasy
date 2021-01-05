import React, { useState, useEffect } from "react";
import Button from "../Button/button";
import Input from "../Input/input";
import "./createSurvey.css";
import { Grid, Row, Col } from "react-bootstrap";
import API from "../../utils/API";

function CreateSurvey() {

  const [surveyData, setSurveyData] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSurveyData({ ...surveyData, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');

    console.log(token);


    // API.createSurvey()
  }

  return (
    <div className="back-div">
      <Input onChange={handleInputChange} name="SurveyName" />
      <Input onChange={handleInputChange} name="QuestionTitle" />
      <Input onChange={handleInputChange} name="Option" />
      <Input onChange={handleInputChange} name="Option" />
      <Input onChange={handleInputChange} name="Option" />
      <Input onChange={handleInputChange} name="Option" />
      <Button onClick={handleFormSubmit} name="Submit" />
    </div>
  );
}

export default CreateSurvey;
