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
      title: "Learn from Industry Leaders ",
      description: "Gain insights from top HSE professionals, government authorities, and safety innovators shaping the future of workplace safety in the UAE and worldwide."
    },
    {
      title: "Cutting-Edge Best Practices",
      description: "Discover practical strategies, tools, and technologies to enhance safety, sustainability, and operational excellence in your organization."
    },
    {
      title: "Global Networking Opportunities",
      description: "Connect with peers, regulators, and HSE experts from across the Middle East, Europe, and beyond to share experiences and solutions."
    }
  ];

  const bottomRightPoints = [
    {
      title: "Regulatory Updates & Compliance",
      description: "Stay informed on the latest UAE safety regulations, international standards, and industry trends to ensure compliance and proactive risk management."
    },
    {
      title: "Explore Innovative Products & Solutions",
      description: "Visit sponsor booths to see the latest HSE technologies, equipment, and services that can transform safety and operational efficiency in your workplace."
    },
    {
      title: "Career Growth & Professional Development",
      description: "Strengthen your skills, earn recognition in the field, and explore new opportunities."
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
            Why <span className={styles.mainTitleHighlight}>Attend</span>
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