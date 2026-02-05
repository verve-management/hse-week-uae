import React, { useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const heroTextRef = useRef(null);
  const [activeTab, setActiveTab] = useState("gallery");
  const [selectedImage, setSelectedImage] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    const text = heroTextRef.current;
    if (text) {
      const letters = text.textContent.split("");
      text.textContent = "";
      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = styles.heroLetter;
        span.style.animationDelay = `${index * 0.05}s`;
        text.appendChild(span);
      });
    }
  }, []);

  const gallery2025 = [
    { id: 1, url: "/Gallery/Gallery1.webp", alt: "HSE WEEK UAE" },
    { id: 2, url: "/Gallery/Gallery2.webp", alt: "HSE WEEK UAE" },
    { id: 3, url: "/Gallery/Gallery3.webp", alt: "HSE WEEK UAE" },
    { id: 4, url: "/Gallery/Gallery4.webp", alt: "HSE WEEK UAE" },
    { id: 5, url: "/Gallery/Gallery5.webp", alt: "HSE WEEK UAE" },
    { id: 6, url: "/Gallery/Gallery6.webp", alt: "HSE WEEK UAE" },
    { id: 7, url: "/Gallery/Gallery7.webp", alt: "HSE WEEK UAE" },
    { id: 8, url: "/Gallery/Gallery8.webp", alt: "HSE WEEK UAE" },
    { id: 9, url: "/Gallery/Gallery9.webp", alt: "HSE WEEK UAE" },
    { id: 10, url: "/Gallery/Gallery10.webp", alt: "HSE WEEK UAE" },
    { id: 11, url: "/Gallery/Gallery11.webp", alt: "HSE WEEK UAE" },
    { id: 12, url: "/Gallery/Gallery12.webp", alt: "HSE WEEK UAE" },
    { id: 13, url: "/Gallery/Gallery13.webp", alt: "HSE WEEK UAE" },
    { id: 14, url: "/Gallery/Gallery14.webp", alt: "HSE WEEK UAE" },
    { id: 15, url: "/Gallery/Gallery15.webp", alt: "HSE WEEK UAE" },
    { id: 16, url: "/Gallery/Gallery16.webp", alt: "HSE WEEK UAE" },
    { id: 17, url: "/Gallery/Gallery17.webp", alt: "HSE WEEK UAE" },
    { id: 18, url: "/Gallery/Gallery18.webp", alt: "HSE WEEK UAE" },
    { id: 19, url: "/Gallery/Gallery19.webp", alt: "HSE WEEK UAE" },
    { id: 20, url: "/Gallery/Gallery20.webp", alt: "HSE WEEK UAE" },
    { id: 21, url: "/Gallery/Gallery21.webp", alt: "HSE WEEK UAE" },
    { id: 22, url: "/Gallery/Gallery22.webp", alt: "HSE WEEK UAE" },
    { id: 23, url: "/Gallery/Gallery23.webp", alt: "HSE WEEK UAE" },
    { id: 24, url: "/Gallery/Gallery24.webp", alt: "HSE WEEK UAE" },
    { id: 25, url: "/Gallery/Gallery25.webp", alt: "HSE WEEK UAE" },
    { id: 26, url: "/Gallery/Gallery26.webp", alt: "HSE WEEK UAE" },
    { id: 27, url: "/Gallery/Gallery27.webp", alt: "HSE WEEK UAE" },
    { id: 28, url: "/Gallery/Gallery28.webp", alt: "HSE WEEK UAE" },
    { id: 29, url: "/Gallery/Gallery29.webp", alt: "HSE WEEK UAE" },
    { id: 30, url: "/Gallery/Gallery30.webp", alt: "HSE WEEK UAE" },
    { id: 31, url: "/Gallery/Gallery31.webp", alt: "HSE WEEK UAE" },
    { id: 32, url: "/Gallery/Gallery32.webp", alt: "HSE WEEK UAE" },
    { id: 33, url: "/Gallery/Gallery33.webp", alt: "HSE WEEK UAE" },
    { id: 34, url: "/Gallery/Gallery34.webp", alt: "HSE WEEK UAE" },
    { id: 35, url: "/Gallery/Gallery35.webp", alt: "HSE WEEK UAE" },
    { id: 36, url: "/Gallery/Gallery36.webp", alt: "HSE WEEK UAE" },
    { id: 37, url: "/Gallery/Gallery37.webp", alt: "HSE WEEK UAE" },
    { id: 38, url: "/Gallery/Gallery38.webp", alt: "HSE WEEK UAE" },
    { id: 39, url: "/Gallery/Gallery39.webp", alt: "HSE WEEK UAE" },
    { id: 40, url: "/Gallery/Gallery40.webp", alt: "HSE WEEK UAE" },
    { id: 41, url: "/Gallery/Gallery44.webp", alt: "HSE WEEK UAE" },
    { id: 42, url: "/Gallery/Gallery42.webp", alt: "HSE WEEK UAE" },
    { id: 43, url: "/Gallery/Gallery43.webp", alt: "HSE WEEK UAE" },
    { id: 44, url: "/Gallery/Gallery45.webp", alt: "HSE WEEK UAE" },
    { id: 45, url: "/Gallery/Gallery46.webp", alt: "HSE WEEK UAE" },
    { id: 46, url: "/Gallery/Gallery47.webp", alt: "HSE WEEK UAE" },
    { id: 47, url: "/Gallery/Gallery48.webp", alt: "HSE WEEK UAE" },
    { id: 48, url: "/Gallery/Gallery49.webp", alt: "HSE WEEK UAE" },
    { id: 49, url: "/Gallery/Gallery50.webp", alt: "HSE WEEK UAE" },
    { id: 50, url: "/Gallery/Gallery51.webp", alt: "HSE WEEK UAE" },
    { id: 51, url: "/Gallery/Gallery52.webp", alt: "HSE WEEK UAE" },
    { id: 52, url: "/Gallery/Gallery53.webp", alt: "HSE WEEK UAE" },
    { id: 53, url: "/Gallery/Gallery54.webp", alt: "HSE WEEK UAE" },
    { id: 54, url: "/Gallery/Gallery55.webp", alt: "HSE WEEK UAE" },
    { id: 55, url: "/Gallery/Gallery56.webp", alt: "HSE WEEK UAE" },
    { id: 56, url: "/Gallery/Gallery57.webp", alt: "HSE WEEK UAE" },
    { id: 57, url: "/Gallery/Gallery58.webp", alt: "HSE WEEK UAE" },
    { id: 58, url: "/Gallery/Gallery59.webp", alt: "HSE WEEK UAE" },
    { id: 59, url: "/Gallery/Gallery60.webp", alt: "HSE WEEK UAE" },
    { id: 60, url: "/Gallery/Gallery61.webp", alt: "HSE WEEK UAE" },
    { id: 61, url: "/Gallery/Gallery61.webp", alt: "HSE WEEK UAE" },
    { id: 62, url: "/Gallery/Gallery62.webp", alt: "HSE WEEK UAE" },
    { id: 63, url: "/Gallery/Gallery63.webp", alt: "HSE WEEK UAE" },
    { id: 64, url: "/Gallery/Gallery64.webp", alt: "HSE WEEK UAE" },
    { id: 65, url: "/Gallery/Gallery65.webp", alt: "HSE WEEK UAE" },
    { id: 66, url: "/Gallery/Gallery66.webp", alt: "HSE WEEK UAE" },
    { id: 67, url: "/Gallery/Gallery67.webp", alt: "HSE WEEK UAE" },
    { id: 68, url: "/Gallery/Gallery68.webp", alt: "HSE WEEK UAE" },
    { id: 69, url: "/Gallery/Gallery69.webp", alt: "HSE WEEK UAE" },
    { id: 70, url: "/Gallery/Gallery70.webp", alt: "HSE WEEK UAE" },
    { id: 71, url: "/Gallery/Gallery71.webp", alt: "HSE WEEK UAE" },
    { id: 72, url: "/Gallery/Gallery72.webp", alt: "HSE WEEK UAE" },
    { id: 73, url: "/Gallery/Gallery73.webp", alt: "HSE WEEK UAE" },
    { id: 74, url: "/Gallery/Gallery74.webp", alt: "HSE WEEK UAE" },
    { id: 75, url: "/Gallery/Gallery75.webp", alt: "HSE WEEK UAE 2026" },

  ];

  // Dummy YouTube testimonial videos — replace IDs with real ones
  const testimonials = [
    { id: 1, videoId: "eZhUXVd33Zo", title: "Procuretech 2025 – Keynote Highlights", speaker: "Industry Leader" },
    { id: 2, videoId: "HpQccDs6eNQ", title: "Supply Chain Innovation Panel", speaker: "Panel Discussion" },
    { id: 3, videoId: "j3QPMEUDf1E", title: "Procurement Excellence Awards", speaker: "Award Ceremony" },
    { id: 4, videoId: "w7mgPPcrX7E", title: "Digital Transformation in Logistics", speaker: "Tech Summit" },
    { id: 5, videoId: "Qeb4vOQiIpU", title: "Sustainable Sourcing Masterclass", speaker: "Workshop Recap" },
    { id: 6, videoId: "avVTXgb-Qeg", title: "AI in Modern Procurement", speaker: "Innovation Talk" },
    { id: 7, videoId: "TPJgWns9OHo", title: "Global Supply Chain Trends 2025", speaker: "Keynote Recap" },
    { id: 8, videoId: "Eq1gDw9zFuo", title: "Vendor Management Best Practices", speaker: "Expert Session" },
    { id: 9, videoId: "0BNyzzusxpo", title: "Cost Optimization Strategies", speaker: "CFO Roundtable" },
    { id: 10, videoId: "gthrWWqrtX4", title: "Closing Ceremony & Highlights", speaker: "Event Recap" },
    { id: 11, videoId: "fjlCkYPDcZo", title: "Closing Ceremony & Highlights", speaker: "Event Recap" },

  ];

  /* ── Lightbox helpers ── */
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const currentIndex = gallery2025.findIndex((img) => img.id === selectedImage.id);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % gallery2025.length;
    } else {
      newIndex = (currentIndex - 1 + gallery2025.length) % gallery2025.length;
    }
    setSelectedImage(gallery2025[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className={styles.galleryPageWrapper}>
      {/* ── Hero ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContentWrapper}>
          <h1 className={styles.heroMainTitle} ref={heroTextRef}>
            Event&nbsp;Gallery
          </h1>
          <p className={styles.heroMainSubtitle}>
            Capturing Moments of Excellence & Innovation
          </p>
          <div className={styles.heroDividerLine}></div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          {/* Header */}
          <div className={styles.galleryHeader}>
            <h2 className={styles.galleryTitle}>
              Event Highlights & <span className={styles.galleryHighlight}>Testimonials</span>
            </h2>
            <p className={styles.gallerySubtitle}>
              Discover the Experience: Explore Our Event Gallery & Testimonials
            </p>
          </div>

          {/* Tab Selector — Gallery | Testimonials */}
          <div className={styles.yearSelectorWrapper}>
            <div className={styles.yearSelector}>
              <button
                className={`${styles.yearSelectorBtn} ${activeTab === "gallery" ? styles.active : ""}`}
                onClick={() => setActiveTab("gallery")}
              >
                <span className={styles.yearBtnLabel}>Gallery</span>
                <span className={styles.yearBtnCount}>{gallery2025.length} Photos</span>
              </button>
              <button
                className={`${styles.yearSelectorBtn} ${activeTab === "testimonials" ? styles.active : ""}`}
                onClick={() => setActiveTab("testimonials")}
              >
                <span className={styles.yearBtnLabel}>Testimonials</span>
                <span className={styles.yearBtnCount}>{testimonials.length} Videos</span>
              </button>
              <div
                className={styles.yearSelectorSlider}
                style={{
                  transform: activeTab === "testimonials" ? "translateX(100%)" : "translateX(0)",
                }}
              ></div>
            </div>
          </div>

          {/* ── Gallery Grid ── */}
          {activeTab === "gallery" && (
            <div className={styles.galleryGrid}>
              {gallery2025.map((image, index) => (
                <div
                  key={image.id}
                  className={styles.galleryItem}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => openLightbox(image)}
                >
                  <div className={styles.galleryImageWrapper}>
                    <img src={image.url} alt={image.alt} className={styles.galleryImage} loading="lazy" />
                    <div className={styles.galleryOverlay}>
                      <div className={styles.galleryOverlayContent}>
                        <svg className={styles.expandIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <polyline points="9 21 3 21 3 15"></polyline>
                          <line x1="21" y1="3" x2="14" y2="10"></line>
                          <line x1="3" y1="21" x2="10" y2="14"></line>
                        </svg>
                        <span className={styles.viewText}>View Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Testimonials Grid ── */}
          {activeTab === "testimonials" && (
            <div className={styles.testimonialsGrid}>
              {testimonials.map((video, index) => (
                <div
                  key={video.id}
                  className={styles.testimonialCard}
                  style={{ animationDelay: `${index * 0.07}s` }}
                >
                  {/* Video Frame */}
                  <div className={styles.videoFrame}>
                    {playingVideo === video.id ? (
                      /* Embedded iframe */
                      <iframe
                        className={styles.videoIframe}
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      /* Thumbnail + Play overlay */
                      <div className={styles.videoPlaceholder} onClick={() => setPlayingVideo(video.id)}>
                        <img
                          className={styles.videoThumbnail}
                          src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                          alt={video.title}
                        />
                        <div className={styles.playButtonWrapper}>
                          <button className={styles.playButton} type="button">
                            <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="5,3 19,12 5,21"></polygon>
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.testimonialTitle}>{video.title}</h3>
                    <p className={styles.testimonialSpeaker}>{video.speaker}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.alt} className={styles.lightboxImage} />
            <div className={styles.lightboxCaption}>
              <span className={styles.lightboxTitle}>{selectedImage.alt}</span>
              <span className={styles.lightboxCounter}>
                {gallery2025.findIndex((img) => img.id === selectedImage.id) + 1} / {gallery2025.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;