import React, { useState } from 'react';

import styles from './Hero.module.css';
import { Link } from "react-router-dom";
import Booth from "../OtherPages/Booth"


const Hero = () => {
  const [openBooth, setOpenBooth] = useState(false);

  return (
    <section className={styles.hero}>
      {/* Background Video for Mobile/Tablet */}
      <div className={styles.backgroundVideo}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            <span className={styles.badgeText}>Asia</span>
          </div>
          
          <div className={styles.textWrapper}>
       <h1 className={styles.heading}>
  <span className={styles.title}>
    Procuretech & Supply Chain<br />
    Innovation Summit & <br />
    Awards 2026
  </span>
</h1>

          <p className={styles.subtitle}>
  <span className={styles.subtitleHighlight}>
    Embracing the Digital Future of Procurement & Supply Chain
  </span>
</p>

            <div className={styles.eventDetails}>
              <div className={styles.detailItem}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.833 3.333H4.167C3.247 3.333 2.5 4.08 2.5 5v11.667c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666V5c0-.92-.746-1.667-1.667-1.667zM2.5 8.333h15M13.333 1.667v3.333M6.667 1.667v3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.detailText}>April 21–22, 2026</span>
              </div>
              <div className={styles.detailItem}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 1.667c-3.222 0-5.833 2.444-5.833 5.458 0 4.375 5.833 10.208 5.833 10.208s5.833-5.833 5.833-10.208c0-3.014-2.611-5.458-5.833-5.458z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.detailText}>Singapore</span>
              </div>
            </div>
            
            <div className={styles.buttonGroup}>
             <Link to="/registration" className={styles.primaryBtn}>

                Register Now
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
           </Link>

          <button
  className={styles.secondaryBtn}
  onClick={() => setOpenBooth(true)}
>
  Book A Booth
</button>


            </div>
          </div>
        </div>

        {/* Right Media Grid - Desktop Only */}
        <div className={styles.mediaGrid}>
          {/* Top Row */}
          <div className={styles.topRow}>
            <div className={styles.topImage}>
              <img 
                src="/Gallery2025/Gallery4Pic2025.webp" 
                alt="Business meeting"
              />
            </div>
          </div>

          {/* Middle Row - Video + Image */}
          <div className={styles.middleRow}>
            <div className={styles.video}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                 poster="/background-poster.png" 
              >
                <source src="/background.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={styles.middleImage}>
              <img 
                src="/Gallery2025/Gallery16Pic2025.webp" 
                alt="Logistics"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className={styles.bottomRow}>
            <div className={styles.bottomImage}>
              <img 
                src="/Gallery2025/Gallery6Pic2025.webp" 
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </div>
      <Booth open={openBooth} setOpen={setOpenBooth} />

    </section>
  );
};

export default Hero;