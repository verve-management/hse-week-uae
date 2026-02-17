import React, { useEffect, useRef, useState } from 'react';
import styles from './TopicHighlight.module.css';
import { FaBrain, FaShieldAlt, FaTemperatureHigh, FaFire, FaLeaf, FaBuilding, FaChartLine, FaSeedling, FaUsers } from 'react-icons/fa';

const TopicHighlight = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const topics = [
    { title: 'AI-Driven Safety Innovations', icon: <FaBrain /> },
    { title: 'UAE HSE Compliance', icon: <FaShieldAlt /> },
    { title: 'Heat Stress Prevention', icon: <FaTemperatureHigh /> },
    { title: 'Emergency & Fire Safety', icon: <FaFire /> },
    { title: 'Sustainable Industrial Operations', icon: <FaLeaf /> },
    { title: 'Mega Project Safety', icon: <FaBuilding /> },
    { title: 'Workplace Risk Management', icon: <FaChartLine /> },
    { title: 'Environmental Protection Standards', icon: <FaSeedling /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.topicHighlight} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          {/* <div className={styles.decorativeLine}></div> */}
          <h2 className={styles.sectionTitle}>Topic <span>Highlights</span></h2>
          <p className={styles.sectionSubtitle}>
            Explore the cutting-edge topics that will shape the future of HSE and procurement excellence
          </p>
        </div>

        {/* Topics Grid */}
        <div className={styles.topicsGrid}>
          {topics.map((topic, index) => (
            <div key={index} className={styles.topicCard}>
              <div className={styles.iconWrapper}>
                {topic.icon}
              </div>
              <h3 className={styles.topicTitle}>{topic.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicHighlight;