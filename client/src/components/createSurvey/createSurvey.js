import React, { useState, useEffect } from "react";
import Button from "../Button/button";
import Input from "../Input/input";
import "./createSurvey.css";
import { Grid, Row, Col } from "react-bootstrap";

function CreateSurvey() {
  return (
    <div className="back-div">
      <Input name="Survey Name" />
      <Input name="Question" />
      <Input name="Option 1" />
      <Input name="Option 2" />
      <Input name="Option 3" />
      <Input name="Option 4" />
      <Button name="Submit" />
    </div>
  );
}

export default CreateSurvey;
