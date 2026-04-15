import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Specifications', href: '#specs' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

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
            {/* Logo */}
            <a href="/" className="flex items-center gap-3" data-testid="nav-logo">
              <span className="font-display text-2xl tracking-tight text-white">
                MASS INTERIORS
              </span>
              <span className="hidden sm:block w-px h-5 bg-steel"></span>
              <span className="hidden sm:block mono-label text-mid">
                DRY CONSTRUCTION SYSTEMS
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn-primary ml-4"
                data-testid="nav-cta"
              >
                Get Quote
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="nav-mobile-toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div 
        className="fixed inset-0 z-[999] bg-void lg:hidden"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: mobileOpen ? 1 : 0,
          x: mobileOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
        data-testid="nav-mobile-menu"
      >
        <div className="container-premium pt-24 pb-8 flex flex-col h-full">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.label}
                href={link.href}
                className="font-display text-4xl text-white"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: mobileOpen ? 1 : 0,
                  x: mobileOpen ? 0 : 20
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: mobileOpen ? i * 0.1 : 0,
                  ease: [0.76, 0, 0.24, 1]
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          <div className="mt-auto pt-8 border-t border-steel">
            <div className="mono-label mb-4">Contact</div>
            <p className="text-cloud text-sm">massinteriors.ind@gmail.com</p>
            <p className="text-cloud text-sm mt-1">Raipur, Chhattisgarh</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
