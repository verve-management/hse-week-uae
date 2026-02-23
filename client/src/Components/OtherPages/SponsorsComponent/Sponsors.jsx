import React, { useEffect, useRef } from "react";
import "./Sponsors.css";
// import sponsorBackground from "../../../assets/sponsorBackground.jpeg"
import sponsor1 from "../../../assets/SeriesPartner/SeriesPartner1.webp";
import sponsor2 from "../../../assets/SeriesPartner/SeriesPartner2.webp";
import sponsor3 from "../../../assets/SeriesPartner/SeriesPartner3.webp";
import sponsor4 from "../../../assets/SeriesPartner/SeriesPartner4.webp";
import sponsor5 from "../../../assets/SeriesPartner/SeriesPartner5.webp";
import sponsor6 from "../../../assets/SeriesPartner/SeriesPartner6.webp";
import sponsor7 from "../../../assets/SeriesPartner/SeriesPartner7.webp";
import sponsor8 from "../../../assets/SeriesPartner/SeriesPartner8.webp";
import sponsor9 from "../../../assets/SeriesPartner/SeriesPartner9.webp";
import sponsor10 from "../../../assets/SeriesPartner/SeriesPartner10.webp";
import sponsor11 from "../../../assets/SeriesPartner/SeriesPartner11.webp";
import sponsor12 from "../../../assets/SeriesPartner/SeriesPartner12.webp";
import sponsor13 from "../../../assets/SeriesPartner/SeriesPartner13.webp";
import sponsor14 from "../../../assets/SeriesPartner/SeriesPartner14.webp";
import sponsor15 from "../../../assets/SeriesPartner/SeriesPartner15.webp";
import sponsor16 from "../../../assets/SeriesPartner/SeriesPartner16.webp";
import sponsor17 from "../../../assets/SeriesPartner/SeriesPartner17.webp";
import sponsor18 from "../../../assets/SeriesPartner/SeriesPartner18.webp";
import sponsor19 from "../../../assets/SeriesPartner/SeriesPartner19.webp";
import sponsor20 from "../../../assets/SeriesPartner/SeriesPartner20.webp";
import sponsor21 from "../../../assets/SeriesPartner/SeriesPartner21.webp";
import sponsor22 from "../../../assets/SeriesPartner/SeriesPartner22.webp";
import sponsor23 from "../../../assets/SeriesPartner/SeriesPartner23.webp";
import sponsor24 from "../../../assets/SeriesPartner/SeriesPartner24.webp";
import sponsor25 from "../../../assets/SeriesPartner/SeriesPartner25.webp";
import sponsor26 from "../../../assets/SeriesPartner/SeriesPartner26.webp";
import sponsor27 from "../../../assets/SeriesPartner/SeriesPartner27.webp";
import sponsor28 from "../../../assets/SeriesPartner/SeriesPartner28.webp";
import sponsor29 from "../../../assets/SeriesPartner/SeriesPartner29.webp";
import sponsor30 from "../../../assets/SeriesPartner/SeriesPartner30.webp";
import sponsor31 from "../../../assets/SeriesPartner/SeriesPartner31.webp";
import sponsor32 from "../../../assets/SeriesPartner/SeriesPartner32.webp";
import sponsor33 from "../../../assets/SeriesPartner/SeriesPartner33.webp";
import sponsor34 from "../../../assets/SeriesPartner/SeriesPartner34.webp";
import sponsor35 from "../../../assets/SeriesPartner/SeriesPartner35.webp";
import sponsor36 from "../../../assets/SeriesPartner/SeriesPartner36.webp";
import sponsor37 from "../../../assets/SeriesPartner/SeriesPartner37.webp";
import sponsor38 from "../../../assets/SeriesPartner/SeriesPartner38.webp";
import sponsor39 from "../../../assets/SeriesPartner/SeriesPartner39.webp";
import sponsor40 from "../../../assets/SeriesPartner/SeriesPartner40.webp";


