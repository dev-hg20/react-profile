import React from "react";
import Container from "../components/Container";
import Cards from "../components/Card";
import Row from "../components/Row";
import Title from "../components/Title";
import Col from "../components/Column";

function Profile() {
  return (
    <Container>
      <Row></Row>
      <br></br>
      <Row>
        <Col md={8}>
          <Title>About Me</Title>I grew up on a small island surrounded by
          palm-fringed beaches and blue blue waters. It's also known as a food
          haven to many in South East Asia and it's no wonder that I am a foodie
          myself. Baked goods are my absolute guilty pleasure, from cookies to
          cakes, I love them all. I'm an avid traveller, I enjoy exploring a new
          destination and experience new adventures. My dream destinations
          include Iceland, Italy, Alaska, India and Nova Scotia. I will make
          sure to tick these destinations off my list one day soon. An
          interesting fact about me is that I've recently taken up coding and
          I'm very excited about it despite it's challenges.
        </Col>
        <br></br>
        <Col md={4}>
          <Cards></Cards>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
