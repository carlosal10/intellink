import './Insights.css';
import useTranslate from '../hooks/useTranslate';
import { useAuth } from '../context/AuthContext';
import { redirectToCheckout } from '../api/checkout';
import { useState } from 'react';

export default function Insights() {
  const t = useTranslate();
  const { isLoggedIn, hasSubscription } = useAuth();
  const [unlockedArticles, setUnlockedArticles] = useState([]);

  const grantAccess = (index) => {
    setUnlockedArticles((prev) => [...prev, index]);
  };

  return (
    <div className="insights-container">

      {/* Success Stories */}
      <section
        className="insights-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("https://source.unsplash.com/1600x900/?success,business")`
        }}
      >
        <div className="insights-hero-content">
          <h2>{t('insights.successTitle')}</h2>
          <p>{t('insights.successText')}</p>
        </div>
      </section>

      {/* Client Feedback */}
      <section
        className="insights-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("https://source.unsplash.com/1600x900/?feedback,teamwork")`
        }}
      >
        <div className="insights-hero-content">
          <h2>{t('insights.feedbackTitle')}</h2>
          <p>
            {t('insights.feedbackText')}
            <br />
            <em className="feedback-client">{t('insights.feedbackClient')}</em>
          </p>
        </div>
      </section>

      {/* Premium Articles */}
      <section className="insights-articles">
        <div className="articles-header">
          <h2>{t('insights.articlesTitle')}</h2>
        </div>

        <div className="articles-grid">
          {t('insights.articles')?.map((article, index) => (
            <div key={index} className="article-card">
              <div className="article-info">
                <span className="article-title">{article}</span>
              </div>

              {unlockedArticles.includes(index) ? (
                <a
                  href={`/downloads/article-${index + 1}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
                >
                  {t('insights.download')}
                </a>
              ) : (
                <button
                  className="secondary-btn"
                  onClick={() => {
                    if (isLoggedIn && hasSubscription) {
                      grantAccess(index);
                    } else {
                      redirectToCheckout(index, 500); // $5
                    }
                  }}
                >
                  {t('insights.subscribeCTA')}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
