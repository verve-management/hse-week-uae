import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

const TimeSeparator = () => {
  return (
    <div className={styles.separator}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  );
};


const FlipDigit = ({ digit }) => {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);
  const [nextDigit, setNextDigit] = useState(digit);

  useEffect(() => {
    if (digit !== currentDigit) {
      setNextDigit(digit);
      setIsFlipping(true);
      
      const timer = setTimeout(() => {
        setCurrentDigit(digit);
        setIsFlipping(false);
      }, 210);
      
      return () => clearTimeout(timer);
    }
  }, [digit, currentDigit]);
  

  return (
    <div className={styles.flipCard}>
      {/* Metallic center hinge bar */}
      <div className={styles.hingeBar}>
        {/* <div className={styles.leftPin}></div> */}
        {/* <div className={styles.rightPin}></div> */}
      </div>

      {/* Card container with 3D perspective */}
      <div className={styles.cardContainer}>
        {/* Static top half showing current digit */}
        <div className={styles.cardTop}>
          <div className={styles.cardTopInner}>
            <span className={styles.digitText}>{currentDigit}</span>
          </div>
        </div>

        {/* Static bottom half showing current digit */}
        <div className={styles.cardBottom}>
          <div className={styles.cardBottomInner}>
            <span className={styles.digitText}>{currentDigit}</span>
          </div>
        </div>

        {/* Animated flipping top half */}
        {isFlipping && (
          <div className={`${styles.cardFlip} ${styles.flipping}`}>
            <div className={styles.cardFlipInner}>
              <span className={styles.digitText}>{currentDigit}</span>
            </div>
          </div>
        )}

        {/* Animated revealing bottom half */}
        {isFlipping && (
          <div className={`${styles.cardReveal} ${styles.revealing}`}>
            <div className={styles.cardRevealInner}>
              <span className={styles.digitText}>{nextDigit}</span>
            </div>
          </div>
        )}
      </div>

      {/* Horizontal divider line */}
      <div className={styles.dividerLine}></div>
    </div>
  );
};

const FlipUnit = ({ value, label }) => {
  const isDays = label === "DAYS";

  const formattedValue = isDays
    ? value.toString().padStart(3, "0") // 👈 allow 3 digits for days
    : value.toString().padStart(2, "0");

  const digits = formattedValue.split("").map(Number);

  return (
    <div className={styles.unitContainer}>
      <div className={styles.digitsContainer}>
        {digits.map((digit, index) => (
          <FlipDigit key={index} digit={digit} />
        ))}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};


const Clock = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.clockContainer}>
      <div className={styles.clockFrame}>
        <div className={styles.clockInner}>
        <div className={styles.unitsWrapper}>
  <FlipUnit value={timeLeft.days} label="DAYS" />
  <TimeSeparator />

  <FlipUnit value={timeLeft.hours} label="HOURS" />
  <TimeSeparator />

  <FlipUnit value={timeLeft.minutes} label="MINUTES" />
  <TimeSeparator />

  <FlipUnit value={timeLeft.seconds} label="SECONDS" />
</div>

        </div>
      </div>
    </div>
  );
};

export default Clock;