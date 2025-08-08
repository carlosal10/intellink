import React from "react";
import { FaChartLine, FaHandshake, FaGlobeAfrica, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import "./MarketLink.css";
import { Link } from "react-router-dom";

const MarketLink = () => {
  return (
    <div className="marketlink-page">

      {/* HERO SECTION */}
      <section className="marketlink-hero">
        <div className="hero-overlay">
          <h1>MarketIntellink</h1>
          <p>Start with certainty — connect to new markets with confidence and clarity.</p>
          <Link to="/contact" className="hero-cta">Get Started</Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="marketlink-intro">
        <p>
          Entering a new market is a bold move — but it shouldn’t be a blind one.
          <strong> MarketIntellink</strong> gives you the intelligence, insights, and trusted local
          connections you need to succeed from day one.
        </p>
      </section>

      {/* WHAT IS */}
      <section className="marketlink-about">
        <div className="about-text">
          <h2>What is MarketIntellink?</h2>
          <p>
            It’s our tailored market intelligence and facilitation service that helps
            international businesses understand, navigate, and thrive in new territories.
            From on-the-ground insights to finding the right local partners, we make your
            market entry smooth and strategic.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="Market research"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="marketlink-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>Market Research</h3>
            <p>In-depth analysis of trends, competitors, and consumer behavior.</p>
          </div>
          <div className="service-card">
            <FaHandshake className="service-icon" />
            <h3>Business Matchmaking</h3>
            <p>Connect with verified local partners and suppliers.</p>
          </div>
          <div className="service-card">
            <FaGlobeAfrica className="service-icon" />
            <h3>Local Navigation</h3>
            <p>Guidance through legal, cultural, and operational landscapes.</p>
          </div>
          <div className="service-card">
            <FaLightbulb className="service-icon" />
            <h3>Strategic Advisory</h3>
            <p>Custom market-entry plans built for your success.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="marketlink-why">
        <h2>Why Choose MarketIntellink?</h2>
        <ul>
          <li><FaCheckCircle /> Deep local expertise in emerging markets.</li>
          <li><FaCheckCircle /> Proven track record of successful market entries.</li>
          <li><FaCheckCircle /> Trusted networks across multiple regions.</li>
          <li><FaCheckCircle /> Data-driven strategies for long-term success.</li>
        </ul>
      </section>

      {/* IDEAL FOR */}
      <section className="marketlink-ideal">
        <h2>Ideal For</h2>
        <div className="ideal-tags">
          <span>Exporters</span>
          <span>Investors</span>
          <span>Startups</span>
          <span>Trade Agencies</span>
          <span>Corporate Expansions</span>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="marketlink-finalcta">
        <h2>Start with Certainty, Not Assumptions</h2>
        <p>
          Partner with <strong>MarketIntellink</strong> and open the door to opportunity with confidence.
        </p>
        <Link to="/contact" className="final-cta-btn">Talk to Us</Link>
      </section>
    </div>
  );
};

export default MarketLink;
