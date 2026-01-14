"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BlogNewsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    // Identifiant unique pour cette "vague" d'articles
    const currentArticlesBatchId = "articles-2026-01-lunes";
    
    // Vérifier quelle est la dernière vague d'articles vue par l'utilisateur
    const lastSeenArticlesBatch = localStorage.getItem("lastSeenArticlesBatch");
    
    // Si c'est une nouvelle vague d'articles, on affiche la modale
    if (lastSeenArticlesBatch !== currentArticlesBatchId) {
      // Marquer cette vague d'articles comme vue
      localStorage.setItem("lastSeenArticlesBatch", currentArticlesBatchId);
      // Afficher la modale
      setIsOpen(true);
    }
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
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50"
            onClick={closeModal}
          />
          
          {/* Conteneur externe pour centrage */}
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
            {/* Modale avec animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="w-full max-w-md pointer-events-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-purple-100">
                {/* En-tête */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Nouveaux Articles de Blog</h3>
                  <button 
                    onClick={closeModal}
                    className="text-white p-1 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Fermer la modale"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Contenu */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Deux nouveaux articles pour mieux comprendre l'influence des cycles lunaires :
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <Link href="/blog/cinquante-neuvieme-article" className="block">
                      <div className="bg-amber-50 p-4 rounded-lg hover:bg-amber-100 transition-colors border border-amber-200">
                        <h4 className="font-semibold text-amber-700 mb-1">🌕 L'Influence de la Pleine Lune sur Notre Énergie</h4>
                        <p className="text-gray-600 text-sm mb-2">Découvre comment la pleine lune réveille tes émotions et comment vivre ce moment en douceur.</p>
                      </div>
                    </Link>
                    
                    <Link href="/blog/soixantieme-article" className="block">
                      <div className="bg-indigo-50 p-4 rounded-lg hover:bg-indigo-100 transition-colors border border-indigo-200">
                        <h4 className="font-semibold text-indigo-700 mb-1">🌑 Les Énergies et l'Influence des Nouvelles Lunes</h4>
                        <p className="text-gray-600 text-sm mb-2">Un moment de renaissance intérieure pour poser tes intentions et te réaligner.</p>
                      </div>
                    </Link>
                  </div>
                  
                  <Link href="/blog" className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 rounded-lg text-center hover:opacity-90 transition-opacity">
                    Découvrir tous les articles
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
} 