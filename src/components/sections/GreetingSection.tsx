'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Text from '@/components/ui/Text';

const GreetingSection: React.FC = () => {
  return (
    <Section id="greeting" className="bg-warm-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-dark-taupe mb-6">With joy in our hearts</h2>
          <p className="text-dark-taupe text-lg leading-relaxed mb-6">
            We are delighted to invite you to celebrate the union of two souls. Our love story has been a
            beautiful journey, and we would be honored to share this special day with those we hold dear.
          </p>
          <p className="text-sage-green text-base tracking-wide uppercase italic">Love never fails</p>
        </motion.div>
      </div>
    </Section>
  );
};

export default GreetingSection;
