import { useEffect, useState, useRef } from 'react';
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

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const lenisRef = useRef(null);

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
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // Simulated loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
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
            <Hero />
            <TrustMetrics />
            <Solutions />
            <TechSpecs />
            <Portfolio />
            <Resources />
            <LeadForm />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
