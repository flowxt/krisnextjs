"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SparklesIcon, ArrowLongRightIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

// Composant CTA amélioré
const Cta = ({ page }) => {
  // Référence pour détecter quand le composant est visible
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const content = {
    accueil: {
      titre: "Prêt à transformer votre énergie ?",
      sousTitre: "Découvrez comment les soins énergétiques peuvent révéler votre plein potentiel",
      bouton: "En savoir plus",
      lien: "/soins",
      icon: <HeartIcon className="w-6 h-6" />,
      accroche: "600+ personnes accompagnées vers l'harmonie intérieure"
    },
    soins: {
      titre: "Besoin d'un accompagnement sur-mesure ?",
      sousTitre: "Chaque séance est unique, adaptée spécifiquement à vos besoins actuels",
      bouton: "Prendre rendez-vous",
      lien: "/contact",
      icon: <SparklesIcon className="w-6 h-6" />,
      accroche: "100% de clients satisfaits par leur transformation énergétique"
    },
    services: {
      titre: "Envie d'une séance personnalisée ?",
      sousTitre: "Réservez votre consultation et retrouvez harmonie et clarté",
      bouton: "Contactez-moi",
      lien: "/contact",
      icon: <StarIcon className="w-6 h-6" />,
      accroche: "Une approche intuitive et puissante pour votre développement personnel"
    }
  };

  // Variants d'animation pour le titre
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut" 
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.4,
        type: "spring", 
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Formes géométriques décoratives */}
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-full"
        variants={shapeVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-200/40 to-indigo-300/30 blur-2xl transform rotate-12" />
        <div className="absolute bottom-40 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-fuchsia-200/30 to-purple-300/20 blur-3xl transform -rotate-12" />
      </motion.div>
      
      <motion.div 
        className="absolute top-0 left-0 w-1/3 h-full pointer-events-none"
        variants={shapeVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-purple-200/30 to-pink-300/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-gradient-to-bl from-indigo-200/30 to-purple-300/20 blur-2xl" />
      </motion.div>
      
      {/* Fond principal avec subtil dégradé */}
      <section className="relative w-full py-24 bg-gradient-to-br from-white via-purple-50 to-indigo-50 overflow-hidden">
        {/* Particules scintillantes */}
        {[...Array(12)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full"
            style={{ 
              left: `${5 + (i * 8)}%`,
              top: `${10 + (Math.random() * 80)}%`,
              width: `${Math.max(2, Math.random() * 6)}px`,
              height: `${Math.max(2, Math.random() * 6)}px`,
              background: `rgba(${139 + Math.random() * 50}, ${92 + Math.random() * 80}, ${246 + Math.random() * 10}, ${0.3 + Math.random() * 0.4})`
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={isInView ? { 
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            } : { opacity: 0, y: 0 }}
            transition={{ 
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.2
            }}
          />
        ))}
        
        {/* Lignes ondulées décoratives */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{
                top: `${20 + i * 15}%`
              }}
              initial={{ x: "-100%" }}
              animate={isInView ? { x: ["0%", "100%"] } : { x: "-100%" }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col justify-center">
            {/* Contenu textuel - utilisant toute la largeur */}
            <div className="w-full text-center max-w-3xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-purple-700 animate-pulse">
                  {content[page].icon}
                </span>
                <span className="text-purple-800 font-medium text-sm">
                  {content[page].accroche}
                </span>
              </motion.div>
              
              <motion.h2
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 tracking-tight leading-tight"
                variants={titleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <span className="text-purple-700">{content[page].titre.split(' ')[0]}</span>{' '}
                {content[page].titre.split(' ').slice(1).join(' ')}
                <span className="relative inline-block ml-1">
                  <span className="absolute -right-1 -top-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: [0, 1.2, 1] } : { scale: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                     
                    </motion.div>
                  </span>
                </span>
              </motion.h2>
              
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
                variants={subtitleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {content[page].sousTitre}
              </motion.p>
              
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block"
              >
                <a 
                  href={content[page].lien}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-5 px-12 rounded-full relative group overflow-hidden hover:shadow-lg hover:shadow-purple-200/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <span className="relative z-10 text-lg">{content[page].bouton}</span>
                  
                  <motion.span
                    className="relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ArrowLongRightIcon className="w-6 h-6 inline-block" />
                  </motion.span>
                </a>
              </motion.div>
              
              {/* Éléments de confiance - centré */}
              <motion.div 
                className="flex items-center justify-center gap-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex -space-x-2">
                  {/* Avatar 1 - Femme */}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-purple-100 to-indigo-50 flex items-center justify-center shadow-sm overflow-hidden">
                    <svg className="w-7 h-7 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="currentColor" opacity="0.7"/>
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="currentColor" opacity="0.7"/>
                    </svg>
                  </div>

                  {/* Avatar 2 - Homme */}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center shadow-sm overflow-hidden">
                    <svg className="w-7 h-7 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="currentColor" opacity="0.8"/>
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="currentColor" opacity="0.8"/>
                    </svg>
                  </div>

                  {/* Avatar 3 - Femme plus âgée */}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-fuchsia-100 to-pink-50 flex items-center justify-center shadow-sm overflow-hidden">
                    <svg className="w-7 h-7 text-fuchsia-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="currentColor" opacity="0.7"/>
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="currentColor" opacity="0.7"/>
                    </svg>
                  </div>
                  
                  {/* Avatar supplémentaire avec un + */}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-100 to-purple-50 flex items-center justify-center shadow-sm">
                    <span className="text-purple-500 text-xs font-bold">+600</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  Rejoignez nos clients satisfaits
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;