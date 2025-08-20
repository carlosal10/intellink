import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ExpertConnect from './pages/ExpertConnect';
import TradeLink from './pages/TradeLink';
import MarketLink from './pages/MarketLink';
import Insights from './pages/Insights';
import Sectors from './pages/Sectors';
import RecruitmentForm from './pages/RecruitmentForm';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
       <HelmetProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/recruitment" element={<RecruitmentForm />} />
              <Route path="/recruitment/:id" element={<RecruitmentForm />} />
              <Route path="/expertconnect" element={<ExpertConnect />} />
              <Route path="/expertconnect/:id" element={<ExpertConnect />} />
              <Route path="/tradelink" element={<TradeLink />} />
              <Route path="/tradelink/:id" element={<TradeLink />} />
              <Route path="/marketlink" element={<MarketLink />} />
              <Route path="/marketlink/:id" element={<MarketLink />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </HelmetProvider>
    </AuthProvider>
  );
}

export default App;
