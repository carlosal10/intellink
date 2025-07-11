import './Insights.css';
import useTranslate from '../hooks/useTranslate';

export default function Insights() {
  const t = useTranslate();

  return (
    <section className="insights">
      <div className="insights-container">

        {/* Success Stories */}
        <section className="insight-section">
          <h2>{t('insights.successTitle')}</h2>
          <p>{t('insights.successText')}</p>
        </section>

        {/* Client Feedback */}
        <section className="insight-section">
          <h2>{t('insights.feedbackTitle')}</h2>
          <p>
            {t('insights.feedbackText')}
            <br /><em>{t('insights.feedbackClient')}</em>
          </p>
        </section>

        {/* Thought Leadership */}
        <section className="insight-section">
          <h2>{t('insights.articlesTitle')}</h2>
          <ul>
            {t('insights.articles').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

      </div>
    </section>
  );
}
