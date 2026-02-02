import { motion } from 'framer-motion';

const GradientButton = ({ children, onClick, className = '', variant = 'solid' }) => {
  const baseClasses = `w-full min-h-48 font-bold py-3 px-6 rounded-lg text-lg transition-all duration-200`;
  
  const solidClasses = `bg-primary text-secondary hover:bg-opacity-90`; // College Green background, White text
  const outlineClasses = `border border-primary text-primary bg-transparent hover:bg-accent hover:text-gray`; // Green border, Green text, Light Green hover

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variant === 'solid' ? solidClasses : outlineClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default GradientButton;