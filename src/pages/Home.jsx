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
          <img src="/images/hero-business-meeting.jpg" alt="Business Meeting" />
        </div>
      </div>

      {/* Highlight Section - Text Over Image */}
      <div className="modern-section">
        <div className="image-wrapper">
          <img src="/images/strategic-meeting.jpg" alt="Strategic Meeting" />
        </div>
        <div className="text-box">
          <h2>{t('about.whoWeAre')}</h2>
          <p>{t('about.whoWeAreText')}</p>
          <Link to="/about" className="btn secondary">{t('home.ctaAboutUs')}</Link>
        </div>
      </div>

      {/* Service Features */}
      <div className="services-overview">
        <div className="service-box">
          <img src="/images/forecasting.png" alt="Forecasting" />
          <h3>{t('home.marketIntelligenceTitle')}</h3>
          <p>{t('home.marketIntelligenceDesc')}</p>
        </div>
        <div className="service-box">
          <img src="/images/expert-connect.png" alt="Expert Connect" />
          <h3>{t('home.expertConnectTitle')}</h3>
          <p>{t('home.expertConnectDesc')}</p>
        </div>
        <div className="service-box">
          <img src="/images/trade-links.png" alt="Trade Links" />
          <h3>{t('home.tradeLinksTitle')}</h3>
          <p>{t('home.tradeLinksDesc')}</p>
        </div>
      </div>

      {/* Philosophy Section - Text Over Image */}
      <div className="modern-section reverse">
        <div className="image-wrapper">
          <img src="/images/team-discussion.jpg" alt="Team Discussion" />
        </div>
        <div className="text-box">
          <h2>{t('about.philosophy')}</h2>
          <p>{t('about.philosophyText')}</p>
          <Link to="/contact" className="btn primary">{t('home.ctaContactUs')}</Link>
        </div>
      </div>

    </section>
  );
}
