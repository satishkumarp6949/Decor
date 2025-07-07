import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';  // Correctly importing Routes and useLocation
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load individual pages/components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Shop = lazy(() => import('./components/Shop'));
const PartyOrders = lazy(() => import('./components/PartyOrders'));
const WeddingDecorations = lazy(() => import('./components/WeddingDecorations'));
const CorporateEvents = lazy(() => import('./components/CorporateEvents'));
const Hero = lazy(() => import('./components/Hero'));
const FlowerCollection = lazy(() => import('./components/FlowerCollection'));
const ServiceSection = lazy(() => import('./components/ServiceSection'));

// Optional: for transition effect between pages
function PageTransitionWrapper({ children }) {
  const location = useLocation();  // Importing useLocation here
  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="d-flex flex-column min-vh-100">
        <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
          <PageTransitionWrapper>
            <Routes>
              {/* Home page with multiple sections */}
              <Route path="/" element={
                <>
                  <Hero />
                  <FlowerCollection />
                  <ServiceSection />
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/party-orders" element={<PartyOrders />} />
              <Route path="/wedding-decorations" element={<WeddingDecorations />} />
              <Route path="/corporate-events" element={<CorporateEvents />} />
            </Routes>
          </PageTransitionWrapper>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

export default App;