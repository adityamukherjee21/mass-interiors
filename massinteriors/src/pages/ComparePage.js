import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
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
    density: '1200-1300 kg/m\u00B3',
    fireRating: '3 Hour (Class P)',
    moistureResistance: 'Excellent',
    termiteProof: true,
    soundInsulation: 'STC 45-65',
    lifespan: '50+ Years',
    recyclable: true,
    costIndex: '\u20B9\u20B9\u20B9',
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
    density: '650-900 kg/m\u00B3',
    fireRating: '1-2 Hour',
    moistureResistance: 'Poor',
    termiteProof: false,
    soundInsulation: 'STC 30-45',
    lifespan: '15-25 Years',
    recyclable: true,
    costIndex: '\u20B9\u20B9',
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
    density: '500-700 kg/m\u00B3',
    fireRating: 'None (Combustible)',
    moistureResistance: 'Poor',
    termiteProof: false,
    soundInsulation: 'STC 25-35',
    lifespan: '10-20 Years',
    recyclable: false,
    costIndex: '\u20B9\u20B9\u20B9',
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
    density: '600-800 kg/m\u00B3',
    fireRating: 'None (Combustible)',
    moistureResistance: 'Very Poor',
    termiteProof: false,
    soundInsulation: 'STC 20-30',
    lifespan: '8-15 Years',
    recyclable: false,
    costIndex: '\u20B9\u20B9',
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
    density: '900-1100 kg/m\u00B3',
    fireRating: '2 Hour',
    moistureResistance: 'Good',
    termiteProof: true,
    soundInsulation: 'STC 35-45',
    lifespan: '25-35 Years',
    recyclable: true,
    costIndex: '\u20B9\u20B9\u20B9',
    ideal: 'Fire barriers, Ceilings',
    isRecommended: false,
  },
];

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

const advantages = [
  { id: 'fire', title: 'FIRE SAFETY COMPLIANCE', desc: 'Only fiber cement achieves 3-hour fire ratings required for hospitals, data centers, and high-rises. Plywood and MDF are combustible.' },
  { id: 'wet', title: 'WET AREA PERFORMANCE', desc: 'Gypsum and MDF swell and deteriorate with moisture. Cement board maintains integrity in bathrooms, kitchens, and swimming pools.' },
  { id: 'pest', title: 'PEST RESISTANCE', desc: '100% inorganic composition means zero termite risk. Plywood and MDF require expensive chemical treatments that wear off over time.' },
  { id: 'value', title: 'LONG-TERM VALUE', desc: '50+ year lifespan vs 10-25 years for alternatives. Lower lifecycle cost despite higher initial investment.' },
  { id: 'insurance', title: 'INSURANCE & COMPLIANCE', desc: 'Meets stringent building codes for fire safety. Often required by insurance companies for commercial and healthcare projects.' },
  { id: 'acoustic', title: 'ACOUSTIC PERFORMANCE', desc: 'Higher density provides superior sound insulation (STC 45-65) compared to lighter boards like gypsum or MDF.' },
];

const keyBenefits = [
  { id: 'fire', icon: '\uD83D\uDD25', label: 'FIRE SAFE', desc: 'Up to 3-hour rating' },
  { id: 'moisture', icon: '\uD83D\uDCA7', label: 'MOISTURE PROOF', desc: 'Wet area approved' },
  { id: 'termite', icon: '\uD83D\uDEE1\uFE0F', label: 'TERMITE PROOF', desc: '100% inorganic' },
  { id: 'life', icon: '\u23F1\uFE0F', label: 'LONG LIFE', desc: '50+ year lifespan' },
];

const vboard = boardsData[0];

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
  if (typeof vboardVal === 'boolean') {
    return (vboardVal && !boardVal) ? 'text-red' : 'text-cloud';
  }
  if (key === 'moistureResistance' && (boardVal === 'Poor' || boardVal === 'Very Poor')) return 'text-red';
  if (key === 'fireRating' && boardVal.includes('None')) return 'text-red';
  return 'text-cloud';
};

