import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';
export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Intellink Nippon</Link>
      <div className="nav-links">
        <Link to="/">{language === 'en' ? 'Home' : 'ホーム'}</Link>
        <Link to="/about">{language === 'en' ? 'About' : '会社情報'}</Link>
        <Link to="/services">{language === 'en' ? 'Services' : 'サービス'}</Link>
        <Link to="/insights">{language === 'en' ? 'Insights' : '知見'}</Link>
        <Link to="/contact">{language === 'en' ? 'Contact' : 'お問い合わせ'}</Link>
        <button onClick={toggleLanguage} className="lang-toggle">
          {language === 'en' ? '日本語' : 'EN'}
        </button>
      </div>
    </nav>
  );
}
