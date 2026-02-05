import React, { useEffect, useRef, useState } from 'react';
import styles from './AwardCategory.module.css';
import award from "../../../assets/award.png"
import { FaTrophy, FaStar, FaLink, FaClipboardList } from "react-icons/fa";
import {sendContactForm} from "../../../api/email"
const AwardCategory = () => {
  const heroTextRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('procurement');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    category: ''
  });

  const procurementAwards = [
    'Procurement Transformation of the Year',
    'Best Procurement Technology Implementation',
    'Best Supplier Relationship Management Initiative',
    'Procurement Innovation of the Year',
    'Best Procurement Impact on Sustainability',
    'Best Procurement Impact on Digital Transformation',
    'Best Procurement Impact on Risk Management',
    'Best Procurement Impact on Cost Reduction',
    'Best Overall Procurement Team',
    'Innovation in Procurement',
    'Sustainability in Procurement',
    'Best Use of Technology in Procurement',
    'Best Procurement Transformation Project',
    'Best Procurement Strategy',
    'Digital Transformation in Procurement'
  ];

  const supplyChainAwards = [
    'Supply Chain Innovation',
    'Best Supply Chain Team of the Year',
    'Leader in Supply Chain',
    'Sustainable Supply Chain Practices',
    'Risk Management in Supply Chain',
    'Digital Transformation in Supply Chain'
  ];

  const individualAwards = [
    'Procurement Professional of the Year',
    'Supply Chain Leader of the Year',
    'Chief Procurement Officer of the Year'
  ];

  const nominationCategories = [
    'Procurement Transformation of the Year',
    'Best Procurement Technology Implementation',
    'Best Supplier Relationship Management Initiative',
    'Procurement Innovation of the Year',
    'Best Procurement impact on Sustainability',
    'Best Procurement impact on Digital Transformation',
    'Best Procurement impact on Risk Management',
    'Best Procurement impact on Cost Reduction',
    'Best Overall Procurement Team',
    'Innovation in Procurement',
    'Sustainability in Procurement',
    'Best Use of Technology in Procurement',
    'Best Procurement Transformation Project',
    'Best Procurement Strategy',
    'Digital Transformation Procurement',
    'Supply Chain Innovation',
    'Best Supply Chain Team of the Year',
    'Leader in Supply Chain',
    'Sustainable Supply Chain Practices',
    'Risk Management in Supply Chain',
    'Digital Transformation in Supply Chain',
    'Procurement Professional of the Year',
    'Supply Chain Leader of the year',
    'Chief Procurement Officer of the Year'
  ];

  const rules = [
    'All the nominations are to be submitted on the official link of Verve Management',
    'Nominations will only be valid if submitted on the website: https://asia.meprocuretech.com/ OR on awards@verve-management.com',
    'If sending an email, the subject line should be: YOUR COMPANY NAME & NOMINATION: (MENTION THE CATEGORY)',
    'Request the nominators to kindly provide the supporting documents for each of their claims.',
    'More supporting documents will gain more trust & weightage by the jury.',
    'For each category, a separate nomination needs to be filled.',
    'All the nominations will be evaluated by the appointed honorable jury members.',
    'Jury\'s decision will be final and cannot be challenged.',
    'In case of a tie, Jury Chairperson will have a final call.',
    'The official language of communication would be English, all the communication sent should be in English for the jury to evaluate with convenience.',
    'All the information provided in the nominations will be treated as confidential information and will be accessed by jury members & assigned to Verve Management only.',
    'None of the details from the nominations will be published or marketed in any of the public communications.',
    'If required, the Nominator would be contacted for additional information.',
    'The winner will be announced by the jury members or Verve Management during the awards evening only.',
    'Only the nominations with authorized signatures and stamps would be valid.',
    'Nominators can send the physical support documents for the nominations at 1702 & 1706, Al Mazaya BB2, Jumeirah Lakes Towers.',
    'Verve management will confirm the receipt of nominations to nominators by email.',
    'For any more queries you can reach out to info@verve-management.com or awards@verve-management.com',
    'All the information asked in the nomination form is a must. In case of incomplete information/irrelevant information, the nomination shall be disqualified.'
  ];

  const getCurrentAwards = () => {
    switch(activeCategory) {
      case 'procurement':
        return procurementAwards;
      case 'supplychain':
        return supplyChainAwards;
      case 'individual':
        return individualAwards;
      case 'rules':
        return null;
      default:
        return procurementAwards;
    }
  };

  const awards = getCurrentAwards();

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const pageUrl = window.location.href;

  // Build payload in standard format
  const payload = {
    formType: "Award Nomination",
    formHeading: "Award Nomination Form",  // appears at top of email

    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    category: formData.category,

    // Meta (always added last)
    date,
    time,
    pageUrl
  };

  try {
    await sendContactForm(payload);

    alert("Nomination submitted successfully!");

    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      category: ""
    });

  } catch (error) {
    console.error(error);
    alert("Failed to submit nomination. Please try again.");
  }
};


  return (
    <div className={styles.awardPageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContentWrapper}>
          <h1 className={styles.heroMainTitle} ref={heroTextRef}>
            Awards
          </h1>
          <p className={styles.heroMainSubtitle}>
            Recognizing Excellence in Procurement & Supply Chain
          </p>
          <div className={styles.heroDividerLine}></div>
        </div>
      </section>

      {/* Awards Grid Section */}
      <section className={styles.awardsGridSection}>
        <div className={styles.awardsGridContainer}>
          
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Procuretech & Supply Chain Asia <span className={styles.sectionHighlight}>Awards 2026</span>
            </h2>
            <p className={styles.sectionSubtitle}>Award Categories</p>
          </div>

          {/* Category Tabs */}
          <div className={styles.categoryTabs}>
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'procurement' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('procurement')}
            >
              <div className={styles.tabIconWrapper}>
                <FaTrophy className={styles.tabIcon} />
              </div>
              <div className={styles.tabContent}>
                <span className={styles.tabText}>Procurement Awards</span>
                <span className={styles.tabCount}>15 Categories</span>
              </div>
            </button>
            
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'supplychain' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('supplychain')}
            >
              <div className={styles.tabIconWrapper}>
                <FaLink className={styles.tabIcon} />
              </div>
              <div className={styles.tabContent}>
                <span className={styles.tabText}>Supply Chain Awards</span>
                <span className={styles.tabCount}>6 Categories</span>
              </div>
            </button>
            
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'individual' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('individual')}
            >
              <div className={styles.tabIconWrapper}>
                <FaStar className={styles.tabIcon} />
              </div>
              <div className={styles.tabContent}>
                <span className={styles.tabText}>Individual Awards</span>
                <span className={styles.tabCount}>3 Categories</span>
              </div>
            </button>
            
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'rules' ? styles.active : ''}`}
              onClick={() => handleCategoryChange('rules')}
            >
              <div className={styles.tabIconWrapper}>
                <FaClipboardList className={styles.tabIcon} />
              </div>
              <div className={styles.tabContent}>
                <span className={styles.tabText}>Rules & Regulations</span>
                <span className={styles.tabCount}>19 Guidelines</span>
              </div>
            </button>
          </div>

          {/* Awards Grid */}
          {activeCategory !== 'rules' && awards && (
            <div className={styles.awardsGrid}>
              {awards.map((awardTitle, index) => (
                <div 
                  key={index}
                  className={styles.awardCard}
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div className={styles.awardIcon}>
                    <img 
                      src={award}
                      alt="Award Trophy"
                      className={styles.awardImage}
                    />
                  </div>
                  <h3 className={styles.awardTitle}>{awardTitle}</h3>
                </div>
              ))}
            </div>
          )}

          {/* Rules & Regulations Content */}
          {activeCategory === 'rules' && (
            <div className={styles.rulesContent}>
              <div className={styles.rulesIntro}>
                <p className={styles.rulesIntroText}>
                  Please read the following rules and regulations carefully before submitting your nomination. 
                  Compliance with these guidelines is mandatory for all participants.
                </p>
              </div>
              
              <div className={styles.rulesList}>
                {rules.map((rule, index) => (
                  <div 
                    key={index} 
                    className={styles.ruleItem}
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    <div className={styles.ruleNumber}>{index + 1}</div>
                    <p className={styles.ruleText}>{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Nomination Form Section */}
      <section className={styles.nominationSection}>
        <div className={styles.nominationContainer}>
          
          <div className={styles.nominationHeader}>
            <h2 className={styles.nominationTitle}>
              Inquiry for <span className={styles.nominationHighlight}>Nomination</span>
            </h2>
            <p className={styles.nominationSubtitle}>
              Submit your nomination for the awards
            </p>
          </div>

          <form className={styles.nominationForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="firstName">
                  First Name of the Nominee *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={styles.formInput}
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter first name"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={styles.formInput}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  Nominee Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="nominee@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="phone">
                  Nominee Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.formInput}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="company">
                Nominee Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className={styles.formInput}
                value={formData.company}
                onChange={handleInputChange}
                required
                placeholder="Company name"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="category">
                Categories of Nomination *
              </label>
              <select
                id="category"
                name="category"
                className={styles.formSelect}
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a category</option>
                {nominationCategories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <button type="submit" className={styles.submitButton}>
              <span className={styles.buttonText}>Submit Nomination</span>
              <svg
                className={styles.buttonIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>

        </div>
      </section>
    </div>
  );
};

export default AwardCategory;