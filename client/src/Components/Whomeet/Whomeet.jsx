import React from "react";
import styles from "./WhoMeet.module.css";

const professionals = [
  {
    role: "Chief Procurement Officers",
    image: "/Gallery/Gallery1.webp"
  },
  {
    role: "Heads Of Supply Chain & Logistics",
    image: "/Gallery/Gallery2.webp"
  },
  {
    role: "Chief Logistics Officer",
    image: "/Gallery/Gallery3.webp"
  },
  {
    role: "Head of Strategic Sourcing",
    image: "/Gallery/Gallery4.webp"
  },
  {
    role: "Head of Warehouse",
    image: "/Gallery/Gallery5.webp"
  },
  {
    role: "Chief Financial Officer",
    image: "/Gallery/Gallery6.webp"
  },
  {
    role: "Chief Information Officer",
    image: "/Gallery/Gallery7.webp"
  },
  {
    role: "Head of Inventory System",
    image: "/Gallery/Gallery8.webp"
  }
];

const WhoMeet = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Luxury Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.headerLine}></div>
          <h2 className={styles.mainHeading}>
            WHO WILL <span className={styles.highlightText}>YOU MEET</span>
          </h2>
          <p className={styles.subHeading}>
            Connect with industry-leading executives shaping the future of procurement and supply chain excellence
          </p>
        </div>

        {/* Premium Grid with Images */}
        <div className={styles.professionalsGrid}>
          {professionals.map((professional, index) => (
            <div key={index} className={styles.professionalCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={professional.image} 
                  alt={professional.role}
                  className={styles.professionalImage}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.numberTag}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className={styles.roleTitle}>{professional.role}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoMeet;