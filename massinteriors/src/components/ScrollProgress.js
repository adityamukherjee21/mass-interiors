import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="scroll-progress" data-testid="scroll-progress">
      <motion.div 
        className="scroll-progress-bar"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;
