import React, { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';
import ContactData from './ContactData';
import {sendContactForm} from "../../../api/email"
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";


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

  // Submit handler (INSTANT response)
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

    // ⭐ ADD THIS LINE
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
          <h1 className={styles.heroMainTitle}>
            <span ref={heroTextRef}>Get In Touch</span>
          </h1>

          <p className={styles.heroMainSubtitle}>
            Let's start a conversation about your success
          </p>
          <div className={styles.heroDividerLine}></div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className={styles.contactContentSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contentGrid}>
            
            {/* LEFT SIDE */}
            <div className={styles.leftColumn}>
              <div className={styles.infoHeader}>
                <h2 className={styles.infoMainTitle}>
                  Contact <span className={styles.infoHighlight}>Information</span>
                </h2>
                <p className={styles.infoDescription}>
                  Reach out through any of these channels and we'll respond promptly
                </p>
              </div>

              <div className={styles.infoCardsStack}>
                {/* Location */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
  <FiMapPin className={styles.infoIcon} />
</div>

                  <div className={styles.infoContent}>
                    <h3 className={styles.infoTitle}>Location</h3>
                    <p className={styles.infoText}>1702 & 1706, Mazaya Business Avenue BB2<br/>AI Thanya Fifth, JLT, Dubai, UAE</p>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.infoCard}>
                 <div className={styles.infoIconWrapper}>
  <FiMail className={styles.infoIcon} />
</div>

                  <div className={styles.infoContent}>
                    <h3 className={styles.infoTitle}>Email</h3>
                    <p className={styles.infoText}>info@verve-management.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.infoCard}>
                 <div className={styles.infoIconWrapper}>
  <FiPhone className={styles.infoIcon} />
</div>

                  <div className={styles.infoContent}>
                    <h3 className={styles.infoTitle}>Phone</h3>
                    <p className={styles.infoText}>+971 4 243 4677/88</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className={styles.rightColumn}>
              <div className={styles.formWrapper}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>
                    Send Us a <span className={styles.formHighlight}>Message</span>
                  </h2>
                  <p className={styles.formSubtitle}>We'll get back to you within 24 hours</p>
                </div>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  {/* NAME + EMAIL */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Full Name *</label>
                      <input type="text" name="name" className={styles.formInput} value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Email Address *</label>
                      <input type="email" name="email" className={styles.formInput} value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  {/* PHONE + COMPANY */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Phone Number</label>
                      <input type="tel" name="phone" className={styles.formInput} value={formData.phone} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Company Name</label>
                      <input type="text" name="company" className={styles.formInput} value={formData.company} onChange={handleChange} />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Message *</label>
                    <textarea name="message" rows="5" className={styles.formTextarea} value={formData.message} onChange={handleChange} required />
                  </div>

                  {/* SUBMIT */}
                  <button type="submit" className={styles.submitButton}>
                    <span className={styles.buttonText}>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
