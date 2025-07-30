import useTranslate from '../hooks/useTranslate';
import './About.css';

export default function About() {
  const t = useTranslate();

  const panels = [
    {
      bg: 'about-background.jpg',
      title: t('about.aboutUs'),
      text: t('about.aboutText'),
    },
    {
      bg: 'mission.jpg',
      title: t('about.mission'),
      text: t('about.missionText'),
      highlight: true,
    },
    {
      bg: 'vision.jpg',
      title: t('about.vision'),
      text: t('about.visionText'),
    },
    {
      bg: 'team.jpg',
      title: t('about.whoWeAre'),
      text: t('about.whoWeAreText'),
    },
    {
      bg: 'values.jpg',
      title: t('about.values'),
      valuesList: t('about.valuesList'),
    },
    {
      bg: 'our-story.jpg',
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
          <div className="angled-panel">
            <div className="modern-overlay">
              <h2>{panel.title}</h2>
              {panel.valuesList ? (
                <ul className="values-list">
                  {panel.valuesList.map(([title, desc], idx) => (
                    <li key={idx}><strong>{title}</strong> — {desc}</li>
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
