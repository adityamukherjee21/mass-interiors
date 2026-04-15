import { motion } from 'framer-motion';
import { Flame, Volume2, Droplets, Thermometer, Shield, Layers } from 'lucide-react';

export const TechSpecs = () => {
  const specCards = [
    {
      title: 'Fire Resistance',
      icon: Flame,
      value: '171',
      unit: 'MIN',
      description: 'Integrity & insulation tested per IS standards',
      specs: [
        { key: 'Ignitability', value: 'Class P' },
        { key: 'Fire Propagation', value: '2.79 Index' },
        { key: 'Surface Spread', value: 'Class 1' },
      ],
      span: 'span-6',
    },
    {
      title: 'Acoustic Rating',
      icon: Volume2,
      value: '65',
      unit: 'STC',
      description: 'Sound transmission class for double-layer systems',
      specs: [
        { key: 'STC 45', value: '90mm Wall' },
        { key: 'STC 55', value: '132mm Wall' },
        { key: 'STC 60', value: '178mm Wall' },
      ],
      span: 'span-6',
    },
    {
      title: 'Density',
      icon: Layers,
      value: '1298',
      unit: 'kg/m³',
      description: 'High-density fiber cement composition',
      span: 'span-3',
    },
    {
      title: 'Flexural Strength',
      icon: Shield,
      value: '9.1',
      unit: 'N/mm²',
      description: 'MOR wet condition performance',
      span: 'span-3',
    },
    {
      title: 'Water Absorption',
      icon: Droplets,
      value: '30.6',
      unit: '%',
      description: '22-hour immersion test result',
      span: 'span-3',
    },
    {
      title: 'Thermal K-Value',
      icon: Thermometer,
      value: '0.172',
      unit: 'W/m.k',
      description: 'Conductivity at 30°C mean temp',
      span: 'span-3',
    },
  ];

  return (
    <section id="specs" className="tech-section section-padding" data-testid="tech-specs-section">
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
            <span className="mono-label text-yellow">TECHNICAL DATA</span>
          </div>
          <h2 className="section-title">
            PERFORMANCE<br/>SPECIFICATIONS
          </h2>
          <p className="section-desc">
            VBOARD systems tested to IS 14862:2000 and ASTM C 1186 standards. 
            Every metric engineered for architectural excellence.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="tech-grid">
          {specCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={index}
                className={`tech-card ${card.span}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.76, 0, 0.24, 1]
                }}
                data-testid={`tech-card-${index}`}
              >
                <div className="tech-card-header">
                  <span className="tech-card-title">{card.title}</span>
                  <Icon className="tech-card-icon" size={18} />
                </div>
                
                <div className="tech-value-large">
                  {card.value}
                  <span className="unit">{card.unit}</span>
                </div>
                
                <p className="text-muted text-sm mt-3 mb-4">{card.description}</p>
                
                {card.specs && (
                  <div className="tech-specs-list mt-auto">
                    {card.specs.map((spec, i) => (
                      <div key={i} className="tech-spec-row">
                        <span className="tech-spec-key">{spec.key}</span>
                        <span className="tech-spec-val">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Board Dimensions */}
        <motion.div 
          className="mt-8 p-6 bg-iron border border-steel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="mono-label text-muted block mb-2">BOARD DIMENSIONS</span>
              <span className="font-mono text-lg text-white">
                1220 × 1830 / 2440 / 2745 / 3050 mm
              </span>
            </div>
            <div>
              <span className="mono-label text-muted block mb-2">THICKNESS RANGE</span>
              <span className="font-mono text-lg text-white">4mm — 25mm</span>
            </div>
            <div>
              <span className="mono-label text-muted block mb-2">COMPLIANCE</span>
              <span className="font-mono text-lg text-white">IS 14862 / ASTM C 1186</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSpecs;
