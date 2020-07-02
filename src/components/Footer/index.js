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
          <Nav.Link>
            <FontAwesomeIcon
              icon={faLinkedin}
              href="https://www.linkedin.com/in/haylie-goh-941bb896/"
              color="white"
              size="2x"
            />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon
              icon={faGithub}
              href="https://github.com/dev-hg20"
              color="white"
              size="2x"
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  );
}

export default Footer;
