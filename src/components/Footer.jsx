import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p><strong>Email:</strong> g-owuor@intellink-nippon.co.jp</p>
        <p><strong>Phone:</strong> +81-80-5643-1501</p>
        <p><strong>Address:</strong> Intellink Nippon Consulting LLC, Tokyo, Japan</p>
        <p className="copyright">
          © {new Date().getFullYear()} Intellink Nippon Consulting LLC
        </p>
      </div>
    </footer>
  );
}
