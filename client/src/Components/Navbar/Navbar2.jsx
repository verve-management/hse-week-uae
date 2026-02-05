import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar2.module.css";
import logo from "../../assets/logo71.webp";
import { IoChevronDown } from "react-icons/io5";
import Booth from "../OtherPages/Booth"

const Navbar2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openBooth, setOpenBooth] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        
        {/* Logo */}
        <Link to="/" className={styles.navLogo} onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        {/* Desktop + Mobile Menu */}
        <ul className={`${styles.navMenu} ${mobileOpen ? styles.open : ""}`}>

          {/* <li>
            <NavLink
              to="/event"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Event
            </NavLink>
          </li> */}
              <li>
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/schedule"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Schedule
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/speakers"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Speakers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sponsors"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Sponsors
            </NavLink>
          </li>

     <li className={styles.navDropdown}>
  <span className={`${styles.navLink} ${styles.dropdownToggle}`}>
    Awards
    <IoChevronDown className={styles.arrow} />
  </span>

  <ul className={styles.dropdownMenu}>
    <li>
      <NavLink
        to="/awards/categories"
        onClick={closeMobileMenu}
        className={({ isActive }) =>
          isActive ? `${styles.dropdownLink} ${styles.active}` : styles.dropdownLink
        }
      >
        Award Categories
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/awards/top-50-leaders"
        onClick={closeMobileMenu}
        className={({ isActive }) =>
          isActive ? `${styles.dropdownLink} ${styles.active}` : styles.dropdownLink
        }
      >
        Top 50 Leaders
      </NavLink>
    </li>
  </ul>
</li>


          <li>
            <NavLink
              to="/gallery"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

        {/* CTA */}
        <div className={styles.navCtaGroup}>
  <Link
    to="/registration"
    className={styles.navCta}
    onClick={closeMobileMenu}
  >
    Register Now
  </Link>

<button
  className="booth-btn"
  onClick={() => {
    window._previousRoute = window.location.pathname;   // store current route
    window.history.pushState({}, "", "/book-a-booth");  // show booth route
    setOpenBooth(true);
  }}
>
  Book A Booth
</button>



</div>


        {/* Mobile Toggle */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.active : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
    <Booth open={openBooth} setOpen={setOpenBooth} />

    </>
  );
};

export default Navbar2;