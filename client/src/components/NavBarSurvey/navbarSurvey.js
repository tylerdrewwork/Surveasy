import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap/";
import "./navbarSurvey.css";

export default function NavigationSurvey() {
  function handleLogout() {
    localStorage.removeItem('token');
  }

  return (
    <Navbar className="navStyle">
      <Navbar.Brand as={Link} href="#home">
        Surveasy
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/edit">
          Edit Survey
        </Nav.Link>
        <Nav.Link as={Link} to="/analytics">
          Analytics
        </Nav.Link>
        <Nav.Link as={Link} to="/admin">
          Admin
        </Nav.Link>
        <Nav.Link as={Link} to="/create">
          Create Survey
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/" onClick={handleLogout}>
          Sign Out
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
