import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import Input from "../components/Input/input";

function SignUp() {
  const [formCred, setFormCred] = useState({});
  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormCred({ ...formCred, [name]: value });
  }

  return (
    <div>
      <Input onChange={handleInputChange} name="Email"></Input>
      <Input onChange={handleInputChange} name="Username"></Input>
      <Input onChange={handleInputChange} name="Password"></Input>
      <Button name="Sign Up"></Button>
    </div>
  );
}

export default SignUp;
