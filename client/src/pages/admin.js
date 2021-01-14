import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/button";
import API from "../utils/API";
import Input from "../components/Input2/input";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";
import SurveyList from "../components/SurveyList/surveyList"
import { Container, Grid, Row, Col } from "react-bootstrap";
import Radio from "../components/RadioButton/radio";
import './admin.css';

function Admin() {
  const [survey, setSurvey] = useState({});
  const [curSurvey, setCurSurvey] = useState({});
  const [editTitle, setEditTitle] = useState({});
  const [activeSur, setActiveSur] = useState({});
  const [deactiveSur, setDeactiveSur] = useState({});

  let token;
  let selectedSurvey;
  useEffect(() => {
    uploadSurveys()
    setActiveSur(false);
    setDeactiveSur(false);
  }, []);

  function uploadSurveys() {
    token = localStorage.getItem(`token`);

    API.getUserSurveys(token)
      .then((res) => {
        setSurvey(res.data);
        accessSurvey(localStorage.getItem(`currentSurvey`))
      })
      .catch((err) => console.log(err));
  }

  function accessSurvey(id) {
    selectedSurvey = id;
    console.log(selectedSurvey);
    localStorage.setItem('currentSurvey', id);
    var r = getIndex(id);
    setCurSurvey(survey[r]);

    if (survey[r].active.toString() == "true") {
      setActiveSur(true);
      setDeactiveSur(false);
    }
    if (survey[r].active.toString() == "false") {
      setDeactiveSur(true);
      setActiveSur(false);
    }

    setEditTitle(survey[r].title);
  }

  function getIndex(id) {
    return survey.findIndex(obj => obj._id === id);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditTitle(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const adminData = formatAdmin();
    console.log(adminData);
    token = localStorage.getItem(`token`);

    console.log('Outside then function');

    API.updateSurvey(curSurvey._id, adminData, token)
      .then((result) => {
        uploadSurveys();
      })
      .catch((err) => console.log(err));
  }

  function displayLink() {
    if (curSurvey._id === null) {
      return "";
    }
    return (
      <NavLink
        to={{
          pathname: `survey/${curSurvey._id}`,
        }}>
        https://surveasy.herokuapp.com/survey/{curSurvey._id}
      </NavLink>
    )
  }

  function formatAdmin() {

    console.log(curSurvey);
    console.log(editTitle);
    const adminDataFormat = {
      surveyId: curSurvey._id,
      title: editTitle,
      active: activeSur,
      public: true
    }

    return adminDataFormat;
  }

  function handleRadioSelectActive(event) {
    console.log(event.target.checked)
    console.log(event.target.id)
    if (event.target.checked === true && event.target.id === "Active") {
      setActiveSur(true);
      setDeactiveSur(false);
    } else if (event.target.checked === false && event.target.id === "Active") {
      setActiveSur(false);
      setDeactiveSur(true);
    } else if (event.target.checked === true && event.target.id === "Deactive") {
      setDeactiveSur(true);
      setActiveSur(false);
    } else if (event.target.checked === false && event.target.id === "Deactive") {
      setDeactiveSur(false);
      setActiveSur(true);
    }

  }

  return (

    <div>
      <NavigationSurvey />

      <Container fluid style = {{marginTop: "100px"}}>
        <Row float="center" >
          <Col sx={2} md={2}>
          <div className="survey-bar">
            <div className="back-div">
              {Object.keys(survey).map(key => (
                <SurveyList name={survey[key].title} onClick={() => accessSurvey(survey[key]._id)} >
                </SurveyList>
              ))}
            </div>
            </div>
          </Col>
          <Col sx={10} md={9}>
                <div className="admin-wrapper">
                  <div className="sign-form-content" id="displaySurvey">
                    
                
                          <h4 style = {{marginTop : "10px"}}>Edit Title:</h4>
                          <Input onChange={handleInputChange} name={curSurvey.title}></Input>

                          <div style = {{padding : "50px"}}></div>
                          <h4>Edit Active:</h4>
                          <Radio onChange={handleRadioSelectActive} name={curSurvey.active == null ? '' : "Active"} checked={activeSur}></Radio>
                          <Radio onChange={handleRadioSelectActive} name={curSurvey.active == null ? '' : "Deactive"} checked={deactiveSur}></Radio>
                      
                          <div style = {{padding : "20px"}}></div>


                          <Col sx={3} md={12}>
                            <Button name="Submit" onClick={handleFormSubmit} style = {{float: "right"}}></Button>
                          </Col>

                      <div className="sign-form-content" id="displaySurvey" style = {{marginTop : "20px"}}>
                        {curSurvey.active == null ? "" : <h4 style = {{marginTop : "50px"}}>{displayLink()}</h4>}
                      </div>
                  </div>
                </div>
          </Col>
        </Row>
      </Container>

    </div>

  );

}

export default Admin;