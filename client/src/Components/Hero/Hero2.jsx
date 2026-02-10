import React from 'react';
import styles from './Hero2.module.css';
import Clock from '../OtherPages/Elements/Clock';

const Hero2 = () => {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <div className={styles.videoBackground}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className={styles.video}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Heading */}
          <h1 className={styles.heading}>HSE Week UAE</h1>
          
          {/* Date */}
          <p className={styles.date}>8–9 September 2026</p>
          
          {/* Venue */}
          <p className={styles.venue}>Abu Dhabi, UAE</p>
          
          {/* Clock Icon */}
          <div className={styles.clockWrapper}>
            <Clock targetDate="2026-09-08T09:00:00" />
          </div>
          
          {/* Buttons */}
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>
              Register Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.secondaryBtn}>Book a Booth</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;