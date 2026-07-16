'use client';

import { useState, useRef, useEffect } from 'react';

export const useMusic = (src: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {
        // Auto-play might be blocked by browser
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggle = () => setIsPlaying(!isPlaying);

  return { audioRef, isPlaying, toggle };
};