import mediaPartner1 from "../../../assets/MediaPartner/MediaPartner1.webp";
import mediaPartner2 from "../../../assets/MediaPartner/MediaPartner1.webp";
import mediaPartner3 from "../../../assets/MediaPartner/MediaPartner3.webp";
import mediaPartner4 from "../../../assets/MediaPartner/MediaPartner4.webp";
import mediaPartner5 from "../../../assets/MediaPartner/MediaPartner5.webp";
import mediaPartner6 from "../../../assets/MediaPartner/MediaPartner6.webp";
import mediaPartner7 from "../../../assets/MediaPartner/MediaPartner7.webp";
import mediaPartner8 from "../../../assets/MediaPartner/MediaPartner8.webp";
import mediaPartner9 from "../../../assets/MediaPartner/MediaPartner9.webp";
import mediaPartner10 from "../../../assets/MediaPartner/MediaPartner10.webp";
import mediaPartner11 from "../../../assets/MediaPartner/MediaPartner11.webp";
import mediaPartner12 from "../../../assets/MediaPartner/MediaPartner12.webp";
import mediaPartner13 from "../../../assets/MediaPartner/MediaPartner13.webp";
import mediaPartner14 from "../../../assets/MediaPartner/MediaPartner14.webp";
import mediaPartner15 from "../../../assets/MediaPartner/MediaPartner15.webp";
import mediaPartner16 from "../../../assets/MediaPartner/MediaPartner16.webp";
import mediaPartner17 from "../../../assets/MediaPartner/MediaPartner17.webp";
import mediaPartner18 from "../../../assets/MediaPartner/MediaPartner18.webp";
import mediaPartner19 from "../../../assets/MediaPartner/MediaPartner19.webp";
import mediaPartner20 from "../../../assets/MediaPartner/MediaPartner20.webp";
import mediaPartner21 from "../../../assets/MediaPartner/MediaPartner21.webp";
import mediaPartner22 from "../../../assets/MediaPartner/MediaPartner22.webp";
import mediaPartner23 from "../../../assets/MediaPartner/MediaPartner23.webp";
import mediaPartner24 from "../../../assets/MediaPartner/MediaPartner24.webp";
import mediaPartner25 from "../../../assets/MediaPartner/MediaPartner25.webp";
import mediaPartner26 from "../../../assets/MediaPartner/MediaPartner26.webp";
import mediaPartner27 from "../../../assets/MediaPartner/MediaPartner27.webp";
import mediaPartner28 from "../../../assets/MediaPartner/MediaPartner28.webp";
import mediaPartner29 from "../../../assets/MediaPartner/MediaPartner29.webp";
import mediaPartner30 from "../../../assets/MediaPartner/MediaPartner30.webp";
import mediaPartner31 from "../../../assets/MediaPartner/MediaPartner31.webp";
import mediaPartner32 from "../../../assets/MediaPartner/MediaPartner32.webp";
import mediaPartner33 from "../../../assets/MediaPartner/MediaPartner33.webp";
import mediaPartner34 from "../../../assets/MediaPartner/MediaPartner34.webp";
import mediaPartner35 from "../../../assets/MediaPartner/MediaPartner35.webp";
import mediaPartner36 from "../../../assets/MediaPartner/MediaPartner36.webp";
import mediaPartner37 from "../../../assets/MediaPartner/MediaPartner37.webp";
import mediaPartner38 from "../../../assets/MediaPartner/MediaPartner38.webp";
import mediaPartner39 from "../../../assets/MediaPartner/MediaPartner39.webp";
import mediaPartner40 from "../../../assets/MediaPartner/MediaPartner40.webp";
import mediaPartner41 from "../../../assets/MediaPartner/MediaPartner41.webp";
import spSupport1 from "../../../../src/assets/sponcors/seriessupport1.webp";
import spSupport2 from "../../../../src/assets/sponcors/seriessupport2.webp";
import spSupport3 from "../../../../src/assets/sponcors/seriessupport3.webp"




import UpdateSoon from "../Elements/UpdateSoon";

const Sponsors = () => {
  const heroTextRef = useRef(null);

useEffect(() => {
  const text = heroTextRef.current;
  if (text) {
    const words = text.textContent.split(" ");
    text.textContent = "";

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";

      word.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "sponsors-hero-letter";
        span.style.animationDelay = `${(wordIndex * 10 + index) * 0.04}s`;
        wordSpan.appendChild(span);
      });

      text.appendChild(wordSpan);

      // Add space between words properly
      text.appendChild(document.createTextNode(" "));
    });
  }
}, []);

