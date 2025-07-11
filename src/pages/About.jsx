import { useLanguage } from '../context/LanguageContext';
import './About.css';

const translations = {
  en: {
    mission: 'Mission',
    missionText: 'To be a trusted link between Japan and emerging markets — advancing sustainable growth, innovation, and inclusive prosperity.',
    vision: 'Vision',
    visionText: 'We envision a world where cross-border collaboration fuels inclusive development, and intelligent solutions unlock shared progress for all.',
    values: 'Values',
    valuesList: [
      ['Integrity', 'We uphold honesty and transparency in every engagement.'],
      ['Inclusivity', 'We bridge cultures and create access for all stakeholders.'],
      ['Sustainability', 'We commit to long-term solutions with real impact.']
    ],
    leadership: 'Leadership',
    name: 'Geoffrey Owuor',
    title: 'Founder & Africa-Japan Markets Consultant',
    bio: 'Geoffrey brings a unique blend of market insight, strategic clarity, and cultural fluency to help Japanese and emerging market partners connect and grow together.',
  },
  jp: {
    mission: 'ミッション',
    missionText: '日本と新興市場の信頼ある架け橋として、持続可能な成長、イノベーション、包括的な繁栄を推進します。',
    vision: 'ビジョン',
    visionText: '国境を超えた連携が包括的な発展を促し、インテリジェントなソリューションが共有された進歩を実現する世界を目指します。',
    values: '価値観',
    valuesList: [
      ['誠実性', 'すべての関係において、誠実さと透明性を大切にします。'],
      ['包括性', '文化をつなぎ、すべての関係者に平等な機会を提供します。'],
      ['持続可能性', '長期的で本質的な成果をもたらすソリューションに注力します。']
    ],
    leadership: 'リーダーシップ',
    name: 'ジェフリー・オウオル',
    title: '創業者・アフリカ-日本市場コンサルタント',
    bio: 'ジェフリーは市場インサイト、戦略的視点、文化的理解を兼ね備え、日本と新興市場の成長を支援しています。',
  }
};

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="about">
      <div className="about-container">

        {/* Mission */}
        <section className="about-section">
          <h2>{t.mission}</h2>
          <p className="highlight">{t.missionText}</p>
        </section>

        {/* Vision */}
        <section className="about-section">
          <h2>{t.vision}</h2>
          <p>{t.visionText}</p>
        </section>

        {/* Values */}
        <section className="about-section">
          <h2>{t.values}</h2>
          <ul className="values-list">
            {t.valuesList.map(([title, desc], idx) => (
              <li key={idx}><strong>{title}</strong> — {desc}</li>
            ))}
          </ul>
        </section>

        {/* Leadership */}
        <section className="about-section">
          <h2>{t.leadership}</h2>
          <div className="leader-profile">
            <div className="photo-placeholder">{t.name.charAt(0)}</div>
            <div>
              <h3>{t.name}</h3>
              <p>{t.title}</p>
              <p>{t.bio}</p>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
