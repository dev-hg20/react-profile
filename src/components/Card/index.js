import React from "react";
import { Card, Button } from "react-bootstrap";
import image from "./profile-card.jpg";
import "./style.css";

function Cards() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Haylie Goh</Card.Title>
          <Card.Text>
            <p>haylie.goh@gmail.com</p>
            <p>0403578995</p>
          </Card.Text>
          <Button variant="primary" href="/portfolio">
            Portfolios
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Cards;
