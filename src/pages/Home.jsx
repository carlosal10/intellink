import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import useTranslate from '../hooks/useTranslate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

export default function Home() {
  const t = useTranslate();

  const servicesRef = useRef(null);
  const capabilitiesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Unified meta content
  const metaTitle =
    t("seo.home.title") ||
    "Intellink Nippon Consulting LLC - Japan Africa Business Bridge";
  const metaDescription =
    t("seo.home.description") ||
    "Building bridges between Japan and Africa through market links, expert connections, and trade facilitation.";
  const siteUrl = "https://www.intellink-nippon.co.jp";

  // Structured data (Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Intellink Nippon Consulting",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Japanese"]
        // omit "telephone" if you don't want to expose a real one
      },
    ],
    "sameAs": [
      "https://www.linkedin.com/company/intellink-nippon",
      "https://twitter.com/intellinknippon"
    ]
  };

  const services = [

     {
      key: 'expertConnect',
      title: t('home.services.expertConnect.title'),
      description: t('home.services.expertConnect.description'),
      points: t('home.services.expertConnect.points'),
      link: '/expertconnect',
      cta: t('home.services.expertConnect.cta'),
      image: '/images/ExpertConnect.jpg',
      alt: 'Expert connection services',
    },
    {
      key: 'marketLinks',
      title: t('home.services.marketLinks.title'),
      description: t('home.services.marketLinks.description'),
      points: t('home.services.marketLinks.points'),
      link: '/marketlink',
      cta: t('home.services.marketLinks.cta'),
      image: '/images/MarketLink.jpg',
      alt: 'Market links between Japan and Africa',
    },
   
    {
      key: 'tradeLinks',
      title: t('home.services.tradeLinks.title'),
      description: t('home.services.tradeLinks.description'),
      points: t('home.services.tradeLinks.points'),
      link: '/tradelink',
      cta: t('home.services.tradeLinks.cta'),
      image: '/images/istockphoto-3.jpg',
      alt: 'Trade connections and networking',
    },
  ];

  return (
    <main className="home">
      {/* SEO Meta Tags */}
        <Helmet>
      {/* Primary Meta */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/images/og-home.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteUrl}/twitter-card.jpg`} />

      {/* Language / Alternate */}
      <link rel="alternate" href={siteUrl} hrefLang="x-default" />
      <link rel="alternate" href={siteUrl} hrefLang="en" />
      <link rel="alternate" href={siteUrl} hrefLang="ja" />
      <link rel="alternate" href={siteUrl} hrefLang="sw" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="bridge" data-aos="fade-up">
        <video
          className="bridge-video"
          src="/images/Nippon.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="bridge-overlay">
          <h1>{t('home.welcomeIntroSubtitle')}</h1>
          <p>{t('home.welcomeIntro')}</p>
          <Link onClick={scrollToServices} className="btn primary">
            {t('home.ctaExploreServices')}
          </Link>
        </div>
      </section>


      <section className="robo">
  <div className="hr-overlay">
    <div className="hero-image">
      <img src="/images/istockphoto-8.webp" alt="Welcome to Japan and Africa collaboration" />
    </div>
    <div className="text-box hro-text">
      <h2>{t('home.welcomeTitle')}</h2>
      <p>{t('home.welcomeIntro1.paragraph1')}</p>
      <p>{t('home.welcomeIntro1.paragraph2')}</p>
      <p>{t('home.welcomeIntro1.paragraph3')}</p>
      <p>{t('home.welcomeIntro1.paragraph4')}</p>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section ref={servicesRef} className="services-section" data-aos="fade-up">
        <div className="services-header">
          <h2>{t('home.services.headerTitle')}</h2>
          <p>{t('home.services.headerDescription')}</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.key} data-aos="fade-up">
              <img src={service.image} alt={service.alt} loading="lazy" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="btn secondary">
                {service.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="capabilities-section" data-aos="fade-up">
        <header className="capabilities-header" style={{ textAlign: 'center', marginBottom: '2rem', padding: '0 10%' }}>
          <h2 style={{ fontSize: '4.5rem', fontFamily: '"Nunito", "Nunito Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontWeight: 100 }}>{t('home.capabilities.title') || 'Our Capabilities'}</h2>
          <p style={{ lineHeight: '1.8', fontWeight: 100, fontFamily: '"Nunito", "Nunito Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontSize: '1.75rem', color: '#000' }}>{t('home.capabilities.description')}</p>
        </header>

        <div
          className="capabilities-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            padding: '0 10%',
            marginTop: '2rem',
          }}
        >
          {(t('home.capabilities.highlights') || []).map((highlight, index) => (
            <div
              key={index}
              className="capability-card"
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <h3 style={{ color: '#E63946', marginBottom: '0.5rem' }}>{highlight}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are" data-aos="fade-right">
        
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
          <div className="who-image">
          <img src="/images/ist612.jpg" alt="Strategic meeting team" loading="lazy" />
          </div>
        
      </section>

      {/* Philosophy Section */}
      <section className="modern-section reverse philosophy" data-aos="fade-left">
        
        <div className="phy-box">
          <h2>{t('about.philosophy')}</h2>
          <p>{t('about.philosophyText')}</p>
          <Link to="/contact" className="btn primary">
            {t('home.ctaContactUs')}
          </Link>
        </div>
      </section>

      {/* Blog / Insights Section */}
      <section className="blog-section" data-aos="fade-up">
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>
          <article className="blog-card" style={{ marginBottom: '2rem' }}>
            <h3>{t('home.blog.featuredInsights.title')}</h3>
            <ul>
              {t('home.blog.featuredInsights.points', { returnObjects: true }).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <Link to="/insights" className="btn-link">
              {t('home.blog.featuredInsights.cta')}
            </Link>
          </article>

          <article className="blog-card" style={{ marginBottom: '2rem' }}>
            <h3>{t('home.blog.whyAfricaJapan.title')}</h3>
            <ul>
              {t('home.blog.whyAfricaJapan.points', { returnObjects: true }).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <Link to="/about" className="btn-link">
              {t('home.blog.whyAfricaJapan.cta')}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
