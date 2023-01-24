import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/hero.module.css";
import Image from "next/image";
import heroImg from "../../public/images/avatar.jpg";
import { Col, Container, Row } from "reactstrap";
import { Link as LinkS } from "react-scroll";

function Hero() {
  return (
    <section id="hero" className={`${classes.hero}`}>
      <Container>
        <Row className="align-items-center">
          {/* <-- hero content --> */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello There !" />
              <h2 className="mt-3 mb-3">I&apos;m Al Fatih Abdurrahman</h2>
              {/* <h5 className="mb-4">Software Engineer</h5> */}
              <h5>
                a passionate <span>software engineer</span> specialized in web
                development with a focus on javascript technologies.
              </h5>
              <div className={`${classes.hero__button}`}>
                <button className="primary__btn">
                  <LinkS to="portfolio" spy={true} smooth={true} duration={500}>
                    View Work
                  </LinkS>
                </button>
                <button className="secondary__btn">
                  <LinkS
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Experience
                  </LinkS>
                </button>
              </div>
            </div>
          </Col>

          {/* <-- hero img --> */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image src={heroImg} alt="hero-image" width={400} height={400} />
              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5>1 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
