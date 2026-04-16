import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, CheckCircle } from 'lucide-react';

// Solution data
const solutionsData = {
  'fire-rated-partitions': {
    title: 'FIRE-RATED PARTITIONS',
    tag: 'FIRE PROTECTION',
    subtitle: 'Protecting lives and assets with certified fire barriers',
    heroImage: '/assets/images/detail-fire-rated-hero.jpg',
    description: 'VBOARD fire-rated partition systems provide critical protection for hospitals, data centers, high-rise buildings, and industrial facilities. Tested and certified to withstand fire for up to 3 hours, these systems create safe compartments that prevent fire spread and protect evacuation routes.',
    applications: [
      'Hospital corridors and OT complexes',
      'Data center server rooms',
      'High-rise stairwells and lift lobbies',
      'Industrial facilities and warehouses',
      'Hotel room separations',
      'Commercial kitchen fire barriers',
    ],
    specs: [
      { label: 'Fire Rating', value: 'Up to 3 Hours' },
      { label: 'Wall Thickness', value: '90mm - 150mm' },
      { label: 'Board Thickness', value: '10mm - 12mm' },
      { label: 'Compliance', value: 'IS 3809 / BS 476' },
      { label: 'Integrity', value: '171 Minutes' },
      { label: 'Insulation', value: '148 Minutes' },
    ],
    benefits: [
      'Certified fire resistance up to 3 hours',
      'Non-combustible fiber cement composition',
      'Does not emit toxic fumes when exposed to fire',
      'Maintains structural integrity under extreme heat',
      'Quick installation vs masonry alternatives',
    ],
  },
  'acoustic-systems': {
    title: 'ACOUSTIC SYSTEMS',
    tag: 'SOUND CONTROL',
    subtitle: 'Precision sound isolation for critical environments',
    heroImage: '/assets/images/detail-acoustic-hero.jpg',
    description: 'VBOARD acoustic partition systems deliver superior sound transmission class (STC) ratings for environments where noise control is critical. From recording studios to hospital wards, our engineered wall assemblies provide the acoustic isolation your project demands.',
    applications: [
      'Recording and broadcast studios',
      'Conference rooms and boardrooms',
      'Hospital patient rooms and ICUs',
      'Classroom and educational facilities',
      'Call centers and open offices',
      'Residential party walls',
    ],
    specs: [
      { label: 'STC Rating', value: 'Up to STC 65' },
      { label: 'Wall Thickness', value: '90mm - 244mm' },
      { label: 'Single Layer', value: 'STC 45 @ 90mm' },
      { label: 'Double Layer', value: 'STC 55 @ 132mm' },
      { label: 'Staggered Stud', value: 'STC 60 @ 178mm' },
      { label: 'Double Stud', value: 'STC 65 @ 244mm' },
    ],
    benefits: [
      'STC ratings from 45 to 65',
      'Flexible system configurations',
      'Can be combined with fire rating',
      'Thinner than equivalent masonry',
      'Consistent factory-controlled quality',
    ],
  },
  'false-ceilings': {
    title: 'FALSE CEILINGS',
    tag: 'OVERHEAD SYSTEMS',
    subtitle: 'Premium ceiling solutions for every space',
    heroImage: '/assets/images/detail-ceiling-hero.jpg',
    description: 'VBOARD false ceiling systems offer architects flexibility in design while delivering performance in fire safety, acoustics, and durability. Available in T-grid exposed and concealed grid configurations for seamless finishes.',
    applications: [
      'Commercial office spaces',
      'Airport terminals and corridors',
      'Shopping malls and retail',
      'Hospital and healthcare facilities',
      'Educational institutions',
      'Hospitality and banquet halls',
    ],
    specs: [
      { label: 'Board Thickness', value: '6mm - 8mm' },
      { label: 'Tile Size', value: '600 x 600mm' },
      { label: 'Tile Size Alt', value: '600 x 1200mm' },
      { label: 'Grid Type', value: 'T-Grid / Concealed' },
      { label: 'Fire Class', value: 'Class P' },
      { label: 'Sag Resistance', value: 'Excellent' },
    ],
    benefits: [
      'Dimensionally stable — no sagging',
      'Moisture resistant for humid areas',
      'Termite and fungus proof',
      'Paintable smooth surface',
      'Easy access panel options',
    ],
  },
  'wet-area-boards': {
    title: 'WET AREA BOARDS',
    tag: 'MOISTURE RESISTANT',
    subtitle: 'Engineered for bathrooms, kitchens, and pools',
    heroImage: '/assets/images/detail-wet-area-hero.jpg',
    description: 'VPREMIUM wet area boards are specifically engineered for high-moisture environments. With low water absorption and excellent water vapor resistance, these boards provide reliable performance in bathrooms, kitchens, swimming pools, and external applications.',
    applications: [
      'Bathroom wall linings',
      'Kitchen backsplashes and walls',
      'Swimming pool surrounds',
      'Spa and sauna areas',
      'Laundry rooms',
      'Outdoor covered areas',
    ],
    specs: [
      { label: 'Water Absorption', value: '30.6%' },
      { label: 'Moisture Movement', value: '0.061%' },
      { label: 'Vapor Transmission', value: '40.6 g/m².day' },
      { label: 'Board Thickness', value: '8mm - 12mm' },
      { label: 'Water Impermeability', value: 'Pass' },
      { label: 'Warm Water Test', value: 'Pass' },
    ],
    benefits: [
      'Excellent moisture resistance',
      'No swelling or warping',
      'Mold and mildew resistant',
      'Can be tiled directly',
      'Long-term dimensional stability',
    ],
  },
  'external-cladding': {
    title: 'EXTERNAL CLADDING',
    tag: 'FACADE SYSTEMS',
    subtitle: 'Weather-resistant facades for modern architecture',
    heroImage: '/assets/images/detail-cladding-hero.jpg',
    description: 'VPREMIUM external cladding boards provide architects with a durable, weather-resistant facade solution. Tested against freeze-thaw cycles and heat-rain exposure, these boards maintain their integrity in India\'s diverse climate conditions.',
    applications: [
      'Building facades and exteriors',
      'Balcony enclosures',
      'Compound walls',
      'Canopy and soffit linings',
      'Signage backing boards',
      'Architectural features',
    ],
    specs: [
      { label: 'Freeze-Thaw', value: '50 Cycles Pass' },
      { label: 'Heat-Rain', value: '25 Cycles Pass' },
      { label: 'Soak-Dry', value: '50 Cycles Pass' },
      { label: 'Board Thickness', value: '8mm - 12mm' },
      { label: 'Surface Finish', value: 'Smooth / Textured' },
      { label: 'Fire Class', value: 'Class 1' },
    ],
    benefits: [
      'Proven weather resistance',
      'UV stable finishes available',
      'Multiple texture options',
      'Paintable or pre-finished',
      'Low maintenance facade',
    ],
  },
  'mezzanine-flooring': {
    title: 'MEZZANINE FLOORING',
    tag: 'STRUCTURAL SYSTEMS',
    subtitle: 'High-density boards for elevated floors',
    heroImage: '/assets/images/detail-mezzanine-hero.jpg',
    description: 'VBOARD high-density panels provide the strength required for mezzanine flooring, raised access floors, and structural applications. With excellent screw withdrawal and load-bearing capacity, these boards are engineered for performance.',
    applications: [
      'Mezzanine floor decking',
      'Raised access flooring',
      'Industrial platforms',
      'Storage loft flooring',
      'Modular building floors',
      'Portable cabin flooring',
    ],
    specs: [
      { label: 'Density', value: '>1200 kg/m³' },
      { label: 'Board Thickness', value: '18mm - 25mm' },
      { label: 'Screw Withdrawal', value: '1220 N (face)' },
      { label: 'Flexural Strength', value: '>10 MPa' },
      { label: 'Joist Spacing', value: 'Up to 600mm' },
      { label: 'Surface', value: 'Ready for finish' },
    ],
    benefits: [
      'High load-bearing capacity',
      'Excellent screw holding',
      'Dimensionally stable',
      'Fire resistant base layer',
      'Compatible with all floor finishes',
    ],
  },
  'prefab-lgsf': {
    title: 'PREFAB & LGSF SYSTEMS',
    tag: 'RAPID CONSTRUCTION',
    subtitle: 'Lightweight steel frame construction systems',
    heroImage: '/assets/images/detail-prefab-hero.jpg',
    description: 'VBOARD systems paired with Light Gauge Steel Framing (LGSF) enable rapid construction of prefabricated structures. From site offices to resort cottages, these systems deliver speed, consistency, and performance.',
    applications: [
      'Prefabricated housing',
      'Site offices and labor camps',
      'Resort and farm cottages',
      'School and healthcare extensions',
      'Disaster relief shelters',
      'Modular retail kiosks',
    ],
    specs: [
      { label: 'Construction Speed', value: '60% Faster' },
      { label: 'Steel Gauge', value: '0.8mm - 1.2mm' },
      { label: 'Cladding', value: 'VBOARD 8mm-12mm' },
      { label: 'Insulation', value: 'Optional Infill' },
      { label: 'Foundation', value: 'Minimal Required' },
      { label: 'Recyclability', value: '100%' },
    ],
    benefits: [
      'Up to 60% faster construction',
      'Minimal wet work on site',
      'Lightweight — reduced foundation',
      'Factory precision quality',
      'Fully recyclable materials',
    ],
  },
  'wall-paneling': {
    title: 'WALL PANELING',
    tag: 'INTERIOR FINISH',
    subtitle: 'Premium wall lining for refined interiors',
    heroImage: '/assets/images/detail-wall-panel-hero.jpg',
    description: 'VBOARD wall paneling systems provide a smooth, paintable surface for premium interior finishes. Ideal for renovations and new construction where a high-quality wall surface is required without the mess and time of plastering.',
    applications: [
      'Office interiors',
      'Retail showrooms',
      'Residential renovations',
      'Hotel room linings',
      'Exhibition and display walls',
      'Corridor and lobby walls',
    ],
    specs: [
      { label: 'Board Thickness', value: '6mm - 10mm' },
      { label: 'Surface', value: 'Smooth Paintable' },
      { label: 'Fire Class', value: 'Class P' },
      { label: 'Thermal K-Value', value: '0.172 W/m.k' },
      { label: 'pH Value', value: '10.4 (alkaline)' },
      { label: 'Workability', value: 'Excellent' },
    ],
    benefits: [
      'Ready-to-paint smooth surface',
      'No plastering required',
      'Crack-free finish',
      'Faster project completion',
      'Clean dry installation',
    ],
  },
};

