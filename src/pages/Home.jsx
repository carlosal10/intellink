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

      <div className="cta-buttons">
        <Link to="/services" className="btn primary">{t('home.ctaExploreServices')}</Link>
        <Link to="/contact" className="btn secondary">{t('home.ctaContactUs')}</Link>
      </div>
    </section>
  );
}
