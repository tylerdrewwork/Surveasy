import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Button from "../components/Button/button";
import Input from "../components/Input/input";
import API from "../utils/API";
import './signin-signup.css';


function SignUp() {
  const [formCred, setFormCred] = useState({});
  const [showRequirementError, setShowRequirementError] = useState(false);
  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormCred({ ...formCred, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.createUser(formCred).then(result => {
      if (result.data === "Error: Does not meet minimum requirements.") {
        setShowRequirementError(true);
      }
      else {
        localStorage.setItem('token', result.data.token)
        history.push("/admin");
      }
    });
  }

  return (
    <div className="back-div">
      <div className="sign-form-wrapper">
        <div className="sign-form-content">

          <Input onChange={handleInputChange} name="Email"></Input>
          <Input onChange={handleInputChange} name="Username"></Input>
          <Input
            onChange={handleInputChange}
            name="Password"
            type="password"
            ></Input>
          <Button onClick={handleFormSubmit} name="Sign Up" className="form-field"></Button>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
