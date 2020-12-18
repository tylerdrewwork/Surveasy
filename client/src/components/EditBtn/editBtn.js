import React from "react";
import "./editBtn.css";
import Button from "react-bootstrap/Button";

function EditBtn(props) {
  return <Button variant="info" {...props}>Edit</Button>;
}

export default EditBtn;
