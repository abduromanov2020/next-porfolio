import { Fragment } from "react";
import About from "../components/UI/About";
import Contact from "../components/UI/Contact";
import Hero from "../components/UI/Hero";
import Portfolio from "../components/UI/Portfolio";
import Services from "../components/UI/services";
import Testimonial from "../components/UI/Testimonial";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
    </Fragment>
  );
}
