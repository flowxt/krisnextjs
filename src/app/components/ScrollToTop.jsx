"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Afficher le bouton après 400px de scroll
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 group"
          aria-label="Retour en haut de la page"
        >
          {/* Cercle avec effet de glow */}
          <div className="relative">
            {/* Effet de halo animé */}
            <motion.div
              className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Bouton principal */}
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-purple-300/50 group-hover:shadow-xl transition-shadow duration-300">
              {/* Icône avec animation */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUpIcon className="w-5 h-5 text-white" />
              </motion.div>
            </div>

            {/* Ring effect au hover */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
          </div>

          {/* Tooltip */}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          >
            Retour en haut
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-800" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

