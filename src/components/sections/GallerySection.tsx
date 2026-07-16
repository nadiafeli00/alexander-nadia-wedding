'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

const GallerySection: React.FC = () => {
  const swiperRef = useRef(null);

  const images = [
    '/assets/images/gallery-1.jpg',
    '/assets/images/gallery-2.jpg',
    '/assets/images/gallery-3.jpg',
    '/assets/images/gallery-4.jpg',
    '/assets/images/gallery-5.jpg',
    '/assets/images/gallery-6.jpg',
  ];

  return (
    <Section id="gallery" className="bg-ivory">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-dark-taupe text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Our Moments
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            slidesPerView="auto"
            centeredSlides
            className="gallery-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <motion.div
                  className="relative w-full h-96 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </Section>
  );
};

export default GallerySection;
