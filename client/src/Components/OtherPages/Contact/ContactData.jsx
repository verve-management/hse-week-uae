import React from 'react';
import styles from './ContactData.module.css';

const ContactData = () => {
  return (
    <div className={styles.contactDataWrapper}>
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          
          {/* Left Side - Image */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src="/ContactImages/dubai-towers.webp" 
                alt="Dubai Marina Skyline" 
                className={styles.contactImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className={styles.infoSection}>
            <div className={styles.infoContent}>
              <p className={styles.sectionLabel}>Locations</p>
              <h2 className={styles.mainHeading}>Get in touch</h2>

              <div className={styles.contactDetailsGrid}>
                
                {/* Venue */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <h3 className={styles.contactTitle}>Venue</h3>
                    <p className={styles.contactDetail}>Grosvenor House, a Luxury Collection Hotel</p>
                  </div>
                </div>

                {/* Location */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <h3 className={styles.contactTitle}>Location</h3>
                    <p className={styles.contactDetail}>Al Emreef St - Dubai Marina - Dubai UAE</p>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <h3 className={styles.contactTitle}>Email</h3>
                    <a href="mailto:info@verve-management.com" className={styles.contactLink}>
                      info@verve-management.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <h3 className={styles.contactTitle}>Phone</h3>
                    <a href="tel:+97142434677" className={styles.contactLink}>
                      +971 4 243 4677/88
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0449725474234!2d55.13796231501143!3d25.08086658395162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b3c1c3b1c1d%3A0x5f3c1c3b1c3b1c1d!2sGrosvenor%20House%2C%20a%20Luxury%20Collection%20Hotel%2C%20Dubai!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Grosvenor House Location"
          ></iframe>
          <div className={styles.mapOverlay}></div>
        </div>
      </section>
    </div>
  );
};

export default ContactData;