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
  const [curQuestionIndex, setCurQuestionIndex] = useState();
  let { id } = useParams();
  // let currentQuestion = {};

  useEffect(() => {
    getSurveyById();
  }, []);

  // useEffect(() => {
  //     if(!survey == {}) {
  //         currentQuestion = survey.questions[curQuestionIndex];
  //         console.log("This is current question: " + currentQuestion);
  //     }
  // }, [curQuestionIndex]);

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

  function renderQuestion() {
      if (survey.questions && survey.questions[0] && survey.questions[0].question) {
        return (
          <React.Fragment>
            {survey.title}
            <Question question={survey.questions[0].question} />
            <Answer answer={survey.questions[0].choices[0].choice} />
            <Answer answer={survey.questions[0].choices[1].choice} />
            <Answer answer={survey.questions[0].choices[2].choice} />
            <Answer answer={survey.questions[0].choices[3].choice} />
          </React.Fragment>
        );
      }
      console.log("Data not found on page load")
        console.log(survey);

      return (
          <h1>No data found</h1>
          
      )
  }

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
