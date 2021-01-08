import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";
import { useParams } from "react-router-dom";
import Question from "../components/Question/question";
import Answer from "../components/Answer/answer";
import { get } from "mongoose";

function TakeSurvey() {
  const [survey, setSurvey] = useState({});
  const [curQuestionIndex, setCurQuestionIndex] = useState(0);
  let { id } = useParams();
  // let currentQuestion = {};

  useEffect(() => {
    getSurveyById();
  }, []);

//   useEffect(() => {
//       if(!survey == {}) {
//           currentQuestion = survey.questions[curQuestionIndex];
//           console.log("This is current question: " + currentQuestion);
//       }
//   }, [curQuestionIndex]);

  function getSurveyById() {
    API.getUserSurveyById(id)
      .then((res) => {
        console.log(res.data);
        setSurvey(res.data);
        //   setCurQuestionIndex(0);
      })
      .catch((err) => console.log(err));
  }

  if (!survey) {
      return <h1>Loading...</h1>
  }

  function nextQuestion () {
    if(curQuestionIndex + 1 >= survey.questions.length) {
      // The survey has been finished?
      console.log("Survey has been finished.");
    } 

    // Otherwise, increment the current question index by one
    setCurQuestionIndex(curQuestionIndex + 1);
  }

  function renderQuestion() {
    console.log("Rendering question. curQuestionIndex: ", curQuestionIndex);

    // If we have a survey with questions, render it
    if (survey.questions && survey.questions[curQuestionIndex]) {
      return (
        <React.Fragment>
          {/* Render Title */}
          {survey.title}
          {/* Render Question Name */}
          <Question question={survey.questions[curQuestionIndex].question} />
          {/* Render all the choices */}
          {renderAnswers()}
          <button onClick={nextQuestion}></button>
        </React.Fragment>
      );
    }

    // Otherwise, return no data found
    console.log("Data not found on page load")
    console.log(survey);

    return (
        <h1>No data found</h1>
    )
  };

  function renderAnswers() {
      const firstQuestion = survey.questions[0];

      if (firstQuestion.choices) {
          return firstQuestion.choices.map( ({ choice }) => {
              return <Answer answer={choice} />
          })
      }
      return null;
  };

  return (
    <div>
      <NavigationSurvey />
      <Container>
        <Row>
          <Col>
          {renderQuestion()}
            {/* Survey Question
                    Answer
                    Answer
                    Answer
                    Answer
                    Radio Buttons 
                    Next/Submit Button */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TakeSurvey;
