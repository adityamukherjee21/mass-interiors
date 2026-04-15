import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
};

export const TrustMetrics = () => {
  const metrics = [
    { value: 500, suffix: '+', label: 'Projects Delivered' },
    { value: 15, suffix: 'M', label: 'Sq. Ft. Installed' },
    { value: 120, suffix: '+', label: 'Enterprise Clients' },
    { value: 3, suffix: 'HR', label: 'Max Fire Rating' },
  ];

  return (
    <section className="trust-metrics" data-testid="trust-metrics">
      <div className="container-premium">
        <div className="trust-grid">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="trust-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.76, 0, 0.24, 1]
              }}
              data-testid={`trust-metric-${index}`}
            >
              <div className="trust-value">
                <AnimatedCounter 
                  value={metric.value} 
                  suffix={metric.suffix}
                  duration={2}
                />
              </div>
              <div className="trust-label">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
