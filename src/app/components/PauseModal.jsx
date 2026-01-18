"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PauseModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    // Afficher la modale après un court délai pour une meilleure expérience
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const closeModal = () => {
    setIsOpen(false);
  };

  // Ne rien afficher pendant l'hydratation
  if (!isMounted) {
    return null;
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay semi-transparent avec flou */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closeModal}
          />
          
          {/* Conteneur externe pour centrage */}
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
            {/* Modale avec animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg pointer-events-auto"
            >
              <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-3xl shadow-2xl overflow-hidden border border-purple-200/50">
                {/* Bouton fermer */}
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 p-2 hover:bg-white/80 rounded-full transition-all hover:text-gray-600"
                    aria-label="Fermer"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Contenu */}
                <div className="p-8 sm:p-10 text-center">
                  {/* Icône */}
                  <div className="mb-6">
                    <span className="text-6xl">🌿</span>
                  </div>
                  
                  {/* Titre */}
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Pause Bien-Être
                  </h2>
                  
                  {/* Message */}
                  <div className="space-y-4 text-gray-600 mb-8">
                    <p className="text-lg">
                      Kris & Patrice prennent un temps de ressourcement personnel.
                    </p>
                    <p>
                      Les réservations sont temporairement suspendues.
                    </p>
                    <p className="text-purple-600 font-medium">
                      Merci pour votre compréhension et votre bienveillance. 💜
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      À très bientôt sur ce chemin de lumière.
                    </p>
                  </div>
                  
                  {/* Boutons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link 
                      href="/blog" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
                    >
                      Découvrir le blog
                    </Link>
                    <Link 
                      href="/" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-medium rounded-xl hover:bg-purple-50 transition-colors border border-purple-200"
                    >
                      Retour à l'accueil
                    </Link>
                  </div>
                </div>
                
                {/* Décoration subtile */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-indigo-200/30 to-transparent rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
