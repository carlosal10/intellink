import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import useTranslate from '../hooks/useTranslate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

export default function Home() {
  const t = useTranslate();
  const [activeSection, setActiveSection] = useState(null);
  const servicesRef = useRef(null); // ref for services section

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      key: 'marketIntelligence',
      title: t('home.services.marketIntelligence.title'),
      description: t('home.services.marketIntelligence.description'),
      image: '/images/ist12.jpg',
      link: '/marketintellink',
      cta: 'Learn More →',
    },
    {
      key: 'marketLinks',
      title: t('home.services.marketLinks.title'),
      description: t('home.services.marketLinks.description'),
      image: '/images/io.jpg',
      link: '/marketlink',
      cta: 'Learn More →',
    },
    {
      key: 'expertConnect',
      title: t('home.services.expertConnect.title'),
      description: t('home.services.expertConnect.description'),
      image: '/images/i12.jpg',
      link: '/expertconnect',
      cta: 'Learn More →',
    },
    {
      key: 'tradeLinks',
      title: t('home.services.tradeLinks.title'),
      description: t('home.services.tradeLinks.description'),
      image: '/images/istockphoto-3.jpg',
      link: '/tradelink',
      cta: 'Learn More →',
    },
  ];

  return (
    <section className="home">
      {/* Hero Section */}
      <div
        className="modern-section hero-section"
        style={{
          backgroundImage: "url('/images/istockphoto-10.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        data-aos="fade-up"
      >
        <div className='hr-overlay'>
        <div className="text-box hro-text">
          <h1>{t('home.welcomeTitle')}</h1>
          <p>{t('home.welcomeIntro1')}</p>
          <h2>{t('home.welcomeIntroSubtitle')}</h2>
          <p>{t('home.welcomeIntro')}</p>
          <Link onClick={scrollToServices} className="btn primary">
            {t('home.ctaExploreServices')}
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/istockphoto-8.jpg" alt="Business Meeting" />
        </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="modern-section who-we-are" data-aos="fade-right">
        <div className="hero-image">
          <img src="/images/ist612.jpg" alt="Strategic Meeting" />
        </div>
        <div className="text-box">
          <h2>{t('about.whoWeAre')}</h2>
          <p>{t('about.whoWeAreText')}</p>
          <Link to="/about" className="btn secondary">
            {t('home.ctaAboutUs')}
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section ref={servicesRef} className="services-section" data-aos="fade-up">
        <header className="services-header">
          <h1 className="services-title">{t('services.headerTitle')}</h1>
          <p className="services-subtext">{t('services.headerDescription')}</p>
        </header>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.key} data-aos="fade-up">
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to={service.link} className="btn secondary">
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <div className="modern-section reverse philosophy" data-aos="fade-left">
        <div className="hero-image">
          <img src="/images/1p.jpg" alt="Team Discussion" />
        </div>
        <div className="text-box">
          <h2>{t('about.philosophy')}</h2>
          <p>{t('about.philosophyText')}</p>
          <Link to="/contact" className="btn primary">
            {t('home.ctaContactUs')}
          </Link>
        </div>
      </div>

      {/* Blog Teaser Section */}
      <section className="services-section-blog-teaser" data-aos="fade-up">
        <div className="blog-teaser">
          <h2>{t('home.blogTitle') || 'Insights & Updates'}</h2>
          <div className="blog-preview">
            <div className="blog-card">
              <img src="/images/blog-1.jpg" alt="Blog 1" />
              <h4>Unlocking Opportunities in Emerging Markets</h4>
              <p>Why Japan–Africa trade partnerships are gaining momentum in 2025.</p>
              <Link to="/insights" className="read-more">
                Read More →
              </Link>
            </div>
            <div className="blog-card">
              <img src="/images/blog-2.jpg" alt="Blog 2" />
              <h4>Building Trust Across Cultures</h4>
              <p>How cross-cultural strategy gives businesses a global edge.</p>
              <Link to="/insights" className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
