import './Services.css';
import useTranslate from '../hooks/useTranslate';
import { FaChartLine, FaHandshake, FaUserTie, FaGlobe } from 'react-icons/fa';

export default function Services() {
  const t = useTranslate();

  const services = [
    {
      icon: <FaChartLine />,
      title: t('services.marketIntelligence.title'),
      description: t('services.marketIntelligence.description'),
    },
    {
      icon: <FaHandshake />,
      title: t('services.matchmaking.title'),
      description: t('services.matchmaking.description'),
    },
    {
      icon: <FaUserTie />,
      title: t('services.expertConnect.title'),
      description: t('services.expertConnect.description'),
    },
    {
      icon: <FaGlobe />,
      title: t('services.tradeLinks.title'),
      description: t('services.tradeLinks.description'),
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-heading">{t('services.heading')}</h2>
        <p className="services-subheading">{t('services.intro')}</p>

        <div className="services-grid">
          {services.map((service, idx) => (
            <ServiceCard key={idx} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
}
