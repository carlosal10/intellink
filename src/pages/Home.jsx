import { Link } from 'react-router-dom';
import useTranslate from '../hooks/useTranslate';
import './Home.css';

export default function Home() {
  const t = useTranslate();

  return (
  <section
  className="home"
  style={{
    backgroundImage: "url('/images/to-12.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>


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

      {/* Highlight Section */}
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

      {/* Services */}
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

      {/* Philosophy */}
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

      {/* 🔥 Teaser Blog Section */}
      <div className="blog-teaser">
        <h2>{t('home.blogTitle') || 'Insights & Updates'}</h2>
        <div className="blog-preview">
          <div className="blog-card">
            <img src="/images/blog-1.jpg" alt="Blog 1" />
            <h4>Unlocking Opportunities in Emerging Markets</h4>
            <p>Why Japan–Africa trade partnerships are gaining momentum in 2025.</p>
            <Link to="/insights" className="read-more">Read More →</Link>
          </div>
          <div className="blog-card">
            <img src="/images/blog-2.jpg" alt="Blog 2" />
            <h4>Building Trust Across Cultures</h4>
            <p>How cross-cultural strategy gives businesses a global edge.</p>
            <Link to="/insights" className="read-more">Read More →</Link>
          </div>
        </div>
      </div>

    </section>
  );
}
