import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PageShell.css";

export default function PageShell({ hero, intro, about, services, why, ideal, africaJapan, finalCTA, children }) {
  const [showForm, setShowForm] = useState(false);
  const africaJapanRef = useRef(null);
  const [animateTyping, setAnimateTyping] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Scroll-triggered typing animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateTyping(true);
          setTimeout(() => setAnimateTyping(false), 10000);
        }
      },
      { threshold: 0.3 }
    );
    if (africaJapanRef.current) observer.observe(africaJapanRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pageshell">
      {/* HERO */}
      {hero && (
        <section className="pageshell-hero" data-aos="fade-up">
          <div className="hero-overlay">
            <h1>{hero.title}</h1>
            <p>{hero.desc}</p>
            {hero.cta && <Link to={hero.cta.link} className="hero-cta">{hero.cta.label}</Link>}
          </div>
        </section>
      )}

      {/* INTRO */}
      {intro && (
        <section className="pageshell-intro" data-aos="fade-up">
          <p>{intro.text}</p>
        </section>
      )}

      {/* ABOUT */}
      {about && (
        <section className="pageshell-about" data-aos="fade-up">
          <div className="about-text">
            <h2>{about.title}</h2>
            <p>{about.text}</p>
          </div>
          {about.image && (
            <div className="about-image">
              <img src={about.image.src} alt={about.image.alt} />
            </div>
          )}
        </section>
      )}

      {/* SERVICES */}
      {services && (
        <section className="pageshell-services" data-aos="fade-up">
          <h2>{services.title}</h2>
          <div className="services-grid">
            {(services.items || []).map((item, i) => {
              const Icon = item.icon;
              return (
                <div className="service-card" key={i}>
                  {Icon && <Icon className="service-icon" />}
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* WHY CHOOSE US */}
      {why && (
        <section className="pageshell-why" data-aos="fade-up">
          <h2>{why.title}</h2>
          <ul>
            {(why.points || []).map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {/* IDEAL FOR */}
      {ideal && (
        <section className="pageshell-ideal" data-aos="fade-up">
          <h2>{ideal.title}</h2>
          <div className="ideal-tags">
            {(ideal.items || []).map((tag, i) => <span key={i}>{tag}</span>)}
          </div>
        </section>
      )}

      {/* AFRICA → JAPAN / CUSTOM SECTION */}
      {africaJapan && (
        <section className="pageshell-africa-japan" ref={africaJapanRef} data-aos="fade-up">
          <h2 className={animateTyping ? "typing-animation" : ""}>{africaJapan.title}</h2>
          {africaJapan.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
          {africaJapan.cards && (
            <div className="cards-grid">
              {africaJapan.cards.map((card, i) => (
                <div className={`why-card ${card.type || ""}`} key={i}>
                  {card.icon && <card.icon className="card-icon" />}
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          )}
          {africaJapan.cta && (
            <div className="africa-japan-cta">
              <h4>{africaJapan.cta.title}</h4>
              <p>{africaJapan.cta.text}</p>
              <button className="ec-btn" onClick={() => setShowForm(!showForm)}>
                {africaJapan.cta.button}
              </button>
            </div>
          )}
        </section>
      )}

      {/* CHILDREN CONTENT */}
      {children}

      {/* FINAL CTA */}
      {finalCTA && (
        <section className="pageshell-finalcta" data-aos="fade-up">
          <h2>{finalCTA.title}</h2>
          <p>{finalCTA.desc}</p>
          {finalCTA.link && <Link to={finalCTA.link} className="final-cta-btn">{finalCTA.button}</Link>}
        </section>
      )}
    </div>
  );
}
