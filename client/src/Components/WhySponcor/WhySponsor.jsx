import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./WhySponsor.css";

import { MdLightbulbOutline, MdGroups, MdTrendingUp } from "react-icons/md";

const WhySponsor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      id: 1,
      title: "Showcase Thought Leadership",
      description:
        "Present your solutions or moderate discussions to a targeted audience of industry decision-makers.",
      icon: MdLightbulbOutline,
    },
    {
      id: 2,
      title: "Enhance Networking Opportunities",
      description:
        "Connect directly with senior executives and professionals eager to learn about the latest HSE technologies and strategies.",
      icon: MdGroups,
    },
    {
      id: 3,
      title: "Strengthen Brand Positioning",
      description:
        "Increase visibility and position your brand as a leader in HSE solutions amidst a competitive landscape.",
      icon: MdTrendingUp,
    },
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
          <motion.p
            className="why-sponsor-subtitle"
            variants={subtitleVariants}
          >
            Fuel Procurement & Supply Chain Success
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div className="why-sponsor-grid" variants={containerVariants}>
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
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
                  <IconComponent className="why-sponsor-logo-icon" />
                </motion.div>
                <h3 className="why-sponsor-card-title">{benefit.title}</h3>
                <p className="why-sponsor-card-description">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhySponsor;