import React, { useState, useEffect, useRef } from 'react';
import styles from './GalleryHome.module.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [visibleThumbnailStart, setVisibleThumbnailStart] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const autoPlayIntervalRef = useRef(null);
  const sectionRef = useRef(null);

  // Generate image paths
 const images = [
  { id: 0, src: "/Gallery/Gallery1.webp", alt: "Gallery Image 1" },
  { id: 1, src: "/KsaGallery/Gallery1.webp", alt: "KSA Gallery Image 1" },
  { id: 2, src: "/Gallery/Gallery2.webp", alt: "Gallery Image 2" },
  { id: 3, src: "/KsaGallery/Gallery2.webp", alt: "KSA Gallery Image 2" },
  { id: 4, src: "/Gallery/Gallery3.webp", alt: "Gallery Image 3" },
  { id: 5, src: "/KsaGallery/Gallery3.webp", alt: "KSA Gallery Image 3" },
  { id: 6, src: "/Gallery/Gallery4.webp", alt: "Gallery Image 4" },
  { id: 7, src: "/KsaGallery/Gallery4.webp", alt: "KSA Gallery Image 4" },
  { id: 8, src: "/KsaGallery/Gallery5.webp", alt: "KSA Gallery Image 4" },
  { id: 9, src: "/KsaGallery/Gallery6.webp", alt: "KSA Gallery Image 4" },
  { id: 10, src: "/KsaGallery/Gallery7.webp", alt: "KSA Gallery Image 4" },
  { id: 11, src: "/KsaGallery/Gallery8.webp", alt: "KSA Gallery Image 4" },
  { id: 12, src: "/KsaGallery/Gallery9.webp", alt: "KSA Gallery Image 4" },
  { id: 13, src: "/KsaGallery/Gallery10.webp", alt: "KSA Gallery Image 4" },
  { id: 14, src: "/KsaGallery/Gallery11.webp", alt: "KSA Gallery Image 4" },
  { id: 15, src: "/KsaGallery/Gallery12.webp", alt: "KSA Gallery Image 4" },

];


  const VISIBLE_THUMBNAILS = 4;

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        setSelectedImage((prev) => {
          const next = (prev + 1) % images.length;
          // Update visible thumbnails to show the selected image
          updateVisibleThumbnails(next);
          return next;
        });
      }, 3000);
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying, images.length]);

  // Update visible thumbnails based on selected image
  const updateVisibleThumbnails = (imageIndex) => {
    // Calculate the start index to keep the selected image visible
    let newStart = visibleThumbnailStart;
    
    // If selected image is outside visible range, adjust the start
    if (imageIndex < visibleThumbnailStart) {
      newStart = imageIndex;
    } else if (imageIndex >= visibleThumbnailStart + VISIBLE_THUMBNAILS) {
      newStart = imageIndex - VISIBLE_THUMBNAILS + 1;
    }
    
    // Ensure we don't go beyond bounds
    newStart = Math.max(0, Math.min(newStart, images.length - VISIBLE_THUMBNAILS));
    
    setVisibleThumbnailStart(newStart);
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
    updateVisibleThumbnails(index);
    
    // Reset auto-play interval
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = setInterval(() => {
        setSelectedImage((prev) => {
          const next = (prev + 1) % images.length;
          updateVisibleThumbnails(next);
          return next;
        });
      }, 3000);
    }
  };

  // Toggle auto-play
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Get visible thumbnails (only 4 at a time)
  const visibleThumbnails = images.slice(
    visibleThumbnailStart,
    visibleThumbnailStart + VISIBLE_THUMBNAILS
  );

  return (
    <section ref={sectionRef} className={`${styles.gallerySection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.headingWrapper}>
          <h2 className={styles.sectionHeading}>Gallery <span>Highlights</span> </h2>
          <p className={styles.sectionSubheading}>
            Explore our beautiful collection of images
          </p>
        </div>

        {/* Gallery Layout - Main Image LEFT, Thumbnails RIGHT */}
      {/* Gallery Layout - Main Image LEFT, Thumbnails RIGHT */}
<div className={styles.galleryBackground}>
  <div className={styles.galleryLayout}>

          {/* Left Side: Main Image Display */}
          <div className={styles.mainImageWrapper}>
            <div className={styles.mainImageContainer}>
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className={styles.mainImage}
                key={selectedImage}
              />
              
              {/* Image Counter */}
              <div className={styles.imageCounter}>
                {selectedImage + 1} / {images.length}
              </div>

              {/* Auto-play Control */}
              <button
                className={styles.autoPlayToggle}
                onClick={toggleAutoPlay}
                aria-label={isAutoPlaying ? 'Pause auto-play' : 'Play auto-play'}
              >
                {isAutoPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                  </svg>
                )}
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              className={`${styles.navArrow} ${styles.navArrowPrev}`}
              onClick={() => handleThumbnailClick((selectedImage - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className={`${styles.navArrow} ${styles.navArrowNext}`}
              onClick={() => handleThumbnailClick((selectedImage + 1) % images.length)}
              aria-label="Next image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Right Side: Thumbnail Column (Only 4 Visible) */}
          <div className={styles.thumbnailColumn}>
            {visibleThumbnails.map((image, index) => {
              const actualIndex = visibleThumbnailStart + index;
              return (
                <div
                  key={image.id}
                  className={`${styles.thumbnail} ${
                    selectedImage === actualIndex ? styles.thumbnailActive : ''
                  }`}
                  onClick={() => handleThumbnailClick(actualIndex)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.thumbnailImage}
                    loading="lazy"
                  />
                  {selectedImage === actualIndex && (
                    <div className={styles.thumbnailOverlay}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Thumbnail Strip */}
        <div className={styles.mobileThumbnailStrip}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${styles.mobileThumbnail} ${
                selectedImage === index ? styles.mobileThumbnailActive : ''
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.mobileThumbnailImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;