import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${menuOpen ? 'show' : ''}`} ref={navRef}>
      <Link to="/" className="logo" onClick={closeMenu}>Intellink Nippon</Link>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span>☰</span>
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
