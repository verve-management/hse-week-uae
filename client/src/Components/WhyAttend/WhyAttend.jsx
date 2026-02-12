import React, { useEffect, useRef, useState } from "react";
import styles from "./WhyAttend.module.css";

const WhyAttend = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const items = [
    {
      number: "01",
      title: "AI & Digital Safety Innovations",
      description:
        "Discover cutting-edge technologies including AI-driven risk management, predictive analytics, and real-time hazard detection systems."
    },
    {
      number: "02",
      title: "UAE HSE Regulations & Compliance",
      description:
        "Stay updated on the latest UAE safety laws, Net Zero 2050 guidelines, and sustainability-focused construction and industrial standards."
    },
    {
      number: "03",
      title: "Heat Stress Prevention",
      description:
        "Learn effective strategies for managing heat risks and protecting workers in extreme UAE climate conditions."
    },
    {
      number: "04",
      title: "Emergency & Fire Safety",
      description:
        "Strengthen your approach to incident response, fire prevention, and hazardous materials management."
    },
    {
      number: "05",
      title: "Industry Leadership Networking",
      description:
        "Connect with policymakers, HSE directors, and safety experts to shape future strategies."
    },
    {
      number: "06",
      title: "Mega Project Safety",
      description:
        "Explore innovative safety solutions for Etihad Rail, ADNOC expansions, and emerging smart city developments."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
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
      {/* MAIN HEADING */}
      <h1 className={styles.mainTitle}>WHY <span>ATTEND</span></h1>
      
      {/* SUB TITLE */}
      <p className={styles.subTitle}>
        Empower Procurement &amp; Supply Chain Excellence
      </p>

      {/* 2-COLUMN GRID */}
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.numberWrapper}>
              <span className={styles.number}>{item.number}</span>
            </div>
            <div className={styles.contentWrapper}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAttend;