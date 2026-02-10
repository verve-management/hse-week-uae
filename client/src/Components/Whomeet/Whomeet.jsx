import React from "react";
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
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header with Semi-Circular Arc Background */}
        <div className={styles.headerWrapper}>
          <div className={styles.arcBackground}></div>
          <div className={styles.headerContent}>
            <h2 className={styles.mainHeading}>Who Will You Meet</h2>
            <p className={styles.subHeading}>Meet the key professionals who shape the industry</p>
          </div>
        </div>

        {/* Boxes Grid */}
        <div className={styles.boxesGrid}>
          {roles.map((role, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.numberBubble}>{String(index + 1).padStart(2, '0')}</div>
              <h3 className={styles.boxTitle}>{role}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoMeet;