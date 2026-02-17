import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";

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

const stats = [
  { num: "500+", label: "Delegates" },
  { num: "95+", label: "Attendance" },
  { num: "96%", label: "Satisfaction" },
  { num: "30+", label: "Speakers" },
];

const sponsors = ["Gold Sponsor", "Platinum Partner", "Official Media", "Strategic Partner"];

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.6;
  }, []);

  return (
    <section className={styles.hero}>
      {/* ── Video BG ── */}
      <div className={styles.videoBg}>
        <video ref={videoRef} autoPlay muted loop playsInline className={styles.video}>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Multi-layer overlays ── */}
      <div className={styles.ol1} />
      <div className={styles.ol2} />
      <div className={styles.ol3} />
      <div className={styles.olNoise} />

      {/* ── Decorative SVG lines ── */}
      <svg className={styles.decoSvg} viewBox="0 0 1440 900" preserveAspectRatio="none">
        <line x1="0" y1="900" x2="480" y2="0" stroke="rgba(166,34,60,0.18)" strokeWidth="1" />
        <line x1="0" y1="900" x2="520" y2="0" stroke="rgba(166,34,60,0.08)" strokeWidth="1" />
        <line x1="1440" y1="0" x2="900" y2="900" stroke="rgba(16,33,71,0.4)" strokeWidth="1" />
      </svg>

      {/* ── Left gutter: vertical marquee ── */}
      <div className={styles.leftGutter}>
        <div className={styles.gutterVLine} />
        <div className={styles.gutterMarquee}>
          <div className={styles.gutterMarqueeInner}>
            {[...sponsors, ...sponsors].map((s, i) => (
              <span key={i} className={styles.gutterText}>{s}</span>
            ))}
          </div>
        </div>
        <div className={styles.gutterVLine} />
      </div>

      {/* ── Right gutter ── */}
      {/* <div className={styles.rightGutter}>
        <div className={styles.rightGutterContent}>
          {stats.map((s) => (
            <div key={s.label} className={styles.rightStat}>
              <span className={styles.rightStatNum}>{s.num}</span>
              <span className={styles.rightStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.rightVLine} />
      </div> */}

      {/* ── Main Content ── */}
      <div className={styles.content}>
        {/* Top ribbon */}
        <div className={styles.ribbon}>
          <div className={styles.ribbonLine} />
          <div className={styles.ribbonBadge}>
            {/* <span className={styles.liveIcon} /> */}
            <span>FLAGSHIP EVENT &nbsp;·&nbsp; ABU DHABI 2026</span>
          </div>
          <div className={styles.ribbonLine} />
        </div>

        {/* Edition label */}
      <div className={styles.edition}>
  <span>2nd <span>Edition</span></span>
</div>

        {/* Giant title */}
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>
            <span className={styles.titleUnified}>HSE WEEK UAE</span>
          </h1>
          <div className={styles.titleSub}>
            Health &nbsp;·&nbsp; Safety &nbsp;·&nbsp; Environment&nbsp;
          </div>
        </div>

        {/* Date + location strip */}
        <div className={styles.dateStrip}>
          <div className={styles.dateBlock}>
            <div className={styles.dateBlockDay}>08–09</div>
            <div className={styles.dateBlockMonthYear}>
              <span>September</span>
              <span>2026</span>
            </div>
          </div>
          <div className={styles.dateDivider} />
          <div className={styles.venueBlock}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <div className={styles.venueName}>Abu Dhabi</div>
              <div className={styles.venueCity}>United Arab Emirates</div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className={styles.countdownWrap}>
          <div className={styles.countdownEyebrow}>Countdown to Opening</div>
          <div className={styles.countdown}>
            {[
              { v: days, l: "Days" },
              { v: hours, l: "Hours" },
              { v: minutes, l: "Minutes" },
              { v: seconds, l: "Seconds" },
            ].map(({ v, l }, i) => (
              <>
                <div key={l} className={styles.cdUnit}>
                  <div className={styles.cdTop}>{String(v).padStart(2, "0")}</div>
                  <div className={styles.cdBot}>{l}</div>
                </div>
                {i < 3 && <div key={`sep${i}`} className={styles.cdSep}>:</div>}
              </>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className={styles.ctaRow}>
          <a href="#register" className={styles.btnMain}>
            <span className={styles.btnMainBg} />
            <span className={styles.btnMainText}>Register Now</span>
            <span className={styles.btnMainIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
          <a href="#booth" className={styles.btnAlt}>
            <span className={styles.btnAltIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
              </svg>
            </span>
            Book a Booth
          </a>
          <a href="schedule" className={styles.btnGhost}>View Schedule</a>
          <a href="speakers" className={styles.btnGhost}>Our Speakers</a>
        </div>

        {/* Bottom ticker */}
        <div className={styles.ticker}>
          <div className={styles.tickerLabel}>HIGHLIGHTS</div>
          <div className={styles.tickerTrack}>
            <div className={styles.tickerInner}>
              {[
                "Keynote Address by Industry Leaders",
                "Live HSE Tech Demonstrations",
                "International Safety Awards Ceremony",
                "Exclusive VIP Networking Dinner",
                "500+ Exhibition Stands",
                "Free CPD Certified Workshops",
                "Keynote Address by Industry Leaders",
                "Live HSE Tech Demonstrations",
                "International Safety Awards Ceremony",
                "Exclusive VIP Networking Dinner",
                "500+ Exhibition Stands",
                "Free CPD Certified Workshops",
              ].map((item, i) => (
                <span key={i} className={styles.tickerItem}>
                  <span className={styles.tickerDot}>◆</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}