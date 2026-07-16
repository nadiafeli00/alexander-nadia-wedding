'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Gift, Heart } from 'lucide-react';

const WeddingGiftSection: React.FC = () => {
  const [selectedGift, setSelectedGift] = useState<string | null>(null);

  const gifts = [
    {
      id: 'bank-transfer',
      title: 'Bank Transfer',
      description: 'Transfer to our wedding account',
      icon: '💳',
    },
    {
      id: 'registry',
      title: 'Gift Registry',
      description: 'Browse our wish list',
      icon: '🛍️',
    },
    {
      id: 'presence',
      title: 'Your Presence',
      description: 'Your attendance is the greatest gift',
      icon: '👥',
    },
  ];

  return (
    <Section id="gifts" className="bg-warm-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-dark-taupe text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Wedding Gift
        </motion.h2>

        <motion.p
          className="text-center text-dark-taupe text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Your presence is our greatest gift, but if you wish to honor us further:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gifts.map((gift, index) => (
            <motion.button
              key={gift.id}
              onClick={() => setSelectedGift(gift.id)}
              className="border-2 border-sage-green p-8 rounded-lg text-center cursor-pointer transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{gift.icon}</div>
              <h3 className="font-display text-xl text-dark-taupe mb-2 uppercase tracking-wider">
                {gift.title}
              </h3>
              <p className="text-dark-taupe text-sm">{gift.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WeddingGiftSection;
