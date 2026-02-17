import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Partners.css";

const Partners = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const partners = Array.from({ length: 20 }, (_, i) => `/MediaPartner/MediaPartner${i + 1}.webp`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`partners-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="partners-container">
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
      </div>
    </section>
  );
};

export default Partners;