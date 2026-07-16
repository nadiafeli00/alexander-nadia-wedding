'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { EVENTS } from '@/constants';
import { MapPin, Clock } from 'lucide-react';

const EventsSection: React.FC = () => {
  return (
    <Section id="events" className="bg-ivory">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-dark-taupe text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Events
        </motion.h2>

        <div className="space-y-8">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              className="border-l-4 border-sage-green pl-8 py-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <h3 className="font-serif text-2xl text-dark-taupe mb-3">{event.title}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-dark-taupe">
                  <Clock className="w-5 h-5 text-sage-green" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-dark-taupe">
                  <MapPin className="w-5 h-5 text-sage-green" />
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="mt-4 text-dark-taupe leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EventsSection;