export const SolutionDetailPage = () => {
  const { slug } = useParams();
  const solution = solutionsData[slug];

  if (!solution) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">Solution Not Found</h1>
          <Link to="/#solutions" className="btn-secondary">
            <ArrowLeft size={14} />
            Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void" data-testid="solution-detail-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16">
        <div className="absolute inset-0">
          <img 
            src={solution.heroImage} 
            alt={solution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/30"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/#solutions" 
              className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              <span className="mono-label">BACK TO SOLUTIONS</span>
            </Link>
            
            <div className="section-eyebrow mb-4">
              <div className="rule-yellow"></div>
              <span className="mono-label text-yellow">{solution.tag}</span>
            </div>
            
            <h1 className="font-display text-display-lg text-white mb-4">
              {solution.title}
            </h1>
            <p className="text-xl text-cloud max-w-2xl">{solution.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 border-b border-steel">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mono-label text-muted block mb-4">OVERVIEW</span>
              <p className="text-cloud text-lg leading-relaxed">{solution.description}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="mono-label text-muted block mb-4">KEY APPLICATIONS</span>
              <ul className="space-y-3">
                {solution.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-cloud">{app}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-charcoal">
        <div className="container-premium">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-yellow block mb-4">TECHNICAL DATA</span>
            <h2 className="font-display text-display-md text-white">SPECIFICATIONS</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {solution.specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                className="bg-iron border border-steel p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="font-mono text-xl text-white mb-2">{spec.value}</div>
                <div className="mono-label text-muted">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-premium">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-yellow block mb-4">ADVANTAGES</span>
            <h2 className="font-display text-display-md text-white">WHY CHOOSE THIS SYSTEM</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-start gap-4 p-6 border border-steel hover:border-yellow transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <CheckCircle className="w-6 h-6 text-yellow flex-shrink-0" />
                <span className="text-cloud">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal border-t border-steel">
        <div className="container-premium">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-display text-2xl text-white mb-2">
                NEED {solution.title} FOR YOUR PROJECT?
              </h3>
              <p className="text-muted">Get a detailed BOQ and technical consultation from our team.</p>
            </div>
            <Link to="/#contact" className="btn-primary whitespace-nowrap">
              Request Quote
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetailPage;
