'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EmbossAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

const EmbossAnimation: React.FC<EmbossAnimationProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'drop-shadow(0px 0px 0px)' }}
      whileInView={{
        opacity: 1,
        filter: 'drop-shadow(2px 2px 2px rgba(107, 91, 86, 0.1)) drop-shadow(-1px -1px 1px rgba(255, 251, 245, 0.8))',
      }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export default EmbossAnimation;
