import { Link } from 'react-router-dom';
import useTranslate from '../hooks/useTranslate';
import './Home.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const t = useTranslate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="home"
      style={{
        backgroundImage: "url('/images/ist2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Hero Section */}
      <div className="hero-section" data-aos="fade-up">
        <div className="hero-text">
          <h1>{t('home.welcomeTitle')}</h1>
          <p>{t('home.welcomeIntro')}</p>
          <Link to="/services" className="btn primary">{t('home.ctaExploreServices')}</Link>
        </div>
        <div className="hero-image">
          <img src="/images/ist612.jpg" alt="Business Meeting" />
        </div>
      </div>

      {/* Who We Are */}
      <div className="modern-section who-we-are" data-aos="fade-right">
        <div className="image-wrapper">
          <img src="/images/istockphoto-10.avif" alt="Strategic Meeting" />
        </div>
        <div className="text-box">
          <h2>{t('about.whoWeAre')}</h2>
          <p>{t('about.whoWeAreText')}</p>
          <Link to="/about" className="btn secondary">{t('home.ctaAboutUs')}</Link>
        </div>
      </div>

      {/* Services */}
    
      <div className="services-section" data-aos="fade-up">
        <div className="service-box">
          <img src="/images/ist12.jpg" alt="Forecasting" />
          <h3>{t('home.marketIntelligenceTitle')}</h3>
          <p>{t('home.marketIntelligenceDesc')}</p>
        </div>
        <div className="service-box">
          <img src="/images/i12.jpg" alt="Expert Connect" />
          <h3>{t('home.expertConnectTitle')}</h3>
          <p>{t('home.expertConnectDesc')}</p>
        </div>
        <div className="service-box">
          <img src="/images/istockphoto-3.jpg" alt="Trade Links" />
          <h3>{t('home.tradeLinksTitle')}</h3>
          <p>{t('home.tradeLinksDesc')}</p>
        </div>
      </div>
    

      {/* Philosophy */}
      <div className="services-section" data-aos="fade-up">
      <div className="modern-section reverse philosophy" data-aos="fade-left">
        <div className="image-wrapper">
          <img src="/images/1p.jpg" alt="Team Discussion" />
        </div>
        <div className="text-box">
          <h2>{t('about.philosophy')}</h2>
          <p>{t('about.philosophyText')}</p>
          <Link to="/contact" className="btn primary">{t('home.ctaContactUs')}</Link>
        </div>
      </div>
      </div>

      {/* Teaser Blog */}
      <div className="services-section" data-aos="fade-up">
      <div className="blog-teaser" data-aos="fade-up">
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
      </div>

      {/* Call to Action */}
    </section>
  );
}
