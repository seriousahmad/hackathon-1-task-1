import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedPage = ({ children, className = '' }) => {
  useEffect(() => {
    // Add any page-specific initialization here
    // For example, scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    out: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;