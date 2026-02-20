import { useState, useEffect } from "react";
import styles from "./Hero4.module.css";
import { MdLocationOn, MdPeople, MdTrendingUp, MdStars, MdEco, MdHandshake } from "react-icons/md";

const TARGET_DATE = new Date("2026-09-08T09:00:00");

function useCountdown(target) {
  const calc = () => {
    const diff = target - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const keyFacts = [
  { icon: <MdLocationOn />, label: "Venue", value: "Abu Dhabi" },
  { icon: <MdPeople />, label: "Delegates", value: "350+" },
  { icon: <MdTrendingUp />, label: "Attendance", value: "95+" },
  { icon: <MdStars />, label: "Satisfaction", value: "96%" },
  { icon: <MdEco />, label: "Sustainability Focus", value: "ESG & Net Zero" },
  { icon: <MdHandshake />, label: "Networking", value: "VIP Gala" },
];

export default function Hero3() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.bg} />
      <div className={styles.bgMesh} />
      {/* ── MAIN GRID ── */}
      <div className={styles.mainGrid}>

        {/* ── COLUMN A: Giant title + video ── */}
        <div className={styles.colA}>
          {/* Stacked giant title */}
          <div className={styles.titleStack}>
            <div className={styles.editionLine}>
  <span className={styles.editionTitle}>2nd Edition</span>
</div>
  <div className={styles.titleLine}>
    <span className={styles.titleWord}>HSE</span>
    <span className={styles.titleWord}>WEEK</span>
    <span className={styles.titleWord}>UAE</span>
  </div>
            <div className={styles.titleSubline}>
              <span className={styles.subWord}>HEALTH</span>
              <span className={styles.subDot}>•</span>
              <span className={styles.subWord}>SAFETY</span>
              <span className={styles.subDot}>•</span>
              <span className={styles.subWord}>ENVIRONMENT</span>
            </div>
          </div>

          {/* Video as a shaped display */}
          <div className={styles.videoDisplay}>
            <div className={styles.videoDisplayBorder} />
            <div className={styles.videoDisplayInner}>
              <video autoPlay muted loop playsInline className={styles.vid}>
                <source src="/background.mp4" type="video/mp4" />
              </video>
              <div className={styles.vidColorGrade} />
              {/* Overlay text on video */}
              <div className={styles.vidCaption}>
                <span className={styles.vidCaptionYear}>2026</span>
                <span className={styles.vidCaptionEvent}>Abu Dhabi International</span>
                <span className={styles.vidCaptionConf}>HSE Conference & Exhibition</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── COLUMN B: Info dense panel ── */}
        <div className={styles.colB}>
          {/* Eyebrow */}
          {/* <div className={styles.eyebrow}>
            <div className={styles.eyebrowBar} />
            <span>OFFICIAL EVENT DETAILS</span>
            <div className={styles.eyebrowBar} />
          </div> */}

          {/* Date big block */}
          <div className={styles.dateMega}>
            <div className={styles.dateMegaDate}>
              <span className={styles.dateMegaNum}>08</span>
              <div className={styles.dateMegaMid}>
                <span className={styles.dateMegaDash}>—</span>
              </div>
              <span className={styles.dateMegaNum}>09</span>
            </div>
            <div className={styles.dateMegaInfo}>
              <span className={styles.dateMegaMonth}>SEPTEMBER</span>
              <span className={styles.dateMegaYear}>2026</span>
              <span className={styles.dateMegaVenue}>Abu Dhabi, UAE</span>
            </div>
          </div>

          {/* Countdown */}
          <div className={styles.cdBlock}>
            <div className={styles.cdBlockHeader}>
              <span className={styles.cdBlockLine} />
              <span className={styles.cdBlockTitle}>COUNTDOWN</span>
              <span className={styles.cdBlockLine} />
            </div>
            <div className={styles.cdRow}>
              {[{v:days,l:"DAYS"},{v:hours,l:"HRS"},{v:minutes,l:"MIN"},{v:seconds,l:"SEC"}].map(({v,l},i)=>(
                <div key={l} className={styles.cdItem}>
                  <div className={styles.cdItemInner}>
                    <span className={styles.cdItemVal}>{String(v).padStart(2,"0")}</span>
                    <span className={styles.cdItemLabel}>{l}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key facts grid */}
          <div className={styles.factsGrid}>
            {keyFacts.map((f) => (
              <div key={f.label} className={styles.factCard}>
                <div className={styles.factIconWrapper}>
                  <span className={styles.factIcon}>{f.icon}</span>
                </div>
                <div className={styles.factInfo}>
                  <span className={styles.factLabel}>{f.label}</span>
                  <span className={styles.factValue}>{f.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.ctaStack}>
            <a href="#register" className={styles.btnReg}>
              <div className={styles.btnRegLeft}>
                <span className={styles.btnRegLabel}>Register Now</span>
              </div>
              <span className={styles.btnRegArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </a>
            <a href="#booth" className={styles.btnBooth}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/>
              </svg>
              Book Exhibition Booth
            </a>
          </div>

          {/* Bottom contact strip */}
          <div className={styles.contactStrip}>
            <span className={styles.contactItem}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
           info@verve-management.com
            </span>
            <span className={styles.contactSep}>·</span>
            <span className={styles.contactItem}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.63 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.17z"/>
              </svg>
          +971 4243 4677
            </span>
            <span className={styles.contactSep}>·</span>
            <span className={styles.contactItem}>www.hseweek-uae.com</span>
          </div>
        </div>
      </div>

      {/* ── BOTTOM FULL-WIDTH TICKER ── */}
      <div className={styles.bottomTicker}>
        <div className={styles.btLabel}>
          <span className={styles.btDot} />
          LATEST
        </div>
        <div className={styles.btTrack}>
          <div className={styles.btInner}>
            {[
              "Early Bird Registration Now Open — Save 30%",
              "500+ Exhibitors Confirmed for 2026 Edition",
              "Keynote: Future of AI in HSE Safety Management",
              "VIP Networking Gala — Limited Seats Available",
              "New: Green Sustainability Pavilion 2026",
              "Award Nominations Close: 31 July 2026",
              "Early Bird Registration Now Open — Save 30%",
              "500+ Exhibitors Confirmed for 2026 Edition",
              "Keynote: Future of AI in HSE Safety Management",
              "VIP Networking Gala — Limited Seats Available",
              "New: Green Sustainability Pavilion 2026",
              "Award Nominations Close: 31 July 2026",
            ].map((item, i) => (
              <span key={i} className={styles.btItem}>
                <span className={styles.btDot2}>◆</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}