import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.scss';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isVisible && (
        <motion.div 
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="splash-content">
            <motion.img
              src="/assets/logos/faire-logo.webp"
              srcSet="/assets/logos/faire-logo-150.webp 150w, /assets/logos/faire-logo-300.webp 300w, /assets/logos/faire-logo-600.webp 600w"
              sizes="(max-width: 600px) 150px, (max-width: 900px) 300px, 600px"
              alt="Faire Logo"
              className="splash-logo"
              width="150"
              height="150"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="splash-text"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <p>Le rendez-vous des créateurs d'exception</p>
            </motion.div>
            <motion.div
              className="splash-progress"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 2.5,
                ease: "linear"
              }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen; 