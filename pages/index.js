import { Fragment, useEffect } from "react";
import About from "../components/UI/About";
import Contact from "../components/UI/Contact";
import Hero from "../components/UI/Hero";
import Portfolio from "../components/UI/Portfolio";
import Services from "../components/UI/Services";
import Testimonial from "../components/UI/Testimonial";

export default function Home() {
  useEffect(() => {
    document.title = "my-portfolio ‒ alfatihdevs";
  }, []);

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
