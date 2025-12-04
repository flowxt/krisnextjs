"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { GiftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FloatingGiftButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Vérifier si on est dans la période des fêtes (jusqu'au 31 décembre 2025)
  useEffect(() => {
    const now = new Date();
    const endDate = new Date(2025, 11, 31, 23, 59, 59); // 31 décembre 2025 à 23h59
    
    if (now <= endDate) {
      setShowButton(true);
    }
  }, []);

  // Ne pas afficher si on n'est pas dans la période des fêtes
  if (!showButton) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-6 left-6 z-50"
        >
          {/* Bouton de fermeture */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
            aria-label="Fermer"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>

          {/* Bouton principal */}
          <Link href="/services#bon-cadeau">
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Effet de glow pulsant */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Conteneur principal */}
              <div className="relative flex items-center gap-3 bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white px-5 py-3 rounded-full shadow-xl border-2 border-white/30">
                {/* Icône cadeau avec animation */}
                <motion.div
                  animate={{
                    rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                    y: isHovered ? [0, -3, 0] : [0, -2, 0],
                  }}
                  transition={{
                    duration: isHovered ? 0.5 : 2,
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GiftIcon className="w-6 h-6" />
                </motion.div>

                {/* Texte */}
                <span className="font-semibold text-sm whitespace-nowrap">
                  Réserver un bon cadeau
                </span>

                {/* Petites étoiles décoratives */}
                <motion.span
                  className="absolute -top-1 -right-1 text-yellow-300 text-xs"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ✨
                </motion.span>
                
                <motion.span
                  className="absolute -bottom-1 -left-1 text-yellow-300 text-xs"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  ✨
                </motion.span>
              </div>

              {/* Ruban décoratif */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-yellow-400 rounded-sm shadow-md" />
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

