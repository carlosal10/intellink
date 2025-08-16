import React from "react";
import "./Insights.css";
import useTranslate from "../hooks/useTranslate";

// Reusable Section component
const Section = ({ title, children }) => (
  <section className="insights-section">
    {title && <div className="section-title"><h2>{title}</h2></div>}
    {children}
  </section>
);

// Reusable Card Grid component
const CardGrid = ({ items }) => (
  <div className="articles-grid">
    {items.map((item, idx) => (
      <div key={idx} className="article-card">
        <span className="article-title">{item.title}</span>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
);

export default function Insights() {
  const t = useTranslate("insights") || {};

  // Pull content from translation object
  const hero = t.hero || {};
  const overview = t.overview || "";
  const featuredInsights = t.featuredInsights || [];
  const useCases = t.useCases || [];
  const idealUsers = t.idealUsers || [];
  const ctaSection = t.ctaSection || {};

  return (
    <div className="insights-container">

      {/* Hero */}
      <section
        className="insights-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero.bgImage})` }}
      >
        <div className="insights-hero-content">
          <h2>{hero.header}</h2>
          <p>{hero.tagline}</p>
          {hero.cta && <button className="cta-btn">{hero.cta}</button>}
        </div>
      </section>

      {/* Overview */}
      <Section title={t.overviewTitle || "Overview"}>
        <p>{overview}</p>
      </Section>

      {/* Featured Insights */}
      <Section title={t.featuredTitle || "Featured Insights"}>
        <CardGrid items={featuredInsights} />
      </Section>

      {/* Use Cases */}
      <Section title={t.useCasesTitle || "Use Cases"}>
        <ul className="tl-list">
          {useCases.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </Section>

      {/* Ideal Users */}
      <Section title={t.idealUsersTitle || "Ideal Users"}>
        <ul className="tl-list">
          {idealUsers.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </Section>

      {/* CTA Section */}
      <Section title={ctaSection.title}>
        <p>{ctaSection.text}</p>
        {ctaSection.button && <button className="cta-btn">{ctaSection.button}</button>}
      </Section>

    </div>
  );
}
