"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SparklesIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

// Composant CTA générique amélioré
const Cta = ({ page }) => {
  // Référence pour détecter quand le composant est visible
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const content = {
    accueil: {
      titre: "Prêt à transformer votre énergie ?",
      bouton: "En savoir plus",
      lien: "/soins"
    },
    soins: {
      titre: "Besoin d'un accompagnement sur-mesure ?",
      bouton: "Prendre rendez-vous",
      lien: "/contact"
    },
    services: {
      titre: "Envie d'une séance personnalisée ?",
      bouton: "Contactez-moi",
      lien: "/contact"
    }
  };

  // Variants d'animation pour le titre
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };
  
  // Séparer les mots du titre
  const titleWords = content[page].titre.split(' ');
  
  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Cercle décoratif animé */}
      <motion.div 
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-200/20 to-indigo-300/20 blur-3xl pointer-events-none"
        initial={{ scale: 0.8, opacity: 0.2 }}
        animate={isInView ? { 
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
          opacity: [0.4, 0.6, 0.4]
        } : { scale: 0.8, opacity: 0.2 }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-300/30 blur-3xl pointer-events-none"
        initial={{ scale: 0.8, opacity: 0.2 }}
        animate={isInView ? { 
          scale: [1, 1.15, 1],
          rotate: [0, -5, 0],
          opacity: [0.3, 0.5, 0.3]
        } : { scale: 0.8, opacity: 0.2 }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-20 bg-gradient-to-t from-pink-50 to-purple-100 dark:bg-gradient-to-t dark:from-purple-700 dark:to-indigo-900 relative"
      >
        {/* Particules scintillantes */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-300/60 dark:bg-purple-200/40"
            style={{ 
              left: `${10 + (i * 12)}%`,
              top: `${Math.random() * 100}%`
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={isInView ? { 
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3]
            } : { opacity: 0, y: 0 }}
            transition={{ 
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.3
            }}
          />
        ))}
        
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <motion.div
            className="mb-10 overflow-hidden"
            variants={titleContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-2 dark:text-purple-100 inline-flex flex-wrap justify-center gap-x-2">
              {titleWords.map((word, index) => (
                <motion.span 
                  key={index}
                  variants={wordVariants}
                  className={
                    word === 'énergie' || word === 'personnalisée' || word === 'sur-mesure'
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 relative inline-block"
                    : "relative inline-block"
                  }
                >
                  {word}
                  {/* Effet de soulignement pour les mots clés */}
                  {(word === 'énergie' || word === 'personnalisée' || word === 'sur-mesure') && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-400 to-indigo-600"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.12 }}
                    />
                  )}
                </motion.span>
              ))}
            </h3>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.8,
              type: "spring", 
              stiffness: 100
            }}
          >
            <motion.a
              href={content[page].lien}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-4 px-10 rounded-full shadow-lg relative group overflow-hidden"
              whileHover={{ 
                scale: 1.04,
                boxShadow: "0 15px 25px -5px rgba(124, 58, 237, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Effet de brillance au survol */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1 }}
              />
              
              <span className="relative z-10">{content[page].bouton}</span>
              
              <motion.span
                className="relative z-10"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowLongRightIcon className="w-5 h-5 inline-block" />
              </motion.span>
              
              {/* Cercle de brillance */}
              <motion.span 
                className="absolute -right-3 -top-3 w-12 h-12 bg-white/20 rounded-full blur-md"
                initial={{ scale: 1, opacity: 0.2 }}
                animate={isInView ? { 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                } : { scale: 1, opacity: 0.2 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
            </motion.a>
          </motion.div>
          
          {/* Élément décoratif - étoile scintillante */}
          <motion.div 
            className="absolute bottom-6 right-1/4 text-purple-300"
            initial={{ scale: 1, opacity: 0 }}
            animate={isInView ? { 
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 15, 0]
            } : { scale: 1, opacity: 0 }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <SparklesIcon className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Cta;