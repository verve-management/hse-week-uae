"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Pill, 
  Building2, 
  Factory, 
  Fuel, 
  HardHat, 
  Truck,
  Flame,
  Zap
} from "lucide-react"
import styles from "./Industries.module.css"

const Industries = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  const industries = [
    {
      id: "01",
      icon: HardHat,
      title: "Construction & Engineering",
      description:
        "Empowering construction and engineering industries with modern procurement insights to enhance project efficiency, cost control, and operational excellence.",
    },
    {
      id: "02",
      icon: Truck,
      title: "Transportation & Logistics",
      description:
        "Optimizing end-to-end logistics operations using procurement intelligence that boosts efficiency, improves vendor management, and strengthens supply chains.",
    },
    {
      id: "03",
      icon: Fuel,
      title: "Mining & Resources",
      description:
        "Enabling mining and resource companies with data-driven procurement strategies to improve safety, reduce costs, and maximize resource utilization.",
    },
    {
      id: "04",
      icon: Building2,
      title: "Public Sector / Government",
      description:
        "Driving transparency, compliance, and efficiency across public sector procurement with modern digital sourcing and governance solutions.",
    },
    {
      id: "05",
      icon: Flame,
      title: "Oil & Gas",
      description:
        "Supporting Oil & Gas enterprises with next-gen procurement tools that strengthen asset management, operational safety, and supply chain reliability.",
    },
    {
      id: "06",
      icon: Pill,
      title: "Healthcare",
      description:
        "Transforming healthcare procurement with intelligent sourcing, improving compliance, patient care quality, and inventory optimization.",
    },
    {
      id: "07",
      icon: Factory,
      title: "Manufacturing",
      description:
        "Enhancing manufacturing performance through optimized procurement, improved automation, and streamlined supplier ecosystems.",
    },
    {
      id: "08",
      icon: Zap,
      title: "Utilities",
      description:
        "Empowering utility providers with smart procurement insights that improve infrastructure reliability, cost efficiency, and service performance.",
    },
  ]

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>INDUSTRIES <span>COVERED</span></h2>
          <p className={styles.subtitle}>Procure. Innovate</p>
        </div>

        <div className={styles.grid}>
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div 
                key={industry.id} 
                className={`${styles.card} ${activeCard === industry.id ? styles.active : ""}`}
                onMouseEnter={() => setActiveCard(industry.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.icon}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className={styles.cardTitle}>{industry.title}</h3>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.description}>{industry.description}</p>
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