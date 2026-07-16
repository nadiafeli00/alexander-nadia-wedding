'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { useCountdown } from '@/hooks';
import { WEDDING_DATA } from '@/constants';

const CountdownSection: React.FC = () => {
  const countdown = useCountdown(WEDDING_DATA.date);

  const units = [
    { label: 'Days', value: countdown.days },
    { label: 'Hours', value: countdown.hours },
    { label: 'Minutes', value: countdown.minutes },
    { label: 'Seconds', value: countdown.seconds },
  ];

  return (
    <Section id="countdown" className="bg-gradient-to-b from-ivory to-warm-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-dark-taupe text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Counting Down
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {units.map((unit, index) => (
            <motion.div
              key={index}
              className="border border-dark-taupe p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ boxShadow: '0 10px 30px rgba(107, 91, 86, 0.1)' }}
            >
              <motion.p
                className="font-serif text-4xl md:text-5xl text-sage-green mb-2"
                key={unit.value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(unit.value).padStart(2, '0')}
              </motion.p>
              <p className="font-display text-sm uppercase tracking-wider text-dark-taupe">{unit.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CountdownSection;
