import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? 'show' : ''}`}>

      <Link to="/" className="logo" onClick={closeMenu}>Intellink Nippon</Link>

      {/* Hamburger button */}
      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
  <span></span>
  <span></span>
  <span></span>
</button>


      <div className="nav-links">
        <Link to="/" onClick={closeMenu}>{language === 'en' ? 'Home' : 'ホーム'}</Link>
        <Link to="/about" onClick={closeMenu}>{language === 'en' ? 'About' : '会社情報'}</Link>
        <Link to="/services" onClick={closeMenu}>{language === 'en' ? 'Services' : 'サービス'}</Link>
        <Link to="/insights" onClick={closeMenu}>{language === 'en' ? 'Insights' : '知見'}</Link>
        <Link to="/contact" onClick={closeMenu}>{language === 'en' ? 'Contact' : 'お問い合わせ'}</Link>
        <button onClick={() => { toggleLanguage(); closeMenu(); }} className="lang-toggle">
          {language === 'en' ? '日本語' : 'EN'}
        </button>
      </div>
    </nav>
  );
}