const getComparisonNote = (boardId) => {
  const notes = {
    'gypsum-board': 'Lower fire rating, not suitable for wet areas, prone to mold',
    'plywood': 'Combustible, attracts termites, degrades with moisture',
    'mdf-board': 'Highly flammable, swells with moisture, short lifespan',
  };
  return notes[boardId] || 'Consider VBOARD for critical applications requiring higher performance';
};

// Board spec card shown in carousel
const BoardSpecsCard = ({ board, isActive }) => (
  <motion.div
    className="flex flex-col"
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 30 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <p className="text-cloud text-lg mb-6">{board.description}</p>
    <div className="mono-label text-muted mb-3">IDEAL FOR</div>
    <div className={`text-lg font-medium mb-6 ${board.isRecommended ? 'text-yellow' : 'text-cloud'}`}>
      {board.ideal}
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
      {[
        { val: board.fireRating, label: 'FIRE RATING' },
        { val: board.moistureResistance, label: 'MOISTURE', colorize: true },
        { val: board.lifespan, label: 'LIFESPAN' },
        { val: board.density, label: 'DENSITY' },
        { val: null, label: 'TERMITE PROOF', isBool: true, boolVal: board.termiteProof },
        { val: board.costIndex, label: 'COST INDEX' },
      ].map((cell) => {
        const borderClass = board.isRecommended ? 'border-yellow' : 'border-steel';
        return (
          <div key={cell.label} className={`bg-charcoal border ${borderClass} p-4`}>
            <div className={`font-mono text-lg ${
              cell.colorize
                ? (cell.val === 'Excellent' ? 'text-green-400' : (cell.val === 'Poor' || cell.val === 'Very Poor') ? 'text-red-400' : 'text-white')
                : 'text-white'
            } ${cell.isBool ? 'flex items-center gap-2' : ''}`}>
              {cell.isBool ? (
                <>
                  {cell.boolVal ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-red-400" />}
                  {cell.boolVal ? 'Yes' : 'No'}
                </>
              ) : cell.val}
            </div>
            <div className="mono-label text-muted">{cell.label}</div>
          </div>
        );
      })}
    </div>

    {board.isRecommended ? (
      <Link to="/#contact" className="btn-primary self-start mt-auto">
        Get VBOARD Quote
        <ArrowRight size={14} />
      </Link>
    ) : (
      <div className="mt-auto p-4 bg-iron border border-steel">
        <p className="text-muted text-sm">
          <span className="text-yellow font-semibold">Compared to VBOARD:</span> {getComparisonNote(board.id)}
        </p>
      </div>
    )}
  </motion.div>
);

// Full comparison table
const ComparisonTable = () => (
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
);

export const ComparePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % boardsData.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  const goToPrevious = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + boardsData.length) % boardsData.length);
  }, []);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % boardsData.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  }, []);

  const currentBoard = boardsData[currentIndex];

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
            {keyBenefits.map((item, i) => (
              <motion.div 
                key={item.id}
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
                  key={board.id}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-yellow' : 'bg-steel hover:bg-muted'
                  }`}
                  data-testid={`carousel-dot-${board.id}`}
                />
              ))}
            </div>
            
            <div className="mono-label text-muted">
              {String(currentIndex + 1).padStart(2, '0')} / {String(boardsData.length).padStart(2, '0')}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            >
              {boardsData.map((board, index) => (
                <div key={board.id} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div 
                      className={`relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden ${board.isRecommended ? 'ring-2 ring-yellow' : 'bg-charcoal'}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: index === currentIndex ? 1 : 0.5,
                        scale: index === currentIndex ? 1 : 0.95
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={board.image} alt={board.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/40 to-transparent"></div>
                      {board.isRecommended && (
                        <div className="absolute top-4 left-4 bg-yellow text-void px-3 py-1 font-mono text-xs font-bold">
                          RECOMMENDED
                        </div>
                      )}
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="mono-label text-yellow block mb-2">{board.type}</span>
                        <h2 className="font-display text-3xl sm:text-4xl text-white">{board.name}</h2>
                        <p className="text-muted text-sm mt-2">{board.brand}</p>
                      </div>
                    </motion.div>

                    <BoardSpecsCard board={board} isActive={index === currentIndex} />
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

          <ComparisonTable />

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
            {advantages.map((item, index) => (
              <motion.div
                key={item.id}
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
