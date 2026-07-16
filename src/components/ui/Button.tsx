'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'filled' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'outline', size = 'md', ...props }, ref) => {
    const baseStyles = 'font-display uppercase tracking-widest transition-smooth';
    
    const variants = {
      outline: 'border border-dark-taupe text-dark-taupe hover:bg-dark-taupe hover:text-ivory',
      filled: 'bg-dark-taupe text-ivory hover:bg-sage-green',
      ghost: 'text-dark-taupe hover:text-sage-green',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-8 py-3 text-sm',
      lg: 'px-12 py-4 text-base',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;
