import React from "react";

import img01 from "../../public/images/2.png";
import img02 from "../../public/images/4.png";
import img03 from "../../public/images/3.png";
import img04 from "../../public/images/1.png";

import { Col, Container, Row } from "reactstrap";

import SectionSubtitle from "./SectionSubtitle";

import Image from "next/image";

import classes from "../../styles/about.module.css";
import { Link as LinkS } from "react-scroll";

function About() {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="Tech & Stack" />
            <h3 className="mt-4">Tech and Stack</h3>
            <h3 className="mb-4">that I use and familiar with</h3>
            <p>
              There are many technologies that I have learned but I focus on a
              few, here are some of the technologies that I have mastered and
              focused on.
            </p>

            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal mb-0">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Frontend : React JS, Next JS
                </h6>

                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal mb-0">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Backend : Golang, Node JS
                </h6>
              </div>

              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal mb-0">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Database : PostgreSQL, Firebase
                </h6>

                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal mb-0">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  DevOps : Docker
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                {" "}
                <LinkS to="portfolio">My Portfolio</LinkS>
              </button>
              <button className="secondary__btn">
                {" "}
                <LinkS to="contact">Social Media</LinkS>
              </button>
            </div>
          </Col>
          <Col lg="6">
            <Container>
              <div
                className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
              >
                <div className="d-flex flex-column mb-3">
                  <div
                    className={`${classes.about__img} ${classes.about__img__box}`}
                  >
                    <Image src={img01} alt="about-img" />
                  </div>
                  <div
                    className={`${classes.about__img} ${classes.about__img__box}`}
                  >
                    <Image src={img02} alt="about-img" />
                  </div>
                </div>

                <div className="d-flex flex-column mb-3">
                  <div
                    className={`${classes.about__img} ${classes.about__img__box}`}
                  >
                    <Image src={img03} alt="about-img" />
                  </div>
                  <div
                    className={`${classes.about__img} ${classes.about__img__box}`}
                  >
                    <Image src={img04} alt="about-img" />
                  </div>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
