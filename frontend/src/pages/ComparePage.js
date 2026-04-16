import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Check, X, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Board comparison data - VBOARD vs competitors
const boardsData = [
  {
    id: 'vboard-cement',
    name: 'VBOARD CEMENT',
    type: 'Fiber Cement Board',
    brand: 'MASS INTERIORS',
    image: '/assets/images/compare-vboard.jpg',
    description: 'Premium fiber cement board with superior fire, moisture, and termite resistance. The gold standard for modern dry construction.',
    thickness: '4mm - 25mm',
    density: '1200-1300 kg/m³',
    fireRating: '3 Hour (Class P)',
    moistureResistance: 'Excellent',
    termiteProof: true,
    soundInsulation: 'STC 45-65',
    lifespan: '50+ Years',
    recyclable: true,
    costIndex: '₹₹₹',
    ideal: 'Hospitals, Hotels, Airports, High-rises',
    isRecommended: true,
  },
  {
    id: 'gypsum-board',
    name: 'GYPSUM BOARD',
    type: 'Plasterboard / Drywall',
    brand: 'Generic',
    image: '/assets/images/compare-gypsum.jpg',
    description: 'Common interior wall board made from gypsum plaster. Lightweight but limited moisture and impact resistance.',
    thickness: '9.5mm - 15mm',
    density: '650-900 kg/m³',
    fireRating: '1-2 Hour',
    moistureResistance: 'Poor',
    termiteProof: false,
    soundInsulation: 'STC 30-45',
    lifespan: '15-25 Years',
    recyclable: true,
    costIndex: '₹₹',
    ideal: 'Basic interiors, Dry areas only',
    isRecommended: false,
  },
  {
    id: 'plywood',
    name: 'PLYWOOD',
    type: 'Engineered Wood',
    brand: 'Generic',
    image: '/assets/images/compare-plywood.jpg',
    description: 'Layered wood veneer sheets. Good for furniture but poor fire and moisture resistance for wall applications.',
    thickness: '4mm - 25mm',
    density: '500-700 kg/m³',
    fireRating: 'None (Combustible)',
    moistureResistance: 'Poor',
    termiteProof: false,
    soundInsulation: 'STC 25-35',
    lifespan: '10-20 Years',
    recyclable: false,
    costIndex: '₹₹₹',
    ideal: 'Furniture, Non-fire zones',
    isRecommended: false,
  },
  {
    id: 'mdf-board',
    name: 'MDF BOARD',
    type: 'Medium Density Fiberboard',
    brand: 'Generic',
    image: '/assets/images/compare-mdf.jpg',
    description: 'Engineered wood composite. Smooth surface for painting but swells with moisture and is highly flammable.',
    thickness: '3mm - 30mm',
    density: '600-800 kg/m³',
    fireRating: 'None (Combustible)',
    moistureResistance: 'Very Poor',
    termiteProof: false,
    soundInsulation: 'STC 20-30',
    lifespan: '8-15 Years',
    recyclable: false,
    costIndex: '₹₹',
    ideal: 'Furniture, Dry decorative only',
    isRecommended: false,
  },
  {
    id: 'calcium-silicate',
    name: 'CALCIUM SILICATE',
    type: 'Calcium Silicate Board',
    brand: 'Generic',
    image: '/assets/images/compare-calcium.jpg',
    description: 'Similar to cement board but often more brittle. Good fire resistance but limited impact strength.',
    thickness: '4mm - 12mm',
    density: '900-1100 kg/m³',
    fireRating: '2 Hour',
    moistureResistance: 'Good',
    termiteProof: true,
    soundInsulation: 'STC 35-45',
    lifespan: '25-35 Years',
    recyclable: true,
    costIndex: '₹₹₹',
    ideal: 'Fire barriers, Ceilings',
    isRecommended: false,
  },
];

