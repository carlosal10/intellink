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
        <a href="/services" className="btn primary">{t('home.ctaExploreServices')}</a>
        <a href="/contact" className="btn secondary">{t('home.ctaContactUs')}</a>
      </div>
    </section>
  );
}
