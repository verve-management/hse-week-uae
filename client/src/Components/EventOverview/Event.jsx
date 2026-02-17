"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Event.module.css";

const Event = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const contentRef = useRef(null);
  const imageGridRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [imageGridVisible, setImageGridVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  // Intersection Observer for smooth fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for content animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for image grid animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageGridVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imageGridRef.current) {
      observer.observe(imageGridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for stats counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsVisible]);

  // Synchronized counting animation
  useEffect(() => {
    if (!statsVisible) return;

    const targets = [500, 95, 96, 30];
    const duration = 2000; // 2 seconds for all animations
    const steps = 60; // Number of updates
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Easing function for smooth animation
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCounts(targets.map(target => Math.floor(target * easedProgress)));

      if (currentStep >= steps) {
        setCounts(targets); // Ensure final values are exact
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [statsVisible]);

  const stats = [
    { number: 500, label: "Delegates", suffix: "+" },
    { number: 95, label: "Attendance", suffix: "+" },
    { number: 96, label: "Satisfaction", suffix: "%" },
    { number: 30, label: "Speakers", suffix: "+" }
  ];

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        {/* LEFT SIDE - CONTENT WITHOUT BOX */}
        <div 
          ref={contentRef}
          className={`${styles.contentArea} ${contentVisible ? styles.contentVisible : ""}`}
        >
          <div className={styles.content}>
            <h2 className={styles.heading}>
              EVENT <span className={styles.highlight}>OVERVIEW</span>
            </h2>
            <p className={styles.paragraph}>
              Following the tremendous success of the 2025 edition, HSE WEEK UAE
              2026 returns—this time in the capital, Abu Dhabi, on 8–9 September
              2026. The event stands as the region's most influential gathering
              dedicated to advancing Health, Safety, Environment, and
              Sustainability (HSE) practices across industries, including Oil &
              Gas, Manufacturing, Construction, Chemical, and Industrial Sectors.
            </p>
            <p className={styles.paragraph}>
              This high-impact two-day conference will bring together government
              authorities, HSE directors, industry leaders, safety practitioners,
              and sustainability experts to explore the latest advancements in
              workplace safety, environmental responsibility, and organizational
              resilience. The 2026 edition will highlight how technology,
              leadership, and innovation are transforming safety management for a
              sustainable and high-performing industrial future.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - 4 IMAGE GRID (2x2) WITH CENTER LOGO */}
        <div 
          ref={imageGridRef}
          className={`${styles.imageGridWrapper} ${imageGridVisible ? styles.imageGridVisible : ""}`}
        >
          <div className={styles.imageGrid}>
            <div className={styles.imageBox}>
              <img
                src="/KsaGallery/Gallery22.webp"
                alt="Event Gallery 1"
                className={styles.gridImage}
              />
            </div>
            <div className={styles.imageBox}>
              <img
                src="/KsaGallery/Gallery13.webp"
                alt="Event Gallery 2"
                className={styles.gridImage}
              />
            </div>
            <div className={styles.imageBox}>
              <img
                src="/KsaGallery/Gallery29.webp"
                alt="Event Gallery 3"
                className={styles.gridImage}
              />
            </div>
            <div className={styles.imageBox}>
              <img
                src="/KsaGallery/Gallery28.webp"
                alt="Event Gallery 4"
                className={styles.gridImage}
              />
            </div>
          </div>

          {/* Logo positioned at exact center where 4 images meet */}
          <div className={styles.centerLogo}>
            <img
              src="/Other/Logo.webp"
              alt="Event Logo"
              className={styles.logoImage}
            />
          </div>
        </div>
      </div>

      {/* STATISTICS ROW - 4 BOXES */}
      <div className={styles.statsContainer} ref={statsRef}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={styles.statBox}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.statNumber}>
                {counts[index]}{stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;