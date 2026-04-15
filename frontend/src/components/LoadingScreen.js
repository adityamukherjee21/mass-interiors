import { motion } from 'framer-motion';

export const LoadingScreen = ({ progress }) => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      data-testid="loading-screen"
    >
      <div className="font-display text-display-md text-white tracking-tight">
        MASS INTERIORS
      </div>
      <div className="mono-label mt-2">LOADING EXPERIENCE</div>
      <div className="loading-bar mt-6">
        <motion.div 
          className="loading-bar-fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
      <div className="font-mono text-xs text-mid mt-3">{Math.round(progress)}%</div>
    </motion.div>
  );
};

export default LoadingScreen;
