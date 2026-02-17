import React, { useEffect, useRef, useState } from "react";
import styles from "./WhoMeet.module.css";

const roles = [
  "Chief Procurement Officers",
  "Heads Of Supply Chain & Logistics",
  "Chief Logistics Officer",
  "Head of Strategic Sourcing",
  "Head of Warehouse",
  "Chief Financial Officer",
  "Chief Information Officer",
  "Head of Inventory System"
];

const WhoMeet = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.mainHeading}>Who Will <span>You Meet</span></h2>
          <p className={styles.subHeading}>Meet the key professionals who shape the industry</p>
        </div>

        {/* List Container with Corner Borders */}
        <div className={styles.listContainer}>
          {/* Top-left corner border */}
          <div className={styles.cornerBorder} data-corner="top-left"></div>
          
          {/* Bottom-right corner border */}
          <div className={styles.cornerBorder} data-corner="bottom-right"></div>

          {/* Roles List */}
          <ul className={styles.rolesList}>
            {roles.map((role, index) => (
              <li key={index} className={styles.roleItem}>
                <span className={styles.roleNumber}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.roleText}>{role}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoMeet;