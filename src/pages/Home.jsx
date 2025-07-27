import { Link } from 'react-router-dom';
import useTranslate from '../hooks/useTranslate';
import './Home.css';

export default function Home() {
  const t = useTranslate();

  return (
    <section className="home">
      <div className="hero">
        <h1>{t('home.welcomeTitle')}</h1>
        <p>{t('home.welcomeIntro')}</p>
      </div>

      <div className="services-overview">
        <div className="service-box">
          <h3>{t('home.marketIntelligenceTitle')}</h3>
          <p>{t('home.marketIntelligenceDesc')}</p>
        </div>
        <div className="service-box">
          <h3>{t('home.expertConnectTitle')}</h3>
          <p>{t('home.expertConnectDesc')}</p>
        </div>
        <div className="service-box">
          <h3>{t('home.tradeLinksTitle')}</h3>
          <p>{t('home.tradeLinksDesc')}</p>
        </div>
      </div>

       {/* Who We Are */}
        <section className="about-section">
          <h2>{t('about.whoWeAre')}</h2>
          <p>{t('about.whoWeAreText')}</p>
        </section>

        {/* What We Do */}
        <section className="about-section">
          <h2>{t('about.whatWeDo')}</h2>
          <p>{t('about.whatWeDoText')}</p>
        </section>

        {/* Philosophy */}
        <section className="about-section">
          <h2>{t('about.philosophy')}</h2>
          <p>{t('about.philosophyText')}</p>
        </section>

      <div className="cta-buttons">
        <Link to="/services" className="btn primary">{t('home.ctaExploreServices')}</Link>
        <Link to="/contact" className="btn secondary">{t('home.ctaContactUs')}</Link>
        <Link to="/about" className="btn secondary">{t('home.ctaAboutUs')}</Link>
      </div>
    </section>
  );
}
