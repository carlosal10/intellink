import useTranslate from '../hooks/useTranslate';
import './About.css';

export default function About() {
  const t = useTranslate();

  return (
    <section className="about">
      <div className="about-container">
        
        {/* About Us */}
        <section className="about-section">
          <h2>{t('about.aboutUs')}</h2>
          <p>{t('about.aboutText')}</p>
        </section>

        {/* Mission */}
        <section className="about-section">
          <h2>{t('about.mission')}</h2>
          <p className="highlight">{t('about.missionText')}</p>
        </section>

        {/* Vision */}
        <section className="about-section">
          <h2>{t('about.vision')}</h2>
          <p>{t('about.visionText')}</p>
        </section>      

        {/* Who We Are */}
        <section className="about-section">
          <h2>{t('about.whoWeAre')}</h2>
          <p>{t('about.whoWeAreText')}</p>
        </section>      

        {/* Core Values */}
        <section className="about-section">
          <h2>{t('about.values')}</h2>
          <ul className="values-list">
            {t('about.valuesList').map(([title, desc], idx) => (
              <li key={idx}><strong>{title}</strong> — {desc}</li>
            ))}
          </ul>
        </section>

        {/* Our Story */}
        <section className="about-section">
          <h2>{t('about.ourStory')}</h2>
          <p>{t('about.ourStoryText')}</p>
        </section>

      </div>
    </section>
  );
}
