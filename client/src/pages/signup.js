import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Button from "../components/Button/button";
import Input from "../components/Input/input";
import API from "../utils/API";

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

          <Input onChange={handleInputChange} name="Email" className="border-field"></Input>
          <Input onChange={handleInputChange} name="Username" className="border-field"></Input>
          <Input
            onChange={handleInputChange}
            name="Password"
            type="password"
            className="border-field"
          ></Input>
          <Button onClick={handleFormSubmit} name="Sign Up"></Button>
        </div>
      </div>
      <div>
        <p style={{ color: 'white', display: showRequirementError ? 'block' : 'none' }}>Error: Password does not meet minimum requirements.</p>
      </div>
    </div>
  );
}

export default SignUp;
