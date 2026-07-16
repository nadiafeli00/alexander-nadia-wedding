'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Disable scroll on mount, enable on unmount
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Alexander & Nadia Wedding Invitation - November 7, 2026" />
        <meta name="theme-color" content="#FFFBF5" />
        <title>Alexander & Nadia Wedding</title>
      </head>
      <body className="bg-ivory text-dark-taupe font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </body>
    </html>
  );
};

export default RootLayout;
