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
      console.log(result);

      if (result.data === "Error: Does not meet minimum requirements.") {
        setShowRequirementError(true);
      }
      else {
        history.push("/admin");
      }
    });
  }

  return (
    <div>
      <Input onChange={handleInputChange} name="Email"></Input>
      <Input onChange={handleInputChange} name="Username"></Input>
      <Input
        onChange={handleInputChange}
        name="Password"
        type="password"
      ></Input>
      <Button onClick={handleFormSubmit} name="Sign Up"></Button>
      {/* {handleModal}; */}

      {showRequirementError ? <p>Password does not meet requirements.</p> : null}
    </div>
  );
}

export default SignUp;
