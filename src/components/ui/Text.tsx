'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  className = '',
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
};

export default Text;
