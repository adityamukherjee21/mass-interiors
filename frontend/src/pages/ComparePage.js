import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Board comparison data
const boardsData = [
  {
    id: 'vboard-standard',
    name: 'VBOARD STANDARD',
    type: 'General Purpose',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    description: 'Versatile fiber cement board for partitions, ceilings, and general interior applications.',
    thickness: '4mm - 25mm',
    density: '>1200 kg/m³',
    fireClass: 'Class P',
    moisture: '36%',
    flexural: '>10 MPa',
    applications: ['Partitions', 'False Ceilings', 'Wall Lining', 'Mezzanine Floors'],
    ideal: 'Interior dry areas',
  },
  {
    id: 'vpremium',
    name: 'VPREMIUM',
    type: 'High Performance',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&q=80',
    description: 'Enhanced fiber cement board with superior moisture and weather resistance for demanding applications.',
    thickness: '6mm - 18mm',
    density: '>1250 kg/m³',
    fireClass: 'Class P',
    moisture: '30.6%',
    flexural: '>9.1 MPa',
    applications: ['Wet Areas', 'External Cladding', 'Facades', 'Soffits'],
    ideal: 'Wet areas & exteriors',
  },
  {
    id: 'vboard-fire',
    name: 'VBOARD FIRE-RATED',
    type: 'Fire Protection',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    description: 'Specialized assembly for fire-rated partitions achieving up to 3-hour fire resistance.',
    thickness: '10mm - 12mm',
    density: '>1200 kg/m³',
    fireClass: '3 Hour Rating',
    moisture: '36%',
    flexural: '>10 MPa',
    applications: ['Fire Barriers', 'OT Partitions', 'Stairwell Walls', 'Server Rooms'],
    ideal: 'Fire compartmentation',
  },
  {
    id: 'vboard-acoustic',
    name: 'VBOARD ACOUSTIC',
    type: 'Sound Control',
    image: 'https://images.unsplash.com/photo-1764083292858-1576bce9e678?w=600&q=80',
    description: 'Multi-layer assembly engineered for superior sound transmission class (STC) ratings.',
    thickness: '10mm - 12mm',
    density: '>1200 kg/m³',
    fireClass: 'Class P',
    moisture: '36%',
    flexural: '>10 MPa',
    applications: ['Studios', 'Conference Rooms', 'Hospitals', 'Theaters'],
    ideal: 'Noise-sensitive spaces',
  },
  {
    id: 'vplank',
    name: 'VPLANK',
    type: 'Decorative Finish',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    description: 'Narrow plank format fiber cement board for decorative wall and ceiling applications.',
    thickness: '8mm',
    density: '>1200 kg/m³',
    fireClass: 'Class P',
    moisture: '36%',
    flexural: '>10 MPa',
    applications: ['Feature Walls', 'Ceiling Panels', 'Exterior Siding', 'Accent Walls'],
    ideal: 'Decorative interiors',
  },
  {
    id: 'vboard-flooring',
    name: 'VBOARD FLOORING',
    type: 'Structural',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
    description: 'High-density board engineered for mezzanine flooring and raised access floor applications.',
    thickness: '18mm - 25mm',
    density: '>1250 kg/m³',
    fireClass: 'Class P',
    moisture: '36%',
    flexural: '>12 MPa',
    applications: ['Mezzanine Floors', 'Raised Floors', 'Industrial Decking', 'Loft Flooring'],
    ideal: 'Load-bearing floors',
  },
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
              <span className="mono-label text-yellow">PRODUCT COMPARISON</span>
            </div>
            
            <h1 className="font-display text-display-lg text-white mb-4">
              BOARD<br />
              <span className="text-yellow">SELECTOR</span>
            </h1>
            <p className="text-cloud text-lg max-w-2xl">
              Compare VBOARD fiber cement products to find the right solution for your project requirements.
            </p>
          </motion.div>
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
              {boardsData.map((_, index) => (
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
                      className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden bg-charcoal"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent"></div>
                      
                      {/* Board Name Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="mono-label text-yellow block mb-2">{board.type}</span>
                        <h2 className="font-display text-3xl sm:text-4xl text-white">{board.name}</h2>
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
                      <div className="text-yellow text-lg font-medium mb-6">{board.ideal}</div>

                      {/* Specs Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                        <div className="bg-charcoal border border-steel p-4">
                          <div className="font-mono text-lg text-white">{board.thickness}</div>
                          <div className="mono-label text-muted">THICKNESS</div>
                        </div>
                        <div className="bg-charcoal border border-steel p-4">
                          <div className="font-mono text-lg text-white">{board.density}</div>
                          <div className="mono-label text-muted">DENSITY</div>
                        </div>
                        <div className="bg-charcoal border border-steel p-4">
                          <div className="font-mono text-lg text-white">{board.fireClass}</div>
                          <div className="mono-label text-muted">FIRE CLASS</div>
                        </div>
                        <div className="bg-charcoal border border-steel p-4">
                          <div className="font-mono text-lg text-white">{board.moisture}</div>
                          <div className="mono-label text-muted">WATER ABS.</div>
                        </div>
                        <div className="bg-charcoal border border-steel p-4">
                          <div className="font-mono text-lg text-white">{board.flexural}</div>
                          <div className="mono-label text-muted">FLEXURAL</div>
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mono-label text-muted mb-3">APPLICATIONS</div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {board.applications.map((app, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 border border-steel text-cloud text-sm"
                          >
                            {app}
                          </span>
                        ))}
                      </div>

                      <Link 
                        to="/#contact" 
                        className="btn-primary self-start mt-auto"
                      >
                        Request Quote for {board.name.split(' ')[0]}
                        <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Compare Table */}
      <section className="py-16 bg-charcoal border-t border-steel">
        <div className="container-premium">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-yellow block mb-4">AT A GLANCE</span>
            <h2 className="font-display text-display-md text-white">QUICK COMPARISON</h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-steel">
                  <th className="text-left py-4 pr-4 mono-label text-muted">PRODUCT</th>
                  <th className="text-left py-4 px-4 mono-label text-muted">TYPE</th>
                  <th className="text-left py-4 px-4 mono-label text-muted">THICKNESS</th>
                  <th className="text-left py-4 px-4 mono-label text-muted">FIRE</th>
                  <th className="text-left py-4 px-4 mono-label text-muted">BEST FOR</th>
                </tr>
              </thead>
              <tbody>
                {boardsData.map((board, index) => (
                  <motion.tr 
                    key={board.id}
                    className="border-b border-steel hover:bg-iron transition-colors cursor-pointer"
                    onClick={() => goToSlide(index)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <td className="py-4 pr-4">
                      <span className="font-display text-lg text-white">{board.name}</span>
                    </td>
                    <td className="py-4 px-4 text-cloud">{board.type}</td>
                    <td className="py-4 px-4 font-mono text-white">{board.thickness}</td>
                    <td className="py-4 px-4 font-mono text-white">{board.fireClass}</td>
                    <td className="py-4 px-4 text-yellow">{board.ideal}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
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
              NOT SURE WHICH TO CHOOSE?
            </h2>
            <p className="text-cloud mb-8 max-w-lg mx-auto">
              Our technical team can help you select the right product for your specific application.
            </p>
            <Link to="/#contact" className="btn-primary">
              Get Expert Advice
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComparePage;
