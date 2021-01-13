import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";
import API from "../utils/API";
import "./style.css";
import CreateSurvey from "../components/createSurvey/createSurvey";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";
import { Line } from "react-chartjs-2";
import SurveyList from "../components/SurveyList/surveyList"
import { Container, Grid, Row, Col } from "react-bootstrap";
import Input from "../components/Input/input";
import Radio from "../components/RadioButton/radio";
import Answer from "../components/Answer/answer";

function Admin() {
    const [survey, setSurvey] = useState({});
    const [curSurvey, setCurSurvey] = useState({});
    const [formCred, setFormCred] = useState({});
    const [activeSur, setActiveSur] = useState({});
    const [deactiveSur, setDeactiveSur] = useState({});
    const [publicSur, setPublicSur] = useState({});
    const [privateSur, setPrivateSur] = useState({});

    let token;
    let selectedSurvey; 
    useEffect(() => {
        uploadSurveys()
        console.log(token);
        console.log(survey);
        setActiveSur(false);
        setDeactiveSur(false);
    }, [])

    function uploadSurveys() {
        token = localStorage.getItem(`token`);

        API.getUserSurveys(token)
          .then((res) => {
            setSurvey(res.data);
            accessSurvey(localStorage.getItem(`currentSurvey`))
            console.log(res.data);
          })
          .catch((err) => console.log(err));
    };

    function accessSurvey(id) {
        selectedSurvey = id; 
        console.log(selectedSurvey);
        localStorage.setItem('currentSurvey', id);
        var r = getIndex(id);
        setCurSurvey(survey[r]);
    }

    function getIndex(id) {
        return survey.findIndex(obj => obj._id === id);
      }
      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormCred({ ...formCred, [name]: value });
        formatAdmin();
      }

      function handleFormSubmit(event) {
        event.preventDefault();
        const formattedData = formatAdmin();
          API.updateSurvey({
            username: formCred.username,
            password: formCred.password,
          })
            .then((result) => {
              console.log(result);

            })
            .catch((err) => console.log(err));
      }

      function formatAdmin(){
          console.log(formCred)
        //   const adminData = {
        //     surveyId: surveyId,
        //     title: surveyData.title,
        //     active: surveyData.active,
        //     public: surveyData.public
        //   }
      }

      function handleRadioSelectActive (event) {
          console.log( event.target.checked)
          console.log(event.target.id)
          if(event.target.checked === true && event.target.id === "Active"){
            setActiveSur(true);
            setDeactiveSur(false);
          } else if(event.target.checked === false && event.target.id === "Active"){
            setActiveSur(false);
            setDeactiveSur(true);
          }else if(event.target.checked === true && event.target.id === "Deactive"){
            setDeactiveSur(true);
            setActiveSur(false);
          }else if(event.target.checked === false && event.target.id === "Deactive"){
            setDeactiveSur(false);
            setActiveSur(true);
          }
          
      }

      function handleRadioSelectVisible (event) {
        console.log( event.target.checked)
        console.log(event.target.id)
        if(event.target.checked === true && event.target.id === "Active"){
          setPublicSur(true);
          setPrivateSur(false);
        } else if(event.target.checked === false && event.target.id === "Active"){
          setPublicSur(false);
          setPrivateSur(true);
        }else if(event.target.checked === true && event.target.id === "Deactive"){
          setPrivateSur(true);
          setPublicSur(false);
        }else if(event.target.checked === false && event.target.id === "Deactive"){
          setPrivateSur(false);
          setPublicSur(true);
        }
        
    }

    return (

        <div>
            <NavigationSurvey />

            <Row float="center">
            <Col sx={3} md={3}>
                    <div className="back-div">
                        {Object.keys(survey).map(key => (
                            <SurveyList name={survey[key].title} onClick={() => accessSurvey(survey[key]._id)} >
                            </SurveyList>
                        ))}
                    </div>
                </Col>
            <Col sx={8} md={9}>
                    <div className="back-div" id="displaySurvey">
                        
                        <h3>Edit Title:</h3>
                        <Input onChange={handleInputChange} name={curSurvey.title}></Input>
                        <h3>Edit Active:</h3>
                        <Radio onChange={handleRadioSelectActive} name={curSurvey.active == null ? '' : "Active"}  checked={activeSur}></Radio>
                        <Radio onChange={handleRadioSelectActive} name={curSurvey.active == null ? '' : "Deactive"}  checked={deactiveSur}></Radio>
                        <h3>Visibility:</h3>
                        <Radio onChange={handleRadioSelectVisible} name={curSurvey.active == null ? '' : "Public"}  checked={publicSur}></Radio>
                        <Radio onChange={handleRadioSelectVisible} name={curSurvey.active == null ? '' : "Private"}  checked={privateSur}></Radio>
                        <Col sx={3} md={12}>
                        <Button name="Submit" onClick={handleFormSubmit}></Button>
                        </Col>
                    </div>
                </Col>
            </Row>

        </div>

    );

}

export default Admin;