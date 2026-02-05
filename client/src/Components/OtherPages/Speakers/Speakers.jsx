import React, { useEffect, useRef, useState } from 'react';
import styles from './Speakers.module.css';
import Speakers2026 from './Speakers2026';
import SpeakingOpportunity from "../SpeakingOpportunity"




const Speakers = () => {
  const heroTextRef = useRef(null);
  const [hoveredSpeaker, setHoveredSpeaker] = useState(null);
  const [openSpeak, setOpenSpeak] = useState(false);


  useEffect(() => {
    const text = heroTextRef.current;
    if (text) {
      const letters = text.textContent.split('');
      text.textContent = '';
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.className = styles.heroLetter;
        span.style.animationDelay = `${index * 0.05}s`;
        text.appendChild(span);
      });
    }
  }, []);

  // Sample speakers data - replace with your actual speakers
  const speakers = [
    {
    id: 1,
    name: "Dr. Saleh Ali Albalushi",
    designation: "Vice President — Health Safety and Environment",
    company: "Drydocks World",
    image: "/Speakers/Speaker1.webp",
    linkedin: ""
  },
  {
    id: 2,
    name: "Ali AlZain",
    designation: "Director, HSSE Governance",
    company: "Ministry of Finance, Saudi Arabia",
    image: "/Speakers/Speaker2.webp",
    linkedin: "https://www.linkedin.com/in/alialzain/"
  },
  {
    id: 3,
    name: "Dr. Naseem Abdulla",
    designation: "CEO of EHS Director",
    company: "Dubai Municipality",
    image: "/Speakers/Speaker3.webp",
    linkedin: "https://www.linkedin.com/in/drnaseem/"
  },
  {
    id: 4,
    name: "Dr. Huda Khalifa Alsalmi",
    designation: "Head of HSE",
    company: "Abu Dhabi City Municipality",
    image: "/Speakers/Speaker4.webp",
    linkedin: "https://www.linkedin.com/in/dr-huda-alsalmi-2b0a912b/"
  },
  {
    id: 5,
    name: "Dr. Waddah S. Ghanem Al Hashmi",
    designation: "Chairman",
    company: "Federal Occupational Health & Safety Committee (ESMA, UAE)",
    image: "/Speakers/Speaker5.webp",
    linkedin: "https://www.linkedin.com/in/waddah-ghanem/"
  },
  {
    id: 6,
    name: "Dr. Ahmad Al-Ghamdi",
    designation: "Vice President — QHSSE",
    company: "International Maritime Industries",
    image: "/Speakers/Speaker6.webp",
    linkedin: ""
  },
  {
    id: 7,
    name: "Eng. Mohamed Alzarooni",
    designation: "Department Manager — Standards & Conformity",
    company: "Sharjah Prevention and Safety Authority",
    image: "/Speakers/Speaker7.webp",
    linkedin: "https://www.linkedin.com/in/mohamed-alzarooni-62455b179/"
  },
  {
    id: 8,
    name: "Suzan Al Ghanem",
    designation: "Section Head — Org. Resilience & Business Continuity",
    company: "Environment Agency — Abu Dhabi",
    image: "/Speakers/Speaker8.webp",
    linkedin: "https://www.linkedin.com/in/suzan-al-ghanem-4158a441/?utm_source=share&utm_campaign=share_via&utm_content=prof"
  },
  {
    id: 9,
    name: "Turki Alasmari",
    designation: "HSSE & FP Executive Director",
    company: "MAKEEN",
    image: "/Speakers/Speaker9.webp",
    linkedin: "https://www.linkedin.com/in/turkihalasmari/"
  },
  {
    id: 10,
    name: "Dr. Eng. Hani Hossni",
    designation: "CEO",
    company: "ITALCO Aluminium",
    image: "/Speakers/Speaker10.webp",
    linkedin: "https://www.linkedin.com/in/dr-eng-hani-hossni-b1a01a25/"
  },
  {
    id: 11,
    name: "Benjamin Neal",
    designation: "Director, Health, Safety & Environment – Maritime & Shipping Cluster",
    company: "AD Ports Group",
    image: "/Speakers/Speaker11.webp",
    linkedin: "https://www.linkedin.com/in/benjamin-neal-73661a58/"
  },
  {
    id: 12,
    name: "Dr. Islam Adra",
    designation: "Vice President — HSE",
    company: "DP World",
    image: "/Speakers/Speaker12.webp",
    linkedin: "https://www.linkedin.com/in/islamadra/"
  },
  {
    id: 13,
    name: "Riad Sadikhov",
    designation: "HSSE Vice President",
    company: "ACWA Power",
    image: "/Speakers/Speaker13.webp",
    linkedin: "https://www.linkedin.com/in/riad-sadikhov-8b752a14/"
  },
  {
    id: 14,
    name: "Sultan Karrani",
    designation: "HSE Expert",
    company: "Industry Expert",
    image: "/Speakers/Speaker14.webp",
    linkedin: "https://www.linkedin.com/in/sultan-karrani-72582354/"
  },
  {
    id: 15,
    name: "John Dunne",
    designation: "Group Head of Health and Safety",
    company: "Red Sea Global",
    image: "/Speakers/Speaker15.webp",
    linkedin: "https://www.linkedin.com/in/john-dunne-1726b213/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    id: 16,
    name: "Anas Gahshan",
    designation: "Director — Engineering, HSE & Sustainability",
    company: "Kaizen Asset Management Services",
    image: "/Speakers/Speaker16.webp",
    linkedin: "https://www.linkedin.com/in/anasgahshan/"
  },
  {
    id: 17,
    name: "Abdelhamid Soliman",
    designation: "Head of HSE & Welfare",
    company: "Innovo Group",
    image: "/Speakers/Speaker17.webp",
    linkedin: "https://www.linkedin.com/in/abdelhamid-soliman-cmiosh-1a876548/"
  },
  {
    id: 18,
    name: "Alevizos Theofilos",
    designation: "Senior Director — Sustainability & HSE",
    company: "Agthia Group PJSC",
    image: "/Speakers/Speaker18.webp",
    linkedin: "https://www.linkedin.com/in/alevizos-theofilos-b0b84275/"
  },
  {
    id: 19,
    name: "Mahender Kumar Saini",
    designation: "QHSE Director",
    company: "NCC Holding",
    image: "/Speakers/Speaker19.webp",
    linkedin: "https://www.linkedin.com/in/mahender-kumar-saini-107a7a190/"
  },
  {
    id: 20,
    name: "Mohamed Elimam",
    designation: "Head of HSE",
    company: "Emirates Food Industries",
    image: "/Speakers/Speaker20.webp",
    linkedin: ""
  },
  {
    id: 21,
    name: "Ali El Jamal",
    designation: "Head of HSE and Aircraft Production Support",
    company: "Etihad Airways Engineering",
    image: "/Speakers/Speaker21.webp",
    linkedin: "https://www.linkedin.com/in/ali-el-jamal-13515a15b/"
  },
  {
    id: 22,
    name: "Ahmad AbuDra",
    designation: "Head of Business Assurance",
    company: "Imdaad Group",
    image: "/Speakers/Speaker22.webp",
    linkedin: ""
  },
  {
    id: 23,
    name: "Faisal Osama",
    designation: "Head of HSE",
    company: "M.M. Alharbi & Partners Co.",
    image: "/Speakers/Speaker23.webp",
    linkedin: "https://www.linkedin.com/in/faisal-osama/"
  },
  {
    id: 24,
    name: "Mohamed Ramadan Zaki",
    designation: "Head of HSW & Environmental",
    company: "Al Mardoof Contracting Company",
    image: "/Speakers/Speaker24.webp",
    linkedin: "https://www.linkedin.com/in/mohamedramadantechiosh15879234/"
  },
  {
    id: 25,
    name: "Mahmoud Hewidy",
    designation: "Global Health & Safety Program Director",
    company: "Schneider Electric",
    image: "/Speakers/Speaker25.webp",
    linkedin: "https://www.linkedin.com/in/mahmoud-bahaa-hewidy-90466a60/"
  },
  {
    id: 26,
    name: "Renato Volpe",
    designation: "Group QHSE Director",
    company: "Mazrui International",
    image: "/Speakers/Speaker26.webp",
    linkedin: "https://www.linkedin.com/in/renato-volpe-8292148/"
  },
  {
    id: 27,
    name: "Abdulrahman Al Duhayan",
    designation: "Head of Security, Safety, Health & Environment",
    company: "Gen. Secretariat of National Risk Council",
    image: "/Speakers/Speaker27.webp",
    linkedin: "https://www.linkedin.com/in/abdulrahman-al-duhayan-b6606746/"
  },
  {
    id: 28,
    name: "Abdullah Al-Ghamdi",
    designation: "Chairman — Cooperative Society for Occupational Safety & Health",
    company: "SOSH",
    image: "/Speakers/Speaker28.webp",
    linkedin: "https://www.linkedin.com/in/abdullah-al-ghamdi-42372815/"
  },
  {
    id: 29,
    name: "Thamer Noori",
    designation: "Director — Industrial Security & Safety Dept",
    company: "Royal Commission for Jubail & Yanbu",
    image: "/Speakers/Speaker30.webp",
    linkedin: "https://www.linkedin.com/in/alialzain/"
  },
  {
    id: 30,
    name: "Dr. Badr Al Maliki",
    designation: "Senior VP — HSSE & Sustainability",
    company: "Albawani Holding Company",
    image: "/Speakers/Speaker31.webp",
    linkedin: "https://www.linkedin.com/in/badr-almalki-phd-ab7b9731/"
  },
  {
    id: 31,
    name: "Rob Munn",
    designation: "Senior VP — HSE",
    company: "Sports Boulevard Foundation",
    image: "/Speakers/Speaker32.webp",
    linkedin: "https://www.linkedin.com/in/rob-munn-b6625a1b/"
  },
  {
    id: 32,
    name: "Mosa Ageeli",
    designation: "Head of HR",
    company: "Ministry of Environment, Water & Agriculture",
    image: "/Speakers/Speaker33.webp",
    linkedin: "https://www.linkedin.com/in/mosa-ageeli-emba-shrm-2443a4270/"
  },
  {
    id: 33,
    name: "Saad AlTwaim",
    designation: "EHSS Director",
    company: "SAMI",
    image: "/Speakers/Speaker34.webp",
    linkedin: "https://www.linkedin.com/in/saad-altwaim-b409612/"
  },
  {
    id: 34,
    name: "Abdullah Alqahtani",
    designation: "Head of Safety & Environment",
    company: "Yamama Cement",
    image: "/Speakers/Speaker35.webp",
    linkedin: "https://www.linkedin.com/in/abdullah-alqahtani1010/"
  },
  {
    id: 35,
    name: "Peter Bohan",
    designation: "Director — Health and Safety",
    company: "Red Sea Global",
    image: "/Speakers/Speaker37.webp",
    linkedin: "https://www.linkedin.com/in/peter-bohan-cfiosh-mphil-msc-bsc-hons-85136269/"
  },
  {
    id: 36,
    name: "Greg Coleman",
    designation: "Chairman",
    company: "Future Energy Partners",
    image: "/Speakers/Speaker38.webp",
    linkedin: ""
  },
  {
    id: 37,
    name: "Yassir Alsharif",
    designation: "Head — Health, Safety, Security & Environment",
    company: "RUA Al Madinah",
    image: "/Speakers/Speaker39.webp",
    linkedin: ""
  },
  {
    id: 38,
    name: "Salem Alessa",
    designation: "VP OHS",
    company: "KAFD",
    image: "/Speakers/Speaker40.webp",
    linkedin: ""
  },
  {
    id: 39,
    name: "Faisal H. Al-Daihani",
    designation: "Managing Director",
    company: "SADA",
    image: "/Speakers/Speaker41.webp",
    linkedin: ""
  },
  {
    id: 40,
    name: "Santanu Choudhury",
    designation: "Corporate SHSE Director",
    company: "Al Rashid Trading & Contracting Co.",
    image: "/Speakers/Speaker42.webp",
    linkedin: ""
  },
  {
    id: 41,
    name: "Nagy Elshabrawy",
    designation: "HSE & Sustainability Director",
    company: "Bin Zafrah Contracting Company",
    image: "/Speakers/Speaker43.webp",
    linkedin: ""
  },
  {
    id: 42,
    name: "Azam Soukar",
    designation: "Director — HSE",
    company: "Dubai Holding Real Estate",
    image: "/Speakers/Speaker44.webp",
    linkedin: ""
  },
  {
    id: 43,
    name: "Eyad Sallam",
    designation: "QHSE Director",
    company: "AICC",
    image: "/Speakers/Speaker45.webp",
    linkedin: ""
  },
  {
    id: 44,
    name: "Mohamed Fathy",
    designation: "OSH Director",
    company: "Al-Watania Poultry",
    image: "/Speakers/Speaker46.webp",
    linkedin: ""
  },
  {
    id: 45,
    name: "Syed Mazhar",
    designation: "Director — HSSE Dept",
    company: "Albawani",
    image: "/Speakers/Speaker47.webp",
    linkedin: ""
  },
  {
    id: 46,
    name: "Eng. Ahmed Ellaqany",
    designation: "HSSE Director",
    company: "Abdullah Abdin Factories",
    image: "/Speakers/Speaker48.webp",
    linkedin: ""
  },
  {
    id: 47,
    name: "Sutharson Sathaiah",
    designation: "Director — HSE",
    company: "Six Flags & Aquarabia Qiddiya City",
    image: "/Speakers/Speaker49.webp",
    linkedin: ""
  },
  {
    id: 48,
    name: "Badar Kareem",
    designation: "Head — HSE & Quality Assurance",
    company: "Gerry’s dnata",
    image: "/Speakers/Speaker50.webp",
    linkedin: ""
  },
  {
    id: 49,
    name: "Eng. Faisal Osama Mohammed Rasmi Aboelezz",
    designation: "Head — HSE",
    company: "Mofarreh Al Harbi Co.",
    image: "/Speakers/Speaker51.webp",
    linkedin: ""
  },
  {
    id: 50,
    name: "Dr. Ahmed Gehad",
    designation: "Head — Quality, R&D & HSE",
    company: "Mama Sauce for Food Industries",
    image: "/Speakers/Speaker52.webp",
    linkedin: ""
  },
  {
    id: 51,
    name: "Khaled Abdulwahab",
    designation: "Director of Operations",
    company: "Obeikan Investment Group",
    image: "/Speakers/Speaker53.webp",
    linkedin: ""
  },
  {
    id: 52,
    name: "Javeria Aijaz",
    designation: "Managing Director",
    company: "HITEK AI",
    image: "/Speakers/Speaker54.webp",
    linkedin: ""
  },
  {
    id: 53,
    name: "Ryan Mitchell",
    designation: "Head — QHSEW",
    company: "Farnek",
    image: "/Speakers/Speaker55.webp",
    linkedin: ""
  },
  {
    id: 54,
    name: "Melih Rifaioglu",
    designation: "Regional Sales Lead — MEA",
    company: "Intenseye",
    image: "/Speakers/Speaker56.webp",
    linkedin: ""
  }
  ];

  const handleLinkedInClick = (linkedin) => {
    window.open(linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.speakersPageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContentWrapper}>
          <h1 className={styles.heroMainTitle} ref={heroTextRef}>
            Expert&nbsp;Speakers
          </h1>
  <button 
 onClick={() => {
  const current = window.location.pathname;   // save FIRST
  window._previousRoute = current;            // assign
  window.history.replaceState({}, "", current); // ensure no override

  window.history.pushState({}, "", "/speaking-opportunity");
  setOpenSpeak(true);
}}

  style={{
    marginTop: "20px",
    background: "#ffffff",
    padding: "12px 28px",
    border: "none",
    borderRadius: "6px",
    color: "#ff6b35",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s ease",
    display: "inline-block"
  }}
>
  Speaking Opportunity
</button>


          {/* <div className={styles.heroDividerLine}></div> */}
        </div>
      </section>
     {/* <Speakers2026></Speakers2026> */}
      {/* Speakers Section and also the cards */}
      <section className={styles.speakersSection}>
        <div className={styles.speakersContainer}>
          
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Global <span className={styles.sectionHighlight}> Speakers</span>
            </h2>
           
          </div>

          {/* Speakers Grid */}
          <div className={styles.speakersGrid}>
            {speakers.map((speaker, index) => (
              <div 
                key={speaker.id} 
                className={styles.speakerCard}
                style={{ animationDelay: `${index * 0.08}s` }}
                onMouseEnter={() => setHoveredSpeaker(speaker.id)}
                onMouseLeave={() => setHoveredSpeaker(null)}
              >
                <div className={styles.speakerImageWrapper}>
                  <div className={styles.speakerImageContainer}>
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className={styles.speakerImage}
                    />
                    <div className={styles.speakerImageOverlay}></div>
                  </div>
                  
                  {/* LinkedIn Button */}
                  <button 
                    className={styles.linkedinButton}
                    onClick={() => handleLinkedInClick(speaker.linkedin)}
                    aria-label={`Connect with ${speaker.name} on LinkedIn`}
                  >
                    <svg className={styles.linkedinIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>

                <div className={styles.speakerInfo}>
                  <h3 className={styles.speakerName}>{speaker.name}</h3>
                  <p className={styles.speakerDesignation}>{speaker.designation}</p>
                  <p className={styles.speakerCompany}>{speaker.company}</p>
                </div>

                {/* Decorative Elements */}
                <div className={styles.cardDecoration}></div>
              </div>
            ))}
          </div>

        </div>
      </section>
     <SpeakingOpportunity open={openSpeak} setOpen={setOpenSpeak} />

    </div>
  );
};

export default Speakers;