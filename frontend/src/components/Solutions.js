import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const solutionsData = [
  {
    id: 'fire-rated',
    title: 'FIRE-RATED PARTITIONS',
    tag: 'FIRE PROTECTION',
    desc: 'Up to 3-hour fire-rated wall systems for hospitals, data centers, and high-rise buildings. Tested to IS 3809 standards.',
    specs: [
      { value: '3 HR', label: 'Fire Rating' },
      { value: '90mm', label: 'Min. Thickness' },
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    size: 'large',
  },
  {
    id: 'acoustic',
    title: 'ACOUSTIC SYSTEMS',
    tag: 'SOUND CONTROL',
    desc: 'STC 45-65 rated acoustic partitions for recording studios, conference rooms, and healthcare facilities.',
    specs: [
      { value: 'STC 65', label: 'Max Rating' },
      { value: '244mm', label: 'System Width' },
    ],
    image: 'https://images.unsplash.com/photo-1764083292858-1576bce9e678?w=800&q=80',
    size: 'medium',
  },
  {
    id: 'ceiling',
    title: 'FALSE CEILINGS',
    tag: 'OVERHEAD SYSTEMS',
    desc: 'T-grid and concealed systems for commercial spaces, airports, and premium interiors.',
    specs: [
      { value: '6mm', label: 'Board Thickness' },
      { value: '600x600', label: 'Tile Size' },
    ],
    image: 'https://images.unsplash.com/photo-1762801156780-dec274643407?w=800&q=80',
    size: 'medium',
  },
  {
    id: 'wet-area',
    title: 'WET AREA BOARDS',
    tag: 'MOISTURE RESISTANT',
    desc: 'Water-resistant cement boards for bathrooms, kitchens, and swimming pool areas.',
    specs: [
      { value: '36%', label: 'Water Absorption' },
      { value: '12mm', label: 'Recommended' },
    ],
    image: 'https://images.unsplash.com/photo-1765902513371-dc3cf6b2df1d?w=800&q=80',
    size: 'small',
  },
  {
    id: 'cladding',
    title: 'EXTERNAL CLADDING',
    tag: 'FACADE SYSTEMS',
    desc: 'Weather-resistant exterior cladding with architectural finishes for modern facades.',
    specs: [
      { value: '50', label: 'Freeze-Thaw Cycles' },
      { value: '25', label: 'Heat-Rain Cycles' },
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    size: 'small',
  },
  {
    id: 'mezzanine',
    title: 'MEZZANINE FLOORING',
    tag: 'STRUCTURAL',
    desc: 'High-density cement boards for raised floors and mezzanine construction.',
    specs: [
      { value: '25mm', label: 'Max Thickness' },
      { value: '1200kg/m³', label: 'Density' },
    ],
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    size: 'small',
  },
  {
    id: 'prefab',
    title: 'PREFAB STRUCTURES',
    tag: 'LGSF SYSTEMS',
    desc: 'Lightweight steel frame construction with VBOARD cladding for rapid deployment.',
    specs: [
      { value: '60%', label: 'Faster Build' },
      { value: '100%', label: 'Recyclable' },
    ],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    size: 'large',
  },
  {
    id: 'wall-paneling',
    title: 'WALL PANELING',
    tag: 'INTERIOR FINISH',
    desc: 'Paintable and textured wall lining solutions for premium interior applications.',
    specs: [
      { value: '8mm', label: 'Standard' },
      { value: 'Class P', label: 'Fire Grade' },
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    size: 'medium',
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="solutions-section section-padding" data-testid="solutions-section">
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
            <span className="mono-label text-yellow">VBOARD SYSTEMS</span>
          </div>
          <h2 className="section-title">
            ENGINEERED<br/>SOLUTIONS
          </h2>
          <p className="section-desc">
            Comprehensive dry construction systems for every architectural challenge. 
            From fire protection to acoustic isolation — precision-engineered for performance.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="solutions-grid">
          {solutionsData.map((solution, index) => (
            <motion.div 
              key={solution.id}
              className={`solution-card ${solution.size}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.76, 0, 0.24, 1]
              }}
              data-testid={`solution-card-${solution.id}`}
            >
              <div className="solution-image">
                <img src={solution.image} alt={solution.title} loading="lazy" />
              </div>
              <div className="solution-overlay"></div>
              <div className="solution-content">
                <span className="solution-tag">{solution.tag}</span>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-desc">{solution.desc}</p>
                <div className="solution-specs">
                  {solution.specs.map((spec, i) => (
                    <div key={i} className="solution-spec">
                      <span className="solution-spec-value">{spec.value}</span>
                      <span className="solution-spec-label">{spec.label}</span>
                    </div>
                  ))}
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
          <a href="#contact" className="btn-ghost" data-testid="solutions-cta">
            View All Systems
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
