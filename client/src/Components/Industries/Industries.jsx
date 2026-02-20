"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./Industries.module.css"

const Industries = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const industries = [
    {
      id: "01",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages1.webp",
      title: "Construction & Engineering",
      description:
        "Empowering construction and engineering industries with modern procurement insights to enhance project efficiency, cost control, and operational excellence.",
    },
    {
      id: "02",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages2.webp",
      title: "Transportation & Logistics",
      description:
        "Enhancing transportation and logistics operations with comprehensive safety protocols to ensure secure, efficient, and compliant movement of goods and people.",
    },
    {
      id: "03",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages3.webp",
      title: "Mining & Resources",
      description:
        "Advancing mining and resources industries with rigorous safety standards to protect workforce wellbeing, environmental integrity, and operational continuity.",
    },
    {
      id: "04",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages10.webp",
      title: "Public Sector / Government Organizations",
      description:
        "Supporting public sector and government organizations with structured HSE frameworks to promote workplace safety, policy alignment, and community protection.",
    },
    {
      id: "05",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages5.webp",
      title: "Oil & Gas",
      description:
        "Empowering oil and gas industries with advanced HSE strategies to strengthen operational safety, environmental stewardship, and regulatory compliance.",
    },
    {
      id: "06",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages6.webp",
      title: "Healthcare",
      description:
        "Supporting healthcare institutions with robust safety and risk management frameworks to ensure patient wellbeing and workplace protection.",
    },
    {
      id: "07",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages7.webp",
      title: "Construction & Engineering",
      description:
        "Empowering construction and engineering industries with modern safety practices to improve site compliance, risk mitigation, and project excellence.",
    },
    {
      id: "08",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages9.jpg",
      title: "Utilities",
      description:
        "Strengthening utilities sectors with integrated HSE solutions to ensure infrastructure reliability, public safety, and sustainable service delivery.",
    },
  ]

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Industries <span>Covered</span></h2>
           <p className={styles.subTitle}>
                      Empower Your Safety & Excellence Journey
                    </p>
        </div>

        <div className={styles.grid}>
          {industries.map((industry, index) => {
            return (
              <div 
                key={industry.id} 
                className={styles.cardWrapper}
                data-index={index}
              >
                <div className={styles.card}>
                  {/* Front Side - Number, Title, and Image */}
                  <div className={styles.cardFront}>
                    <div className={styles.frontContent}>
                      <div className={styles.numberTag}>{industry.id}</div>
                      <h3 className={styles.cardTitle}>{industry.title}</h3>
                    </div>
                    <div className={styles.imageWrapper}>
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className={styles.industryImage}
                      />
                    </div>
                  </div>

                  {/* Back Side - Description */}
                  <div className={styles.cardBack}>
                    <div className={styles.backContent}>
                      <div className={styles.numberTag}>{industry.id}</div>
                      <p className={styles.description}>{industry.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Industries