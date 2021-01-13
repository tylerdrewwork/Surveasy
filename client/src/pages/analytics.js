import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
import API from "../utils/API"
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
    const [state2, setState2] = useState({});

        useEffect(() => {
            uploadSurveys()
            console.log(token);
            console.log(survey);
        }, [])

        useEffect(() => {
            getCharts();
        }, [curSurvey])


    function uploadSurveys() {
        token = localStorage.getItem(`token`);
        API.getUserSurveys(token)
          .then((res) => {
            setSurvey(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
    };

    function accessSurvey(id) {
        selectedSurvey = id;
        var r = getIndex(id);
        console.log(r);
        setCurSurvey(survey[r]);       
    }
    

    function getIndex(id) {
        return survey.findIndex(obj => obj._id === id);
    }

    function getCharts(){
        console.log(curSurvey);
        const stateSet = {};
        if(curSurvey.questions === undefined){

        }else{
            for(var i = 0; i < curSurvey.questions.length; i++){
            var countChoice = [];
            var labelChoice = [];
            for( var j = 0; j < curSurvey.questions[i].choices.length; j++){
                countChoice.push(curSurvey.questions[i].choices[j].votes);
                labelChoice.push(curSurvey.questions[i].choices[j].choice)
            }
            stateSet[i] = {
                labels: labelChoice, 
                datasets: [{
                    label: curSurvey.questions[i].question,
                    backgroundColor: '#533540',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: countChoice
                }]
            }
        }

        }
        setState(stateSet);

        const stateSet2 = {};
        if(curSurvey.questions === undefined){

        }else{
            for(var i = 0; i < curSurvey.questions.length; i++){
            var countChoice = [];
            var labelChoice = [];
            var backgroundChoice = [];
            var countR = 83;
            var countG = 53;
            var countB = 64;
            var countA = 33;
            for( var j = 0; j < curSurvey.questions[i].choices.length; j++){
                countChoice.push(curSurvey.questions[i].choices[j].votes);
                labelChoice.push(curSurvey.questions[i].choices[j].choice);
                backgroundChoice.push('rgba(' + countR + ',' + countG + ',' + countB + ',' + countA + ')');
                countR = countR + 40;
                countG = countG + 40;
                countB = countB + 40;
                countA = countA + 40;
            }
            stateSet2[i] = {
                labels: labelChoice, 
                datasets: [{
                    label: curSurvey.questions[i].question,
                    backgroundColor: backgroundChoice,
                    borderColor: backgroundChoice,
                    borderWidth: 2,
                    data: countChoice
                }]
            }
        }
            console.log(backgroundChoice);
        }
        setState2(stateSet2);
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
                    <Row float="center">
                        {Object.keys(state).map(key => (
                           <Col sx={8} md={6}>
                            <Bar data={state[key]} />
                           </Col>
                        ))}
                    </Row>
                    <Row float="center" style={{ padding: 40 }}>
                        {Object.keys(state2).map(key => (
                           <Col sx={8} md={6}>
                            <Pie data={state2[key]} />
                           </Col>
                        ))}
                    </Row>
                    </div>
                </Col>
            </Row>

        </div>

    );
}

export default Analytics;