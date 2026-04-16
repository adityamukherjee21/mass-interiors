import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutions = [
    { label: 'Fire-Rated Partitions', href: '/solutions/fire-rated-partitions' },
    { label: 'Acoustic Systems', href: '/solutions/acoustic-systems' },
    { label: 'False Ceilings', href: '/solutions/false-ceilings' },
    { label: 'Wet Area Boards', href: '/solutions/wet-area-boards' },
    { label: 'External Cladding', href: '/solutions/external-cladding' },
    { label: 'LGSF Systems', href: '/solutions/prefab-lgsf' },
  ];

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Compare Products', href: '/compare' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="footer" data-testid="footer">
      <div className="container-premium">
        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Brand Column */}
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="footer-wordmark">MASS INTERIORS</span>
              </div>
              <div className="rule-yellow mb-4"></div>
              <p className="footer-tagline">
                India's premium dry construction partner. Engineering interiors 
                that protect, perform, and endure.
              </p>
              <div className="flex gap-4 mt-6">
                <a 
                  href="#" 
                  className="w-10 h-10 border border-steel flex items-center justify-center text-muted hover:text-yellow hover:border-yellow transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 border border-steel flex items-center justify-center text-muted hover:text-yellow hover:border-yellow transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </motion.div>

            {/* Solutions Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="footer-col-title">Solutions</h4>
              <div className="footer-links">
                {solutions.map((link) => (
                  <Link key={link.label} to={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="footer-col-title">Company</h4>
              <div className="footer-links">
                {company.map((link) => (
                  <Link key={link.label} to={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="footer-col-title">Contact</h4>
              <div className="space-y-4">
                <div className="footer-contact-item">
                  <MapPin className="footer-contact-icon" size={16} />
                  <span>Raipur, Chhattisgarh, India</span>
                </div>
                <div className="footer-contact-item">
                  <Mail className="footer-contact-icon" size={16} />
                  <a href="mailto:massinteriors.ind@gmail.com" className="hover:text-yellow transition-colors">
                    massinteriors.ind@gmail.com
                  </a>
                </div>
                <div className="footer-contact-item">
                  <Phone className="footer-contact-icon" size={16} />
                  <span>+91 XXX XXX XXXX</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © {currentYear} MASS INTERIORS. ALL RIGHTS RESERVED.
          </span>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Giant Wordmark */}
      <motion.div 
        className="overflow-hidden py-8 border-t border-steel"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-premium">
          <span 
            className="font-display text-[clamp(48px,12vw,180px)] text-steel leading-none block"
            style={{ letterSpacing: '-0.02em' }}
          >
            MASS INTERIORS
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
