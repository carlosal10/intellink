import './Footer.css';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p><strong>Email:</strong> g-owuor@intellink-nippon.co.jp</p>
        <p><strong>Phone:</strong> +81-80-5643-1501</p>
        <p><strong>Address:</strong> Intellink Nippon Consulting LLC, Tokyo, Japan</p>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://wa.me/818056431501" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:g-owuor@intellink-nippon.co.jp">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Language Switch */}
        <button onClick={toggleLanguage} className="footer-lang">
          {language === 'en' ? '日本語' : 'EN'}
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} Intellink Nippon Consulting LLC
        </p>
      </div>
    </footer>
  );
}
