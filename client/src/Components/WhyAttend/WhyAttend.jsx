import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./WhyAttend.module.css";

const WhyAttend = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [animateImages, setAnimateImages] = useState(false);

  const topLeftPoints = [
    {
      title: "AI & Digital Safety Innovations",
      description: "Discover cutting-edge technologies including AI-driven risk management and predictive analytics."
    },
    {
      title: "UAE HSE Regulations",
      description: "Stay updated on the latest UAE safety laws and Net Zero 2050 sustainability guidelines."
    },
    {
      title: "Heat Stress Prevention",
      description: "Learn effective strategies for managing heat risks in extreme UAE climate conditions."
    }
  ];

  const bottomRightPoints = [
    {
      title: "Emergency & Fire Safety",
      description: "Strengthen incident response and fire prevention management capabilities for industrial safety excellence."
    },
    {
      title: "Industry Leadership Networking",
      description: "Connect with policymakers, HSE directors, and leading safety experts globally from across industries."
    },
    {
      title: "Mega Project Safety",
      description: "Explore innovative and sustainable solutions for Etihad Rail and ADNOC infrastructure expansions."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger the animations for premium effect
          setTimeout(() => setAnimateCards(true), 200);
          setTimeout(() => setAnimateImages(true), 400);
        }
      },
      { threshold: 0.1 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        
        {/* HEADER */}
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>
            WHY <span className={styles.mainTitleHighlight}>ATTEND</span>
          </h1>
          <p className={styles.subTitle}>
            Empower Your Safety & Excellence Journey
          </p>
        </div>

        {/* PREMIUM GRID LAYOUT */}
        <div className={styles.gridLayout}>
          
          {/* TOP LEFT - 3 POINTS */}
          <div className={`${styles.topLeftPoints} ${animateCards ? styles.cardsVisible : ""}`}>
            {topLeftPoints.map((point, index) => (
              <div key={index} className={styles.pointCard}>
                <div className={styles.iconBadge}>
                  <FaCheck />
                </div>
                <div className={styles.pointContent}>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointDescription}>{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TOP RIGHT - IMAGE */}
          <div className={`${styles.imageTopRight} ${animateImages ? styles.imageVisible : ""}`}>
            <img 
              src="/KsaGallery/Gallery14.webp" 
              alt="Premium showcase"
              className={styles.image}
            />
          </div>

          {/* BOTTOM LEFT - IMAGE */}
          <div className={`${styles.imageBottomLeft} ${animateImages ? styles.imageVisible : ""}`}>
            <img 
              src="/KsaGallery/Gallery5.webp" 
              alt="Premium showcase"
              className={styles.image}
            />
          </div>

          {/* BOTTOM RIGHT - 3 POINTS */}
          <div className={`${styles.bottomRightPoints} ${animateCards ? styles.cardsVisible : ""}`}>
            {bottomRightPoints.map((point, index) => (
              <div key={index} className={styles.pointCard}>
                <div className={styles.iconBadge}>
                  <FaCheck />
                </div>
                <div className={styles.pointContent}>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointDescription}>{point.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyAttend;