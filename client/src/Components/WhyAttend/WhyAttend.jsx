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
          title: "Gain Strategic Insights",
          description:
            "Learn from global leaders, expert panels, and real-world case studies shaping the future of digital procurement and supply chains."
        },
        {
          number: "02",
          title: "Discover Innovative Solutions",
          description:
            "Explore advanced digital procurement tools that boost efficiency, transparency, and strategic value."
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
          title: "Network with Leaders",
          description:
            "Connect with CPOs, senior executives, and solution providers across public and private sectors."
        },
        {
          number: "04",
          title: "Benchmark and Learn",
          description:
            "Hear real-world case studies from organizations leading digital procurement transformation."
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
          title: "Join the Procuretech & Supply Chain Asia Award",
          description:
            "Join the Procuretech Asia Awards and be inspired by innovators and organizations recognized for excellence in sustainability, technology, and performance."
        },
        {
          number: "06",
          title: "Future-Proof Your Strategy",
          description:
            "Gain actionable insights and future-ready strategies to lead in a rapidly evolving procurement landscape."
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