import React from "react";
import styles from "./TopicHighlight.module.css";

const topics = [
  "Digital Transformation in Procurement",
  "Technology & Innovation",
  "Strategic Sourcing & Supplier Collaboration",
  "Operational Excellence",
  "Case Studies & Real-World Insightss",
  "Leadership & Talent Development",
  "Data Analytics for Supplier Relationship Management",
  "Sustainable Procurement Technologies",
];

const TopicHighlight = () => {
  const mid = Math.ceil(topics.length / 2);

  const leftColumn = topics.slice(0, mid);
  const rightColumn = topics.slice(mid);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Topic <span>Highlights</span></h2>

        <div className={styles.columns}>
          {/* LEFT COLUMN */}
          <div className={styles.column}>
            {leftColumn.map((topic, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  index % 2 === 0 ? styles.white : styles.orange
                }`}
              >
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.text}>{topic}</span>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.column}>
            {rightColumn.map((topic, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  index % 2 === 0 ? styles.orange : styles.white
                }`}
              >
                <span className={styles.number}>
                  {String(index + mid + 1).padStart(2, "0")}
                </span>
                <span className={styles.text}>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicHighlight;
