import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, MapPin, Calendar, Ruler, CheckCircle } from 'lucide-react';

// Project data
const projectsData = {
  'corporate-office-acoustic': {
    title: 'CORPORATE OFFICE ACOUSTIC PARTITIONS',
    location: 'Mumbai, Maharashtra',
    tag: 'ACOUSTIC SYSTEMS',
    year: '2023',
    area: '45,000 sq.ft',
    duration: '8 Weeks',
    system: 'STC 55 Double Layer Acoustic Partitions',
    heroImage: 'https://images.unsplash.com/photo-1774192620890-f61475279725?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    ],
    challenge: 'A leading financial services company needed to convert their open-plan office into private meeting rooms and executive cabins while maintaining the modern aesthetic. The key challenge was achieving superior sound privacy for confidential discussions without major structural changes.',
    solution: 'We implemented VBOARD STC 55 double-layer acoustic partition systems with 132mm wall thickness. The system used staggered steel studs with acoustic insulation infill, achieving excellent sound isolation while keeping walls thinner than traditional masonry alternatives.',
    results: [
      'Achieved STC 55 rating — 60% reduction in sound transmission',
      'Completed installation in 8 weeks vs 14 weeks estimated for masonry',
      'Zero disruption to adjacent occupied floors',
      'Seamless integration with existing HVAC and electrical systems',
      'Client reported significant improvement in meeting room privacy',
    ],
    specs: [
      { label: 'System', value: 'STC 55 Double Layer' },
      { label: 'Wall Thickness', value: '132mm' },
      { label: 'Board Used', value: 'VBOARD 12mm' },
      { label: 'Stud Type', value: '70mm Staggered' },
      { label: 'Insulation', value: '50mm Mineral Wool' },
      { label: 'Finish', value: 'Paint Ready' },
    ],
    testimonial: {
      quote: 'The acoustic performance exceeded our expectations. Our confidential meetings now stay confidential.',
      author: 'Facility Director',
      company: 'Leading Financial Services Firm',
    },
  },
  'luxury-hotel-wet-area': {
    title: 'LUXURY HOTEL WET AREA SYSTEMS',
    location: 'Goa, India',
    tag: 'WET AREA BOARDS',
    year: '2023',
    area: '28,000 sq.ft',
    duration: '12 Weeks',
    system: 'VPREMIUM 12mm Wet Area Boards',
    heroImage: 'https://images.unsplash.com/photo-1657114328522-f309ef915316?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    ],
    challenge: 'A 5-star beach resort needed moisture-resistant wall systems for 150+ bathroom units. The coastal humidity and salt air posed significant challenges for conventional materials, with previous gypsum installations showing signs of deterioration.',
    solution: 'We specified VPREMIUM 12mm wet area boards with enhanced moisture resistance. The boards were installed over treated steel framing with waterproof membranes at critical junctions. The system was designed to handle both direct water exposure and high ambient humidity.',
    results: [
      'Zero moisture penetration issues after 3 years of operation',
      'Eliminated recurring maintenance costs from previous gypsum failures',
      'Tiles adhered directly to boards without additional preparation',
      'Consistent quality across all 150 bathroom units',
      'Exceeded resort\'s sustainability requirements',
    ],
    specs: [
      { label: 'System', value: 'VPREMIUM Wet Area' },
      { label: 'Board Thickness', value: '12mm' },
      { label: 'Water Absorption', value: '<32%' },
      { label: 'Treatment', value: 'Moisture Barrier' },
      { label: 'Tile Ready', value: 'Yes' },
      { label: 'Coverage', value: '150 Units' },
    ],
    testimonial: {
      quote: 'Three years in and not a single moisture complaint. The investment in quality materials paid off.',
      author: 'Chief Engineer',
      company: '5-Star Beach Resort, Goa',
    },
  },
  'hospital-fire-rated': {
    title: 'HOSPITAL FIRE-RATED OT PARTITIONS',
    location: 'Delhi NCR',
    tag: 'FIRE PROTECTION',
    year: '2022',
    area: '32,000 sq.ft',
    duration: '10 Weeks',
    system: '3-Hour Fire Rated Partition System',
    heroImage: 'https://images.unsplash.com/photo-1584451049700-ec9b394f3805?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    ],
    challenge: 'A multi-specialty hospital required fire-rated partitions for their new OT complex and critical care units. The systems needed to meet stringent fire safety regulations while also providing a clean, hygienic surface suitable for healthcare environments.',
    solution: 'We installed VBOARD 3-hour fire-rated partition systems throughout the OT complex. The walls were designed with double-layer cladding on treated steel frames, with all joints sealed using fire-rated compounds. The smooth surface was finished with anti-bacterial paint.',
    results: [
      'Achieved full 3-hour fire rating certification',
      'Passed all regulatory inspections on first attempt',
      'Smooth surface enabled proper infection control protocols',
      'Integration with medical gas piping and electrical systems',
      'Reduced construction timeline by 40% vs masonry',
    ],
    specs: [
      { label: 'Fire Rating', value: '3 Hours' },
      { label: 'Wall Thickness', value: '120mm' },
      { label: 'Board Used', value: 'VBOARD 12mm x 2' },
      { label: 'Compliance', value: 'IS 3809' },
      { label: 'Finish', value: 'Anti-Bacterial' },
      { label: 'Area Type', value: 'OT Complex' },
    ],
    testimonial: {
      quote: 'Fire safety in a hospital is non-negotiable. MASS INTERIORS delivered exactly what we specified.',
      author: 'Project Director',
      company: 'Multi-Specialty Hospital, Delhi',
    },
  },
  'villa-exterior-cladding': {
    title: 'VILLA EXTERIOR CEMENT BOARD CLADDING',
    location: 'Bengaluru, Karnataka',
    tag: 'FACADE SYSTEMS',
    year: '2023',
    area: '8,500 sq.ft',
    duration: '6 Weeks',
    system: 'VPREMIUM External Cladding System',
    heroImage: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    challenge: 'An architect-designed modern villa required a contemporary facade system that could withstand Bengaluru\'s monsoon seasons while achieving the clean, minimal aesthetic the homeowner desired.',
    solution: 'We implemented VPREMIUM 8mm external cladding boards with a rainscreen system. The boards were finished with premium exterior-grade paint in a custom color. Expansion joints were carefully detailed to accommodate thermal movement.',
    results: [
      'Flawless performance through 2 monsoon seasons',
      'Achieved the precise architectural aesthetic specified',
      'No visible weathering or surface degradation',
      'Easy cleaning and minimal maintenance',
      'Enhanced property value and curb appeal',
    ],
    specs: [
      { label: 'System', value: 'Rainscreen Cladding' },
      { label: 'Board Thickness', value: '8mm' },
      { label: 'Weather Test', value: '50 Cycles Pass' },
      { label: 'Finish', value: 'Exterior Paint' },
      { label: 'Fixing', value: 'Concealed' },
      { label: 'Warranty', value: 'Material' },
    ],
    testimonial: {
      quote: 'The facade looks as good today as it did on day one. Exactly what modern architecture demands.',
      author: 'Homeowner',
      company: 'Private Villa, Bengaluru',
    },
  },
  'airport-ceiling-corridor': {
    title: 'AIRPORT FALSE CEILING & CORRIDOR SYSTEMS',
    location: 'Hyderabad, Telangana',
    tag: 'OVERHEAD SYSTEMS',
    year: '2022',
    area: '120,000 sq.ft',
    duration: '16 Weeks',
    system: 'T-Grid and Concealed Ceiling Systems',
    heroImage: 'https://images.unsplash.com/photo-1752689309754-56b8f7f185ec?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
    ],
    challenge: 'A major airport expansion project required false ceiling systems across terminals, corridors, and lounges. The systems needed to accommodate heavy services above, provide fire protection, and deliver a premium passenger experience.',
    solution: 'We deployed a combination of T-grid systems for services-heavy areas and concealed grid systems for premium lounges. VBOARD 6mm ceiling tiles provided excellent sag resistance and fire performance. Custom perforation patterns were used for acoustic control.',
    results: [
      'Completed 2 weeks ahead of aggressive schedule',
      'Zero defects reported during airport authority inspection',
      'Seamless integration with complex MEP services',
      'Consistent aesthetic across 120,000 sq.ft',
      'Met all aviation authority fire safety standards',
    ],
    specs: [
      { label: 'Total Area', value: '120,000 sq.ft' },
      { label: 'Board Thickness', value: '6mm' },
      { label: 'Grid Types', value: 'T-Grid + Concealed' },
      { label: 'Fire Class', value: 'Class P' },
      { label: 'Acoustic', value: 'Perforated Option' },
      { label: 'Sag', value: 'None Observed' },
    ],
    testimonial: {
      quote: 'Delivery ahead of schedule in an airport project is almost unheard of. Impressive execution.',
      author: 'Project Manager',
      company: 'Airport Development Authority',
    },
  },
  'prefab-resort-lgsf': {
    title: 'PREFAB RESORT LGSF STRUCTURE',
    location: 'Shimla, Himachal Pradesh',
    tag: 'LGSF SYSTEMS',
    year: '2023',
    area: '15,000 sq.ft',
    duration: '10 Weeks',
    system: 'Full LGSF Structure with VBOARD Cladding',
    heroImage: 'https://images.unsplash.com/photo-1735307465233-7f06e8468de8?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
    ],
    challenge: 'A boutique resort in the Himalayas needed rapid construction of 12 cottage units before the tourist season. The remote location, limited construction window due to weather, and need for thermal performance made conventional construction impractical.',
    solution: 'We designed and delivered complete LGSF (Light Gauge Steel Frame) structures with VBOARD internal and external cladding. Frames were prefabricated off-site and assembled on location. Thermal insulation was integrated within the wall cavity.',
    results: [
      '60% faster construction vs conventional methods',
      'All 12 cottages ready before tourist season',
      'Excellent thermal performance in hill climate',
      'Minimal foundation requirements on hilly terrain',
      'Clean construction with minimal site waste',
    ],
    specs: [
      { label: 'System', value: 'Full LGSF + VBOARD' },
      { label: 'Units', value: '12 Cottages' },
      { label: 'Steel Gauge', value: '1.0mm GI' },
      { label: 'External', value: 'VBOARD 8mm' },
      { label: 'Internal', value: 'VBOARD 8mm' },
      { label: 'Insulation', value: '50mm Rockwool' },
    ],
    testimonial: {
      quote: 'We opened for the season on time. That wouldn\'t have been possible with traditional construction.',
      author: 'Resort Owner',
      company: 'Boutique Mountain Resort, Shimla',
    },
  },
};

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">Project Not Found</h1>
          <Link to="/#portfolio" className="btn-secondary">
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void" data-testid="project-detail-page">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-16">
        <div className="absolute inset-0">
          <img 
            src={project.heroImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/20"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/#portfolio" 
              className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              <span className="mono-label">BACK TO PORTFOLIO</span>
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="mono-label text-yellow px-3 py-1 border border-yellow">{project.tag}</span>
              <span className="mono-label text-muted flex items-center gap-2">
                <MapPin size={14} />
                {project.location}
              </span>
              <span className="mono-label text-muted flex items-center gap-2">
                <Calendar size={14} />
                {project.year}
              </span>
            </div>
            
            <h1 className="font-display text-display-lg text-white mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="font-mono text-2xl text-white">{project.area}</div>
                <div className="mono-label text-muted">AREA COVERED</div>
              </div>
              <div>
                <div className="font-mono text-2xl text-white">{project.duration}</div>
                <div className="mono-label text-muted">DURATION</div>
              </div>
              <div>
                <div className="font-mono text-2xl text-white">{project.system.split(' ')[0]}</div>
                <div className="mono-label text-muted">SYSTEM</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 border-b border-steel">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mono-label text-yellow block mb-4">THE CHALLENGE</span>
              <p className="text-cloud text-lg leading-relaxed">{project.challenge}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="mono-label text-yellow block mb-4">OUR SOLUTION</span>
              <p className="text-cloud text-lg leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-charcoal">
        <div className="container-premium">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-yellow block mb-4">PROJECT OUTCOMES</span>
            <h2 className="font-display text-display-md text-white">THE RESULTS</h2>
          </motion.div>

          <div className="space-y-4">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-5 bg-iron border border-steel"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <CheckCircle className="w-6 h-6 text-yellow flex-shrink-0" />
                <span className="text-cloud text-lg">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container-premium">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-yellow block mb-4">TECHNICAL DETAILS</span>
            <h2 className="font-display text-display-md text-white">SYSTEM SPECIFICATIONS</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {project.specs.map((spec, index) => (
              <motion.div
                key={index}
                className="bg-charcoal border border-steel p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="font-mono text-lg text-white mb-2">{spec.value}</div>
                <div className="mono-label text-muted">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-charcoal border-y border-steel">
        <div className="container-premium">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-muted block mb-6">CLIENT FEEDBACK</span>
            <blockquote className="font-display text-2xl sm:text-3xl text-white leading-tight mb-6">
              "{project.testimonial.quote}"
            </blockquote>
            <div>
              <div className="text-cloud">{project.testimonial.author}</div>
              <div className="mono-label text-muted">{project.testimonial.company}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16">
          <div className="container-premium">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mono-label text-yellow block mb-4">PROJECT GALLERY</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  className="aspect-video overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                HAVE A SIMILAR PROJECT?
              </h3>
              <p className="text-muted">Let's discuss how we can deliver the same results for you.</p>
            </div>
            <Link to="/#contact" className="btn-primary whitespace-nowrap">
              Start Your Project
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
