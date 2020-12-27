import React, { useState, useEffect } from "react";
import Button from "../components/Button/button";
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import Input from "../components/Input/input";
import "./style.css";
import SideBarExample from "../components/NavBar/navbar"

function Admin() {
  return (
    <div>
      <h1>Proof of Concept NavBar</h1>
      <SideBarExample />
    </div>
  );
}

export default Admin;