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
        setSurveyData({...surveyData, [name]: value});
    } 

    function handleFormSubmit(event) {
        event.preventDefault();
        API.createSurvey();
        console.log("Testing handle form submit data: " + JSON.stringify(surveyData))
    }

  return (
    <div className="back-div">
      <Input onChange={handleInputChange} name="Survey-Name" />
      <Input onChange={handleInputChange} name="Question" />
      <Input onChange={handleInputChange} name="Option 1" />
      <Input onChange={handleInputChange} name="Option 2" />
      <Input onChange={handleInputChange} name="Option 3" />
      <Input onChange={handleInputChange} name="Option 4" />
      <Button onClick={handleFormSubmit} name="Submit" />
    </div>
  );
}

export default CreateSurvey;
