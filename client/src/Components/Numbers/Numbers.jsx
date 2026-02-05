import React, { useEffect, useRef, useState } from "react";
import styles from "./Numbers.module.css";

const stats = [
  { value: 500, label: "Delegates", image: "Gallery/Gallery1.webp" },
  { value: 95, label: "Attendance", image: "Gallery/Gallery2.webp" },
  { value:96, label: "Satisfaction", image: "Gallery/Gallery8.webp" },
  { value:30, label: "Speakers", image: "Gallery/Gallery6.webp" },
];

const Numbers = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.numbersSection} ref={sectionRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>THE POWERHOUSE <span>BEHIND</span></h2>
        <p className={styles.hashtag}>#asiaprocuretech</p>
      </div>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <Counter
            key={index}
            value={item.value}
            label={item.label}
            image={item.image}
            start={startCount}
          />
        ))}
      </div>
    </section>
  );
};

const Counter = ({ value, label, image, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 4000;
    const increment = Math.ceil(value / (duration / 16));

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(startValue);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, value]);

  return (
    <div className={styles.statBox}>
      <div className={styles.imageWrapper}>
        <img src={`/${image}`} alt={label} className={styles.image} />
      </div>
      <div className={styles.infoBox}>
        <h3 className={styles.number}>
          {count}
          <span className={styles.plus}>+</span>
        </h3>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default Numbers;