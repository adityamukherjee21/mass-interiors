import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '/about', isPage: true },
  { label: 'Solutions', href: '#solutions', homeHref: '/#solutions', isPage: false },
  { label: 'Compare', href: '/compare', isPage: true },
  { label: 'Portfolio', href: '#portfolio', homeHref: '/#portfolio', isPage: false },
  { label: 'Contact', href: '#contact', homeHref: '/#contact', isPage: false },
];

// Desktop navigation links
const DesktopNav = ({ links, isHomePage, onHashClick, onCtaClick }) => (
  <div className="hidden lg:flex items-center gap-8">
    {links.map((link) => {
      const href = link.isPage ? link.href : (isHomePage ? link.href : link.homeHref);
      return link.isPage ? (
        <Link 
          key={link.label}
          to={href}
          className="nav-link"
          data-testid={`nav-link-${link.label.toLowerCase()}`}
        >
          {link.label}
        </Link>
      ) : (
        <a 
          key={link.label}
          href={href}
          className="nav-link"
          onClick={(e) => onHashClick(e, href)}
          data-testid={`nav-link-${link.label.toLowerCase()}`}
        >
          {link.label}
        </a>
      );
    })}
    <button 
      onClick={onCtaClick}
      className="btn-primary ml-4"
      data-testid="nav-cta"
    >
      Get Quote
      <ArrowUpRight size={14} />
    </button>
  </div>
);

// Mobile menu overlay
const MobileMenu = ({ isOpen, links, isHomePage, onHashClick, onCtaClick, onClose }) => (
  <motion.div 
    className="fixed inset-0 z-[999] bg-void lg:hidden"
    initial={{ opacity: 0, x: '100%' }}
    animate={{ 
      opacity: isOpen ? 1 : 0,
      x: isOpen ? 0 : '100%'
    }}
    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
    style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    data-testid="nav-mobile-menu"
  >
    <button 
      className="absolute top-6 right-6 p-2 text-white z-10"
      onClick={onClose}
      aria-label="Close menu"
    >
      <X size={24} />
    </button>

    <div className="container-premium pt-24 pb-8 flex flex-col h-full overflow-y-auto">
      <div className="flex flex-col gap-6">
        {links.map((link, i) => {
          const href = link.isPage ? link.href : (isHomePage ? link.href : link.homeHref);
          return link.isPage ? (
            <motion.div key={link.label}>
              <Link 
                to={href}
                className="font-display text-4xl text-white block"
                onClick={onClose}
              >
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.4, 
                    delay: isOpen ? i * 0.1 : 0,
                    ease: [0.76, 0, 0.24, 1]
                  }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </motion.div>
          ) : (
            <motion.a 
              key={link.label}
              href={href}
              className="font-display text-4xl text-white"
              onClick={(e) => onHashClick(e, href)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : 20
              }}
              transition={{ 
                duration: 0.4, 
                delay: isOpen ? i * 0.1 : 0,
                ease: [0.76, 0, 0.24, 1]
              }}
            >
              {link.label}
            </motion.a>
          );
        })}
      </div>
      
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <button 
          onClick={onCtaClick}
          className="btn-primary w-full justify-center"
        >
          Get Quote
          <ArrowUpRight size={14} />
        </button>
      </motion.div>

      <div className="mt-auto pt-8 border-t border-steel">
        <div className="mono-label mb-4">Contact</div>
        <a href="mailto:massinteriors.ind@gmail.com" className="text-cloud text-sm block hover:text-yellow transition-colors">
          massinteriors.ind@gmail.com
        </a>
        <p className="text-cloud text-sm mt-1">Raipur, Chhattisgarh</p>
      </div>
    </div>
  </motion.div>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleHashClick = useCallback((e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    } else if (href.startsWith('/#')) {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setMobileOpen(false);
    }
  }, [navigate]);

  const handleCtaClick = useCallback((e) => {
    const href = isHomePage ? '#contact' : '/#contact';
    handleHashClick(e, href);
  }, [isHomePage, handleHashClick]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        data-testid="navbar"
      >
        <div className="container-premium">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
              <span className="font-display text-2xl tracking-tight text-white">
                MASS INTERIORS
              </span>
              <span className="hidden sm:block w-px h-5 bg-steel"></span>
              <span className="hidden sm:block mono-label text-mid">
                DRY CONSTRUCTION SYSTEMS
              </span>
            </Link>

            <DesktopNav 
              links={navLinks} 
              isHomePage={isHomePage} 
              onHashClick={handleHashClick} 
              onCtaClick={handleCtaClick} 
            />

            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              data-testid="nav-mobile-toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu 
        isOpen={mobileOpen}
        links={navLinks}
        isHomePage={isHomePage}
        onHashClick={handleHashClick}
        onCtaClick={handleCtaClick}
        onClose={closeMobile}
      />
    </>
  );
};

export default Navbar;
