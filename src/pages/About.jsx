import useTranslate from '../hooks/useTranslate';
import './About.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  const t = useTranslate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const panels = [
    {
      bg: 'ist612copy.jpg',
      title: t('about.aboutUs'),
      text: t('about.aboutText'),
    },
    {
      bg: 'istockphoto-16.jpg',
      title: t('about.mission'),
      text: t('about.missionText'),
      highlight: true,
    },
    {
      bg: 'istockphoto-4.avif',
      title: t('about.vision'),
      text: t('about.visionText'),
    },
    
    {
      bg: 'corporateculture.jpg',
      title: t('about.values'),
      valuesList: t('about.valuesList'),
    },
    {
      bg: 'istockphoto-1369212121-640x640.avif',
      title: t('about.ourStory'),
      text: t('about.ourStoryText'),
    },
  ];

  return (
    <section className="about-modern">
      {panels.map((panel, i) => (
        <div
          className="about-modern-section"
          key={i}
          style={{ backgroundImage: `url(/images/${panel.bg})` }}
        >
          <div className="glass-overlay" data-aos="fade-up">
            <div className="content-wrapper">
              <h2>{panel.title}</h2>
              {panel.valuesList ? (
                <ul className="values-list">
                  {panel.valuesList.map(([title, desc], idx) => (
                    <li key={idx}>
                      <strong>{title}</strong> — {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={panel.highlight ? 'highlight' : ''}>{panel.text}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
