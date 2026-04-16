import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

export const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" data-testid="hero-section">
      {/* Video Background */}
      <div className="hero-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/assets/images/hero-video.mov" type="video/quicktime" />
          <source src="/assets/images/hero-video.mov" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="/assets/images/hero-fallback.jpg" 
            alt="Construction interior with steel framing"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container-premium">
        <div className="hero-content">
          {/* Eyebrow */}
          <motion.div 
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="rule-yellow animate-draw-line"></div>
            <span className="mono-label text-yellow">VBOARD FIBER CEMENT SYSTEMS</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="hero-title font-display text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            data-testid="hero-title"
          >
            ENGINEERED
            <br />
            INTERIORS.
            <br />
            <span className="text-yellow">BUILT TO LAST.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            India's premium dry construction partner. Fire-rated partitions, 
            acoustic wall systems, and architectural cladding — precision-engineered 
            for hospitals, hotels, airports, and critical infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <a 
              href="#contact" 
              className="btn-primary" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              data-testid="hero-cta-primary"
            >
              Request BOQ
              <ArrowUpRight size={14} />
            </a>
            <a 
              href="#solutions" 
              className="btn-secondary"
              onClick={(e) => handleSmoothScroll(e, '#solutions')}
              data-testid="hero-cta-secondary"
            >
              <Play size={14} />
              Explore Systems
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="mono-label text-mid">SCROLL</span>
        <motion.div 
          className="w-px h-8 bg-yellow origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
