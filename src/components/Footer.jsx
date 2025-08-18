import './Footer.css';
import { useLanguage } from '../context/LanguageContext';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { to: '/', label: { en: 'Home', jp: 'ホーム' } },
    { to: '/about', label: { en: 'About', jp: '会社情報' } },
    { to: '/sectors', label: { en: 'Sectors', jp: 'セクター' } },
    { to: '/insights', label: { en: 'Insights & Reports', jp: '知見' } },
    { to: '/recruitment', label: { en: 'Careers', jp: '採用情報' } },
    { to: '/contact', label: { en: 'Contact', jp: 'お問い合わせ' } },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    { href: 'https://twitter.com', icon: 'fab fa-twitter' },
    { href: 'https://facebook.com', icon: 'fab fa-facebook' },
    { href: 'https://wa.me/818056431501', icon: 'fab fa-whatsapp' },
    { href: 'https://github.com', icon: 'fab fa-github' },
    { href: 'mailto:g-owuor@intellink-nippon.co.jp', icon: 'fas fa-envelope' },
  ];

  return (
    <footer className="footer">
      {/* Row 1: Nav Links */}
      <div className="footer-row footer-nav-row">
        {navLinks.map(link => (
          <div key={link.to} className="footer-nav-group">
            <NavLink to={link.to}>
              {language === 'en' ? link.label.en : link.label.jp}
            </NavLink>
          </div>
        ))}
      </div>

      {/* Row 2: Social Icons */}
      <div className="footer-row social-icons">
        {socialLinks.map(link => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
            <i className={link.icon}></i>
          </a>
        ))}
      </div>

      {/* Row 3: Copyright */}
      <div className="footer-row copyright">
        © {new Date().getFullYear()} Intellink Nippon Consulting LLC
      </div>

      {/* Row 4: Logo */}
      <div className="footer-row footer-logo-wrapper">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src="/images/android-chrome-512x512.png" alt="Intellink Nippon Logo" className="footer-logo" />
        </Link>
      </div>

      {/* Row 5: Language Toggle */}
      <div className="footer-row">
        <button onClick={toggleLanguage} className="footer-lang">
          {language === 'en' ? '日本語' : 'EN'}
        </button>
      </div>
    </footer>
  );
}
