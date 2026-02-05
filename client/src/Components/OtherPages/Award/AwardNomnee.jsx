import React, { useEffect, useRef, useState } from "react";
import styles from "./AwardNominee.module.css";
import {sendContactForm} from "../../../api/email"

import logo1 from "../../../assets/AwardNomnee/img1.png";
import logo2 from "../../../assets/AwardNomnee/img2.png";
import logo3 from "../../../assets/AwardNomnee/img3.png";
import logo4 from "../../../assets/AwardNomnee/img4.png";

const AwardNominee = () => {
  const heroTextRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  });
  useEffect(() => {
    const text = heroTextRef.current;
    if (!text) return;

    const originalText = text.textContent;
    text.textContent = "";

    [...originalText].forEach((letter, index) => {
      const span = document.createElement("span");

      // ✅ Preserve spaces properly
      span.textContent = letter === " " ? "\u00A0" : letter;

      span.className = styles.heroLetter;
      span.style.animationDelay = `${index * 0.05}s`;
      span.style.display = "inline-block"; // 🔑 prevents collapsing

      text.appendChild(span);
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const pageUrl = window.location.href;

  // Build payload in your standard format
  const payload = {
    formType: "Top 50 Leader Nomination",
    formHeading: "Top 50 Procurement & Supply Chain Leaders Nomination",

    // user inputs
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,

    // auto fields
    date,
    time,
    pageUrl
  };

  try {
    await sendContactForm(payload);

    alert("Nomination submitted successfully!");

    // Reset fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: ""
    });

  } catch (error) {
    console.error(error);
    alert("Failed to submit nomination. Please try again.");
  }
};


  const leadershipQualities = [
    {
      title: "Strategic Sourcing",
      description:
        "Leveraging data analytics to make informed purchasing decisions.",
      icon: logo1,
    },
    {
      title: "Supplier Relationship Management",
      description:
        "Building strong partnerships that foster collaboration and innovation.",
      icon: logo2,
    },
    {
      title: "Sustainability Initiatives",
      description:
        "Implementing eco-friendly practices and promoting responsible sourcing.",
      icon: logo3,
    },
    {
      title: "Digital Transformation",
      description:
        "Embracing technology to enhance procurement processes and outcomes.",
      icon: logo4,
    },
  ];

  const logos = [logo1, logo2, logo3, logo4];

  const rules = [
    "All the nominations are to be submitted on the official link of Verve Management",
    "Nominations will only be valid if submitted on the website: https://asia.meprocuretech.com/ OR on awards@verve-management.com",
    "If sending an email, the subject line should be: YOUR COMPANY NAME & NOMINATION: (MENTION THE CATEGORY)",
    "Request the nominators to kindly provide the supporting documents for each of their claims.",
    "More supporting documents will gain more trust & weightage by the jury.",
    "For each category, a separate nomination needs to be filled.",
    "All the nominations will be evaluated by the appointed honorable jury members.",
    "Jury's decision will be final and cannot be challenged.",
    "In case of a tie, Jury Chairperson will have a final call.",
    "The official language of communication would be English, all the communication sent should be in English for the jury to evaluate with convenience.",
    "All the information provided in the nominations will be treated as confidential information and will be accessed by jury members & assigned to Verve Management only.",
    "None of the details from the nominations will be published or marketed in any of the public communications.",
    "If required, the Nominator would be contacted for additional information.",
    "The winner will be announced by the jury members or Verve Management during the awards evening only.",
    "Only the nominations with authorized signatures and stamps would be valid.",
    "Nominators can send the physical support documents for the nominations at 1702 & 1706, Al Mazaya BB2, Jumeirah Lakes Towers.",
    "Verve management will confirm the receipt of nominations to nominators by email.",
    "For any more queries you can reach out to info@verve-management.com or awards@verve-management.com",
    "All the information asked in the nomination form is a must. In case of incomplete information/irrelevant information, the nomination shall be disqualified.",
  ];

  return (
    <div className={styles.nomineePageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContentWrapper}>
          {/* <div className={styles.heroTag}>About</div> */}
          <h1 className={styles.heroMainTitle}>
            <span ref={heroTextRef}>Top 50 Procurement</span>
            <br />
            <span className={styles.noBreak}>& Supply Chain Leaders</span>
          </h1>

          <div className={styles.heroActions}></div>
        </div>
      </section>

      {/* Why Leaders Matter Section */}
      <section className={styles.whyMatterSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why These Leaders{" "}
              <span className={styles.sectionHighlight}>Matter</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Procurement plays a vital role in driving operational efficiency,
              cost savings, and sustainable practices. Our selection of the Top
              50 leaders highlights individuals who have demonstrated
              exceptional skills in:
            </p>
          </div>

          <div className={styles.qualitiesGrid}>
            {leadershipQualities.map((quality, index) => (
              <div
                key={index}
                className={styles.qualityCard}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.qualityIcon}>
                  <img src={quality.icon} alt={quality.title} />
                </div>

                <h3 className={styles.qualityTitle}>{quality.title}</h3>
                <p className={styles.qualityDescription}>
                  {quality.description}
                </p>
                <div className={styles.qualityGlow}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Spotlight Section */}
      <section className={styles.spotlightSection}>
        <div className={styles.container}>
          <div className={styles.spotlightContent}>
            <div className={styles.spotlightText}>
              <h2 className={styles.spotlightTitle}>
                A Spotlight on{" "}
                <span className={styles.spotlightHighlight}>Excellence</span>
              </h2>
              <p className={styles.spotlightDescription}>
                Each of these leaders brings unique strengths to their
                organizations, contributing to the growth and resilience of the
                procurement function. Through their visionary approaches, they
                are setting benchmarks and inspiring future generations of
                procurement professionals.
              </p>

              <h3 className={styles.celebrationTitle}>Join the Celebration</h3>
              <p className={styles.celebrationText}>
                We invite you to explore their inspiring stories, learn from
                their experiences, and discover the trends shaping the
                procurement landscape in the Middle East. Together, let's
                celebrate the achievements of these outstanding leaders who are
                not only driving their organizations forward but also making a
                positive impact in the industry.
              </p>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Stay Connected</h4>
                <p className={styles.socialText}>
                  Follow us for updates on future events, insights, and trends
                  in procurement. Join the conversation on social media using{" "}
                  <span className={styles.hashtag}>
                    #ProcurementLeadersAsia
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className={styles.spotlightImage}>
              <div className={styles.imageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop"
                  alt="Leadership Excellence"
                  className={styles.mainImage}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.imageBorder}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nomination Form Section */}
      <section className={styles.nominationSection}>
        <div className={styles.nominationContainer}>
          <div className={styles.nominationHeader}>
            <h2 className={styles.nominationTitle}>
              Inquiry for{" "}
              <span className={styles.nominationHighlight}>Nomination</span>
            </h2>
          </div>

          {/* ✅ FORM START */}
          <form className={styles.nominationForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  First Name of the Nominee *
                </label>
                <input
                  type="text"
                  name="firstName"
                  className={styles.formInput}
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  className={styles.formInput}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nominee Email *</label>
                <input
                  type="email"
                  name="email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nominee Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  className={styles.formInput}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Nominee Company *</label>
              <input
                type="text"
                name="company"
                className={styles.formInput}
                value={formData.company}
                onChange={handleInputChange}
                required
              />
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
          {/* ✅ FORM END */}
        </div>
      </section>

      {/* Rules & Regulations Section */}
      <section className={styles.rulesSection}>
        <div className={styles.rulesContainer}>
          <div className={styles.rulesHeader}>
            <h2 className={styles.rulesTitle}>
              Rules & <span className={styles.rulesHighlight}>Regulations</span>
            </h2>
            <p className={styles.rulesSubtitle}>
              Please read carefully before submitting your nomination
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
      </section>
    </div>
  );
};

export default AwardNominee;
