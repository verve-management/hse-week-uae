import React, { useEffect, useRef, useState } from 'react';
import styles from './TopicHighlight.module.css';
import {
  FaBrain,
  FaHardHat,
  FaSun,
  FaFire,
  FaLeaf,
  FaBuilding,
  FaExclamationTriangle,
  FaHeartbeat,
} from 'react-icons/fa';

const TopicHighlight = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const topics = [
    {
      title: 'AI-Driven Safety Innovations',
      description:
        'Leveraging AI, IoT, and predictive analytics to prevent incidents and enhance workplace safety across UAE industries.',
      icon: <FaBrain />,
    },
    {
      title: 'UAE HSE Leadership & Compliance',
      description:
        'Navigating local safety regulations, labor laws, and fostering proactive safety culture across sectors.',
      icon: <FaHardHat />,
    },
    {
      title: 'Heat & Climate Stress Prevention',
      description:
        'Protecting workers from extreme temperatures, sun exposure, and UAE-specific environmental hazards.',
      icon: <FaSun />,
    },
    {
      title: 'Emergency & Fire Safety Management',
      description:
        'Best practices in fire prevention, detection, and response tailored for UAE industrial and commercial sites.',
      icon: <FaFire />,
    },
    {
      title: 'Sustainable & Environmentally Responsible Operations',
      description:
        'Implementing ESG initiatives, carbon reduction strategies, and environmental standards aligned with UAE Net Zero goals.',
      icon: <FaLeaf />,
    },
    {
      title: 'Mega Project Safety Excellence',
      description:
        'Risk management and safety planning for large-scale infrastructure, construction, and industrial projects.',
      icon: <FaBuilding />,
    },
    {
      title: 'Mental Health & Behavioral Safety',
      description:
        'Promoting workforce wellbeing, resilience, and a culture of behavioral safety in high-pressure work environments.',
      icon: <FaHeartbeat />,
    },
    {
      title: 'Workplace Risk Management',
      description:
        'Identifying, assessing, and mitigating operational risks to ensure safer, more productive workplaces.',
      icon: <FaExclamationTriangle />,
    },
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
    <section
      ref={sectionRef}
      className={`${styles.topicHighlight} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.decorativeLine}></div>
          <h2 className={styles.sectionTitle}>
            Topic <span>Highlights</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Explore the cutting-edge topics that will shape the future of HSE and procurement
            excellence across the UAE and the wider region.
          </p>
        </div>

        {/* Topics Grid */}
        <div className={styles.topicsGrid}>
          {topics.map((topic, index) => (
            <div key={index} className={styles.topicCard}>
              <div className={styles.iconWrapper}>{topic.icon}</div>
              <h3 className={styles.topicTitle}>{topic.title}</h3>
              <p className={styles.topicDescription}>{topic.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopicHighlight;