import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
import Input from "../components/Input/input";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

function SignUp() {
  const [formCred, setFormCred] = useState({});
  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormCred({ ...formCred, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.createUser(formCred).then(result => {
      console.log(result);
    });
    history.push("/admin");
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
    </div>
  );
}

export default SignUp;
