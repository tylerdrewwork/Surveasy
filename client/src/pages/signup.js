import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import Input from "../components/Input/input";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [formCred, setFormCred] = useState({});
  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormCred({ ...formCred, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    history.push("/admin");
  }

  return (
    <div>
      <Input onChange={handleInputChange} name="Email"></Input>
      <Input onChange={handleInputChange} name="Username"></Input>
      <Input onChange={handleInputChange} name="Password"></Input>
      <Button onClick={handleFormSubmit} name="Sign Up"></Button>
    </div>
  );
}

export default SignUp;
