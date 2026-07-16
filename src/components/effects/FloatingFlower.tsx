'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingFlowerProps {
  delay?: number;
  duration?: number;
}

const FloatingFlower: React.FC<FloatingFlowerProps> = ({ delay = 0, duration = 6 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const flowers = ['🌸', '🌺', '🌼', '🌷', '🌹'];
  const flower = flowers[Math.floor(Math.random() * flowers.length)];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, (duration + delay) * 1000);

    return () => clearTimeout(timer);
  }, [delay, duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none text-4xl"
          initial={{
            x: Math.random() * 100 - 50,
            y: window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: -window.innerHeight,
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration,
            delay,
            ease: 'linear',
          }}
        >
          {flower}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingFlower;
