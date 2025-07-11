import useTranslate from '../hooks/useTranslate';
import './Home.css';

export default function Home() {
  const t = useTranslate();

  return (
    <section className="home">
      <div className="hero">
        <h1>{t('home.hero')}</h1>
        <p>{t('home.intro')}</p>
      </div>

      <div className="services-overview">
        <div className="service-box">
          <h3>{t('home.marketLink')}</h3>
          <p>{t('home.marketDesc')}</p>
        </div>
        <div className="service-box">
          <h3>{t('home.expertConnect')}</h3>
          <p>{t('home.expertDesc')}</p>
        </div>
        <div className="service-box">
          <h3>{t('home.tradeLink')}</h3>
          <p>{t('home.tradeDesc')}</p>
        </div>
      </div>

      <div className="cta-buttons">
        <a href="/services" className="btn primary">{t('home.explore')}</a>
        <a href="/contact" className="btn secondary">{t('home.contact')}</a>
      </div>
    </section>
  );
}
