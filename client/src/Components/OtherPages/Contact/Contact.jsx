import React, { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';
import { sendContactForm } from "../../../api/email";
import { FiMapPin, FiMail, FiPhone, FiSend } from "react-icons/fi";

const Contact = () => {
  const heroTextRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // Hero text animation
  useEffect(() => {
    const text = heroTextRef.current;
    if (!text || text.dataset.animated) return;

    text.dataset.animated = "true";

    const originalText = text.textContent;
    text.textContent = "";

    [...originalText].forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter;
      span.className = styles.heroLetter;
      span.style.animationDelay = `${index * 0.05}s`;
      span.style.display = "inline-block";
      text.appendChild(span);
    });
  }, []);

  // Handle inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();

    const payload = {
      ...formData,
      date: now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
      pageUrl: window.location.href,
      formType: "Contact",
    };

    try {
      await sendContactForm(payload);
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Email Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.contactPageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroDecoLine}></div>
          <h1 className={styles.heroMainTitle}>
            <span ref={heroTextRef}>Get In Touch</span>
          </h1>
          <p className={styles.heroMainSubtitle}>
            Begin your journey to excellence with us
          </p>
          <div className={styles.heroDecoLine}></div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className={styles.contactContentSection}>
        <div className={styles.contactContainer}>
          
          {/* Contact Info Cards - Full Width Top */}
          <div className={styles.infoCardsGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoCardInner}>
                <div className={styles.infoIconWrapper}>
                  <FiMapPin className={styles.infoIcon} />
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Our Location</h3>
                  <p className={styles.infoText}>
                    1702 & 1706, Mazaya Business Avenue BB2<br />
                    AI Thanya Fifth, JLT, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardInner}>
                <div className={styles.infoIconWrapper}>
                  <FiMail className={styles.infoIcon} />
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Email Address</h3>
                  <p className={styles.infoText}>info@verve-management.com</p>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardInner}>
                <div className={styles.infoIconWrapper}>
                  <FiPhone className={styles.infoIcon} />
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Phone Number</h3>
                  <p className={styles.infoText}>+971 4 243 4677/88</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form and Map Grid */}
          <div className={styles.formMapGrid}>
            
            {/* LEFT - Contact Form */}
            <div className={styles.formColumn}>
              <div className={styles.formWrapper}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>
                    Send Us a <span className={styles.formHighlight}>Message</span>
                  </h2>
                 
                </div>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formInput}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className={styles.formInput}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className={styles.formInput}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Company Name</label>
                      <input
                        type="text"
                        name="company"
                        className={styles.formInput}
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Inc."
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Your Message *</label>
                    <textarea
                      name="message"
                      rows="5"
                      className={styles.formTextarea}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      required
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    <span className={styles.buttonText}>Send Message</span>
                    <FiSend className={styles.buttonIcon} />
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT - Map */}
            <div className={styles.mapColumn}>
              <div className={styles.mapWrapper}>
                <div className={styles.mapHeader}>
                  <h3 className={styles.mapTitle}>Visit Our Office</h3>
               
                </div>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.158987823975!2d55.143883!3d25.0692374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d63f552571b%3A0xdb1dc5440bf3a91b!2sVerve%20Management%20DMCC!5e0!3m2!1sen!2sae!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Verve Management Location"
                  ></iframe>
                </div>
                <div className={styles.mapFooter}>
                  <a
                    href="https://www.google.com/maps/dir//Verve+Management+DMCC,+Mazaya+Business+Avenue+-+1702%2F+1706,+BB2+-+Jumeirah+Lakes+Towers+-+Dubai+-+United+Arab+Emirates/@25.0692374,55.1460718,10z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.directionsButton}
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;