import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
import Input from "../components/Input/input";
import API from "../utils/API";
import "./style.css";

function createSurvey() {


return (
  <div className ="back-div">
    <Input name="Survey Name" />
    <Input name="Question" />
    <Input name="Option 1" />
    <Input name="Option 2" />
    <Input name="Option 3" />
    <Input name="Option 4" />
  </div>
);

}

export default createSurvey;