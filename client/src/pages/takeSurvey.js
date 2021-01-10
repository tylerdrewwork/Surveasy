import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Grid, Row, Col,  } from "react-bootstrap";
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
  let currentQuestion, currentChoiceId;

  useEffect(() => {
    getSurveyById();
  }, []);

  function getSurveyById() {
    API.takeSurvey(id)
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

    // Otherwise, send question choice result
    submitChoice();
    // and increment the current question index by one
    setCurQuestionIndex(curQuestionIndex + 1);
  }

  function submitChoice () {
    // TODO make selectedChoice equal the selected choice, 
    let selectedChoice = currentChoiceId; 
    console.log(selectedChoice);
    API.updateSurveyVote(
      survey._id, 
      survey.questions[curQuestionIndex]._id, 
      selectedChoice)
    
  }

  function renderQuestion() {
    console.log("Rendering question. curQuestionIndex: ", curQuestionIndex);

    // If we have a survey with questions, render it
    if (survey.questions && survey.questions[curQuestionIndex]) {
      currentQuestion = survey.questions[curQuestionIndex]
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

      if (currentQuestion.choices) {
          return (
            <form>
              {currentQuestion.choices.map( ({ choice, _id }) => {
                return <Answer answer={choice} key={_id} choiceId={_id} handleSelectFunction={handleRadioSelect}/>
              })}
            </form>
          )
      }
      return null;
  };

  function handleRadioSelect (event) {
    console.log("Heres the radio event: ", event, "and da target.id be: ", event.target.id);
    currentChoiceId = event.target.id;
  }

  return (
    <div>
      <NavigationSurvey />
      <Container>
        <Row>
          <Col>
          {renderQuestion()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TakeSurvey;
