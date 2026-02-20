import React, { useEffect, useRef, useState } from 'react';
import styles from './Schedule.module.css';

const ScheduleWithoutImages = () => {
  const heroTextRef = useRef(null);
  const [activeDay, setActiveDay] = useState('day1');

  useEffect(() => {
    const text = heroTextRef.current;
    if (!text) return;

    const originalText = text.textContent;
    text.textContent = '';

    [...originalText].forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.className = styles.heroLetter;
      span.style.animationDelay = `${index * 0.05}s`;
      span.style.display = 'inline-block';
      text.appendChild(span);
    });
  }, []);

  const day1Schedule = [
    {
      time: '09:00 - 10:00',
      title: 'Registration & Welcome Coffee',
      type: 'Welcome'
    },
    {
      time: '10:00 - 10:05',
      title: 'Welcome Note by Conference Producer',
      type: 'keynote'
    },
    {
      time: '10:05 - 10:15',
      title: 'Special Remarks by the Guest of Honour',
      type: 'keynote'
    },
    {
      time: '10:15 - 10:20',
      title: 'Opening Remarks by the Chairperson',
      type: 'keynote'
    },
    {
      time: '10:20 - 10:40',
      title: 'Driving a Safe, Sustainable, and Innovative UAE: Shaping the Future of Health, Safety, and Excellence',
      points: [
        'Demonstrating how HSE excellence supports the UAE\'s Vision 2030/2031, including sustainable development, economic diversification, and global competitiveness.',
        'Showcasing how digital solutions, AI, and smart infrastructure are enhancing workplace safety and environmental management in alignment with UAE government initiatives.',
        'Emphasizing the importance of mental health, employee engagement, and cultural awareness in creating resilient, productive, and safe workplaces.'
      ]
    },
    {
      time: '10:40 - 11:00',
      title: 'Zero LTI: Driving a Culture of Incident-Free Operations in the UAE – Strategies, Leadership, and Workforce Engagement for a Safer Future',
      points: [
        'How can organizations in the UAE foster a proactive safety culture that prevents incidents before they occur?',
        'What role does leadership play in embedding Zero LTI principles across diverse workforces?',
        'How can technology and employee engagement be leveraged together to achieve and sustain Zero LTI outcomes?'
      ]
    },
    {
      time: '11:00 - 11:20',
      title: 'Safety Culture Transformation: Aligning Leadership, Workforce, and Organizational Practices for Lasting Impact in the UAE',
      points: [
        'How can leaders effectively influence and model a safety-first mindset across all levels of the organization?',
        'What strategies can be implemented to ensure workforce engagement and ownership of safety practices?',
        'How can organizations measure and sustain a strong safety culture over time in high-risk industries?'
      ]
    },
    {
      time: '11:20 - 12:05',
      title: 'Panel Discussion | Behavioral Safety in Action: Reducing Human Error Through Awareness, Engagement, and Smart Practices',
      type: 'panel',
      points: [
        'How can behavioral insights be used to predict and prevent workplace incidents?',
        'What strategies effectively engage employees to take personal responsibility for safety?',
        'How can organizations integrate behavioral safety into daily operations and long-term culture?'
      ]
    },
    {
      time: '12:05 - 12:25',
      title: 'Thriving Under Pressure: Mental Health & Well-Being for a Resilient Workforce in the UAE',
      points: [
        'How can organizations proactively support mental health to boost productivity and safety?',
        'What practical strategies help employees manage stress and maintain resilience in high-pressure environments?',
        'How can UAE workplaces build a culture of psychological safety and well-being for all staff?'
      ]
    },
    {
      time: '12:25 - 12:55',
      title: 'Networking & Prayer Break',
      type: 'break'
    },
    {
      time: '12:55 - 13:05',
      title: 'Innovation Session (Tekmon)',
      type: 'keynote'
    },
    {
      time: '13:05 - 13:15',
      title: 'Innovation Session (Dualroots AI)',
      type: 'keynote'
    },
    {
      time: '13:15 - 13:45',
      title: 'Fireside Chat | The Power of Attitudes: Driving Safety Excellence Through the ABR Cycle – Awareness, Behavior, Results',
      type: 'fireside',
      points: [
        'How can organizations create awareness that truly influences safe behaviors across all teams?',
        'What are the most effective ways to translate positive safety behaviors into measurable results?',
        'How can leaders sustain long-term engagement with the ABR Cycle in high-risk industries?'
      ]
    },
    {
      time: '13:45 - 14:05',
      title: 'Proactive Risk Management in UAE Operations: From Assessment to Mitigation for Safer, Smarter Workplaces',
      points: [
        'How can organizations identify and prioritize risks before they escalate into incidents?',
        'What strategies and tools are most effective for mitigating risks in complex UAE operations?',
        'How can risk management practices be integrated into daily operations to drive a culture of continuous safety improvement?'
      ]
    },
    {
      time: '14:05 - 14:25',
      title: 'Empowering Leaders, Engaging Teams: Driving HSE Excellence Through Leadership and Workforce Collaboration',
      points: [
        'How can leaders inspire a culture of safety ownership and accountability across all levels of the organization?',
        'What strategies foster meaningful employee engagement in HSE initiatives and continuous improvement?',
        'How can organizations measure the impact of leadership and engagement on safety performance and outcomes?'
      ]
    },
    {
      time: '14:25 - 14:35',
      title: 'Closing Remarks – Day One',
      type: 'keynote'
    },
    {
      time: '14:35 - 15:35',
      title: 'Networking Luncheon & End of Day One',
      type: 'break'
    }
  ];

  const day2Schedule = [
    {
      time: '09:00 - 10:00',
      title: 'Registration & Welcome Coffee',
      type: 'break'
    },
    {
      time: '10:00 - 10:10',
      title: 'Opening Remarks by the Chairperson',
      type: 'keynote'
    },
    {
      time: '10:10 - 10:30',
      title: 'Safety Leadership for a Visionary UAE: Engaging Teams to Drive Compliance, Innovation, and National HSE Excellence',
      points: [
        'How can leaders align organizational safety strategies with UAE government priorities and Vision 2031 goals?',
        'What approaches effectively engage diverse teams to embrace compliance while fostering innovation in safety practices?',
        'How can leadership drive a culture where safety excellence becomes both a business and national objective?'
      ]
    },
    {
      time: '10:30 - 10:50',
      title: 'Smart Safety: Leveraging AI, IoT, and Real-Time Monitoring to Transform HSE in the UAE',
      points: [
        'How can AI and IoT technologies predict and prevent workplace incidents before they occur?',
        'What are the best practices for integrating real-time risk monitoring into daily operations?',
        'How can digital transformation enhance both safety performance and organizational decision-making?'
      ]
    },
    {
      time: '10:50 - 11:20',
      title: 'Fireside Chat | Building Safely: UAE Best Practices for Construction and Industrial Safety in High-Risk Projects',
      type: 'fireside',
      points: [
        'How can UAE construction and industrial projects implement proactive measures to prevent accidents and incidents?',
        'What innovative safety practices have proven most effective in managing risks on high-risk sites?',
        'How can lessons learned from UAE projects be scaled and adapted across different sectors for maximum impact?'
      ]
    },
    {
      time: '11:20 - 12:05',
      title: 'Panel Discussion | Ready for Anything: Emergency Preparedness and Crisis Management Lessons from UAE Case Studies',
      type: 'panel',
      points: [
        'How can organizations in the UAE build robust emergency response plans for high-risk operations?',
        'What lessons can be learned from past UAE incidents to improve crisis management strategies?',
        'How can teams effectively coordinate, communicate, and respond under pressure to minimize impact?'
      ]
    },
    {
      time: '12:05 - 12:25',
      title: 'Sustainable Safety: Integrating Environmental Health and Safety Practices for a Greener, Safer UAE',
      points: [
        'How can organizations align HSE programs with UAE sustainability and environmental goals?',
        'What practical strategies help reduce environmental impact while maintaining safety and operational excellence?',
        'How can sustainability initiatives be embedded into corporate culture to drive long-term HSE success?'
      ]
    },
    {
      time: '12:25 - 12:55',
      title: 'Networking & Prayer Break',
      type: 'break'
    },
    {
      time: '12:55 - 13:40',
      title: 'Panel Discussion | Shaping the Future of HSE in the UAE: Leadership, Innovation, and People-First Safety Strategies',
      type: 'panel',
      points: [
        'How can UAE organizations leverage innovation and technology to redefine safety standards for the future?',
        'What leadership approaches are most effective in fostering a culture of continuous HSE improvement?',
        'How can workforce engagement and people-focused strategies drive sustainable safety outcomes?'
      ]
    },
    {
      time: '13:40 - 14:00',
      title: 'Surviving the Heat: Ensuring Safety for Outdoor Workers in the UAE\'s Extreme Climate',
      points: [
        'How can organizations protect outdoor workers from heat stress and related hazards in UAE conditions?',
        'What practical strategies and technologies help maintain productivity while ensuring worker safety?',
        'How can awareness, training, and culture drive compliance with desert and heat safety measures?'
      ]
    },
    {
      time: '14:00 - 14:10',
      title: 'Closing Remarks – End of Summit',
      type: 'keynote'
    },
    {
      time: '14:10 - 15:10',
      title: 'Networking Luncheon & End of Day Two',
      type: 'break'
    }
  ];

  const renderScheduleItem = (item, index) => (
    <div 
      key={index} 
      className={styles.timelineItem}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className={styles.timeColumn}>
        <div className={styles.timeBox}>
          <span className={styles.timeText}>{item.time}</span>
        </div>
        <div className={styles.connector}></div>
      </div>
      
      <div className={styles.contentColumn}>
        <div className={styles.contentCard}>
          {item.type && (
            <span className={`${styles.typeBadge} ${styles[item.type]}`}>
              {item.type === 'panel' && 'PANEL DISCUSSION'}
              {item.type === 'fireside' && 'FIRESIDE CHAT'}
              {item.type === 'break' && 'BREAK'}
              {item.type === 'awards' && 'AWARDS CEREMONY'}
              {item.type === 'keynote' && 'KEYNOTE'}
              {item.type === 'Welcome' && 'WELCOME'}
            </span>
          )}
          
          <h3 className={styles.sessionTitle}>{item.title}</h3>
          
          {item.points && (
            <ul className={styles.sessionPoints}>
              {item.points.map((point, i) => (
                <li key={i} className={styles.sessionPoint}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.schedulePageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroDecoLine}></div>

          <h1 className={styles.heroMainTitle}>
            <span ref={heroTextRef}>Event Schedule</span>
          </h1>

          <p className={styles.heroMainSubtitle}>
            Two Days of Innovation, Insights & Networking
          </p>

          <div className={styles.heroDecoLine}></div>
        </div>
      </section>

      <section className={styles.scheduleContentSection}>
        <div className={styles.scheduleContainer}>
          
          <div className={styles.dayTabsWrapper}>
            <button 
              className={`${styles.dayTab} ${activeDay === 'day1' ? styles.active : ''}`}
              onClick={() => setActiveDay('day1')}
            >
              <div className={styles.tabIndicator}></div>
              <span className={styles.dayNumber}>DAY 01</span>
              <span className={styles.dayLabel}>First Day</span>
            </button>
            <button 
              className={`${styles.dayTab} ${activeDay === 'day2' ? styles.active : ''}`}
              onClick={() => setActiveDay('day2')}
            >
              <div className={styles.tabIndicator}></div>
              <span className={styles.dayNumber}>DAY 02</span>
              <span className={styles.dayLabel}>Second Day</span>
            </button>
          </div>

          <div className={styles.scheduleTimeline}>
            {activeDay === 'day1' && day1Schedule.map((item, index) => renderScheduleItem(item, index))}
            {activeDay === 'day2' && day2Schedule.map((item, index) => renderScheduleItem(item, index))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ScheduleWithoutImages;