import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
import API from "../utils/API"
import "./style.css";
import NavigationSurvey from "../components/NavBarSurvey/navbarSurvey";
import { Line, Bar, Pie} from "react-chartjs-2";
import SurveyList from "../components/SurveyList/surveyList"
import { Container, Grid, Row, Col } from "react-bootstrap";

function Analytics() {
    const [survey, setSurvey] = useState({});
    const [curSurvey, setCurSurvey] = useState({});
    let token;
    let selectedSurvey; 
    const [state, setState] = useState({});

        useEffect(() => {
            uploadSurveys()
            console.log(token);
            console.log(survey);
        }, [])



    function uploadSurveys() {
        token = localStorage.getItem(`token`);
        selectedSurvey = localStorage.getItem(`currentSurvey`);

        API.getUserSurveys(token)
          .then((res) => {
            setSurvey(res.data);
            console.log(res.data);
            accessSurvey(selectedSurvey);
          })
          .catch((err) => console.log(err));
    };

    function accessSurvey(id) {
        selectedSurvey = id; 
        localStorage.setItem('currentSurvey', id);
        var r = getIndex(id);
        setCurSurvey(survey[r]);
        console.log(curSurvey);
        getCharts();
    }

    function getIndex(id) {
        return survey.findIndex(obj => obj._id === id);
    }

    function getCharts(){
        const stateSet = {};
        for(var i = 0; i < curSurvey.question.length; i++){
            var countChoice = [];
            var labelChoice = [];
            for( var j = 0; j < curSurvey.question[i].choices.length; j++){
                countChoice.push(curSurvey.question[i].choices[j].votes);
                labelChoice.push(curSurvey.question[i].choices[j].choice)
            }
            stateSet[i] = {
                labels: labelChoice, 
                datasets: [{
                    label: curSurvey.question[i].question,
                    backgroundColor: '#533540',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: countChoice
                }]
            }
        }

        setState(stateSet);

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
                    <div className="back-div">
                        {Object.keys(state).map(key => (
                            <Col sx={8} md={6}>
                            <Bar data={state[key]} />
                        </Col>
                        ))}
                    </div>
                </Col>
            </Row>

        </div>

    );
}

export default Analytics;