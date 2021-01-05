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

    const setData = {
      title: surveyData.SurveyName,
      questions: [
        {
          question: surveyData.QuestionTitle,
          choices: [
            { choice: surveyData.Option1 },
            { choice: surveyData.Option2 },
            { choice: surveyData.Option3 },
            { choice: surveyData.Option4 }
          ]
        }
      ]
    }

    API.createSurvey(setData, token).then(result => {
      console.log(result);
    });
  }

  return (
    <div className="back-div">
      <Input onChange={handleInputChange} name="SurveyName" />
      <Input onChange={handleInputChange} name="QuestionTitle" />
      <Input onChange={handleInputChange} name="Option1" />
      <Input onChange={handleInputChange} name="Option2" />
      <Input onChange={handleInputChange} name="Option3" />
      <Input onChange={handleInputChange} name="Option4" />
      <Button onClick={handleFormSubmit} name="Submit" />
    </div>
  );
}

export default CreateSurvey;
