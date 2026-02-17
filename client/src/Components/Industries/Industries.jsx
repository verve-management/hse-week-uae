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
        "Optimizing end-to-end logistics operations using procurement intelligence that boosts efficiency, improves vendor management, and strengthens supply chains.",
    },
    {
      id: "03",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages3.webp",
      title: "Mining & Resources",
      description:
        "Enabling mining and resource companies with data-driven procurement strategies to improve safety, reduce costs, and maximize resource utilization.",
    },
    {
      id: "04",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages10.webp",
      title: "Public Sector / Government",
      description:
        "Driving transparency, compliance, and efficiency across public sector procurement with modern digital sourcing and governance solutions.",
    },
    {
      id: "05",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages5.webp",
      title: "Oil & Gas",
      description:
        "Supporting Oil & Gas enterprises with next-gen procurement tools that strengthen asset management, operational safety, and supply chain reliability.",
    },
    {
      id: "06",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages6.webp",
      title: "Healthcare",
      description:
        "Transforming healthcare procurement with intelligent sourcing, improving compliance, patient care quality, and inventory optimization.",
    },
    {
      id: "07",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages7.webp",
      title: "Manufacturing",
      description:
        "Enhancing manufacturing performance through optimized procurement, improved automation, and streamlined supplier ecosystems.",
    },
    {
      id: "08",
      image: "/IndstriesCoveredImages/IndstriesCoveredImages9.jpg",
      title: "Utilities",
      description:
        "Empowering utility providers with smart procurement insights that improve infrastructure reliability, cost efficiency, and service performance.",
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