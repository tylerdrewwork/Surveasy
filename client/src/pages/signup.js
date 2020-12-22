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
    API.createUser(formCred);
    history.push("/admin");
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
    </div>
  );
}

export default SignUp;
