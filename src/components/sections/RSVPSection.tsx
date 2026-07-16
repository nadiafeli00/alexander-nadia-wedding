'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { guestAPI } from '@/utils/api';

const rsvpSchema = z.object({
  attendance: z.enum(['attending', 'not-attending']),
  guestCount: z.number().min(1).max(5),
  specialRequests: z.string().optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

const RSVPSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [guestName, setGuestName] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
  });

  const onSubmit = async (data: RSVPFormData) => {
    setIsLoading(true);
    try {
      const success = await guestAPI.submitRSVP({
        guestId: 'guest-' + Date.now(),
        guestName,
        ...data,
        timestamp: new Date().toISOString(),
      });

      if (success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="rsvp" className="bg-ivory">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-dark-taupe text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          RSVP
        </motion.h2>

        <motion.p
          className="text-center text-dark-taupe mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Please let us know if you can celebrate with us
        </motion.p>

        {submitted && (
          <motion.div
            className="bg-sage-green text-ivory p-4 rounded-lg mb-6 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            ✓ Thank you! Your RSVP has been received.
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div>
            <label className="block text-dark-taupe font-display uppercase tracking-wider mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full border-b-2 border-dark-taupe bg-transparent px-3 py-2 focus:outline-none focus:border-sage-green transition-colors"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-dark-taupe font-display uppercase tracking-wider mb-4">
              Will you be attending?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="attending"
                  {...register('attendance')}
                  className="w-4 h-4 text-sage-green"
                />
                <span className="ml-2 text-dark-taupe">Yes, I will attend</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="not-attending"
                  {...register('attendance')}
                  className="w-4 h-4 text-sage-green"
                />
                <span className="ml-2 text-dark-taupe">No, I cannot attend</span>
              </label>
            </div>
            {errors.attendance && <p className="text-dusty-pink text-sm mt-1">{errors.attendance.message}</p>}
          </div>

          <div>
            <label className="block text-dark-taupe font-display uppercase tracking-wider mb-2">
              Number of Guests
            </label>
            <select
              {...register('guestCount', { valueAsNumber: true })}
              className="w-full border-b-2 border-dark-taupe bg-transparent px-3 py-2 focus:outline-none focus:border-sage-green transition-colors"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
            </select>
            {errors.guestCount && <p className="text-dusty-pink text-sm mt-1">{errors.guestCount.message}</p>}
          </div>

          <div>
            <label className="block text-dark-taupe font-display uppercase tracking-wider mb-2">
              Special Requests
            </label>
            <textarea
              {...register('specialRequests')}
              className="w-full border-b-2 border-dark-taupe bg-transparent px-3 py-2 focus:outline-none focus:border-sage-green transition-colors resize-none"
              rows={3}
              placeholder="Dietary restrictions, accessibility needs, etc."
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button type="submit" variant="filled" size="lg" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit RSVP'}
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
};

export default RSVPSection;
