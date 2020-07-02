import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./style.css";

library.add(faLinkedin);

function Footer() {
  return (
    <footer>
      <Navbar>
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/haylie-goh-941bb896/">
            <FontAwesomeIcon icon={faLinkedin} color="white" size="2x" />
          </Nav.Link>
          <Nav.Link href="https://github.com/dev-hg20">
            <FontAwesomeIcon icon={faGithub} color="white" size="2x" />
          </Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  );
}

export default Footer;
