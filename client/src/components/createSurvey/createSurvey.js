import React, { useState, useEffect } from "react";
import Button from "../Button/button";
import Input from "../Input/input";
import "./createSurvey.css";
import API from "../../utils/API";

function CreateSurvey() {

  const [questionCount, setQuestionCount] = useState(1);
  const [surveyData, setSurveyData] = useState({
    questions: [{}]
  });
  const [surveyTitle, setSurveyTitle] = useState({});

  function handleTitleChange(event) {
    const { name, value } = event.target;
    setSurveyTitle({ [name]: value });
  }

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
    const formattedData = formatSurveyData(surveyData, surveyTitle.SurveyName);

    API.createSurvey(formattedData, token).then(result => {
      console.log(result);
    });
  }

  function handleIncreaseCount(event) {
    event.preventDefault();

    // Increase Count
    setQuestionCount(questionCount + 1);

    const newQuestionArray = [...surveyData.questions, {}]
    setSurveyData({ ...surveyData, questions: newQuestionArray });
  }

  function formatSurveyData(data, title) {

    const formattedData = {
      title: title,
      questions: []
    };

    for (let i = 0; i < questionCount; i++) {
      formattedData.questions[i] = {
        question: data[i].QuestionName,
        choices: [
          { choice: data[i].Option1 },
          { choice: data[i].Option2 },
          { choice: data[i].Option3 },
          { choice: data[i].Option4 }
        ]
      }
    }

    return formattedData;
  }

  return (
    <div className="back-div">
      <form id="form-create-survey">
        <Input onChange={handleTitleChange} name="SurveyName" />

        {surveyData.questions.map((input, index) => {
          return <div data-key={index} key={index}>
            <Input onChange={handleInputChange} name={`QuestionName`} />
            <Input onChange={handleInputChange} name={`Option1`} />
            <Input onChange={handleInputChange} name={`Option2`} />
            <Input onChange={handleInputChange} name={`Option3`} />
            <Input onChange={handleInputChange} name={`Option4`} />
          </div>
        })}

        <Button onClick={handleFormSubmit} name="Submit" />
        <Button onClick={handleIncreaseCount} name="Add a Question" />
      </form>
    </div>
  );
}

export default CreateSurvey;
