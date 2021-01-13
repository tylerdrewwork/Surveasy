import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
import Input from "../components/Input/input";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

function SignIn() {
  const [formCred, setFormCred] = useState({});
  const [showRequirementError, setShowRequirementError] = useState(false);
  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormCred({ ...formCred, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (formCred.username && formCred.password) {
      API.getAuthorization({
        username: formCred.username,
        password: formCred.password,
      })
        .then((result) => {
          if (result.data === "Error: Incorrect Username or Password.") {
            setShowRequirementError(true);
          } else {
            console.log(result);
            localStorage.setItem("token", result.data.token);
            history.push("/admin");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="back-div">
      <div className="sign-form-wrapper">
        <div className="sign-form-content">
          <Input onChange={handleInputChange} name="username" className="border-field"></Input>
          <Input onChange={handleInputChange} name="password" type="password" className="border-field"></Input>
          <Button name="Sign In" onClick={handleFormSubmit}></Button>
        </div>
      </div>
      <div>
        <h1 className="title" style={{ display: showRequirementError ? "block" : "none" }}>Please enter your correct Username and Password</h1>
      </div>
    </div>
  );
}

export default SignIn;
