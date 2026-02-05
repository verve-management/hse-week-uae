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
  "Head of Inventory System",
  "Procurement Strategy Leaders",
  "Supply Chain Strategy Leaders"
];

const WhoMeet = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT – CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Who Will <span>You Meet?</span>
          </h2>

          <p className={styles.subtitle}>
            Connect with senior decision-makers, innovators, and technology
            leaders shaping the future of procurement and supply chains across Asia.
          </p>

          <ul className={styles.roleList}>
            {roles.map((role, index) => (
              <li key={index} className={styles.roleItem}>
                {role}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – POLAROID SCATTER */}
        <div className={styles.polaroidArea}>
          <div className={`${styles.polaroid} ${styles.p1}`}>
            <img src="/Gallery2025/Gallery35Pic2025.webp" alt="Leadership Panel" />
            <span>Leadership Panel</span>
          </div>

          <div className={`${styles.polaroid} ${styles.p2}`}>
            <img src="/Gallery2025/Gallery42Pic2025.webp" alt="Networking" />
            <span>Executive Networking</span>
          </div>

          <div className={`${styles.polaroid} ${styles.p3}`}>
            <img src="/Gallery2025/Gallery5Pic2025.webp" alt="Roundtable" />
            <span>Roundtable</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoMeet;
