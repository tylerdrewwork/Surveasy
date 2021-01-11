import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "../components/Button/button";
import Input from "../components/Input/input";
import API from "../utils/API";

function SignUp() {
  const [formCred, setFormCred] = useState({});
  const [showRequirementError, setShowRequirementError] = useState(true);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormCred({ ...formCred, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.createUser(formCred).then(result => {
      if ("Error: Does not meet minimum requirements.") {
        // handleShow();
        console.log("User does not meet the requirements");
      }
    });
  }

  // function handleModal() {
  //   <>
  //     <Modal show={true} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Modal heading</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={handleClose}>
  //           Save Changes
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   </>;
  // }

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
