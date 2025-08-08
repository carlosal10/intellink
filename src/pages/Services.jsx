import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          We provide solutions that bridge Japan and emerging markets — delivering insights, 
          connections, and trade opportunities that enable sustainable business growth.
        </p>
      </header>

      <div className="services-grid">
        
        <div className="service-card">
          <h2>Market Intelligence</h2>
          <p>
            We provide timely and accurate insights through research, feasibility studies, 
            and regulatory analysis. Our reports help businesses make informed decisions 
            and reduce risk when entering new markets.
          </p>
        </div>

        <div className="service-card">
          <h2>Market Links (Business Matchmaking)</h2>
          <p>
            We connect Japanese businesses with vetted African partners — and vice versa — 
            ensuring each match supports long-term collaboration and business success.
          </p>
        </div>

        <div className="service-card">
          <h2>ExpertConnect™ Solutions</h2>
          <p>
            Through our proprietary expert-matching platform, we connect organizations with 
            specialized industry professionals, ensuring access to critical knowledge when 
            and where it is needed.
          </p>
        </div>

        <div className="service-card">
          <h2>Trade Links</h2>
          <p>
            We support businesses — especially in Africa — to source high-quality goods 
            from Japan. Our services include supplier identification, verification, 
            negotiation support, and coordination of logistics.
          </p>
        </div>

      </div>
    </div>
  );
}
