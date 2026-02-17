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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setContentVisible(true); },
      { threshold: 0.3 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setImageGridVisible(true); },
      { threshold: 0.3 }
    );
    if (imageGridRef.current) observer.observe(imageGridRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !statsVisible) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsVisible]);

  useEffect(() => {
    if (!statsVisible) return;
    const targets = [500, 95, 96, 30];
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      setCounts(targets.map((target) => Math.floor(target * easedProgress)));
      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [statsVisible]);

  const stats = [
    { number: 500, label: "Delegates", suffix: "+" },
    { number: 95,  label: "Attendance", suffix: "+" },
    { number: 96,  label: "Satisfaction", suffix: "%" },
    { number: 30,  label: "Speakers", suffix: "+" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.container}>

        {/* ── LEFT: Content ── */}
        <div
          ref={contentRef}
          className={`${styles.contentArea} ${contentVisible ? styles.contentVisible : ""}`}
        >
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
          <p className={styles.paragraph}>
            Attendees will gain access to cutting-edge case studies, live
            technology demonstrations, and interactive workshops led by
            internationally recognised HSE professionals. Whether you are a
            seasoned safety director or an emerging practitioner, HSE WEEK UAE
            2026 offers an unparalleled platform to benchmark your organisation
            against global best practices and build lasting professional
            connections across the region's most dynamic industries.
          </p>
        </div>

        {/* ── RIGHT: Image Grid ── */}
        <div
          ref={imageGridRef}
          className={`${styles.imageGridWrapper} ${imageGridVisible ? styles.imageGridVisible : ""}`}
        >
          <div className={styles.imageGrid}>
            <div className={styles.imageBox}>
              <img src="/KsaGallery/Gallery33.webp" alt="Event Gallery 1" className={styles.gridImage} />
            </div>
            <div className={styles.imageBox}>
              <img src="/KsaGallery/Gallery23.webp" alt="Event Gallery 2" className={styles.gridImage} />
            </div>
            <div className={styles.imageBox}>
              <img src="/KsaGallery/Gallery29.webp" alt="Event Gallery 3" className={styles.gridImage} />
            </div>
            <div className={styles.imageBox}>
              <img src="/KsaGallery/Gallery28.webp" alt="Event Gallery 4" className={styles.gridImage} />
            </div>
          </div>

          <div className={styles.centerLogo}>
            <img src="/Other/Logo.webp" alt="Event Logo" className={styles.logoImage} />
          </div>
        </div>

      </div>

      {/* ── Stats Row ── */}
      <div className={styles.statsContainer} ref={statsRef}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={styles.statBox}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.statNumber}>{counts[index]}{stat.suffix}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;