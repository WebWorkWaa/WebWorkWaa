import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SoundToggle from './components/SoundToggle';
import CustomCursor from './components/CustomCursor';
import WebDevelopment from './pages/WebDevelopment';
import UiUxDesign from './pages/UiUxDesign';
import WebApps from './pages/WebApps';
import AITools from './pages/AITools';
import DummyPage from './pages/DummyPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div className="min-h-screen bg-black cursor-none">
            <CustomCursor />
            <div className="fixed inset-0 -z-10">
              <video
                className="w-full h-full object-cover"
                playsInline
                autoPlay
                muted
                loop
                poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              >
                {/* Add your video source here */}
                {/* <source src="/path-to-your-video.mp4" type="video/mp4" /> */}
              </video>
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Testimonials />
                  <Contact />
                </>
              } />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/uiux-design" element={<UiUxDesign />} />
              <Route path="/web-apps" element={<WebApps />} />
              <Route path="/ai-tools" element={<AITools />} />
              <Route path="/dummy" element={<DummyPage />} />
            </Routes>
            <Footer />
            <SoundToggle />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;