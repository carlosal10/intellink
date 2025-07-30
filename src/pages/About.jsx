import { useEffect } from 'react';
import useTranslate from '../hooks/useTranslate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

export default function About() {
  const t = useTranslate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const bg = (img) => ({
    backgroundImage: `url(/images/${img})`,
  });

  const renderSection = (img, titleKey, textKey, isList = false) => (
    <section
      className="about-modern-section full-screen-section"
      style={bg(img)}
      data-aos="fade-up"
    >
      <div className="angled-panel">
        <div className="modern-overlay">
          <h2>{t(titleKey)}</h2>
          {isList ? (
            <ul className="values-list">
              {t(textKey).map(([title, desc], idx) => (
                <li key={idx}>
                  <strong>{title}</strong> — {desc}
                </li>
              ))}
            </ul>
          ) : (
            <p className={titleKey === 'about.mission' ? 'highlight' : ''}>
              {t(textKey)}
            </p>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <section className="about about-modern">
      <div className="about-container">
        {renderSection('about-background.jpg', 'about.aboutUs', 'about.aboutText')}
        {renderSection('mission.jpg', 'about.mission', 'about.missionText')}
        {renderSection('vision.jpg', 'about.vision', 'about.visionText')}
        {renderSection('team.jpg', 'about.whoWeAre', 'about.whoWeAreText')}
        {renderSection('values.jpg', 'about.values', 'about.valuesList', true)}
        {renderSection('our-story.jpg', 'about.ourStory', 'about.ourStoryText')}
      </div>
    </section>
  );
}
