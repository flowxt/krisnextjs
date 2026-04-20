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
    const currentArticlesBatchId = "articles-2026-05-corps-scorpion-taureau";
    
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
                    Trois nouveaux articles pour t'accompagner dans ta libération émotionnelle et ta reconnexion à toi :
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <Link href="/blog/soixante-neuvieme-article" className="block">
                      <div className="bg-rose-50 p-4 rounded-lg hover:bg-rose-100 transition-colors border border-rose-200">
                        <h4 className="font-semibold text-rose-700 mb-1">🌋💗 Pourquoi ton corps explose quand tu retiens trop longtemps</h4>
                        <p className="text-gray-600 text-sm mb-2">Ce que tu ne dis pas, ton corps l'exprime. Apprends à laisser circuler pour revenir à toi, en douceur.</p>
                      </div>
                    </Link>
                    
                    <Link href="/blog/soixante-et-onzieme-article" className="block">
                      <div className="bg-violet-50 p-4 rounded-lg hover:bg-violet-100 transition-colors border border-violet-200">
                        <h4 className="font-semibold text-violet-700 mb-1">🌕✨ Pleine Lune du 1er Mai 2026 en Scorpion</h4>
                        <p className="text-gray-600 text-sm mb-2">Une lune de guérison intérieure et de renaissance émotionnelle. Rituel "Je Me Libère en Douceur".</p>
                      </div>
                    </Link>

                    <Link href="/blog/soixante-douzieme-article" className="block">
                      <div className="bg-indigo-50 p-4 rounded-lg hover:bg-indigo-100 transition-colors border border-indigo-200">
                        <h4 className="font-semibold text-indigo-700 mb-1">🌑✨ Nouvelle Lune du 16 Mai 2026 en Taureau</h4>
                        <p className="text-gray-600 text-sm mb-2">Une lune de ralentissement et d'ancrage doux. Rituel "Je Me Nourris en Profondeur".</p>
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