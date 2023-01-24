import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";

import classes from "../../styles/testimonial.module.css";

import network from "../../public/images/Connected world.png";
import SectionSubtitle from "./SectionSubtitle";

import Slider from "react-slick";

function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section id="testimonial">
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Experience" />
            <h4 className="mt-4 mb-5">Here are some of my experiences</h4>
            <Container className="px-3">
              <Slider {...settings}>
                <div className={`${classes.testimonial__item}`}>
                  <div className={`${classes.testimonial__client}`}>
                    <Image
                      alt="client-img"
                      src="/images/ghp.png"
                      width="50"
                      height="50"
                      className="rounded-2"
                    />

                    <div>
                      <h6>PT Gamal Hikmah Pusaka</h6>
                      <h6>Web Developer</h6>
                    </div>
                  </div>

                  <div className={`${classes.testimonial__list}`}>
                    <ul>
                      <li>
                        Responsible for developing, testing, collaborating,
                        brainstorming, code reviewing, debugging, and deploying
                        frontend features.
                      </li>
                      <li>
                        Helped the company achieve a registration migration from
                        offline to online by developing registration forms on
                        websites
                      </li>
                      <li>
                        Integrated Website to mobile and desktop by publishing
                        websites to the internet by hosting through the hosting
                        platform (Hostinger)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`${classes.testimonial__item}`}>
                  <div className={`${classes.testimonial__client}`}>
                    <Image
                      alt="client-img"
                      src="/images/efishery.png"
                      width="50"
                      height="50"
                      className="rounded-2"
                    />

                    <div>
                      <h6>Efishery Academy</h6>
                      <h6>Aqua Developer</h6>
                    </div>
                  </div>

                  <div className={`${classes.testimonial__list}`}>
                    <ul>
                      <li>
                        Learned and practiced Software engineering development
                        lifecycle, Software architecture and best practice from
                        Efishery engineers. (SCRUM, Microservices)
                      </li>
                      <li>
                        Configure database schema and set up ERD with a
                        relational database which makes it easy to understand
                        and gain insights about the relationship between various
                        data points. (PostgreSQL, DBeaver)
                      </li>
                      <li>
                        Developed a simple ecommerce system API service
                        according to google API guideline (Golang, GORM, Echo)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`${classes.testimonial__item}`}>
                  <div className={`${classes.testimonial__client}`}>
                    <Image
                      alt="client-img"
                      src="/images/gdsc.png"
                      width="50"
                      height="50"
                      className="rounded-2"
                    />

                    <div>
                      <h6>Google Developer Student Club</h6>
                      <h6>Front End Developer</h6>
                    </div>
                  </div>

                  <div className={`${classes.testimonial__list}`}>
                    <ul>
                      <li>Created a front end path learning module</li>
                      <li>
                        Became a speaker at the front end topic event and helped
                        the participants who attended the event
                      </li>
                    </ul>
                  </div>
                </div>
              </Slider>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
