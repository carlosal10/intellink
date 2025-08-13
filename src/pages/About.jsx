import { useEffect } from 'react';
import useTranslate from '../hooks/useTranslate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

export default function About() {
  const t = useTranslate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const panels = [
    {
      bg: 'ist612copy.jpg',
      title: t('about.aboutUs'),
      text: t('about.aboutText')
    },
    {
      bg: 'istockphoto-16.jpg',
      title: t('about.mission'),
      text: t('about.missionText'),
      highlight: true
    },
    {
      bg: 'istockphoto-4.avif',
      title: t('about.vision'),
      text: t('about.visionText')
    },
    {
      bg: 'corporateculture.jpg',
      title: t('about.values'),
      valuesList: t('about.valuesList') // Array of [title, description]
    },
    {
      bg: 'istockphoto-1369212121-640x640.avif',
      title: t('about.ourStory'),
      text: t('about.ourStoryText')
    }
  ];

  return (
    <section className="about-modern">
      {panels.map((panel, index) => (
        <div
          key={index}
          className="about-modern-section"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/images/${panel.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="glass-overlay" data-aos="fade-up">
            <div className="content-wrapper">
              <h2 className="about-title">{panel.title}</h2>

              {panel.valuesList ? (
                <ul className="values-list">
                  {panel.valuesList.map(([valueTitle, valueDesc], idx) => (
                    <li key={idx} className="value-item">
                      <strong>{valueTitle}</strong> — {valueDesc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`about-text ${panel.highlight ? 'highlight' : ''}`}>
                  {panel.text}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
