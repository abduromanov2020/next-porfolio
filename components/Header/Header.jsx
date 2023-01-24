import React, { useEffect, useRef } from "react";

import { Container } from "reactstrap";
import classes from "./header.module.css";
import { Link as LinkS } from "react-scroll";

const NAV_LINK = [
  {
    path: "hero",
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

function Header() {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => {
      window.removeEventListener("scroll", headerFunc);
    };
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* <-- nav logo --> */}
          <div className={`${classes.logo}`}>
            <h1>
              <span>alfatih</span>devs
            </h1>
          </div>

          {/* <--nav menu --> */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV_LINK.map((link, index) => (
                <LinkS to={link.path} key={index}>
                  {link.display}
                </LinkS>
              ))}

              <div className={`${classes.nav__right}`}>
                <p className="d-flex align-items-center gap-2 mb-0">
                  {" "}
                  <i className="ri-github-line" /> abduromanov2020
                </p>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu} />
          </span>
        </div>
      </Container>
    </header>
  );
}

export default Header;
