import React from "react";
import { Col } from "react-bootstrap";
import "./style.css";

function Column(props) {
  return <Col>{props.children}</Col>;
}

export default Column;
