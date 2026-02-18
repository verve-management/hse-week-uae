import React, { useEffect, useRef, useState } from 'react';
import styles from './IndividualRegistration.module.css';
import { sendContactForm } from "../../../api/email";
import { useNavigate } from "react-router-dom";

const IndividualRegistration = () => {
  const heroTextRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    country: '',
    contactNumber: '',
    email: ''
  });

  useEffect(() => {
    const text = heroTextRef.current;
    if (!text) return;

    const full = text.textContent;
    text.textContent = "";

    [...full].forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter;
      span.className = styles.heroLetter;
      span.style.animationDelay = `${index * 0.04}s`;
      text.appendChild(span);
    });

    setTimeout(() => {
      text.classList.add(styles.animated);
    }, full.length * 40 + 300);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const payload = {
      ...formData,
      date: now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      time: now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      pageUrl: window.location.href,
      formType: "Individual Registration"
    };
    try {
      await sendContactForm(payload);
      alert("Registration submitted successfully!");
      setFormData({ firstName: '', lastName: '', jobTitle: '', companyName: '', country: '', contactNumber: '', email: '' });
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Failed to submit registration. Please try again.");
    }
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  return (
    <div className={styles.individualRegistrationWrapper}>

      {/* ── Hero Section ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroDecoLine}></div>

          <h1 className={styles.heroMainTitle}>
            <span ref={heroTextRef}>Individual Registration</span>
          </h1>

          <p className={styles.heroMainSubtitle}>
            Secure Your Individual Pass for the Premier HSE Summit
          </p>

          <div className={styles.heroDecoLine}></div>
        </div>
      </section>

      {/* ── Plan + Form side-by-side ── */}
      <section className={styles.mainSection}>
        <div className={styles.mainContainer}>

          {/* Left: Plan Card */}
          <aside className={styles.planCard}>
            <div className={styles.planCardTopAccent}></div>

            <div className={styles.planHeader}>
              <div className={styles.planIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span className={styles.planLabel}>INDIVIDUAL PASS</span>
              <div className={styles.planPriceWrapper}>
                <span className={styles.planCurrency}>$</span>
                <span className={styles.planPrice}>795</span>
              </div>
              <p className={styles.planVatNote}>Exclusive of VAT</p>
            </div>

            <div className={styles.planDivider}></div>

            <div className={styles.planBody}>
              <h3 className={styles.includesTitle}>Ticket Includes</h3>
              <ul className={styles.includesList}>
                {[
                  "Complete access to the two-day conference sessions",
                  "5 Star Luncheon on both days",
                  "Coffee Breaks with breakfast networking sessions",
                  "Access to the HSE Middle East Awards",
                ].map((item, i) => (
                  <li key={i} className={styles.includesItem}>
                    <span className={styles.checkDot}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.planDivider}></div>

            <div className={styles.planFooter}>
              <h3 className={styles.helpTitle}>Need Help?</h3>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+971 4 243 4677/88</span>
                </div>
                <div className={styles.contactItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>info@verve-management.com</span>
                </div>
              </div>
              <button className={styles.contactUsButton} onClick={() => navigate("/contact")}>
                Contact Us
              </button>
            </div>
          </aside>

          {/* Right: Form */}
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Complete Your Registration</h2>
              <p className={styles.formSubtitle}>Fill in your details to secure your spot</p>
            </div>

            <form className={styles.registrationForm} onSubmit={handleSubmit}>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>First Name *</label>
                  <input type="text" name="firstName" className={styles.formInput}
                    value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Last Name *</label>
                  <input type="text" name="lastName" className={styles.formInput}
                    value={formData.lastName} onChange={handleInputChange} required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Job Title *</label>
                  <input type="text" name="jobTitle" className={styles.formInput}
                    value={formData.jobTitle} onChange={handleInputChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Company Name *</label>
                  <input type="text" name="companyName" className={styles.formInput}
                    value={formData.companyName} onChange={handleInputChange} required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Country *</label>
                  <select name="country" className={styles.formSelect}
                    value={formData.country} onChange={handleInputChange} required>
                    <option value="">-- Select --</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Contact Number *</label>
                  <input type="tel" name="contactNumber" className={styles.formInput}
                    value={formData.contactNumber} onChange={handleInputChange} required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email *</label>
                <input type="email" name="email" className={styles.formInput}
                  value={formData.email} onChange={handleInputChange} required />
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>SUBMIT REGISTRATION</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ── Book a Seat Section ── */}
      <section className={styles.bookSeatSection}>
        <div className={styles.bookSeatContainer}>
          <div className={styles.bookSeatContent}>

            <div className={styles.bookSeatInfo}>
              <div className={styles.bookSeatBadge}><span>BOOK A SEAT</span></div>
              <h2 className={styles.bookSeatTitle}>
                DON'T MISS OUR <span className={styles.bookSeatHighlight}>CONFERENCE EVENT!</span>
              </h2>
              <p className={styles.bookSeatDescription}>
                Discover new horizons in business, technology, and beyond. Network with industry leaders,
                gain invaluable insights, and chart the course for future success. Don't miss out on this
                unparalleled opportunity to expand your knowledge and connections.
              </p>
            </div>

            <div className={styles.bookSeatImage}>
              <img src="/KsaGallery/Gallery33.webp" alt="Conference Event" className={styles.seatImage} />
              <div className={styles.imageOverlay}></div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default IndividualRegistration;