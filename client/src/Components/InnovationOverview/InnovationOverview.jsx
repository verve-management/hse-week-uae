import React from 'react';
import styles from './InnovationOverview.module.css';

const InnovationOverview = () => {
  const statsCards = [
    { value: '$7.8B', label: '2024 Market Size', icon: '◈' },
    { value: '$19.9B', label: '2033 Projection', icon: '◉' },
    { value: '~9.1%', label: 'Annual CAGR', icon: '◇' }
  ];

  const industries = [
    { name: 'Corporate Events', percentage: 34, color: '#A6223C' },
    { name: 'Oil & Gas', percentage: 28, color: '#102147' },
    { name: 'Mining', percentage: 10, color: '#C8435E' },
    { name: 'Aviation', percentage: 6, color: '#D4758A' },
    { name: 'Transportation', percentage: 20, color: '#2C3E6B' },
    { name: 'Other', percentage: 2, color: '#8C9BB5' }
  ];

  const severityData = [
    { level: 'Mild / Moderate', count: 37601, percentage: 98.5, color: '#102147' },
    { level: 'Severe (non-fatal)', count: 506, percentage: 1.3, color: '#A6223C' },
    { level: 'Fatal', count: 50, percentage: 0.1, color: '#6B0E20' }
  ];

  const maxCount = Math.max(...severityData.map(d => d.count));

  // Pie chart calculations
  const pieSlices = industries.reduce((acc, industry, index) => {
    const prevPercentage = industries.slice(0, index).reduce((sum, ind) => sum + ind.percentage, 0);
    const startAngle = (prevPercentage / 100) * 360 - 90;
    const endAngle = ((prevPercentage + industry.percentage) / 100) * 360 - 90;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = 100 + 80 * Math.cos(startRad);
    const y1 = 100 + 80 * Math.sin(startRad);
    const x2 = 100 + 80 * Math.cos(endRad);
    const y2 = 100 + 80 * Math.sin(endRad);
    const largeArc = industry.percentage > 50 ? 1 : 0;
    const path = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;

    const labelAngle = ((prevPercentage + industry.percentage / 2) / 100) * 360 - 90;
    const labelRad = (labelAngle * Math.PI) / 180;
    const labelRadius = 62;
    const lx = 50 + labelRadius * Math.cos(labelRad);
    const ly = 50 + labelRadius * Math.sin(labelRad);

    return [...acc, { path, color: industry.color, lx, ly, percentage: industry.percentage }];
  }, []);

  return (
    <div className={styles.container}>

      {/* Decorative background elements */}
      <div className={styles.bgAccent1}></div>
      <div className={styles.bgAccent2}></div>

      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Multi-Year <span>Comparison</span></h1>
        <p className={styles.subtitle}>Year-on-Year Event Performance</p>
      </div>

      {/* Stats Cards */}
      {/* <div className={styles.statsGrid}>
        {statsCards.map((stat, index) => (
          <div key={index} className={`${styles.statCard} ${index === 1 ? styles.featured : ''}`}>
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statAccentLine}></div>
          </div>
        ))}
      </div> */}

      {/* Charts */}
      <div className={styles.chartsGrid}>

        {/* Pie Chart Card */}
        <div className={styles.chartCard}>
          <div className={styles.cardAccentBar}></div>
          <div className={styles.chartHeader}>
            <div className={styles.chartIconWrap}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h2 className={styles.chartTitle}>Safety by Industry</h2>
              <p className={styles.chartDescription}>Percentage distribution across sectors</p>
            </div>
          </div>

          <div className={styles.pieWrapper}>
            <svg className={styles.pieChart} viewBox="0 0 200 200">
              {/* Outer ring decoration */}
              <circle cx="100" cy="100" r="92" fill="none" stroke="#F5E6E9" strokeWidth="2" strokeDasharray="4 3"/>
              {pieSlices.map((slice, i) => (
                <path
                  key={i}
                  d={slice.path}
                  fill={slice.color}
                  className={styles.pieSlice}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              ))}
              {/* Donut hole */}
              <circle cx="100" cy="100" r="46" fill="#ffffff"/>
              {/* Center label */}
              <text x="100" y="96" textAnchor="middle" fill="#102147" fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="Montserrat, sans-serif">TOTAL</text>
              <text x="100" y="109" textAnchor="middle" fill="#A6223C" fontSize="14" fontWeight="700" fontFamily="Cormorant Garamond, serif">100%</text>
            </svg>

            {/* Floating % labels */}
            <div className={styles.percentageLabels}>
              {pieSlices.map((slice, i) => (
                <div
                  key={i}
                  className={styles.percentageLabel}
                  style={{ left: `${slice.lx}%`, top: `${slice.ly}%` }}
                >
                  {slice.percentage}%
                </div>
              ))}
            </div>
          </div>

          <div className={styles.legend}>
            {industries.map((industry, i) => (
              <div key={i} className={styles.legendItem}>
                <div className={styles.legendDot} style={{ backgroundColor: industry.color }}></div>
                <span className={styles.legendText}>{industry.name}</span>
                <span className={styles.legendPct}>{industry.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart Card */}
        <div className={styles.chartCard}>
          <div className={styles.cardAccentBar}></div>
          <div className={styles.chartHeader}>
            <div className={styles.chartIconWrap}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="10" width="4" height="11" fill="currentColor" rx="1"/>
                <rect x="10" y="5" width="4" height="16" fill="currentColor" rx="1"/>
                <rect x="17" y="13" width="4" height="8" fill="currentColor" rx="1"/>
              </svg>
            </div>
            <div>
              <h2 className={styles.chartTitle}>Incidents by Severity</h2>
              <p className={styles.chartDescription}>Qatar, 2020 — Total cases by severity level</p>
            </div>
          </div>

          <div className={styles.barChartContainer}>
            <div className={styles.gridLines}>
              {[100, 75, 50, 25, 0].map(v => (
                <div key={v} className={styles.gridLine}>
                  <span className={styles.gridLabel}>{v === 0 ? '0' : v === 100 ? '41k' : v === 75 ? '30k' : v === 50 ? '20k' : '10k'}</span>
                  <div className={styles.gridLineRule}></div>
                </div>
              ))}
            </div>

            <div className={styles.barsArea}>
              {severityData.map((data, i) => (
                <div key={i} className={styles.barGroup}>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      style={{
                        height: `${(data.count / maxCount) * 100}%`,
                        backgroundColor: data.color
                      }}
                    >
                      <span className={styles.barTopValue}>{data.count.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className={styles.barLabel}>{data.level}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.severityStats}>
            {severityData.map((data, i) => (
              <div key={i} className={styles.severityStat} style={{ '--accent': data.color }}>
                <div className={styles.severityTop}>
                  <div className={styles.severityDot} style={{ backgroundColor: data.color }}></div>
                  <span className={styles.severityLabel}>{data.level}</span>
                </div>
                <div className={styles.severityCount}>{data.count.toLocaleString()}</div>
                <div className={styles.severityPct}>{data.percentage}% of total</div>
                <div className={styles.severityBar}>
                  <div
                    className={styles.severityBarFill}
                    style={{ width: `${data.percentage}%`, backgroundColor: data.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationOverview;