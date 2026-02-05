// ============================================
// FILE: src/components/MarketInsights/MarketInsights.jsx
// ============================================

import React from "react";
import styles from "./MarketInsights.module.css";

const MarketInsights = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Industry Research</span>
          <h2 className={styles.title}>
            Procurement Technology &
            <span> Supply Chain Innovation Market</span>
          </h2>
          <p className={styles.subtitle}>
            A data-driven overview of global growth, regional momentum, and the
            technology forces reshaping procurement and supply chains.
          </p>
        </div>

        {/* Stats Row */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>$7.8–9.8B</h3>
            <p>Global market size (2024–2025)</p>
          </div>

          <div className={styles.statCard}>
            <h3>$15.7–19.9B</h3>
            <p>Projected market size by early 2030s</p>
          </div>

          <div className={styles.statCard}>
            <h3>~8–10%+</h3>
            <p>Estimated CAGR over the next decade</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>

          <div className={styles.infoCard}>
            <h4>🌍 Global Market Outlook</h4>
            <p>
              The global procurement software market is firmly in the
              billion-dollar range, expanding rapidly as organizations automate
              sourcing, supplier management, spend analytics, contract
              management, and compliance workflows.
            </p>
            <p>
              Industry forecasts consistently indicate strong growth, with the
              market expected to nearly double by the early 2030s, driven by
              digital transformation across enterprises worldwide.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h4>📈 Middle East & GCC Momentum</h4>
            <p>
              The Middle East & Africa region is emerging as a high-growth
              market, with several studies projecting double-digit CAGR through
              the late 2020s.
            </p>
            <p>
              GCC countries — particularly the UAE and Saudi Arabia — are leading
              adoption, fueled by government-led digital initiatives, large
              infrastructure projects, and enterprise modernization programs.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h4>🚀 Key Growth Drivers</h4>
            <ul>
              <li>
                Digitization of source-to-pay and supply chain processes via
                cloud-based platforms
              </li>
              <li>
                AI & machine learning for predictive analytics, supplier risk
                monitoring, and smarter decision-making
              </li>
              <li>
                Cloud adoption enabling scalable, secure, and cost-effective
                procurement operations
              </li>
              <li>
                Enterprise focus on resilience, spend visibility, and regulatory
                compliance
              </li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h4>📌 Broader Supply Chain Landscape</h4>
            <p>
              Procurement technology is increasingly viewed as a core pillar of
              end-to-end supply chain innovation. Adjacent segments such as
              supply chain planning, logistics analytics, and SCM platforms are
              also witnessing strong demand and comparable growth trajectories.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MarketInsights;
