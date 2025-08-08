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
    <section className="insights">
      <div className="insights-container">

        {/* Success Stories */}
        <section 
          className="insight-section fade-in" 
          style={{
            backgroundImage: 'url("https://source.unsplash.com/1600x900/?success,business")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="overlay">
            <h2 className="section-title">{t('insights.successTitle')}</h2>
            <p className="section-text">{t('insights.successText')}</p>
          </div>
        </section>

        {/* Client Feedback */}
        <section 
          className="insight-section fade-in"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/1600x900/?feedback,teamwork")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="overlay">
            <h2 className="section-title">{t('insights.feedbackTitle')}</h2>
            <p className="section-text">
              {t('insights.feedbackText')}
              <br />
              <em className="feedback-client">{t('insights.feedbackClient')}</em>
            </p>
          </div>
        </section>

        {/* Monetized Articles */}
        <section 
          className="insight-section fade-in"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/1600x900/?news,report")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="overlay">
            <h2 className="section-title">{t('insights.articlesTitle')}</h2>
            <ul className="articles-list">
              {t('insights.articles')?.map((article, index) => (
                <li key={index} className="article-item">
                  <div className="article-header">
                    <span className="article-title">{article}</span>
                  </div>

                  {unlockedArticles.includes(index) ? (
                    <a
                      href={`/downloads/article-${index + 1}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn primary"
                    >
                      {t('insights.download')}
                    </a>
                  ) : (
                    <button
                      className="btn secondary"
                      onClick={() => {
                        if (isLoggedIn && hasSubscription) {
                          grantAccess(index);
                        } else {
                          redirectToCheckout(index, 500); // $5 in cents
                        }
                      }}
                    >
                      {t('insights.subscribeCTA')}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </section>
  );
}
