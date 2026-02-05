"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Event.module.css";

const Event = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        {/* LEFT SIDE TEXT */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            EVENT <span>OVERVIEW</span>
          </h2>

          <p className={styles.text}>
            Following the tremendous success of the 2025 edition, HSE WEEK UAE
            2026 returns—this time in the capital, Abu Dhabi, on 8–9 September
            2026. The event stands as the region’s most influential gathering
            dedicated to advancing Health, Safety, Environment, and
            Sustainability (HSE) practices across industries, including Oil &
            Gas, Manufacturing, Construction, Chemical, and Industrial Sectors.
          </p>

          <p className={styles.text}>
            This high-impact two-day conference will bring together government
            authorities, HSE directors, industry leaders, safety practitioners,
            and sustainability experts to explore the latest advancements in
            workplace safety, environmental responsibility, and organizational
            resilience. The 2026 edition will highlight how technology,
            leadership, and innovation are transforming safety management for a
            sustainable and high-performing industrial future.
          </p>
        </div>

        {/* RIGHT SIDE MEDIA GRID */}
        <div className={styles.right}>
          <div className={styles.logoBox}>
            <img src="/Other/Logo.webp" alt="Event Logo" />
          </div>

          <div className={styles.gridImages}>
            <img
              src="/Gallery/Gallery1.webp"
              alt="Gallery Image 1"
              className={styles.smallImage}
            />
            <img
              src="/Gallery/Gallery2.webp"
              alt="Gallery Image 2"
              className={styles.smallImage}
            />
            <img
              src="/Gallery/Gallery1.webp"
              alt="Gallery Image 3"
              className={styles.smallImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
