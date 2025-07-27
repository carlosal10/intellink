import { Link } from 'react-router-dom';
import useTranslate from '../hooks/useTranslate';
import './Home.css';

export default function Home() {
  const t = useTranslate();

  return (
    <section className="home">

      <div className="hero">
        <div className="hero-text">
          <h1>{t('home.welcomeTitle')}</h1>
          <p>{t('home.welcomeIntro')}</p>
        </div>
      </div>

      <section className="services-overview">
        <h2 className="section-title">{t('home.ourServicesTitle')}</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>{t('home.marketIntelligenceTitle')}</h3>
            <p>{t('home.marketIntelligenceDesc')}</p>
          </div>
          <div className="service-card">
            <h3>{t('home.expertConnectTitle')}</h3>
            <p>{t('home.expertConnectDesc')}</p>
          </div>
          <div className="service-card">
            <h3>{t('home.tradeLinksTitle')}</h3>
            <p>{t('home.tradeLinksDesc')}</p>
          </div>
        </div>
      </section>

      <section className="about-wrapper">
        <div className="about-block">
          <h2>{t('about.whoWeAre')}</h2>
          <p>{t('about.whoWeAreText')}</p>
        </div>
        <div className="about-block">
          <h2>{t('about.whatWeDo')}</h2>
          <p>{t('about.whatWeDoText')}</p>
        </div>
        <div className="about-block">
          <h2>{t('about.philosophy')}</h2>
          <p>{t('about.philosophyText')}</p>
        </div>
      </section>

      <div className="cta-buttons">
        <Link to="/services" className="btn primary">{t('home.ctaExploreServices')}</Link>
        <Link to="/contact" className="btn secondary">{t('home.ctaContactUs')}</Link>
        <Link to="/about" className="btn tertiary">{t('home.ctaAboutUs2')}</Link>
      </div>

    </section>
  );
}