import React, { useEffect, useRef, useState } from "react";
import styles from "./Registration.module.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const heroTextRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const text = heroTextRef.current;
    if (!text) return;

    const full = text.textContent;
    text.textContent = "";

    [...full].forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter;
      span.className = styles.heroLetter;
      span.style.animationDelay = `${index * 0.04}s`;
      text.appendChild(span);
    });

    setTimeout(() => {
      text.classList.add(styles.animated);
    }, full.length * 40 + 300);
  }, []);

  const handleBuyTicket = (passType) => {
    if (passType === "Individual") {
      navigate("/individual-registration");
    }
    if (passType === "Group") {
      navigate("/group-registration");
    }
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  const handleRegisterNow = () => {
    navigate("/individual-registration");
  };

  return (
    <div className={styles.registrationPageWrapper}>

      {/* ── Hero Section (Speakers-style) ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroDecoLine}></div>

          <h1 className={styles.heroMainTitle}>
            <span ref={heroTextRef}>Registration</span>
          </h1>

          <p className={styles.heroMainSubtitle}>
            Secure Your Spot at the Premier HSE Leadership Summit
          </p>

          <div className={styles.heroDecoLine}></div>
        </div>
      </section>

      {/* ── Delegate Registration Section ── */}
      <section className={styles.delegateSection}>
        <div className={styles.delegateContainer}>

          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Delegate&nbsp;<span className={styles.sectionHighlight}>Registration</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Choose the perfect pass for your needs
            </p>
          </div>

          {/* ── Pricing Cards (3 columns) ── */}
          <div className={styles.pricingGrid}>

            {/* Individual Pass */}
            <div
              className={`${styles.pricingCard} ${hoveredCard === "individual" ? styles.hovered : ""}`}
              onMouseEnter={() => setHoveredCard("individual")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.cardTopAccent}></div>
              <div className={styles.cardHeader}>
                <div className={styles.passIconWrap}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span className={styles.passLabel}>INDIVIDUAL PASS</span>
                <div className={styles.priceWrapper}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>795</span>
                </div>
                <p className={styles.vatNote}>Exclusive of VAT</p>
              </div>

              <div className={styles.cardDivider}></div>

              <div className={styles.cardBody}>
                <ul className={styles.featuresList}>
                  {[
                    "Complete access to the two-day conference sessions",
                    "5 Star Luncheon on both days",
                    "Coffee Breaks with breakfast networking sessions",
                  ].map((f, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.checkDot}></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.buyButton} onClick={() => handleBuyTicket("Individual")}>
                  BUY TICKET
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Group Pass */}
            <div
              className={`${styles.pricingCard} ${styles.featuredCard} ${hoveredCard === "group" ? styles.hovered : ""}`}
              onMouseEnter={() => setHoveredCard("group")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.featuredBadge}>EXCLUSIVE OFFER</div>
              <div className={styles.cardTopAccent}></div>
              <div className={styles.cardHeader}>
                <div className={styles.passIconWrap}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span className={styles.passLabel}>GROUP PASS</span>
                <div className={styles.priceWrapper}>
                  <span className={styles.quoteText}>Request for Quote</span>
                </div>
                <p className={styles.vatNote}>Exclusive of VAT</p>
              </div>

              <div className={styles.cardDivider}></div>

              <div className={styles.cardBody}>
                <ul className={styles.featuresList}>
                  {[
                    "Complete access to the two-day conference sessions",
                    "5 Star Luncheon on both days",
                    "Coffee Breaks with breakfast networking sessions",
                  ].map((f, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.checkDot}></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.buyButton} onClick={() => handleBuyTicket("Group")}>
                  BUY TICKET
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Solution Providers Note Card */}
            <div
              className={`${styles.pricingCard} ${styles.noteCard} ${hoveredCard === "note" ? styles.hovered : ""}`}
              onMouseEnter={() => setHoveredCard("note")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.cardTopAccent}></div>
              <div className={styles.cardHeader}>
                <div className={`${styles.passIconWrap} ${styles.noteIconWrap}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <span className={styles.passLabel}>SOLUTION PROVIDERS</span>
                <div className={styles.priceWrapper}>
                  <span className={styles.sponsorText}>Sponsorship</span>
                </div>
                <p className={styles.vatNote}>Opportunities Available</p>
              </div>

              <div className={styles.cardDivider}></div>

              <div className={styles.cardBody}>
                <div className={styles.noteContent}>
                  <p className={styles.noteText}>
                    <strong>Please Note:</strong> Solution Providers, Technology Companies, and Vendors
                    do <em>not</em> qualify for delegate passes.
                  </p>
                  <p className={styles.noteText}>
                    To explore Sponsorship opportunities, please reach out to our team directly.
                  </p>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a
                  className={styles.emailButton}
                  href="mailto:info@verve-management.com"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Us Now
                </a>
                <p className={styles.emailAddress}>info@verve-management.com</p>
              </div>
            </div>

          </div>

          {/* Contact prompt */}
          <div className={styles.contactPrompt}>
            <p className={styles.contactText}>
              Have questions? Reach out to our team for any queries.
            </p>
            <button className={styles.contactButton} onClick={handleContactUs}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ── Book a Seat Section ── */}
      <section className={styles.bookSeatSection}>
        <div className={styles.bookSeatContainer}>
          <div className={styles.bookSeatContent}>

            <div className={styles.bookSeatImage}>
              <img
                src="/KsaGallery/Gallery7.webp"
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
                <span className={styles.bookSeatHighlight}>CONFERENCE EVENT!</span>
              </h2>
              <p className={styles.bookSeatDescription}>
                Discover new horizons in business, technology, and beyond.
                Network with industry leaders, gain invaluable insights, and
                chart the course for future success. Don't miss out on this
                unparalleled opportunity to expand your knowledge and
                connections. Register now!
              </p>
              <button className={styles.registerButton} onClick={handleRegisterNow}>
                <span>REGISTER NOW</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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