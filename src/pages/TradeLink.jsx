import React from "react";
import "./TradeLink.css";

const TradeLink = () => {
  return (
    <div className="trade-link-container">
      {/* Hero Section */}
      <section className="trade-link-hero">
        <div className="hero-content">
          <h1>Cross-Border Trade Made Simple.</h1>
          <p>
            Doing business across borders can be complex — even overwhelming —
            without deep local knowledge. TradeLink simplifies the process so
            you can trade with confidence and clarity.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt="Cross-Border Trade"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="trade-link-intro">
        <h2>What is TradeLink?</h2>
        <p>
          TradeLink is our dedicated solution for facilitating secure, efficient,
          and well-informed international trade — especially between Japan and
          Africa/emerging markets. Whether you need a verified supplier, a
          trustworthy distributor, or a route to market, we connect you with
          intelligence-backed opportunities.
        </p>
      </section>

      {/* What We Offer */}
      <section className="trade-link-offer">
        <div className="offer-text">
          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>Partner & Supplier Identification:</strong> Discover and
              connect with reliable partners tailored to your needs.
            </li>
            <li>
              <strong>Supplier & Product Verification:</strong> Background checks,
              profiling, and reference verifications.
            </li>
            <li>
              <strong>Negotiation & Communication Support:</strong> Bridge
              language and cultural gaps during negotiations.
            </li>
            <li>
              <strong>Market Entry & Sales Channel Strategy:</strong> Identify
              the best entry routes and promotional opportunities.
            </li>
            <li>
              <strong>Logistics Coordination:</strong> Ensure efficient,
              compliant freight and customs processes.
            </li>
          </ul>
        </div>
        <div className="offer-image">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
            alt="TradeLink Services"
          />
        </div>
      </section>

      {/* Why TradeLink */}
      <section className="trade-link-benefits">
        <div className="benefits-image">
          <img
            src="https://images.unsplash.com/photo-1581094651181-35942459ef91?auto=format&fit=crop&w=1600&q=80"
            alt="Why Choose TradeLink"
          />
        </div>
        <div className="benefits-text">
          <h2>Why TradeLink?</h2>
          <ul>
            <li>Risk Mitigation — Avoid scams, misunderstandings, and delays</li>
            <li>Local Knowledge — Navigate regulations and cultural norms</li>
            <li>Reliable Network — Work only with vetted partners</li>
            <li>Market Growth — Expand with purpose</li>
            <li>End-to-End Support — From sourcing to delivery</li>
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section className="trade-link-cases">
        <h2>Use Cases</h2>
        <ul>
          <li>
            Japanese company sourcing organic coffee beans from Uganda with no
            starting point.
          </li>
          <li>
            Ghanaian artisan brand selling handmade textiles in Japan.
          </li>
          <li>
            Tokyo-based food company seeking verified Kenyan ingredient suppliers.
          </li>
          <li>
            Wellness brand testing products in Japan via exhibitions and pop-up
            stores.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="trade-link-cta">
        <h2>Get Started Today</h2>
        <p>
          Let us help you trade with confidence. Whether you’re buying, selling,
          or exploring partnerships, TradeLink ensures you're never navigating
          blindly.
        </p>
        <button className="cta-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default TradeLink;
