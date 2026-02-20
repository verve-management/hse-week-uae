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
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setContentVisible(true);
      },
      { threshold: 0.3 },
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImageGridVisible(true);
      },
      { threshold: 0.3 },
    );
    if (imageGridRef.current) observer.observe(imageGridRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsVisible]);

  useEffect(() => {
    if (!statsVisible) return;
    const targets = [350, 95, 96, 30];
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
    { number: 350, label: "Delegates", suffix: "+" },
    { number: 95, label: "Attendance", suffix: "+" },
    { number: 96, label: "Satisfaction", suffix: "%" },
    { number: 30, label: "Speakers", suffix: "+" },
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
            Following the outstanding success of the 2025 edition, HSE WEEK UAE
            2026 returns stronger than ever, taking place in Abu Dhabi on 8–9
            September 2026 . As the region’s leading platform for Health,
            Safety, Environment, and Sustainability (HSE), the event brings
            together key stakeholders from Oil & Gas, Manufacturing,
            Construction, Chemical, and major industrial sectors.
          </p>
          <p className={styles.paragraph}>
            This high-level, two-day conference will convene government
            authorities, HSE leaders, industry experts, and sustainability
            professionals to drive forward-thinking discussions on workplace
            safety, environmental stewardship, and operational resilience. The
            2026 edition will spotlight how technology, leadership, and
            innovation are redefining safety standards and shaping a sustainable
            industrial future.
          </p>
          <p className={styles.paragraph}>
            Featuring powerful case studies, live technology showcases, and
            expert-led interactive sessions, HSE WEEK UAE 2026 offers an
            unmatched opportunity to benchmark against global best practices and
            build strategic industry connections.
          </p>
        </div>

        {/* ── RIGHT: Image Grid ── */}
        <div
          ref={imageGridRef}
          className={`${styles.imageGridWrapper} ${imageGridVisible ? styles.imageGridVisible : ""}`}
        >
          <div className={styles.imageGrid}>
            <div className={styles.imageBox}>
              <img
                src="/KsaGallery/Gallery33.webp"
                alt="Event Gallery 1"
                className={styles.gridImage}
              />
            </div>
            <div className={styles.imageBox}>
              <img
                src="/KsaGallery/Gallery23.webp"
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

          <div className={styles.centerLogo}>
            <img
              src="/Other/Logo.webp"
              alt="Event Logo"
              className={styles.logoImage}
            />
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
              <div className={styles.statNumber}>
                {counts[index]}
                {stat.suffix}
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
