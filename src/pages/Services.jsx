import './Services.css';
import useTranslate from '../hooks/useTranslate';

export default function Services() {
  const t = useTranslate();

  const services = [
    {
      title: t('services.marketIntelligence.title'),
      desc: t('services.marketIntelligence.desc'),
      points: t('services.marketIntelligence.points'),
      icon: '/images/icons/market-intel.svg',
    },
    {
      title: t('services.businessMatch.title'),
      desc: t('services.businessMatch.desc'),
      points: t('services.businessMatch.points'),
      icon: '/images/icons/matchmaking.svg',
    },
    {
      title: t('services.expertConnect.title'),
      desc: t('services.expertConnect.desc'),
      points: t('services.expertConnect.points'),
      icon: '/images/icons/expertconnect.svg',
    },
    {
      title: t('services.tradeLink.title'),
      desc: t('services.tradeLink.desc'),
      points: t('services.tradeLink.points'),
      icon: '/images/icons/tradelink.svg',
    }
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h1>{t('services.headerTitle')}</h1>
        <p>{t('services.headerDesc')}</p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h2>{service.title}</h2>
            <p className="service-desc">{service.desc}</p>
            <ul>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
