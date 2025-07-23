import './Insights.css';
import useTranslate from '../hooks/useTranslate';
import { useAuth } from '../context/AuthContext'; // Assuming you use auth
import { useState } from 'react';

export default function Insights() {
  const t = useTranslate();
  const { isLoggedIn, hasSubscription } = useAuth(); // Custom logic for auth/sub
  const [unlockedArticles, setUnlockedArticles] = useState([]);

  const handleAccess = (index) => {
    if (!isLoggedIn || !hasSubscription) {
      alert(t('insights.subscribePrompt')); // Or redirect to paywall
      return;
    }
    setUnlockedArticles([...unlockedArticles, index]);
  };

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
            {t('insights.feedbackText')}<br />
            <em>{t('insights.feedbackClient')}</em>
          </p>
        </section>

        {/* Monetized Articles */}
        <section className="insight-section">
          <h2>{t('insights.articlesTitle')}</h2>
          <ul>
            {t('insights.articles')?.map((article, index) => (
              <li key={index}>
                <span>{article}</span><br />
                {unlockedArticles.includes(index) ? (
                  <a href={`/downloads/article-${index + 1}.pdf`} target="_blank" rel="noopener noreferrer" className="btn primary">
                    {t('insights.download')}
                  </a>
                ) : (
                  <button onClick={() => handleAccess(index)} className="btn secondary">
                    {t('insights.subscribeCTA')}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </section>
  );
}
