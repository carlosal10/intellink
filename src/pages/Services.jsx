import React from 'react';
import './Services.css';
import useTranslate from '../hooks/useTranslate';

export default function Services() {
  const t = useTranslate();

  const services = [
    {
      title: t('services.marketIntelligence.title'),
      description: t('services.marketIntelligence.description'),
    },
    {
      title: t('services.marketLinks.title'),
      description: t('services.marketLinks.description'),
    },
    {
      title: t('services.expertConnect.title'),
      description: t('services.expertConnect.description'),
    },
    {
      title: t('services.tradeLinks.title'),
      description: t('services.tradeLinks.description'),
    },
  ];

  return (
    <section className="services-page">
      <header className="services-header">
        <h1 className="services-title">{t('services.headerTitle')}</h1>
        <p className="services-subtext">{t('services.headerDescription')}</p>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card fade-in" key={index}>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
