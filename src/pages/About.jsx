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

  const sections = [
    {
      tag: 'OUR STORY',
      heading: t('about.ourStory') || 'Our Story',
      paragraphs: [
        t('about.ourStoryText.paragraph1'),
        t('about.ourStoryText.paragraph2'),
        t('about.ourStoryText.paragraph3')
      ].filter(Boolean),
      image: '/images/istockphoto-1369212121-640x640.avif',
      badge: 'BRIDGING AFRICA AND JAPAN'
    },
    {
      tag: 'OUR MISSION',
      heading: t('about.mission') || 'Our Mission',
      paragraphs: [t('about.missionText')].filter(Boolean),
      image: '/images/istockphoto-16.jpg',
      badge: 'IMPACT THROUGH EXPERTISE'
    },
    {
      tag: 'OUR VISION',
      heading: t('about.vision') || 'Our Vision',
      paragraphs: [t('about.visionText')].filter(Boolean),
      image: '/images/corporateculture.jpg',
      badge: 'TRUSTED, LONG-TERM PARTNERSHIPS'
    }
  ];

  return (
    <main className="about2">
      {sections.map((s, i) => (
        <section key={i} className="about2-section" data-aos="fade-up">
          <div className="about2-inner">
            {/* Left: Text Block */}
            <div className="about2-text">
              <span className="about2-tag">{s.tag}</span>
              <h2 className="about2-heading">{s.heading}</h2>
              <div className="about2-body">
                {s.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right: Image Block */}
            <div className="about2-media">
              <img src={s.image} alt={s.heading} loading="lazy" />
              <div className="about2-badge">{s.badge}</div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

