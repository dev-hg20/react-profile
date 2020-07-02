import React from "react";
import Container from "../components/Container";
import PortfolioCards from "../components/PorfolioCards";
import Row from "../components/Row";
import portfolioJSON from "../portfolioDB.json";

function Portfolio() {
  //   const [portfolio] = useState({
  //     portfolio: portfolioJSON,
  //   });
  return (
    <Container>
      <Row>
        {portfolioJSON.map((portfolio, index) => {
          return <PortfolioCards key={index} portfolio={portfolio} />;
        })}
      </Row>
    </Container>
  );
}

export default Portfolio;
