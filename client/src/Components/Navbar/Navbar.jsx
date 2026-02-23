import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo81.png";
import { IoChevronDown } from "react-icons/io5";
import Booth from "../OtherPages/Booth"


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [awardOpen, setAwardOpen] = useState(false);
  const [openBooth, setOpenBooth] = useState(false);



  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        {/* Desktop + Mobile Menu */}
       <ul className={`nav-menu ${mobileOpen ? "open" : ""}`}>

  {/* <li>
    <NavLink
      to="/event"
      onClick={closeMobileMenu}
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
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
        isActive ? "nav-link active" : "nav-link"
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
        isActive ? "nav-link active" : "nav-link"
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
        isActive ? "nav-link active" : "nav-link"
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
        isActive ? "nav-link active" : "nav-link"
      }
    >
      Sponsors & Partners
    </NavLink>
  </li>
{/* <li className="nav-dropdown">
<span
  className="nav-link dropdown-toggle"
  onClick={() => setAwardOpen(!awardOpen)}
>
  <span className="dropdown-text">Awards</span>

  <IoChevronDown className={`arrow ${awardOpen ? "open" : ""}`} />
</span>


  <ul className={`dropdown-menu ${awardOpen ? "show" : ""}`}>
    <li>
      <NavLink
        to="/awards/categories"
        onClick={closeMobileMenu}
        className={({ isActive }) =>
          isActive ? "dropdown-link active" : "dropdown-link"
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
          isActive ? "dropdown-link active" : "dropdown-link"
        }
      >
        Top 50 Leaders
      </NavLink>
    </li>
  </ul>
</li> */}


  <li>
    <NavLink
      to="/gallery"
      onClick={closeMobileMenu}
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
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
        isActive ? "nav-link active" : "nav-link"
      }
    >
      Contact
    </NavLink>
  </li>

</ul>


        {/* CTA */}
        <div className="nav-cta-group">
  <Link to="/registration" className="nav-cta" onClick={closeMobileMenu}>
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
          className={`hamburger ${mobileOpen ? "active" : ""}`}
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

export default Navbar;
