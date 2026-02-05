import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import waveBg from "../../assets/wave.json";
import "./Partners.css";

// Sponsor logos
import sponsor1 from "../../assets/sponcors/sponsor1.png";
import sponsor2 from "../../assets/sponcors/sponsor2.png";
import sponsor3 from "../../assets/sponcors/sponsor3.png";
import sponsor4 from "../../assets/sponcors/sponsor4.png";
import sponsor5 from "../../assets/sponcors/sponsor5.png";
import sponsor6 from "../../assets/sponcors/sponsor6.png";
import sponsor7 from "../../assets/sponcors/sponsor7.png";
import sponsor8 from "../../assets/sponcors/sponsor8.png";
import sponsor9 from "../../assets/sponcors/sponsor9.png";
import sponsor10 from "../../assets/sponcors/sponsor10.png";
import sponsor11 from "../../assets/sponcors/sponsor11.png";
import sponsor12 from "../../assets/sponcors/sponsor12.png";
import sponsor13 from "../../assets/sponcors/sponsor13.png";
import sponsor14 from "../../assets/sponcors/sponsor14.png";
import sponsor15 from "../../assets/sponcors/sponsor15.png";
import sponsor16 from "../../assets/sponcors/sponsor16.png";
import sponsor17 from "../../assets/sponcors/sponsor17.png";
import sponsor18 from "../../assets/sponcors/sponsor18.png";
import sponsor19 from "../../assets/sponcors/sponsor19.png";
import sponsor20 from "../../assets/sponcors/sponsor20.png";

const Partners = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const partners = [
    sponsor1, sponsor2, sponsor3, sponsor4, sponsor5,
    sponsor6, sponsor7, sponsor8, sponsor9, sponsor10,
    sponsor11, sponsor12, sponsor13, sponsor14, sponsor15,
    sponsor16, sponsor17, sponsor18, sponsor19, sponsor20
  ];

  const visiblePartners = partners;

  return (
    <section className="partners-section" ref={ref}>

      {/* 🌊 LOTTIE BACKGROUND */}
   

      <motion.div
        className="partners-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {/* Header */}
        <div className="partners-header">
          <h2 className="partners-title">
            Our Global <span className="partners-highlight">Partners</span>
          </h2>
          <p className="partners-subtitle">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* TOP CAROUSEL - Left to Right */}
        <div className="partners-carousel-wrapper">
          <div className="partners-carousel partners-carousel-ltr">
            <div className="partners-carousel-track">
              {visiblePartners.map((logo, index) => (
                <div key={`top-${index}`} className="partners-carousel-item">
                  <div className="partners-card-inner">
                    <img src={logo} alt={`Sponsor ${index + 1}`} className="partners-logo" />
                  </div>
                </div>
              ))}
              {visiblePartners.map((logo, index) => (
                <div key={`top-duplicate-${index}`} className="partners-carousel-item">
                  <div className="partners-card-inner">
                    <img src={logo} alt={`Sponsor ${index + 1}`} className="partners-logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CAROUSEL - Right to Left */}
        <div className="partners-carousel-wrapper">
          <div className="partners-carousel partners-carousel-rtl">
            <div className="partners-carousel-track">
              {visiblePartners.map((logo, index) => (
                <div key={`bottom-${index}`} className="partners-carousel-item">
                  <div className="partners-card-inner">
                    <img src={logo} alt={`Sponsor ${index + 1}`} className="partners-logo" />
                  </div>
                </div>
              ))}
              {visiblePartners.map((logo, index) => (
                <div key={`bottom-duplicate-${index}`} className="partners-carousel-item">
                  <div className="partners-card-inner">
                    <img src={logo} alt={`Sponsor ${index + 1}`} className="partners-logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="partners-view-all">
          <button onClick={() => navigate("/sponsors")}>
            View All Sponsors →
          </button>
        </div>

      </motion.div>
    </section>
  );
};

export default Partners;