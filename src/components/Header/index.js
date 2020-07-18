import React from "react";
import { Jumbotron, Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <header>
      <Jumbotron>
        <h1>Haylie Goh</h1>
        <Navbar>
          <Nav>
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar>
      </Jumbotron>
    </header>
  );
}

export default Header;
