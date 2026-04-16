import { useEffect, useState, useRef, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import '@/App.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import Solutions from './components/Solutions';
import TechSpecs from './components/TechSpecs';
import Portfolio from './components/Portfolio';
import Resources from './components/Resources';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

// Pages
import AboutPage from './pages/AboutPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ComparePage from './pages/ComparePage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Homepage component
const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <Solutions />
      <TechSpecs />
      <Portfolio />
      <Resources />
      <LeadForm />
    </>
  );
};

// Main App Layout
const AppLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);
  const intervalRef = useRef(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenisRef.current?.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      lenisRef.current?.destroy();
    };
  }, []);

  // Simulated loading progress (only on first load)
  useEffect(() => {
    if (sessionStorage.getItem('hasLoaded')) {
      setLoading(false);
      return;
    }

    intervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('hasLoaded', 'true');
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="App bg-void min-h-screen" data-testid="app-container">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen progress={loadingProgress} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          
          <main>
            {children}
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
