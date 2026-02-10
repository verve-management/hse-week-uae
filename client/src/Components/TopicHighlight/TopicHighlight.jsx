import React from 'react';
import styles from './TopicHighlight.module.css';

const TopicHighlight = () => {
  const topics = [
   { title: 'AI-Driven Safety Innovations' },
  { title: 'UAE HSE Compliance' },
  { title: 'Heat Stress Prevention' },
  { title: 'Emergency & Fire Safety' },
  { title: 'Sustainable Industrial Operations' },
  { title: 'Mega Project Safety' },
  { title: 'Workplace Risk Management' },
  { title: 'Environmental Protection Standards' },
  { title: 'Leadership & Safety Culture' }
  ];

  return (
    <section className={styles.topicHighlight}>
      <div className={styles.container}>
        {/* Background Animated Shape */}
        <div className={styles.backgroundShape}></div>

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Topic <span>Highlights</span></h2>
          <p className={styles.sectionSubtitle}>
            Explore the cutting-edge topics that will shape the future of HSE and procurement excellence
          </p>
        </div>

        {/* Topics Grid */}
        <div className={styles.topicsGrid}>
          {topics.map((topic, index) => (
            <div key={index} className={styles.topicCard}>
              <h3 className={styles.topicTitle}>{topic.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicHighlight;