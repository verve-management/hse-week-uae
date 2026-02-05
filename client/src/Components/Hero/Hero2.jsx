import React from 'react';
import styles from './Hero2.module.css';

const Hero2 = () => {
  return (
    <section className={styles.hero}>
      {/* Background Video for Mobile/Tablet */}
      <div className={styles.backgroundVideo}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            <span className={styles.badgeText}>5th Edition Asia</span>
          </div>
          
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              <span className={styles.title}>
                Procuretech & Supply Chain<br />
                <span className={styles.titleItalic}>Innovation Summit & Awards 2026</span>
              </span>
            </h1>
            
            <div className={styles.divider}></div>
            
            <p className={styles.subtitle}>
              Embracing the Digital Future of Procurement & Supply Chain
            </p>
            
            <div className={styles.eventDetails}>
              <div className={styles.detailItem}>
                <svg className={styles.detailIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className={styles.detailText}>April 21–22, 2026</span>
              </div>
              <div className={styles.detailItem}>
                <svg className={styles.detailIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className={styles.detailText}>Singapore</span>
              </div>
            </div>
            
            <div className={styles.buttonGroup}>
              <button className={styles.primaryBtn}>
                <span>Register Now</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.secondaryBtn}>View Schedule</button>
            </div>
          </div>
        </div>

        {/* Right Video Section - Desktop Only */}
        <div className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/background.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;