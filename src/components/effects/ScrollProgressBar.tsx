'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollProgressBarProps {
  className?: string;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ className = '' }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 h-1 bg-sage-green ${className}`}
      style={{ width: `${progress}%` }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ScrollProgressBar;
