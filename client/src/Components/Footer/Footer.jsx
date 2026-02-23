import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from "../../assets/logo81.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* About Section */}
        <div className={styles.section}>
          <div className={styles.logoWrapper}>
            <img src={logo} alt="Company Logo" className={styles.logo} />
          </div>
          <p className={styles.description}>
          Shaping tomorrow’s HSE standards with technology, expertise, and a shared vision for safer, greener, and more resilient industries in the UAE.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/vervemanagementuae/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/verve-management/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/vervemgmtuae" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/vervemanagement/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@vervehighlights" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            <li><Link to="/sponsors" className={styles.link}>Sponsors</Link></li>
            <li><Link to="/schedule" className={styles.link}>Schedule</Link></li>
            <li><Link to="/speakers" className={styles.link}>Speakers</Link></li>
            <li><Link to="/gallery" className={styles.link}>Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Contact</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <span>+971 4243 4677</span>
            </li>
            <li className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <span>info@verve-management.com</span>
            </li>
            <li className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>1702 & 1706 , Mazaya Business Avenue BB2, Al Thanya Fifth, JLT, Dubai, UAE</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © 2026 HSE WEEK UAE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;