'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EmbossAnimation from '@/components/effects/EmbossAnimation';
import Text from '@/components/ui/Text';

const CoverSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-ivory via-warm-white to-ivory flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌿
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌿
      </motion.div>

      <EmbossAnimation>
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <p className="text-sage-green text-lg tracking-widest uppercase mb-6">Together with their parents</p>
        </motion.div>
      </EmbossAnimation>

      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="font-serif text-6xl md:text-8xl text-dark-taupe text-center leading-tight mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Alexander Duncan
        </motion.h1>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-sage-green to-dusty-pink mx-auto my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        />
        <motion.p
          className="font-display text-2xl md:text-3xl text-dusty-pink text-center mb-8 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
        >
          &
        </motion.p>
        <motion.h1
          className="font-serif text-6xl md:text-8xl text-dark-taupe text-center leading-tight mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false }}
        >
          Nadia Felicia
        </motion.h1>
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: false }}
      >
        <p className="text-dark-taupe text-lg tracking-wide">November 7, 2026</p>
        <p className="text-sage-green text-sm tracking-widest uppercase mt-2">Surabaya</p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-dark-taupe"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default CoverSection;
