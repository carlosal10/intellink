import { Link } from 'react-router-dom';
import useTranslate from '../hooks/useTranslate';
import './Home.css';

export default function Home() {
  const t = useTranslate();

  return (
    <section className="home">

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>{t('home.welcomeTitle')}</h1>
          <p>{t('home.welcomeIntro')}</p>
          <Link to="/services" className="btn primary">{t('home.ctaExploreServices')}</Link>
        </div>
        <div className="hero-image">
          <img src="/public/image/hero-business-meeting.jpg" alt="Hero" />
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlight-section">
        <div className="highlight-image">
          <img src="/public/image/strategic-meeting.jpg" alt="Strategic Meeting" />
        </div>
        <div className="highlight-text">
          <h2>{t('about.whoWeAre')}</h2>
          <p>{t('about.whoWeAreText')}</p>
          <Link to="/about" className="btn secondary">{t('home.ctaAboutUs')}</Link>
        </div>
      </div>

      {/* Service Features */}
      <div className="services-overview">
        <div className="service-box">
          <img src="/public/image/forecasting.png" alt="Forecasting" />
          <h3>{t('home.marketIntelligenceTitle')}</h3>
          <p>{t('home.marketIntelligenceDesc')}</p>
        </div>
        <div className="service-box">
          <img src="/public/image/expert-connect.png" alt="Expert Connect" />
          <h3>{t('home.expertConnectTitle')}</h3>
          <p>{t('home.expertConnectDesc')}</p>
        </div>
        <div className="service-box">
          <img src="/public/image/trade-links.png" alt="Trade Links" />
          <h3>{t('home.tradeLinksTitle')}</h3>
          <p>{t('home.tradeLinksDesc')}</p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="philosophy-section">
        <div className="philosophy-text">
          <h2>{t('about.philosophy')}</h2>
          <p>{t('about.philosophyText')}</p>
          <Link to="/contact" className="btn primary">{t('home.ctaContactUs')}</Link>
        </div>
        <div className="philosophy-image">
          <img src="/public/image/team-discussion.jpg" alt="Philosophy" />
        </div>
      </div>

    </section>
  );
}
