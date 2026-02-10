import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Partners.css";

const Partners = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const partners = Array.from({ length: 20 }, (_, i) => `/MediaPartner/MediaPartner${i + 1}.webp`);

  return (
    <section className="partners-section" ref={ref}>
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

        {/* Film Reel Strip */}
        <div className="film-reel-container">
          <div className="film-strip">
            <div className="film-perforations film-perforations-top"></div>
            <div className="film-frames">
              {[...partners, ...partners, ...partners].map((logo, index) => (
                <div key={`frame-${index}`} className="film-frame">
                  <img src={logo} alt={`Partner ${(index % partners.length) + 1}`} className="film-frame-image" />
                </div>
              ))}
            </div>
            <div className="film-perforations film-perforations-bottom"></div>
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