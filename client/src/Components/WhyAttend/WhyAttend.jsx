import React, { useEffect, useRef, useState } from "react";
import styles from "./WhyAttend.module.css";

const WhyAttend = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const gridItems = [
    {
      type: "image",
      image: "/Gallery/Gallery3.webp"
    },
    {
      type: "content",
      points: [
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
        }
      ],
      bgClass: styles.bgWhite
    },
    {
      type: "image",
      image: "/Gallery/Gallery19.webp"
    },
    {
      type: "content",
      points: [
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
        }
      ],
      bgClass: styles.bgOrange
    },
    {
      type: "image",
      image: "/Gallery/Gallery15.webp"
    },
    {
      type: "content",
      points: [
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
      ],
      bgClass: styles.bgOrange
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

      {/* 2×3 GRID */}
      <div className={styles.grid}>
        {gridItems.map((item, index) => (
          <div key={index} className={styles.gridItem}>
            {item.type === "image" ? (
              <div className={styles.imageHalf}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt="" className={styles.image} />
                </div>
              </div>
            ) : (
              <div className={`${styles.contentHalf} ${item.bgClass}`}>
                <div className={styles.content}>
                  {item.points.map((point, pointIndex) => (
                    <div key={pointIndex} className={styles.pointWrapper}>
                      <div className={styles.pointHeader}>
                        <span className={styles.pointNumber}>{point.number}</span>
                        <h3 className={styles.pointTitle}>{point.title}</h3>
                      </div>
                      <p className={styles.description}>{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAttend;