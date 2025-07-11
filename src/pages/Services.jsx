import './Services.css';
import useTranslate from '../hooks/useTranslate';

export default function Services() {
  const t = useTranslate();

  return (
    <section className="services">
      <div className="services-container">

        {/* MarketLink */}
        <section className="service-section">
          <h2>{t('services.marketLink.title')}</h2>
          <ul>
            {t('services.marketLink.points').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ExpertConnect */}
        <section className="service-section">
          <h2>{t('services.expertConnect.title')}</h2>
          <ul>
            {t('services.expertConnect.points').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* TradeLink */}
        <section className="service-section">
          <h2>{t('services.tradeLink.title')}</h2>
          <ul>
            {t('services.tradeLink.points').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

      </div>
    </section>
  );
}
