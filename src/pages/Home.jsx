import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import useTranslate from '../hooks/useTranslate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

export default function Home() {
  const t = useTranslate();
  const [activeSection, setActiveSection] = useState(null);
  const servicesRef = useRef(null);
  const capabilitiesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      key: 'marketLinks',
      title: t('home.services.marketLinks.title'),
      description: t('home.services.marketLinks.description'),
      points: t('home.services.marketLinks.points'),
      link: '/marketlink',
      cta: t('home.services.marketLinks.cta'),
      image: '/images/io.jpg'
    },
    {
      key: 'expertConnect',
      title: t('home.services.expertConnect.title'),
      description: t('home.services.expertConnect.description'),
      points: t('home.services.expertConnect.points'),
      link: '/expertconnect',
      cta: t('home.services.expertConnect.cta'),
      image: '/images/i12.jpg'
    },
    {
      key: 'tradeLinks',
      title: t('home.services.tradeLinks.title'),
      description: t('home.services.tradeLinks.description'),
      points: t('home.services.tradeLinks.points'),
      link: '/tradelink',
      cta: t('home.services.tradeLinks.cta'),
      image: '/images/istockphoto-3.jpg'
    },
  ];

  return (
    <section className="home">
      {/* Hero Section */}
      
        <div className='bridge'  style={{
              backgroundImage: "url('/images/Nippon.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 }}
                  data-aos="fade-up"
                      >
                  
           <div className='bridge-overlay'>       
            <h2>{t('home.welcomeIntroSubtitle')}</h2>
            <p>{t('home.welcomeIntro')}</p>
            <Link onClick={scrollToServices} className="btn primary">
              {t('home.ctaExploreServices')}
            </Link>
            
            <div className='hr-overlay'>
                  <div className="text-box hro-text">
                  <h1>{t('home.welcomeTitle')}</h1>
                   <p>{t('home.welcomeIntro1')}</p>
        
                   </div>
                   <div className='hero-image'>
                   <img src='/images/istockphoto-8.jpg'></img>
                   </div>
                 </div>

              </div>
        
        </div>
      

     

      {/* Services Section */}
      <section ref={servicesRef} className="services-section" data-aos="fade-up">
        <header className="services-header">
          <h1 className="services-title">{t('home.services.headerTitle')}</h1>
          <p className="services-subtext">{t('home.services.headerDescription')}</p>
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

 {/* Our Capabilities Section */}
<section
  ref={capabilitiesRef}
  className="capabilities-section"
  data-aos="fade-up"
>
  <header
    className="capabilities-header"
    style={{ textAlign: "center", marginBottom: "2rem", padding: "0 10%" }}
  >
    <h2>{t("home.capabilities.title") || "Our Capabilities"}</h2>
    <p style={{ lineHeight: "1.8" }}>
      {t("home.capabilities.description")}
    </p>
  </header>

  {/* Capabilities Highlights */}
  <div
    className="capabilities-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "2rem",
      padding: "0 10%",
      marginTop: "2rem",
    }}
  >
    {(t("home.capabilities.highlights") || []).map((highlight, index) => (
      <div
        key={index}
        className="capability-card"
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "2rem 1.5rem",
          textAlign: "center",
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.1)";
        }}
      >
        <h3 style={{ color: "#E63946", marginBottom: "0.5rem" }}>
          {highlight}
        </h3>
      </div>
    ))}
  </div>
</section>

 {/* Who We Are Section */}
      <div className="modern-section who-we-are" data-aos="fade-right">
        <div className="who-image">
          <img src="/images/ist612.jpg" alt="Strategic Meeting" />
        </div>
        <div className="text-box">
           <h2>{t('about.whyChooseUs.title')}</h2>
    <ul>
      {t('about.whyChooseUs.points', { returnObjects: true }).map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
          <Link to="/about" className="btn secondary">
            {t('home.ctaAboutUs')}
          </Link>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="modern-section reverse philosophy" data-aos="fade-left">
        <div className="phy-image">
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

 {/* Blog / Insights Section */}
<section className="blog-section" data-aos="fade-up">
  <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
    
    {/* Featured Insights */}
    <div className="blog-card" style={{ marginBottom: "2rem" }}>
      <h3>{t("home.blog.featuredInsights.title")}</h3>
      <ul>
        {t("home.blog.featuredInsights.points", { returnObjects: true }).map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
      <Link to="/insights" className="btn-link">
        {t("home.blog.featuredInsights.cta")}
      </Link>
    </div>

    {/* Why Africa Japan */}
    <div className="blog-card" style={{ marginBottom: "2rem" }}>
      <h3>{t("home.blog.whyAfricaJapan.title")}</h3>
      <ul>
        {t("home.blog.whyAfricaJapan.points", { returnObjects: true }).map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
      <Link to="/about" className="btn-link">
        {t("home.blog.whyAfricaJapan.cta")}
      </Link>
    </div>

  </div>
</section>
</section>
  );
}
