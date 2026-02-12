import React, { useEffect, useRef, useState } from 'react';
import styles from './Schedule.module.css';

const ScheduleWithoutImages = () => {
  const heroTextRef = useRef(null);
  const [activeDay, setActiveDay] = useState('day1');

  useEffect(() => {
    const text = heroTextRef.current;
    if (!text) return;

    const originalText = text.textContent;
    text.textContent = '';

    [...originalText].forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.className = styles.heroLetter;
      span.style.animationDelay = `${index * 0.05}s`;
      span.style.display = 'inline-block';
      text.appendChild(span);
    });
  }, []);

  const day1Schedule = [
    {
      time: '09:00 - 10:00',
      title: 'Registration & Welcome Coffee',
      type: 'Welcome'
    },
    {
      time: '10:00 - 10:05',
      title: 'Opening Note by Summit Chairperson',
      type: 'keynote'
    },
    {
      time: '10:05 – 10:25',
      title: 'Global Supply Chain Hubs: Catalysts for Resilience and Digital Trade',
      points: [
        'How strategic hubs are reshaping global competitiveness.',
        'Government-industry collaboration for smart logistics and trade facilitation.',
        'Implications for CPOs in regional sourcing and global expansion.'
      ]
    },
    {
      time: '10:25 – 10:45',
      title: 'AI-Powered Procurement - Unlocking Predictive Intelligence & Automation',
      points: [
        'Leveraging AI/ML for spend forecasting, supplier risk scoring, and autonomous sourcing.',
        'Real-time data exchange and intelligent supplier portals.',
        'Future-ready procurement operating models.'
      ]
    },
    {
      time: '10:45 - 11:30',
      title: 'Panel | Building Resilient Supply Networks in a Fragmented World',
      type: 'panel',
      points: [
        'Strategic supplier diversification vs. deep partnerships.',
        'Multi-tier visibility and proactive risk sensing.',
        'Scenario planning and dynamic forecasting for disruption readiness.'
      ]
    },
    {
      time: '11:30 – 11:50',
      title: 'Category Management 2.0 - Driving Enterprise Value Beyond Cost',
      points: [
        'Aligning procurement categories with business growth levers.',
        'Supplier innovation, ESG alignment, and total value creation.',
        'Advanced analytics for segmentation and strategic sourcing.'
      ]
    },
    {
      time: '11:50 – 12:20',
      title: 'Networking & Coffee Break',
      type: 'break'
    },
    {
      time: '12:20 – 12:40',
      title: 'Fireside Chat | Reskilling Procurement for the Age of Automation',
      type: 'fireside',
      points: [
        'Strategic workforce planning for digital fluency and innovation.',
        'Transitioning teams from tactical execution to strategic enablement.',
        'Talent development ecosystems and public-private partnerships.'
      ]
    },
    {
      time: '12:40 – 13:00',
      title: 'Securing the Digital Supply Chain - Cybersecurity, Blockchain & Resilience',
      points: [
        'Cyber threats in procurement ecosystems.',
        'Implementing supplier-wide security frameworks.',
        'Blockchain for traceability and trust.'
      ]
    },
    {
      time: '13:00 – 13:45',
      title: 'Panel | Unlocking Strategic Insights from Procurement Analytics',
      type: 'panel',
      points: [
        'Predictive spend intelligence and cost optimization.',
        'Supplier performance dashboards and compliance metrics.',
        'Market behavior forecasting for agile decision-making.'
      ]
    },
    {
      time: '13:45 – 14:05',
      title: 'Transparency as a Strategic Lever - Efficiency, Risk & Trust',
      points: [
        'Real-time visibility across the value chain.',
        'Technologies enabling transparency and control.',
        'Impact on risk mitigation and stakeholder confidence.'
      ]
    },
    {
      time: '14:05 – 15:05',
      title: 'Networking Luncheon',
      type: 'break'
    },
    {
      time: '15:05 – 15:15',
      title: 'Closing Remarks – Day One',
      type: 'keynote'
    },
    {
      time: '15:15 – 16:15',
      title: 'Procurement & Supply Chain Leadership Awards 2026',
      type: 'awards'
    }
  ];

  const day2Schedule = [
    {
      time: '09:00 - 10:00',
      title: 'Registration & Welcome Coffee',
      type: 'break'
    },
    {
      time: '10:00 - 10:05',
      title: 'Opening Note',
      type: 'keynote'
    },
    {
      time: '10:05 – 10:25',
      title: 'Cloud-Driven Procurement - Agility, Scalability & Innovation',
      points: [
        'Cloud vs. on-premise: strategic considerations for CPOs.',
        'Real-world examples of cloud-native procurement ecosystems.',
        'Data governance and security in cloud transformation.'
      ]
    },
    {
      time: '10:25 – 10:45',
      title: 'Global Risk Intelligence - Mitigation Strategies for Procurement Leaders',
      points: [
        'Navigating geopolitical, financial, and cyber risks.',
        'Building resilient supplier ecosystems.',
        'Role of procurement in enterprise risk governance.'
      ]
    },
    {
      time: '10:45 – 11:30',
      title: 'Panel | Co-Creation & Innovation Through Strategic Supplier Partnerships',
      type: 'panel',
      points: [
        'Procurement as a driver of innovation and growth.',
        'Collaborative product development and process redesign.',
        'Managing IP, cost-sharing, and speed-to-market.'
      ]
    },
    {
      time: '11:30 – 11:50',
      title: 'Technology-Enabled Collaboration - Internal & External Synergies',
      points: [
        'Digital tools for sourcing, tendering, and auctions.',
        'Cross-functional alignment with finance and operations.',
        'Supplier engagement for long-term value.'
      ]
    },
    {
      time: '11:50 – 12:20',
      title: 'Networking & Coffee Break',
      type: 'break'
    },
    {
      time: '12:20 – 12:50',
      title: 'Fireside Chat | Talent Transformation for Supply Chain Excellence',
      type: 'fireside',
      points: [
        'Building high-performing procurement teams.',
        'Leadership strategies for workforce innovation.',
        'Culture of continuous learning and agility.'
      ]
    },
    {
      time: '12:50 – 13:10',
      title: 'Strategic Supplier Management: Cost, Value & Relationships',
      points: [
        'Total Cost of Ownership (TCO) frameworks.',
        'Supplier evaluation beyond price.',
        'Negotiation strategies for long-term value.'
      ]
    },
    {
      time: '13:10 – 13:55',
      title: 'Panel | Lessons in Resilience – Navigating Global Disruptions',
      type: 'panel',
      points: [
        'Case studies on supply chain stress testing.',
        'Nearshoring, multi-sourcing, and network agility.',
        'Strategic playbooks for crisis response.'
      ]
    },
    {
      time: '13:55 – 14:15',
      title: 'Sustainability in Action- Innovations in Green Procurement',
      points: [
        'Circular supply chains and carbon reduction strategies.',
        'Supplier collaboration for ESG compliance.',
        'Technology for sustainable logistics and operations.'
      ]
    },
    {
      time: '14:15 – 14:25',
      title: 'Closing Remarks – End of Summit',
      type: 'keynote'
    },
    {
      time: '14:25 – 15:25',
      title: 'Leadership Networking Luncheon',
      type: 'break'
    }
  ];

  const renderScheduleItem = (item, index) => (
    <div 
      key={index} 
      className={styles.timelineItem}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className={styles.timeColumn}>
        <div className={styles.timeBox}>
          <span className={styles.timeText}>{item.time}</span>
        </div>
        <div className={styles.connector}></div>
      </div>
      
      <div className={styles.contentColumn}>
        <div className={styles.contentCard}>
          {item.type && (
            <span className={`${styles.typeBadge} ${styles[item.type]}`}>
              {item.type === 'panel' && 'PANEL DISCUSSION'}
              {item.type === 'fireside' && 'FIRESIDE CHAT'}
              {item.type === 'break' && 'BREAK'}
              {item.type === 'awards' && 'AWARDS CEREMONY'}
              {item.type === 'keynote' && 'KEYNOTE'}
              {item.type === 'Welcome' && 'WELCOME'}
            </span>
          )}
          
          <h3 className={styles.sessionTitle}>{item.title}</h3>
          
          {item.points && (
            <ul className={styles.sessionPoints}>
              {item.points.map((point, i) => (
                <li key={i} className={styles.sessionPoint}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.schedulePageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroDecoLine}></div>

          <h1 className={styles.heroMainTitle}>
            <span ref={heroTextRef}>Event Schedule</span>
          </h1>

          <p className={styles.heroMainSubtitle}>
            Two Days of Innovation, Insights & Networking
          </p>

          <div className={styles.heroDecoLine}></div>
        </div>
      </section>

      <section className={styles.scheduleContentSection}>
        <div className={styles.scheduleContainer}>
          
          <div className={styles.dayTabsWrapper}>
            <button 
              className={`${styles.dayTab} ${activeDay === 'day1' ? styles.active : ''}`}
              onClick={() => setActiveDay('day1')}
            >
              <div className={styles.tabIndicator}></div>
              <span className={styles.dayNumber}>DAY 01</span>
              <span className={styles.dayLabel}>First Day</span>
            </button>
            <button 
              className={`${styles.dayTab} ${activeDay === 'day2' ? styles.active : ''}`}
              onClick={() => setActiveDay('day2')}
            >
              <div className={styles.tabIndicator}></div>
              <span className={styles.dayNumber}>DAY 02</span>
              <span className={styles.dayLabel}>Second Day</span>
            </button>
          </div>

          <div className={styles.scheduleTimeline}>
            {activeDay === 'day1' && day1Schedule.map((item, index) => renderScheduleItem(item, index))}
            {activeDay === 'day2' && day2Schedule.map((item, index) => renderScheduleItem(item, index))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ScheduleWithoutImages;