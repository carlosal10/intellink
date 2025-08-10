import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import './Navbar.css'; // Assuming you have a CSS file for Navbar styles

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className="navbar"
      ref={navRef}
      style={{
        position: 'relative',
        backgroundImage: "url('/4p.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for blur + transparency */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(11, 37, 69, 0.65)', // navy tone, semi-transparent
          backdropFilter: 'blur(8px)', // blur effect
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 0
        }}
      ></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', width: '100%' }}>
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/images/android-chrome-512x512.png"
            alt="Intellink Nippon Logo"
            className="logo-img"
          />
        </Link>

        {/* Hamburger Menu */}
        <div className="hamburger-wrapper">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={24} color="#F1C40F" />
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>{language === 'en' ? 'Home' : 'ホーム'}</Link>
          <Link to="/about" onClick={closeMenu}>{language === 'en' ? 'About' : '会社情報'}</Link>
          <Link to="/services" onClick={closeMenu}>{language === 'en' ? 'Services' : 'サービス'}</Link>
          <Link to="/sectors" onClick={closeMenu}>{language === 'en' ? 'Sectors' : 'セクター'}</Link>
          <Link to="/recruitment" onClick={closeMenu}>{language === 'en' ? 'Careers' : '採用情報'}</Link>
          <Link to="/expertconnect" onClick={closeMenu}>{language === 'en' ? 'Expert Connect' : 'エキスパートコネクト'}</Link>
          <Link to="/tradelink" onClick={closeMenu}>{language === 'en' ? 'TradeLink' : 'トレードリンク'}</Link>
          <Link to="/marketlink" onClick={closeMenu}>{language === 'en' ? 'MarketLink' : 'マーケットリンク'}</Link>
          <Link to="/insights" onClick={closeMenu}>{language === 'en' ? 'Insights' : '知見'}</Link>
          <Link to="/contact" onClick={closeMenu}>{language === 'en' ? 'Contact' : 'お問い合わせ'}</Link>

          {/* Language Toggle */}
          <button
            onClick={() => { toggleLanguage(); closeMenu(); }}
            className="lang-toggle"
          >
            {language === 'en' ? '日本語' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}
