import React from "react";
import { Row } from "react-bootstrap";
import "./style.css";

function Rows(props) {
  return <Row>{props.children}</Row>;
}

export default Rows;
