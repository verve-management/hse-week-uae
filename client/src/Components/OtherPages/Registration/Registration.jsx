import React, { useEffect, useRef, useState } from "react";
import styles from "./Registration.module.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const heroTextRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const text = heroTextRef.current;
    if (text) {
      const letters = text.textContent.split("");
      text.textContent = "";
      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = styles.heroLetter;
        span.style.animationDelay = `${index * 0.05}s`;
        text.appendChild(span);
      });
    }
  }, []);


  // ✅ 👉 ADD THIS FUNCTION **HERE** (AFTER useEffect, BEFORE return)
  const handleBuyTicket = (passType) => {
    if (passType === "Individual") {
      navigate("/individual-registration");
    }

    if (passType === "Group") {
      navigate("/group-registration");
    }
  };

  // ✅ ALSO ADD THIS (you were missing it)
  const handleContactUs = () => {
    navigate("/contact");
  };
const handleRegisterNow = () => {
  navigate("/individual-registration");
};

  return (
    <div className={styles.registrationPageWrapper}>
      {/* Hero Section */}
      {/* <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContentWrapper}>
          <h1 className={styles.heroMainTitle} ref={heroTextRef}>
            Registration
          </h1>
          <p className={styles.heroMainSubtitle}>
            Secure Your Spot at the Premier ProcureTech Event
          </p>
          <div className={styles.heroDividerLine}></div>
        </div>
      </section> */}

      {/* Delegate Registration Section */}
      <section className={styles.delegateSection}>
        <div className={styles.delegateContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Delegate{" "}
              <span className={styles.sectionHighlight}>Registration</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Choose the perfect pass for your needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className={styles.pricingGrid}>
            {/* Individual Pass */}
            <div
              className={`${styles.pricingCard} ${
                hoveredCard === "individual" ? styles.hovered : ""
              }`}
              onMouseEnter={() => setHoveredCard("individual")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.passType}>
                  <svg
                    className={styles.passIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>INDIVIDUAL PASS</span>
                </div>
                <div className={styles.priceWrapper}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>795</span>
                </div>
                <p className={styles.vatNote}>( Exclusive of VAT )</p>
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.featuresList}>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Complete access to the two-day conference sessions
                    </span>
                  </li>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>5 Star Luncheon on both days</span>
                  </li>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Coffee Breaks with breakfast networking sessions
                    </span>
                  </li>
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <button
                  className={styles.buyButton}
                  onClick={() => handleBuyTicket("Individual")}
                >
                  <span className={styles.buttonText}>BUY TICKET</span>
                  <svg
                    className={styles.buttonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Group Pass */}
            <div
              className={`${styles.pricingCard} ${styles.groupCard} ${
                hoveredCard === "group" ? styles.hovered : ""
              }`}
              onMouseEnter={() => setHoveredCard("group")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.exclusiveBadge}>
                <span>EXCLUSIVE OFFER!</span>
              </div>

              <div className={styles.cardHeader}>
                <div className={styles.passType}>
                  <svg
                    className={styles.passIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>GROUP PASS</span>
                </div>
                <div className={styles.priceWrapper}>
                  <span className={styles.quoteText}>Request for Quote</span>
                </div>
                <p className={styles.vatNote}>( Exclusive of VAT )</p>
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.featuresList}>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Complete access to the two-day conference sessions
                    </span>
                  </li>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>5 Star Luncheon on both days</span>
                  </li>
                  <li className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Coffee Breaks with breakfast networking sessions
                    </span>
                  </li>
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <button
                  className={styles.buyButton}
                  onClick={() => handleBuyTicket("Group")}
                >
                  <span className={styles.buttonText}>BUY TICKET</span>
                  <svg
                    className={styles.buttonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.contactPrompt}>
            <p className={styles.contactText}>
              Please reach out to us for any queries by clicking the button
              below
            </p>
            <button className={styles.contactButton} onClick={handleContactUs}>
              <svg
                className={styles.contactIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Book a Seat Section */}
      <section className={styles.bookSeatSection}>
        <div className={styles.bookSeatContainer}>
          <div className={styles.bookSeatContent}>
            <div className={styles.bookSeatImage}>
              <img
                src="/GalleryImages/galleryimage6.webp"
                alt="Conference Event"
                className={styles.seatImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.bookSeatInfo}>
              <div className={styles.bookSeatBadge}>
                <span>BOOK A SEAT</span>
              </div>
              <h2 className={styles.bookSeatTitle}>
                DON'T MISS OUR{" "}
                <span className={styles.bookSeatHighlight}>
                  CONFERENCE EVENT!
                </span>
              </h2>
              <p className={styles.bookSeatDescription}>
                Discover new horizons in business, technology, and beyond.
                Network with industry leaders, gain invaluable insights, and
                chart the course for future success. Don't miss out on this
                unparalleled opportunity to expand your knowledge and
                connections. Register now!
              </p>
              <button
                className={styles.registerButton}
                onClick={handleRegisterNow}
              >
                <span className={styles.registerButtonText}>REGISTER NOW</span>
                <svg
                  className={styles.registerButtonIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
