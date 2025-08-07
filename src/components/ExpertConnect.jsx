import './ExpertConnect.css';

export default function ExpertConnect() {
  return (
    <section className="expert-connect-section">
      <h2>ExpertConnect™ – Local Experts. Global Insight.</h2>
      <p>
        ExpertConnect is our proprietary platform connecting Japanese firms with trusted, local professionals across African markets.
      </p>

      <div className="expert-content">
        <h3>What You Can Expect</h3>
        <ul>
          <li>Sector-specific Advisory</li>
          <li>Short/Long-term Expert Engagements</li>
          <li>Decision-Making Support</li>
          <li>Bespoke Matching to your Goals</li>
        </ul>

        <h3>How It Works</h3>
        <ol>
          <li>Submit Your Request</li>
          <li>Expert Matching</li>
          <li>Initial Consultation</li>
          <li>Engagement Launch</li>
          <li>Ongoing Support</li>
        </ol>

        <h3>Join as an Expert</h3>
        <p>
          Send your CV or LinkedIn profile to <a href="mailto:experts@intellinknippon.com">experts@intellinknippon.com</a>
          <br />
          Subject line: <em>ExpertConnect Application – [Your Name]</em>
        </p>
      </div>
    </section>
  );
}
