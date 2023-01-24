import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";

import classes from "../../styles/contact.module.css";
import SectionSubtitle from "./SectionSubtitle";
import Form from "./Form";

function Contact() {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              If you have any questions or want to collaborate, feel free to
              contact me.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Jakarta - Indonesia</p>
              </li>

              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>alfatihdevs@gmail.com</p>
              </li>

              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+62 851 5509 8322</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://github.com/abduromanov2020" target="_blank">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/alfatihabd/"
                target="_blank"
              >
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
