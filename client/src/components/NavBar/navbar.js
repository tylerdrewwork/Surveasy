import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap/";
import "./navbar.css";

export default function Navigation() {
  return (
    <Navbar className="navStyle" bg="dark" variant="dark">
      <Navbar.Brand as={Link} href="#home">
        Surveasy
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/signin">
          Sign In
        </Nav.Link>
        <Nav.Link as={Link} to="/signup">
          Sign Up
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Profile Display?
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
