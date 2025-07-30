import useTranslate from '../hooks/useTranslate';
import './About.css';

export default function About() {
  const t = useTranslate();

  const bg = (img) => ({
    backgroundImage: `url(/images/${img})`,
  });

  return (
    <section className="about">

      <div className="about-container">

        {/* About Us */}
        <section className="split-section">
          <div className="panel-left">
            <h2>{t('about.aboutUs')}</h2>
            <p>{t('about.aboutText')}</p>
          </div>
          <div className="panel-right" style={bg('about-background.jpg')}></div>
        </section>

        {/* Mission */}
        <section className="split-section">
          <div className="panel-left">
            <h2>{t('about.mission')}</h2>
            <p className="highlight">{t('about.missionText')}</p>
          </div>
          <div className="panel-right" style={bg('mission.jpg')}></div>
        </section>

        {/* Vision */}
        <section className="split-section">
          <div className="panel-left">
            <h2>{t('about.vision')}</h2>
            <p>{t('about.visionText')}</p>
          </div>
          <div className="panel-right" style={bg('vision.jpg')}></div>
        </section>

        {/* Who We Are */}
        <section className="split-section">
          <div className="panel-left">
            <h2>{t('about.whoWeAre')}</h2>
            <p>{t('about.whoWeAreText')}</p>
          </div>
          <div className="panel-right" style={bg('team.jpg')}></div>
        </section>

        {/* Core Values */}
        <section className="split-section">
          <div className="panel-left">
            <h2>{t('about.values')}</h2>
            <ul className="values-list">
              {t('about.valuesList').map(([title, desc], idx) => (
                <li key={idx}><strong>{title}</strong> — {desc}</li>
              ))}
            </ul>
          </div>
          <div className="panel-right" style={bg('values.jpg')}></div>
        </section>

        {/* Our Story */}
        <section className="split-section">
          <div className="panel-left">
            <h2>{t('about.ourStory')}</h2>
            <p>{t('about.ourStoryText')}</p>
          </div>
          <div className="panel-right" style={bg('our-story.jpg')}></div>
        </section>

      </div>

    </section>
  );
}
