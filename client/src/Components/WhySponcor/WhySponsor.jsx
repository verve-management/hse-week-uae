import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./WhySponsor.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const WhySponsor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      id: 1,
      title: "Network & Generate Leads",
      description:
        "Optimize your networking opportunities by getting right in front of key prequalified decision makers based on seniority, budget availability, and motivation to learn about the latest technologies.",
      logo: logo1
    },
    {
      id: 2,
      title: "Demonstrate Thought Leadership",
      description:
        "Position your company as a thought leader by delivering a standalone presentation or moderating a panel discussion to a pre-qualified audience comprising decision-makers.",
      logo: logo2
    },
    {
      id: 3,
      title: "Brand Positioning",
      description:
        "Establish, strengthen and re-position your brand in front of business owners & technology leaders who are looking to re-align and strengthen their digital transformation strategies.",
      logo: logo3
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "backOut",
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const contactCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="why-sponsor-section" ref={ref}>
      <motion.div
        className="why-sponsor-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <div className="why-sponsor-header">
          <motion.h2 className="why-sponsor-title" variants={headerVariants}>
            Why <span className="why-sponsor-highlight">Sponsor</span>
          </motion.h2>
          <motion.p className="why-sponsor-subtitle" variants={subtitleVariants}>
            Fuel Procurement & Supply Chain Success
          </motion.p>
          {/* <motion.p className="why-sponsor-description" variants={descriptionVariants}>
            Gain direct access to Asia's top procurement & Supply Chain leaders, showcase your solutions, and build meaningful partnerships. Align your brand with innovation, thought leadership, and the digital future of procurement at the 5th Edition Asia Procuretech & Supply Chain Innovation Summit & Awards 2026.
          </motion.p> */}
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="why-sponsor-grid"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="why-sponsor-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="why-sponsor-card-logo"
                variants={logoVariants}
              >
                <img src={benefit.logo} alt={benefit.title} className="why-sponsor-logo-icon" />
              </motion.div>
              <h3 className="why-sponsor-card-title">{benefit.title}</h3>
              <p className="why-sponsor-card-description">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="why-sponsor-cta cta-split"
          variants={ctaVariants}
        >

          {/* LEFT: Text */}
          <div className="cta-left">
            <h3 className="why-sponsor-cta-heading">Ready to Get Started?</h3>
            <p className="why-sponsor-cta-text">
              To find out more about the ROI-driven sponsorship and exhibition opportunities,
              connect with our team
            </p>
          </div>

          {/* RIGHT: Contact Boxes */}
          <motion.div
            className="cta-right"
            variants={containerVariants}
          >
            <div className="why-sponsor-contact-methods">
              
              <motion.a
                href="tel:+97142434677"
                className="why-sponsor-contact-card phone-card"
                variants={contactCardVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="contact-card-wrapper">
               <div className="contact-card-icon">
  <FaPhoneAlt />
</div>

                  <div className="contact-card-content">
                    <span className="contact-card-label">Call Us</span>
                    <span className="contact-card-value">+971 4243 4677</span>
                  </div>
                </div>
                <div className="contact-card-arrow">→</div>
              </motion.a>

              <motion.a
                href="mailto:info@verve-management.com"
                className="why-sponsor-contact-card email-card"
                variants={contactCardVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="contact-card-wrapper">
                  <div className="contact-card-icon">
  <FaEnvelope />
</div>

                  <div className="contact-card-content">
                    <span className="contact-card-label">Email Us</span>
                    <span className="contact-card-value">info@verve-management.com</span>
                  </div>
                </div>
                <div className="contact-card-arrow">→</div>
              </motion.a>

            </div>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default WhySponsor;

// original