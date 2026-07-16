'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { guestAPI } from '@/utils/api';
import { Heart } from 'lucide-react';

const wishSchema = z.object({
  guestName: z.string().min(1),
  message: z.string().min(1).max(500),
});

type WishFormData = z.infer<typeof wishSchema>;

const WeddingWishesSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WishFormData>({
    resolver: zodResolver(wishSchema),
  });

  const onSubmit = async (data: WishFormData) => {
    setIsLoading(true);
    try {
      const success = await guestAPI.submitWish({
        guestName: data.guestName,
        message: data.message,
        timestamp: new Date().toISOString(),
      });

      if (success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting wish:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="wishes" className="bg-warm-white">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-dark-taupe text-center mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <Heart className="w-8 h-8 text-dusty-pink" />
          Wedding Wishes
          <Heart className="w-8 h-8 text-dusty-pink" />
        </motion.h2>

        <motion.p
          className="text-center text-dark-taupe mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Share your blessings and well-wishes for our marriage
        </motion.p>

        {submitted && (
          <motion.div
            className="bg-dusty-pink text-ivory p-4 rounded-lg mb-6 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            💝 Thank you for your kind wishes!
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
              {...register('guestName')}
              className="w-full border-b-2 border-dark-taupe bg-transparent px-3 py-2 focus:outline-none focus:border-sage-green transition-colors"
              placeholder="Enter your name"
            />
            {errors.guestName && <p className="text-dusty-pink text-sm mt-1">{errors.guestName.message}</p>}
          </div>

          <div>
            <label className="block text-dark-taupe font-display uppercase tracking-wider mb-2">
              Your Message
            </label>
            <textarea
              {...register('message')}
              className="w-full border-b-2 border-dark-taupe bg-transparent px-3 py-2 focus:outline-none focus:border-sage-green transition-colors resize-none"
              rows={5}
              placeholder="Share your blessings and well-wishes..."
            />
            {errors.message && <p className="text-dusty-pink text-sm mt-1">{errors.message.message}</p>}
          </div>

          <div className="flex justify-center pt-4">
            <Button type="submit" variant="filled" size="lg" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Share Your Wish'}
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
};

export default WeddingWishesSection;
