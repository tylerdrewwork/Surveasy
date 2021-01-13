import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Row, Col, } from "react-bootstrap";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";
import { useParams } from "react-router-dom";
import Question from "../components/Question/question";
import Answer from "../components/Answer/answer";
import { NavLink } from "react-router-dom";

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
        setSurvey(res.data);
      })
      .catch((err) => console.log(err));
  }

  if (!survey) {
    return <div className="back-div"><h1>Loading...</h1></div>
  }

  function nextQuestion() {
    if (curQuestionIndex + 1 >= survey.questions.length) {
      // The survey has been finished?
      console.log("Survey has been finished.");
    }

    // Otherwise, send question choice result
    submitChoice();
    // and increment the current question index by one
    setCurQuestionIndex(curQuestionIndex + 1);
  }

  function submitChoice() {
    // TODO make selectedChoice equal the selected choice, 
    let selectedChoice = currentChoiceId;

    API.updateSurveyVote(
      survey._id,
      survey.questions[curQuestionIndex]._id,
      selectedChoice)
  }

  function renderQuestion() {

    // If we have a survey with questions, render it
    if (survey.questions && survey.questions[curQuestionIndex] && survey.active === true) {
      currentQuestion = survey.questions[curQuestionIndex]
      return (
        <React.Fragment>
          {survey.title}
          <Question question={survey.questions[curQuestionIndex].question} />
          {renderAnswers()}
          <button onClick={nextQuestion}></button>
        </React.Fragment>
      );
    }

    // Once the user reaches the end of the survey,
    // display link back to landing page
    return (
      <div className="back-div">
        <h1>Thank you for taking this survey!</h1>
        <h1>Follow this link to create your own!</h1>
        <h2>
          <NavLink to="/">https://surveasy.herokuapp.com/</NavLink>
        </h2>

      </div>
    )
  };

  function renderAnswers() {

    if (currentQuestion.choices) {
      return (
        <form>
          {currentQuestion.choices.map(({ choice, _id }) => {
            return <Answer answer={choice} key={_id} choiceId={_id} handleSelectFunction={handleRadioSelect} />
          })}
        </form>
      )
    }
    return null;
  };

  function handleRadioSelect(event) {
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
