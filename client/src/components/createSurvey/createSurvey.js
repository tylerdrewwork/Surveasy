import React, { useState, useEffect } from "react";
import Button from "../Button/button";
import Input from "../Input/input";
import "./createSurvey.css";
import { Grid, Row, Col } from "react-bootstrap";
import API from "../../utils/API";

function CreateSurvey() {

  const [questionInputs, setQuestionInputs] = useState(["", ""]);
  const [surveyData, setSurveyData] = useState(new Array(questionInputs.length));


  function handleInputChange(event) {
    const { name, value, parentElement } = event.target;
    const key = parentElement.getAttribute('data-key');
    const surveyDataArray = surveyData;

    surveyDataArray[key] = { ...surveyDataArray[key], [name]: value };
    setSurveyData({ ...surveyData, surveyDataArray });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');

    console.log(surveyData);

    // API.createSurvey(formatSurveyData(surveyData), token).then(result => {
    //   console.log(result);
    // });
  }

  function formatSurveyData(data) {


    const formattedData = {
      title: data.SurveyName,
      questions: [
        {
          question: data.QuestionTitle,
          choices: [
            { choice: data.Option1 },
            { choice: data.Option2 },
            { choice: data.Option3 },
            { choice: data.Option4 }
          ]
        }
      ]
    }

    return formattedData;
  }

  return (
    <div className="back-div">
      <Input onChange={handleInputChange} name="SurveyName" />

      {questionInputs.map((input, index) => {
        return <div data-key={index} key={index}>
          <Input onChange={handleInputChange} name={`QuestionName`} />
          <Input onChange={handleInputChange} name={`Option1`} />
          <Input onChange={handleInputChange} name={`Option2`} />
          <Input onChange={handleInputChange} name={`Option3`} />
          <Input onChange={handleInputChange} name={`Option4`} />
        </div>
      })}

      {/* <div>
        <Input onChange={handleInputChange} name="QuestionTitle" />
        <Input onChange={handleInputChange} name="Option1" />
        <Input onChange={handleInputChange} name="Option2" />
        <Input onChange={handleInputChange} name="Option3" />
        <Input onChange={handleInputChange} name="Option4" />
      </div> */}

      <Button onClick={handleFormSubmit} name="Submit" />
    </div>
  );
}

export default CreateSurvey;
