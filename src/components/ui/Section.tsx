'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  withPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  withPadding = true,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className={`${withPadding ? 'py-16 md:py-24 px-4 md:px-8' : ''} ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
