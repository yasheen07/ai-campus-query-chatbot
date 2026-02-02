import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`w-full max-w-md mx-auto bg-glass backdrop-blur-lg rounded-2xl shadow-lg p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
