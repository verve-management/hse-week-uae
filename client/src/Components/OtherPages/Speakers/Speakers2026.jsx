import React, { useState, useEffect, useRef } from 'react';
import styles from './Speakers2026.module.css';

const Speakers2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const speakers = [
    {
      id: 47,
      name: 'Teddy Setiawan',
      designation: 'Chief Supply Chain & Operations Officer',
      company: 'Motul Asia Pacific',
      image: '/Speakers/Speaker52.jpeg',
      linkedin: 'https://www.linkedin.com/in/teddy-setiawan/'
    },
    {
      id: 48,
      name: 'Rick Ackermann',
      designation: 'Head of Procurement',
      company: 'BWLPG',
      image: '/Speakers/Speaker53.jpeg',
      linkedin: 'https://www.linkedin.com/in/rickackermann/'
    },
    {
      id: 49,
      name: 'Rai De Jesus',
      designation: 'Chief Procurement Officer',
      company: 'ePLDT',
      image: '/Speakers/Speaker54.jpeg',
      linkedin: 'https://www.linkedin.com/in/raidejesus/'
    },
    {
      id: 50,
      name: 'Shoureen Shah',
      designation: 'Supply Chain Strategy & Productive Leader',
      company: 'Kimberly Clark',
      image: '/Speakers/Speaker55.jpeg',
      linkedin: 'https://www.linkedin.com/in/shoureen-shah-6695317/'
    },
        {
      id: 51,
      name: 'Kartik Iyer',
      designation: 'Vice President, Head of Sourcing, Procurement & Supply Strategy',
      company: 'TotalEnergies',
      image: '/Speakers/Speaker66.jpeg',
      linkedin: 'https://www.linkedin.com/in/kartik-iyer-8b7ba518/'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLinkedInClick = (linkedin) => {
    window.open(linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.speakersSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}>
          2026 <span>Speakers</span>
        </h2>
        <div className={styles.speakersGrid}>
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id} 
              className={`${styles.speakerCard} ${isVisible ? styles.cardVisible : ''}`}
              style={{ 
                animationDelay: `${0.8 + index * 0.4}s` 
              }}
            >
              <div className={styles.speakerImageWrapper}>
                <div className={styles.speakerImageContainer}>
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className={styles.speakerImage}
                  />
                  <div className={styles.speakerImageOverlay}></div>
                </div>
                
                <button 
                  className={styles.linkedinButton}
                  onClick={() => handleLinkedInClick(speaker.linkedin)}
                  aria-label={`Connect with ${speaker.name} on LinkedIn`}
                >
                  <svg className={styles.linkedinIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>

              <div className={styles.speakerInfo}>
                <h3 className={styles.speakerName}>{speaker.name}</h3>
                <p className={styles.speakerDesignation}>{speaker.designation}</p>
                <p className={styles.speakerCompany}>{speaker.company}</p>
              </div>

              <div className={styles.cardDecoration}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers2026;