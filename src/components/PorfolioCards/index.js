import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";

function PortfolioCards(props) {
  const { portfolio } = props;
  return (
    <div>
      <Card>
        <Card.Header>{portfolio.name}</Card.Header>
        <Card.Body>
          <Card.Title>{portfolio.name}</Card.Title>
          <Card.Text>{portfolio.description}</Card.Text>
          <Button variant="primary" href={portfolio.github}>
            Github portfolio
          </Button>
        </Card.Body>
      </Card>
      <br></br>
    </div>
  );
}
export default PortfolioCards;
