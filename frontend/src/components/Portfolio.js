import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const portfolioData = [
  {
    id: 'corporate-office-acoustic',
    title: 'CORPORATE OFFICE ACOUSTIC PARTITIONS',
    location: 'Mumbai, Maharashtra',
    tag: 'ACOUSTIC SYSTEMS',
    area: '45,000 sq.ft',
    system: 'STC 55 Double Layer',
    outcome: 'Reduced ambient noise by 60%',
    image: 'https://images.unsplash.com/photo-1774192620890-f61475279725?w=1200&q=80',
    size: 'large',
  },
  {
    id: 'luxury-hotel-wet-area',
    title: 'LUXURY HOTEL WET AREA SYSTEMS',
    location: 'Goa, India',
    tag: 'WET AREA BOARDS',
    area: '28,000 sq.ft',
    system: 'VPREMIUM 12mm',
    outcome: 'Zero moisture penetration after 3 years',
    image: 'https://images.unsplash.com/photo-1758193017781-e3aee6c3e359?w=800&q=80',
    size: 'small',
  },
  {
    id: 'hospital-fire-rated',
    title: 'HOSPITAL FIRE-RATED OT PARTITIONS',
    location: 'Delhi NCR',
    tag: 'FIRE PROTECTION',
    area: '32,000 sq.ft',
    system: '3-Hour Fire Rating',
    outcome: 'Full regulatory compliance achieved',
    image: 'https://images.unsplash.com/photo-1600247566934-6f8ad5ee691a?w=800&q=80',
    size: 'small',
  },
  {
    id: 'villa-exterior-cladding',
    title: 'VILLA EXTERIOR CEMENT BOARD CLADDING',
    location: 'Bengaluru, Karnataka',
    tag: 'FACADE SYSTEMS',
    area: '8,500 sq.ft',
    system: 'Weather-Resistant 8mm',
    outcome: 'Passed 50 freeze-thaw cycles',
    image: 'https://images.unsplash.com/photo-1774953037913-af0cf688491a?w=1200&q=80',
    size: 'large',
  },
  {
    id: 'airport-ceiling-corridor',
    title: 'AIRPORT FALSE CEILING & CORRIDOR SYSTEMS',
    location: 'Hyderabad, Telangana',
    tag: 'OVERHEAD SYSTEMS',
    area: '120,000 sq.ft',
    system: 'T-Grid Concealed System',
    outcome: 'Completed 2 weeks ahead of schedule',
    image: 'https://images.unsplash.com/photo-1762801156780-dec274643407?w=800&q=80',
    size: 'small',
  },
  {
    id: 'prefab-resort-lgsf',
    title: 'PREFAB RESORT LGSF STRUCTURE',
    location: 'Shimla, Himachal Pradesh',
    tag: 'LGSF SYSTEMS',
    area: '15,000 sq.ft',
    system: 'Full LGSF + VBOARD',
    outcome: '60% faster construction time',
    image: 'https://images.unsplash.com/photo-1766075012339-771997265720?w=800&q=80',
    size: 'small',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section section-padding" data-testid="portfolio-section">
      <div className="container-premium">
        {/* Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="section-eyebrow">
            <div className="rule-yellow"></div>
            <span className="mono-label text-yellow">FLAGSHIP PROJECTS</span>
          </div>
          <h2 className="section-title">
            PROJECT<br/>PORTFOLIO
          </h2>
          <p className="section-desc">
            From luxury hotels to critical healthcare infrastructure — 
            our systems deliver performance across India's most demanding projects.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioData.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`portfolio-card ${project.size}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.76, 0, 0.24, 1]
              }}
              data-testid={`portfolio-card-${project.id}`}
            >
              <Link to={`/projects/${project.id}`} className="absolute inset-0 z-10" />
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="portfolio-overlay"></div>
              <div className="portfolio-content">
                <div className="portfolio-meta">
                  <span className="portfolio-tag">{project.tag}</span>
                  <span className="portfolio-location">
                    <MapPin size={12} />
                    {project.location}
                  </span>
                </div>
                <h3 className="portfolio-title">{project.title}</h3>
                <div className="portfolio-stats">
                  <div className="portfolio-stat">
                    <span className="portfolio-stat-value">{project.area}</span>
                    <span className="portfolio-stat-label">Area Covered</span>
                  </div>
                  <div className="portfolio-stat">
                    <span className="portfolio-stat-value">{project.system}</span>
                    <span className="portfolio-stat-label">System Used</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className="btn-secondary" data-testid="portfolio-cta">
            Discuss Your Project
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
