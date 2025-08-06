import './Footer.css';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Contact Info */}
        <div className="footer-column">
          <p><strong>Email:</strong><br /> g-owuor@intellink-nippon.co.jp</p>
          <p><strong>Phone:</strong><br /> +81-80-5643-1501</p>
          <p><strong>Address:</strong><br /> Intellink Nippon Consulting LLC, Tokyo</p>
        </div>

        {/* Column 2: Social Icons + Labels */}
        <div className="footer-column social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>
          <a href="https://wa.me/818056431501" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="mailto:g-owuor@intellink-nippon.co.jp">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>

        {/* Column 3: Language Switch & Copyright */}
        <div className="footer-column">
          <button onClick={toggleLanguage} className="footer-lang">
            {language === 'en' ? '日本語' : 'EN'}
          </button>
          <p className="copyright">
            © {new Date().getFullYear()} Intellink Nippon Consulting LLC
          </p>
        </div>
      </div>
      <Link to="/" className="logo" onClick={closeMenu}>
        <img
          src="/images/android-chrome-512x512.png"
          alt="Intellink Nippon Logo"
          className="logo-img"
        />
      </Link>
    </footer>
  );
}