// Comparison criteria
const comparisonCriteria = [
  { key: 'fireRating', label: 'Fire Rating', important: true },
  { key: 'moistureResistance', label: 'Moisture Resistance', important: true },
  { key: 'termiteProof', label: 'Termite Proof', important: true },
  { key: 'soundInsulation', label: 'Sound Insulation', important: false },
  { key: 'density', label: 'Density', important: false },
  { key: 'lifespan', label: 'Lifespan', important: true },
  { key: 'recyclable', label: 'Recyclable', important: false },
  { key: 'costIndex', label: 'Cost', important: false },
];

export const ComparePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % boardsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + boardsData.length) % boardsData.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % boardsData.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentBoard = boardsData[currentIndex];
  const vboard = boardsData[0]; // VBOARD is always first for comparison

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />;
    }
    return value;
  };

  const getComparisonClass = (board, key) => {
    const vboardVal = vboard[key];
    const boardVal = board[key];
    
    if (board.id === 'vboard-cement') return 'text-yellow';
    
    // For boolean values
    if (typeof vboardVal === 'boolean') {
      if (vboardVal && !boardVal) return 'text-red';
      return 'text-cloud';
    }
    
    // For specific comparisons
    if (key === 'moistureResistance') {
      if (boardVal === 'Poor' || boardVal === 'Very Poor') return 'text-red';
    }
    if (key === 'fireRating' && boardVal.includes('None')) return 'text-red';
    
    return 'text-cloud';
  };

  return (
    <div className="min-h-screen bg-void" data-testid="compare-page">
      {/* Header */}
      <section className="pt-32 pb-12 border-b border-steel">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              <span className="mono-label">BACK TO HOME</span>
            </Link>
            
            <div className="section-eyebrow mb-4">
              <div className="rule-yellow"></div>
              <span className="mono-label text-yellow">BOARD COMPARISON</span>
            </div>
            
            <h1 className="font-display text-display-lg text-white mb-4">
              WHY CHOOSE<br />
              <span className="text-yellow">CEMENT BOARD?</span>
            </h1>
            <p className="text-cloud text-lg max-w-2xl">
              Compare VBOARD fiber cement against gypsum, plywood, MDF, and other boards. 
              See why architects and engineers specify cement board for critical applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Advantages Banner */}
      <section className="py-8 bg-charcoal border-b border-steel">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🔥', label: 'FIRE SAFE', desc: 'Up to 3-hour rating' },
              { icon: '💧', label: 'MOISTURE PROOF', desc: 'Wet area approved' },
              { icon: '🛡️', label: 'TERMITE PROOF', desc: '100% inorganic' },
              { icon: '⏱️', label: 'LONG LIFE', desc: '50+ year lifespan' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-display text-lg text-yellow">{item.label}</div>
                <div className="mono-label text-muted mt-1">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Carousel Section */}
      <section className="py-16">
        <div className="container-premium">
          {/* Carousel Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 border border-steel flex items-center justify-center text-white hover:border-yellow hover:text-yellow transition-colors"
                data-testid="carousel-prev"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="w-12 h-12 border border-steel flex items-center justify-center text-white hover:border-yellow hover:text-yellow transition-colors"
                data-testid="carousel-next"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              {boardsData.map((board, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-yellow' : 'bg-steel hover:bg-muted'
                  }`}
                  data-testid={`carousel-dot-${index}`}
                />
              ))}
            </div>
            
            <div className="mono-label text-muted">
              {String(currentIndex + 1).padStart(2, '0')} / {String(boardsData.length).padStart(2, '0')}
            </div>
          </div>

          {/* Horizontal Scroll Cards */}
          <div 
            ref={carouselRef}
            className="relative overflow-hidden"
          >
            <motion.div 
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            >
              {boardsData.map((board, index) => (
                <div 
                  key={board.id}
                  className="min-w-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Side */}
                    <motion.div 
                      className={`relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden ${board.isRecommended ? 'ring-2 ring-yellow' : 'bg-charcoal'}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: index === currentIndex ? 1 : 0.5,
                        scale: index === currentIndex ? 1 : 0.95
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={board.image} 
                        alt={board.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/40 to-transparent"></div>
                      
                      {/* Recommended Badge */}
                      {board.isRecommended && (
                        <div className="absolute top-4 left-4 bg-yellow text-void px-3 py-1 font-mono text-xs font-bold">
                          RECOMMENDED
                        </div>
                      )}
                      
                      {/* Board Name Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="mono-label text-yellow block mb-2">{board.type}</span>
                        <h2 className="font-display text-3xl sm:text-4xl text-white">{board.name}</h2>
                        <p className="text-muted text-sm mt-2">{board.brand}</p>
                      </div>
                    </motion.div>

                    {/* Specs Side */}
                    <motion.div
                      className="flex flex-col"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ 
                        opacity: index === currentIndex ? 1 : 0,
                        x: index === currentIndex ? 0 : 30
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <p className="text-cloud text-lg mb-6">{board.description}</p>
                      
                      <div className="mono-label text-muted mb-3">IDEAL FOR</div>
                      <div className={`text-lg font-medium mb-6 ${board.isRecommended ? 'text-yellow' : 'text-cloud'}`}>
                        {board.ideal}
                      </div>

                      {/* Specs Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                        <div className={`bg-charcoal border ${board.isRecommended ? 'border-yellow' : 'border-steel'} p-4`}>
                          <div className="font-mono text-lg text-white">{board.fireRating}</div>
                          <div className="mono-label text-muted">FIRE RATING</div>
                        </div>
                        <div className={`bg-charcoal border ${board.isRecommended ? 'border-yellow' : 'border-steel'} p-4`}>
                          <div className={`font-mono text-lg ${board.moistureResistance === 'Excellent' ? 'text-green-400' : board.moistureResistance === 'Poor' || board.moistureResistance === 'Very Poor' ? 'text-red-400' : 'text-white'}`}>
                            {board.moistureResistance}
                          </div>
                          <div className="mono-label text-muted">MOISTURE</div>
                        </div>
                        <div className={`bg-charcoal border ${board.isRecommended ? 'border-yellow' : 'border-steel'} p-4`}>
                          <div className="font-mono text-lg text-white">{board.lifespan}</div>
                          <div className="mono-label text-muted">LIFESPAN</div>
                        </div>
                        <div className={`bg-charcoal border ${board.isRecommended ? 'border-yellow' : 'border-steel'} p-4`}>
                          <div className="font-mono text-lg text-white">{board.density}</div>
                          <div className="mono-label text-muted">DENSITY</div>
                        </div>
                        <div className={`bg-charcoal border ${board.isRecommended ? 'border-yellow' : 'border-steel'} p-4`}>
                          <div className="font-mono text-lg text-white flex items-center gap-2">
                            {board.termiteProof ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-red-400" />}
                            {board.termiteProof ? 'Yes' : 'No'}
                          </div>
                          <div className="mono-label text-muted">TERMITE PROOF</div>
                        </div>
                        <div className={`bg-charcoal border ${board.isRecommended ? 'border-yellow' : 'border-steel'} p-4`}>
                          <div className="font-mono text-lg text-white">{board.costIndex}</div>
                          <div className="mono-label text-muted">COST INDEX</div>
                        </div>
                      </div>

                      {board.isRecommended ? (
                        <Link 
                          to="/#contact" 
                          className="btn-primary self-start mt-auto"
                        >
                          Get VBOARD Quote
                          <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <div className="mt-auto p-4 bg-iron border border-steel">
                          <p className="text-muted text-sm">
                            <span className="text-yellow font-semibold">Compared to VBOARD:</span> {
                              board.id === 'gypsum-board' ? 'Lower fire rating, not suitable for wet areas, prone to mold' :
                              board.id === 'plywood' ? 'Combustible, attracts termites, degrades with moisture' :
                              board.id === 'mdf-board' ? 'Highly flammable, swells with moisture, short lifespan' :
                              'Consider VBOARD for critical applications requiring higher performance'
                            }
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="py-16 bg-charcoal border-t border-steel">
        <div className="container-premium">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-yellow block mb-4">FULL COMPARISON</span>
            <h2 className="font-display text-display-md text-white">BOARD VS BOARD</h2>
            <p className="text-cloud mt-4 max-w-2xl">
              Side-by-side comparison of all board types. See why fiber cement board outperforms 
              traditional materials for construction applications.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-steel">
                  <th className="text-left py-4 pr-4 mono-label text-muted w-40">PROPERTY</th>
                  {boardsData.map((board) => (
                    <th 
                      key={board.id} 
                      className={`text-left py-4 px-4 mono-label ${board.isRecommended ? 'text-yellow bg-yellow/10' : 'text-muted'}`}
                    >
                      {board.name}
                      {board.isRecommended && <span className="block text-xs mt-1">★ RECOMMENDED</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonCriteria.map((criteria, index) => (
                  <motion.tr 
                    key={criteria.key}
                    className="border-b border-steel"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <td className={`py-4 pr-4 ${criteria.important ? 'font-semibold text-white' : 'text-muted'}`}>
                      {criteria.label}
                      {criteria.important && <span className="text-yellow ml-1">*</span>}
                    </td>
                    {boardsData.map((board) => (
                      <td 
                        key={board.id} 
                        className={`py-4 px-4 font-mono text-sm ${board.isRecommended ? 'bg-yellow/5' : ''} ${getComparisonClass(board, criteria.key)}`}
                      >
                        {renderValue(board[criteria.key])}
                      </td>
                    ))}
                  </motion.tr>
                ))}
                <tr className="border-b border-steel">
                  <td className="py-4 pr-4 font-semibold text-white">Best For</td>
                  {boardsData.map((board) => (
                    <td 
                      key={board.id} 
                      className={`py-4 px-4 text-sm ${board.isRecommended ? 'bg-yellow/5 text-yellow' : 'text-cloud'}`}
                    >
                      {board.ideal}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted text-sm mt-6">
            <span className="text-yellow">*</span> Critical properties for construction applications
          </p>
        </div>
      </section>

      {/* Why Cement Board Section */}
      <section className="py-16">
        <div className="container-premium">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-yellow block mb-4">THE VERDICT</span>
            <h2 className="font-display text-display-md text-white">
              WHY PROFESSIONALS<br/>CHOOSE CEMENT BOARD
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'FIRE SAFETY COMPLIANCE',
                desc: 'Only fiber cement achieves 3-hour fire ratings required for hospitals, data centers, and high-rises. Plywood and MDF are combustible.',
              },
              {
                title: 'WET AREA PERFORMANCE',
                desc: 'Gypsum and MDF swell and deteriorate with moisture. Cement board maintains integrity in bathrooms, kitchens, and swimming pools.',
              },
              {
                title: 'PEST RESISTANCE',
                desc: '100% inorganic composition means zero termite risk. Plywood and MDF require expensive chemical treatments that wear off over time.',
              },
              {
                title: 'LONG-TERM VALUE',
                desc: '50+ year lifespan vs 10-25 years for alternatives. Lower lifecycle cost despite higher initial investment.',
              },
              {
                title: 'INSURANCE & COMPLIANCE',
                desc: 'Meets stringent building codes for fire safety. Often required by insurance companies for commercial and healthcare projects.',
              },
              {
                title: 'ACOUSTIC PERFORMANCE',
                desc: 'Higher density provides superior sound insulation (STC 45-65) compared to lighter boards like gypsum or MDF.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-charcoal border border-steel hover:border-yellow transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <h3 className="font-display text-lg text-yellow mb-3">{item.title}</h3>
                <p className="text-cloud text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-steel">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-display-md text-white mb-4">
              READY TO UPGRADE?
            </h2>
            <p className="text-cloud mb-8 max-w-lg mx-auto">
              Get a detailed comparison and BOQ for your project. Our technical team will help you 
              specify the right system.
            </p>
            <Link to="/#contact" className="btn-primary">
              Get VBOARD Quote
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComparePage;
