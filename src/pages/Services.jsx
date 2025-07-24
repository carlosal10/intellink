import './Services.css';
import useTranslate from '../hooks/useTranslate';

export default function Services() {
  const t = useTranslate();

  return (
    <section className="services">
      <div className="services-container">

        {/* Market Intelligence */}
        <section className="service-section">
          <h2>{t('services.marketIntelligence.title')}</h2>
          <p>{t('services.marketIntelligence.desc')}</p>
          <ul>
            {t('services.marketIntelligence.points').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Business Matchmaking */}
        <section className="service-section">
          <h2>{t('services.businessMatch.title')}</h2>
          <p>{t('services.businessMatch.desc')}</p>
          <ul>
            {t('services.businessMatch.points').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ExpertConnect™ */}
        <section className="service-section">
          <h2>{t('services.expertConnect.title')}</h2>
          <p>{t('services.expertConnect.desc')}</p>
          <ul>
            {t('services.expertConnect.points').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Trade Links */}
        <section className="service-section">
          <h2>{t('services.tradeLink.title')}</h2>
          <p>{t('services.tradeLink.desc')}</p>
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
