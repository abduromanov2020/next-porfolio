import React from "react";

import { Col, Container, Row } from "reactstrap";
import classes from "../../styles/services.module.css";
import SectionSubtitle from "./SectionSubtitle";
import ServicesItem from "./ServicesItem";

function Services() {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={classes.services__container}>
              <div>
                <ServicesItem
                  title="Front-End Development"
                  icon="ri-apps-line"
                />
                <ServicesItem
                  title="Back-End Development"
                  icon="ri-computer-line"
                />
              </div>
              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>
          <Col lg="6" md="6" className={`${classes.services__title}`}>
            <div>
              <SectionSubtitle subtitle="What I do" />
              <h3 className="mb-0 mt-4">Better Design,</h3>
              <h3 className="mb-4">Better Experience</h3>
              <p>
                I have the skills to develop frontend, backend and fullstack.
                but I often tend to play with the frontend because of the many
                frontend technologies that I have mastered. Javascript is the
                language that I master most and often use, and for the framework
                or library there are React JS and Node JS.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
