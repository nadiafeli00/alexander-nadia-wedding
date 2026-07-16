'use client';

import React, { useState, useEffect } from 'react';
import { Music2, Music } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicControlProps {
  src: string;
}

const MusicControl: React.FC<MusicControlProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = new Audio(src);
    audioElement.loop = true;
    audioElement.volume = 0.3;
    setAudio(audioElement);

    return () => {
      audioElement.pause();
    };
  }, [src]);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 bg-sage-green hover:bg-dark-taupe text-ivory p-3 rounded-full shadow-lg transition-colors"
      aria-label="Toggle background music"
    >
      {isPlaying ? (
        <Music2 className="w-6 h-6" />
      ) : (
        <Music className="w-6 h-6" />
      )}
    </motion.button>
  );
};

export default MusicControl;