const supportPartners = [
  { id: 1, logo: spSupport1, link: "https://sfma.sa/en" },
  { id: 2, logo: spSupport2, link: "https://www.ciob.org/" },
  { id: 3, logo: spSupport3, link: "https://www.iirsm.org/" },
];
  const seriesSponsors = [
    { id: 1, logo: sponsor1, link: "https://elit.ai/contact-us/" },
    { id: 2, logo: sponsor2, link: "https://www.aerchain.io/" },
    { id: 3, logo: sponsor3, link: "https://www.jaggaer.com/" },
    { id: 4, logo: sponsor4, link: "https://www.venwiz.com/" },
    { id: 5, logo: sponsor5, link: "https://www.zycus.com/" },
    { id: 6, logo: sponsor6, link: "https://www.moglix.com/" },
    { id: 7, logo: sponsor7, link: "https://ecovadis.com/" },
    { id: 8, logo: sponsor8, link: "https://www.wegopro.com/" },
    { id: 9, logo: sponsor9, link: "https://www.fcmtravel.com/en-ae?utm_source=ProcuretechSummit&utm_medium=Sponsorship&utm_campaign=Procuretech%20Sponsorship" },
    { id: 10, logo: sponsor10, link: "https://aeris.group/" },
    { id: 11, logo: sponsor11, link: "https://www.flex-ts.com/" },
    { id: 12, logo: sponsor12, link: "https://www.powerweave.com/" },
    { id: 13, logo: sponsor13, link: "https://supplychainhub.com/" },
    { id: 14, logo: sponsor14, link: "https://dice.tech/" },
    { id: 15, logo: sponsor15, link: "https://www.beeline.com/" },
    { id: 16, logo: sponsor16, link: "https://www.avetta.com/" },
    { id: 17, logo: sponsor17, link: "https://www.gep.com/" },
    { id: 18, logo: sponsor18, link: "https://www.fortender.com/" },
    { id: 19, logo: sponsor19, link: "https://simfoni.com/" },
    { id: 20, logo: sponsor20, link: "https://www.ap-solut.com/en/" },
    { id: 21, logo: sponsor21, link: "" },
    { id: 22, logo: sponsor22, link: "" },
    { id: 23, logo: sponsor23, link: "" },
    { id: 24, logo: sponsor24, link: "" },
    { id: 25, logo: sponsor25, link: "" },
    { id: 26, logo: sponsor26, link: "" },
    { id: 27, logo: sponsor27, link: "" },
    { id: 28, logo: sponsor28, link: "" },
    { id: 29, logo: sponsor29, link: "" },
    { id: 30, logo: sponsor30, link: "" },
    { id: 31, logo: sponsor31, link: "" },
    { id: 32, logo: sponsor32, link: "" },
    { id: 33, logo: sponsor33, link: "" },
    { id: 34, logo: sponsor34, link: "" },
    { id: 35, logo: sponsor35, link: "" },
    { id: 36, logo: sponsor36, link: "" },
    { id: 37, logo: sponsor37, link: "" },
    { id: 38, logo: sponsor38, link: "" },
    { id: 39, logo: sponsor39, link: "" },
    { id: 40, logo: sponsor40, link: "" },
  ];

  const mediaPartners = [
    { id: 3, logo: mediaPartner3,link: "" },
    { id: 4, logo: mediaPartner4,link: "https://procurementmag.com/" },
    { id: 5, logo: mediaPartner5,link: "https://artofprocurement.com/" },
    { id: 6, logo: mediaPartner6,link: "https://www.supplychainbrain.com/" },
    { id: 8, logo: mediaPartner8,link: "" },
    { id: 9, logo: mediaPartner9,link: "" },
    { id: 10, logo: mediaPartner10,link: "" },
    { id: 11, logo: mediaPartner11,link: "" },
    { id: 12, logo: mediaPartner12,link: "" },
    { id: 13, logo: mediaPartner13,link: "" },
    { id: 14, logo: mediaPartner14,link: "" },
    { id: 15, logo: mediaPartner15,link: "" },
    { id: 16, logo: mediaPartner16,link: "" },
    { id: 17, logo: mediaPartner17,link: "" },
    { id: 18, logo: mediaPartner18,link: "" },
    { id: 19, logo: mediaPartner19,link: "" },
    { id: 20, logo: mediaPartner20,link: "" },
    { id: 21, logo: mediaPartner21,link: "" },
    { id: 22, logo: mediaPartner22,link: "" },
    { id: 23, logo: mediaPartner23,link: "" },
    { id: 24, logo: mediaPartner24,link: "" },
    { id: 25, logo: mediaPartner25,link: "" },
    { id: 26, logo: mediaPartner26,link: "" },
    { id: 27, logo: mediaPartner27,link: "" },
    { id: 28, logo: mediaPartner28,link: "" },
    { id: 29, logo: mediaPartner29,link: "" },
    { id: 30, logo: mediaPartner30,link: "" },
    { id: 31, logo: mediaPartner31,link: "" },
    { id: 32, logo: mediaPartner32,link: "" },
    { id: 33, logo: mediaPartner33,link: "" },
    { id: 34, logo: mediaPartner34,link: "" },
    { id: 35, logo: mediaPartner35,link: "" },
    { id: 36, logo: mediaPartner36,link: "" },
    { id: 37, logo: mediaPartner37,link: "" },
    { id: 38, logo: mediaPartner38,link: "" },
    { id: 39, logo: mediaPartner39,link: "" },
    { id: 40, logo: mediaPartner40,link: "" },
    { id: 41, logo: mediaPartner41,link: "" },
  ];

  return (
    <div className="sponsors-page-wrapper">
      <section className="sponsors-hero-section">
  <div className="sponsors-hero-bg-image"></div>
  <div className="sponsors-hero-overlay"></div>

  <div className="sponsors-hero-content-wrapper">

    {/* TOP DECORATIVE LINE */}
    <div className="sponsors-hero-deco-line"></div>

    {/* ANIMATED TITLE */}
    <h1 className="sponsors-hero-main-title">
      <span ref={heroTextRef}>Sponsors&nbsp;and&nbsp;
        Partners</span>
    </h1>

    {/* SUBTITLE */}
    <p className="sponsors-hero-main-subtitle">
      Powering Excellence Together
    </p>

    {/* BOTTOM DECORATIVE LINE */}
    <div className="sponsors-hero-deco-line"></div>
  </div>
</section>

      {/* <UpdateSoon></UpdateSoon> */}

      <section className="sponsors-series-section">
        <div className="sponsors-series-container">
          <div className="sponsors-series-header">
            <h2 className="sponsors-series-title">
              Global Sponsors<span className="sponsors-series-highlight"> & Partners</span>
            </h2>
            <p className="sponsors-series-subtitle">
              Trusted by Industry Leaders
            </p>
          </div>

          {/* TOP CAROUSEL - Left to Right */}
          <div className="sponsors-carousel-wrapper">
            <div className="sponsors-carousel sponsors-carousel-ltr">
              <div className="sponsors-carousel-track">
                {seriesSponsors.map((sponsor) => (
                  <div key={`top-${sponsor.id}`} className="sponsors-carousel-item">
                    <div className="sponsors-series-card-wrapper">
                      <div className="sponsors-series-card-inner">
                        <img
                          src={sponsor.logo}
                          alt={`Sponsor ${sponsor.id}`}
                          className="sponsors-series-logo"
                        />
                      </div>
                      <a
                        href={sponsor.link || "#"}
                        className="spnsr-crd-lrnmr-actn-btn-wrpr-elmt-v2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!sponsor.link) e.preventDefault();
                        }}
                      >
                        <span>Learn More</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
                {seriesSponsors.map((sponsor) => (
                  <div key={`top-duplicate-${sponsor.id}`} className="sponsors-carousel-item">
                    <div className="sponsors-series-card-wrapper">
                      <div className="sponsors-series-card-inner">
                        <img
                          src={sponsor.logo}
                          alt={`Sponsor ${sponsor.id}`}
                          className="sponsors-series-logo"
                        />
                      </div>
                      <a
                        href={sponsor.link || "#"}
                        className="spnsr-crd-lrnmr-actn-btn-wrpr-elmt-v2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!sponsor.link) e.preventDefault();
                        }}
                      >
                        <span>Learn More</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM CAROUSEL - Left to Right (Delayed) */}
          <div className="sponsors-carousel-wrapper support-center-track">
            <div className="sponsors-carousel sponsors-carousel-ltr sponsors-carousel-delayed">
              <div className="sponsors-carousel-track">
                {seriesSponsors.map((sponsor) => (
                  <div key={`bottom-${sponsor.id}`} className="sponsors-carousel-item">
                    <div className="sponsors-series-card-wrapper">
                      <div className="sponsors-series-card-inner">
                        <img
                          src={sponsor.logo}
                          alt={`Sponsor ${sponsor.id}`}
                          className="sponsors-series-logo"
                        />
                      </div>
                      <a
                        href={sponsor.link || "#"}
                        className="spnsr-crd-lrnmr-actn-btn-wrpr-elmt-v2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!sponsor.link) e.preventDefault();
                        }}
                      >
                        <span>Learn More</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
                {seriesSponsors.map((sponsor) => (
                  <div key={`bottom-duplicate-${sponsor.id}`} className="sponsors-carousel-item">
                    <div className="sponsors-series-card-wrapper">
                      <div className="sponsors-series-card-inner">
                        <img
                          src={sponsor.logo}
                          alt={`Sponsor ${sponsor.id}`}
                          className="sponsors-series-logo"
                        />
                      </div>
                      <a
                        href={sponsor.link || "#"}
                        className="spnsr-crd-lrnmr-actn-btn-wrpr-elmt-v2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!sponsor.link) e.preventDefault();
                        }}
                      >
                        <span>Learn More</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sponsors-series-decoration"></div>
        </div>
      </section>

      <section className="sponsors-media-section">
        <div className="sponsors-media-container">
          <div className="sponsors-media-header">
            <h2 className="sponsors-media-title">
              Series Media{" "}
              <span className="sponsors-media-highlight">Partners</span>
            </h2>
            <p className="sponsors-media-subtitle">Amplifying Our Reach</p>
          </div>

          {/* TOP CAROUSEL - Left to Right */}
          <div className="sponsors-carousel-wrapper">
            <div className="sponsors-carousel sponsors-carousel-ltr">
              <div className="sponsors-carousel-track">
                {mediaPartners.map((partner) => (
                  <div key={`media-top-${partner.id}`} className="sponsors-carousel-item">
                    <div className="sponsors-media-card-wrapper">
                      <div className="sponsors-media-card-inner">
                        <img
                          src={partner.logo}
                          alt={`Media Partner ${partner.id}`}
                          className="sponsors-media-logo"
                        />
                      </div>
                      <a
                        href={partner.link || "#"}
                        className="mdprt-crd-lrnmr-actn-btn-wrpr-elmt-v2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!partner.link) e.preventDefault();
                        }}
                      >
                        <span>Learn More</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
                {mediaPartners.map((partner) => (
                  <div key={`media-top-duplicate-${partner.id}`} className="sponsors-carousel-item">
                    <div className="sponsors-media-card-wrapper">
                      <div className="sponsors-media-card-inner">
                        <img
                          src={partner.logo}
                          alt={`Media Partner ${partner.id}`}
                          className="sponsors-media-logo"
                        />
                      </div>
                      <a
                        href={partner.link || "#"}
                        className="mdprt-crd-lrnmr-actn-btn-wrpr-elmt-v2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!partner.link) e.preventDefault();
                        }}
                      >
                        <span>Learn More</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM CAROUSEL - Left to Right (Delayed) */}
          <div className="sponsors-carousel-wrapper">
            <div className="sponsors-carousel sponsors-carousel-ltr sponsors-carousel-delayed">
              <div className="sponsors-carousel-track">
                {mediaPartners.map((partner) => (
                  <div key={`media-bottom-${partner.id}`} className="sponsors-carousel-item">
                    <div className="sponsors-media-card-wrapper">
                      <div className="sponsors-media-card-inner">
                        <img
                          src={partner.logo}
                          alt={`Media Partner ${partner.id}`}
                          className="sponsors-media-logo"
                        />
                      </div>
                      <a
                        href={partner.link || "#"}
                        className="mdprt-crd-lrnmr-actn-btn-wrpr-elmt-v2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!partner.link) e.preventDefault();
                        }}
                      >
                        <span>Learn More</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
                {mediaPartners.map((partner) => (
                  <div key={`media-bottom-duplicate-${partner.id}`} className="sponsors-carousel-item">
                    <div className="sponsors-media-card-wrapper">
                      <div className="sponsors-media-card-inner">
                        <img
                          src={partner.logo}
                          alt={`Media Partner ${partner.id}`}
                          className="sponsors-media-logo"
                        />
                      </div>
                      <a
                        href={partner.link || "#"}
                        className="mdprt-crd-lrnmr-actn-btn-wrpr-elmt-v2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!partner.link) e.preventDefault();
                        }}
                      >
                        <span>Learn More</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
{/* ==================== SERIES SUPPORT PARTNERS ==================== */}
<section className="sponsors-series-section">
  <div className="sponsors-series-container">

    <div className="sponsors-series-header">
      <h2 className="sponsors-series-title">
        Series <span className="sponsors-series-highlight">Support Partners</span>
      </h2>
      <p className="sponsors-series-subtitle">
        Contributing to the Success of the Event
      </p>
    </div>

    <div className="sponsors-carousel-wrapper">
 <div className="sponsors-carousel support-static">
      <div className="support-center-track">

          {supportPartners.map((partner) => (
            <div key={`support-${partner.id}`} className="sponsors-carousel-item">
              <div className="sponsors-series-card-wrapper">
                <div className="sponsors-series-card-inner">
                  <img
                    src={partner.logo}
                    alt={`Support Partner ${partner.id}`}
                    className="sponsors-series-logo"
                  />
                </div>
                <a
                  href={partner.link || "#"}
                  className="spnsr-crd-lrnmr-actn-btn-wrpr-elmt-v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!partner.link) e.preventDefault();
                  }}
                >
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>

    <div className="sponsors-series-decoration"></div>
  </div>
</section>
          <div className="sponsors-media-decoration"></div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;