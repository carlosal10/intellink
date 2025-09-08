import React from "react";
import "./Services.css";
import useTranslate from "../hooks/useTranslate";

export default function Services() {
  const t = useTranslate();

  const services = [
    
    {
      key: "marketLinks",
      title: t("services.marketLinks.title"),
      description: t("services.marketLinks.description"),
      icon: "🔗",
    },
    {
      key: "expertConnect",
      title: t("services.expertConnect.title"),
      description: t("services.expertConnect.description"),
      icon: "👥",
    },
    {
      key: "tradeLinks",
      title: t("services.tradeLinks.title"),
      description: t("services.tradeLinks.description"),
      icon: "🌍",
    },
  ].filter(s => s.title || s.description); // guard against missing i18n keys

  return (
    <main className="services-page" aria-labelledby="svc-heading">
      {/* Hero */}
      <header className="services-header" role="banner">
        <div className="services-hero-bg" aria-hidden="true" style={{
          background: 'url("/images/iso-113.jpg")',
          position: 'absolute; inset: 0',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(1.05)',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          height: '70vh',
        }} />
        <div className="services-hero-overlay" aria-hidden="true" >
        <div className="services-header-inner">
          <span className="svc-chip">Intellink Nippon Consulting</span>
          <h1 id="svc-heading" className="services-title"
          style={{ color: '#F1C40F' }}>
            {t("services.headerTitle")}
          </h1>
          <p className="services-subtext"
            style={{ color: '#fff' }}>
            {t("services.headerDescription")}
          </p>
        </div>
        </div>
      </header>

      {/* Grid */}
      <section className="services-section" aria-label="Our Services">
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.key || index}
              className="service-card"
              tabIndex={0}
              aria-labelledby={`svc-${service.key || index}-title`}
            >
              <div className="svc-card-glow" aria-hidden="true" />
              <div className="svc-icon" aria-hidden="true">{service.icon}</div>
              <h2 id={`svc-${service.key || index}-title`} className="service-title">
                {service.title}
              </h2>
              <p className="service-description">{service.description}</p>
              <a className="svc-link" href="/services">
                {t("common.learnMore") || "Learn more"} →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
