// InnovationOverview.jsx
"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Globe, Zap, Users } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import styles from "./InnovationOverview.module.css"

const InnovationOverview = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredBar, setHoveredBar] = useState(null)

  const marketData = [
    { year: "2024", value: 7.8 },
    { year: "2025", value: 9.8 },
    { year: "2026", value: 11.5 },
    { year: "2027", value: 13.2 },
    { year: "2028", value: 14.8 },
    { year: "2029", value: 15.7 },
    { year: "2030", value: 16.5 },
    { year: "2031", value: 17.6 },
    { year: "2032", value: 18.8 },
    { year: "2033", value: 19.9 },
  ]

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <div className={styles.tooltipYear}>{payload[0].payload.year}</div>
          <div className={styles.tooltipValue}>${payload[0].value}B</div>
        </div>
      )
    }
    return null
  }

  return (
    <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>
           <span className={styles.titleAccent}>  Future of Procurement & <span>Supply Chain</span></span>
          </h1>
          <p className={styles.subtitle}>
           How data, automation, and AI are redefining global operations.
          </p>
        </header>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>$7.8B</div>
            <div className={styles.statLabel}>2024 Market Size</div>
            <div className={styles.statIndicator}></div>
          </div>
          <div className={`${styles.statCard} ${styles.projectionCard}`}>
            <div className={styles.statValue}>$19.9B</div>
            <div className={styles.statLabel}>2033 Projection</div>
            <div className={styles.statIndicator}></div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>~9.1%</div>
            <div className={styles.statLabel}>Annual CAGR</div>
            <div className={styles.statIndicator}></div>
          </div>
        </div>

        {/* Chart and Insights Combined Section */}``
        <div className={styles.mainContent}>
          {/* Chart Section */}
          <div className={styles.chartSection}>
            <div className={styles.chartHeader}>
              <div className={styles.chartTitleWrapper}>
                <div className={styles.chartIconBox}>
                  <TrendingUp size={22} />
                </div>
                <h2 className={styles.chartTitle}>Global Market Growth</h2>
              </div>
              <span className={styles.chartUnit}>Billions USD</span>
            </div>
            <div className={styles.chartArea}>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart
                  data={marketData}
                  onMouseMove={(s) => (s.isTooltipActive ? setHoveredBar(s.activeTooltipIndex) : setHoveredBar(null))}
                  onMouseLeave={() => setHoveredBar(null)}
                  margin={{ top: 10, right: 10, left: -20, bottom: 10 }}
                >
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#1a1a1a", fontSize: 13, fontWeight: 600 }}
                    axisLine={{ stroke: "#273272", strokeWidth: 2 }}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fill: "#1a1a1a", fontSize: 13, fontWeight: 600 }} 
                    axisLine={{ stroke: "#273272", strokeWidth: 2 }} 
                    tickLine={false} 
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,61,0,0.12)" }}/>
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={50}>
                    {marketData.map((_, i) => (
                   <Cell
  key={i}
  fill={hoveredBar === i ? "#273272" : "#273272"}   // warm red theme, NOT ORANGE
  opacity={hoveredBar === null || hoveredBar === i ? 1 : 0.35}
/>

                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Insights Section */}
          <div className={styles.insightsColumn}>
            <div className={styles.insightCard}>
              <div className={styles.insightIconBox}>
                <Globe size={26} />
              </div>
              <div className={styles.insightContent}>
                <h3 className={styles.insightTitle}>MEA & GCC Leadership</h3>
                <p className={styles.insightDescription}>
               Government-backed initiatives and national transformation programs are accelerating digital procurement adoption across the region.
                </p>
              </div>
            </div>

            <div className={`${styles.insightCard} ${styles.highlightInsight}`}>
              <div className={styles.insightIconBox}>
                <Zap size={26} />
              </div>
              <div className={styles.insightContent}>
                <h3 className={styles.insightTitle}>Supply Chain Innovation</h3>
                <p className={styles.insightDescription}>
               AI-driven planning, advanced analytics, and enhanced supplier collaboration are reshaping end-to-end supply chain operations.
                </p>
              </div>
            </div>
            
            <div className={styles.insightCard}>
              <div className={styles.insightIconBox}>
                <Users size={26} />
              </div>
              <div className={styles.insightContent}>
                <h3 className={styles.insightTitle}>Enterprise Transformation</h3>
                <p className={styles.insightDescription}>
              Organizations are modernizing procurement through cloud platforms, intelligent automation, and advanced analytics to improve speed and decision-making.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default InnovationOverview