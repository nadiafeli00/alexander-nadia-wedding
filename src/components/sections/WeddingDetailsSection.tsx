'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { WEDDING_DATA } from '@/constants';
import { Calendar, MapPin, Clock } from 'lucide-react';

const WeddingDetailsSection: React.FC = () => {
  const details = [
    {
      icon: Calendar,
      label: 'Date',
      value: 'Saturday, November 7, 2026',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Surabaya, East Java',
    },
    {
      icon: Clock,
      label: 'Events',
      value: 'Ceremony & Reception',
    },
  ];

  return (
    <Section id="details" className="bg-ivory">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-dark-taupe text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Wedding Details
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-sage-green" />
                </div>
                <h3 className="font-display text-lg text-dark-taupe mb-2 uppercase tracking-wider">{detail.label}</h3>
                <p className="text-dark-taupe leading-relaxed">{detail.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default WeddingDetailsSection;
