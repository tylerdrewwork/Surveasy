import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import Input from "../components/Input/input";

function SignUp() {
  return (
    <div>
      <Input name="Email"></Input>
      <Input name="Username"></Input>
      <Input name="Password"></Input>
      <Button name="Sign Up"></Button>
    </div>
  );
}

export default SignUp;
