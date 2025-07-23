import useTranslate from '../hooks/useTranslate';
import './About.css';

export default function About() {
  const t = useTranslate();

  return (
    <section className="about">
      <div className="about-container">

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

        {/* Values */}
        <section className="about-section">
          <h2>{t('about.values')}</h2>
          <ul className="values-list">
            {t('about.valuesList').map(([title, desc], idx) => (
              <li key={idx}><strong>{title}</strong> — {desc}</li>
            ))}
          </ul>
        </section>

        {/* Leadership */}
        <section className="about-section">
          <h2>{t('about.leadership')}</h2>
          <div className="leader-profile">
            <div className="photo-placeholder">{t('about.name').charAt(0)}</div>
            <div>
              <h3>{t('about.name')}</h3>
              <p>{t('about.title')}</p>
              <p>{t('about.bio')}</p>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
