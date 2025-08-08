import React from 'react';
import { FaGlobe, FaUsers, FaHandshake, FaSearch, FaClipboardCheck, FaRocket } from 'react-icons/fa';
import './ExpertConnect.css';

export default function ExpertConnect() {
  return (
    <section className="expert-connect-section">
      <div className="ec-hero">
        <div className="ec-hero-content">
          <h1><FaGlobe /> ExpertConnect</h1>
          <h2>Local Experts. Global Insight.</h2>
          <p>
            Many Japanese companies considering overseas expansion—especially into African markets—
            face a critical challenge: finding trustworthy, experienced local talent.
          </p>
        </div>
      </div>

      <div className="ec-container">
        <section className="ec-intro">
          <p>
            Without direct market knowledge or local networks, decision-making becomes slow, risky, and uncertain.
            Some firms rely on third-country personnel, but this often leads to gaps in local relevance and agility.
            At Intellink Nippon Consulting, we offer a better approach.
          </p>
        </section>

        <section className="ec-block">
          <h3>What is ExpertConnect?</h3>
          <p>
            ExpertConnect is our proprietary platform connecting Japanese companies with highly skilled, globally-minded professionals
            based in their target markets. Many of our experts have studied or worked in Japan, giving them the perfect blend of
            local insight and global perspective.
          </p>
          <ul className="ec-list">
            <li>Proven sector specialists with deep local knowledge</li>
            <li>Trusted professionals with strong in-country networks</li>
            <li>Experts who understand Japanese business culture</li>
            <li>Flexible support for short-term or long-term needs</li>
          </ul>
        </section>

        <section className="ec-block">
          <h3>What You Can Expect</h3>
          <ul className="ec-list">
            <li><FaClipboardCheck /> Custom Sector Advisory</li>
            <li><FaClipboardCheck /> Short or Long-Term Engagements</li>
            <li><FaClipboardCheck /> Decision-Making Support</li>
            <li><FaClipboardCheck /> Bespoke Expert Matching</li>
          </ul>
        </section>

        <section className="ec-block">
          <h3>How It Works</h3>
          <ol className="ec-steps">
            <li><strong>Submit Your Request:</strong> Tell us about your needs.</li>
            <li><strong>Expert Matching:</strong> We connect you with vetted professionals.</li>
            <li><strong>Initial Consultation:</strong> Define scope and goals.</li>
            <li><strong>Engagement Launch:</strong> Formalize collaboration.</li>
            <li><strong>Ongoing Support:</strong> We ensure value delivery.</li>
          </ol>
        </section>

        <section className="ec-block">
          <h3>Why It Matters</h3>
          <ul className="ec-list">
            <li>Accelerate market understanding</li>
            <li>Avoid costly mistakes</li>
            <li>Build meaningful partnerships</li>
            <li>Receive context-driven advice</li>
            <li>Move faster with clarity</li>
          </ul>
        </section>

        <section className="ec-block">
          <h3>Register as an Expert</h3>
          <p>
            Are you a professional with deep local knowledge and international exposure?  
            Join the ExpertConnect network and collaborate with global firms through paid engagements.
          </p>

          <h4>✔ Who Can Apply?</h4>
          <ul className="ec-list">
            <li>Sector specialists (agriculture, energy, healthcare, ICT, etc.)</li>
            <li>Business consultants and regulatory advisors</li>
            <li>Market researchers and analysts</li>
            <li>Entrepreneurs, academics, and trade professionals</li>
            <li>Professionals with Japan experience (preferred)</li>
          </ul>

          <h4>How to Apply</h4>
          <p>
            Send your CV or LinkedIn profile and a short cover note to  
            <strong> experts@intellinknippon.com</strong>  
            Subject line: <em>ExpertConnect Application – [Your Name]</em>
          </p>
          <p>Shortlisted candidates will be contacted for an onboarding interview.</p>
        </section>

        <div className="ec-cta">
          <FaRocket />
          <h3>Ready to Get Started?</h3>
          <p>Let ExpertConnect give your business the local insight it needs—or help you share your expertise globally.</p>
        </div>
      </div>
    </section>
  );
}
