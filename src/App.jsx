import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import { AuthProvider } from './context/AuthContext';

import AOS from 'aos';
import 'aos/dist/aos.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function AnimatedApp() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AnimatedApp />
      </Router>
    </AuthProvider>
  );
}
