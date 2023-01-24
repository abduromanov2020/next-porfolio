import React from "react";

import classes from "./footer.module.css";
import { Link as LinkS } from "react-scroll";
import { Col, Container, Row } from "reactstrap";

const NAV_LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "about",
    display: "About",
  },
  {
    path: "services",
    display: "Services",
  },
  {
    path: "portfolio",
    display: "Portfolio",
  },
  {
    path: "contact",
    display: "Contact",
  },
];

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          {/* <-- footer top --> */}
          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.nav__menu}`}>
              {NAV_LINK.map((link, index) => (
                <LinkS to={link.path} key={index}>
                  {link.display}
                </LinkS>
              ))}
            </div>
          </Col>

          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}>
              <h6>Build with NextJS</h6>
            </div>
          </Col>

          {/* <-- footer bottom --> */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>&copy; 2023 alfatihdevs. coding with muhib.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
