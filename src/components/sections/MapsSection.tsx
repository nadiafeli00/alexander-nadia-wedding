'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { MapPin } from 'lucide-react';

const MapsSection: React.FC = () => {
  return (
    <Section id="maps" className="bg-warm-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-dark-taupe text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Our Location
        </motion.h2>

        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5693911408566!2d112.75082632346901!3d-7.257472619221466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a147db9b9e8bd%3A0x1234567890abcdef!2sSurabaya!5e0!3m2!1sen!2sid!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <MapPin className="w-6 h-6 text-sage-green" />
          <p className="text-dark-taupe text-lg">Surabaya, East Java, Indonesia</p>
        </motion.div>
      </div>
    </Section>
  );
};

export default MapsSection;
