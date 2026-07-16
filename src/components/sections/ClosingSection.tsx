'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Mail, Heart } from 'lucide-react';

const ClosingSection: React.FC = () => {
  return (
    <Section id="closing" className="bg-gradient-to-b from-warm-white to-ivory">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-dark-taupe mb-6">
            With love and gratitude
          </h2>

          <p className="text-dark-taupe text-lg mb-8 leading-relaxed">
            Thank you for being a part of our love story. Your presence and blessings mean the world to us.
            We look forward to celebrating this beautiful milestone with you on November 7, 2026.
          </p>

          <div className="flex justify-center gap-2 text-3xl mb-12">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                💕
              </motion.span>
            ))}
          </div>

          <motion.div
            className="pt-8 border-t border-dark-taupe/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <p className="text-sage-green font-serif text-2xl mb-4">Alexander & Nadia</p>
            <p className="text-dark-taupe text-sm tracking-wider">© 2026 | All Rights Reserved</p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ClosingSection;
