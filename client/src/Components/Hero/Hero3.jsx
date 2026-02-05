import React, { useState, useEffect } from 'react';
import styles from './Hero3.module.css';

const Hero3 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-08T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Side - Text Content */}
        <div className={styles.leftContent}>
          <h1 className={styles.mainHeading}>HSE WEEK UAE</h1>
          <p className={styles.eventDate}>8–9 September 2026</p>
          <p className={styles.eventLocation}>Abu Dhabi, UAE</p>

          {/* Countdown Timer */}
          <div className={styles.countdownTimer}>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{String(timeLeft.days).padStart(2, '0')}</div>
              <div className={styles.timeLabel}>DAYS</div>
            </div>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className={styles.timeLabel}>HOURS</div>
            </div>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className={styles.timeLabel}>MINS</div>
            </div>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className={styles.timeLabel}>SECS</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>REGISTER NOW</button>
            <button className={styles.secondaryBtn}>BOOK A BOOTH</button>
          </div>
        </div>

        {/* Right Side - Curved Video */}
        <div className={styles.rightContent}>
          <div className={styles.videoWrapper}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className={styles.video}
            >
              <source src="/background.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;