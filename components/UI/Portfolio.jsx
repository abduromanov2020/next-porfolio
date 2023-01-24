import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../data/portfolio.js";

function Portfolio() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "") {
      setData(portfolioData);
    }

    if (filter === "Web Design") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
      console.log(filter);
    }
    if (filter === "Web App") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio" className={`${classes.portfolio}`}>
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Portfolio" />
            <h4 className="mt-4">Some of my distinguished works</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={`${filter === "" ? active : ""} ${
                  classes.tab__btn
                } `}
                onClick={() => setFilter("")}
              >
                All Categories
              </button>
              <button
                className={` ${filter === "Web App" ? active : ""} ${
                  classes.tab__btn
                }`}
                onClick={() => setFilter("Web App")}
              >
                Web Apps
              </button>
              <button
                className={` ${filter === "Web Design" ? active : ""} ${
                  classes.tab__btn
                }`}
                onClick={() => setFilter("Web Design")}
              >
                Web Design
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
