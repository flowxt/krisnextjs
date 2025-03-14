"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Import des icônes Heroicons
import { SparklesIcon, HeartIcon, MoonIcon, SunIcon, 
         LightBulbIcon, HandRaisedIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Variantes d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 }
  }
};

// Positions fixes pour les particules (pour éviter les problèmes d'hydratation)
const particlePositions = [
  { x: 10, y: 20, size: 3, delay: 0.5, duration: 3 },
  { x: 85, y: 15, size: 2, delay: 0.8, duration: 4 },
  { x: 25, y: 55, size: 2, delay: 0.3, duration: 2.5 },
  { x: 70, y: 45, size: 3, delay: 1.2, duration: 3.5 },
  { x: 40, y: 10, size: 2, delay: 0.7, duration: 3 },
  { x: 60, y: 70, size: 2, delay: 0.9, duration: 3.2 }
];

export default function Hero() {
  // Hooks
  const ref = useRef(null);
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const [isClient, setIsClient] = useState(false);
  
  // Marqueur côté client pour les animations qui pourraient causer des problèmes d'hydratation
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Gestion du défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false);
      } else {
        setScrollIndicator(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative w-full h-screen overflow-hidden"
      aria-label="Présentation principale"
    >
      {/* Arrière-plan amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/80 via-pink-50/80 to-indigo-50/80">
          {/* Étoiles fixes pour éviter problèmes d'hydratation */}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${i % 3 + 1}px`,
                height: `${i % 3 + 1}px`,
                top: `${i * 10 + 5}%`,
                left: `${(i * 8 + 7) % 90 + 5}%`,
                opacity: (i % 3 + 1) * 0.15,
                boxShadow: `0 0 ${(i % 3) + 2}px rgba(167, 139, 250, 0.5)`
              }}
            />
          ))}
        </div>
        
        {/* Lueur décorative */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-2/3 h-96 rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Titre avec effets améliorés */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl md:text-7xl font-bold mb-8 leading-snug pb-4 relative"
          >
            <span className="sr-only">Kristelle Feron</span>
            
            {/* Effet de halo amélioré */}
            <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl -z-10" />
            
            {/* Nom avec couleur dégradée - KRIS */}
            <span className="inline-block relative">
              {/* Particules autour du texte "Kris" */}
              {isClient && particlePositions.slice(0, 3).map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-purple-300"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    left: `${particle.x}%`,
                    top: `${particle.y}%`
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0, 0.7, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay
                  }}
                />
              ))}
              
              <span className="relative inline-block bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Kris
              </span>
              
              {/* Effet halo autour de "Kris" */}
              <motion.span
                className="absolute inset-0 rounded-lg opacity-0"
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(139, 92, 246, 0)",
                    "0 0 15px rgba(139, 92, 246, 0.3)",
                    "0 0 5px rgba(139, 92, 246, 0)"
                  ],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
              />
            </span>
            
            <span className="mx-1 md:mx-2"></span>
            
            {/* LA VOIX DES ANGES */}
            <span className="inline-block relative" style={{ paddingBottom: "0.25em" }}>
              {/* Particules autour du texte "LaVoixDesAnges" */}
              {isClient && particlePositions.slice(3, 6).map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-purple-300"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    right: `${particle.x - 10}%`,
                    top: `${particle.y + 10}%`
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0, 0.7, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay
                  }}
                />
              ))}
              
              <span className="relative inline-block bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent pb-1">
                LaVoixDesAnges
              </span>
              
              {/* Effet de lumière qui passe */}
              {isClient && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  style={{ width: "200%" }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                />
              )}
            </span>
            
            {/* Ligne décorative sous le titre - améliorée */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[3px] bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400"
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            />
          </motion.h1>

          {/* Phrase d'accroche avec icône */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-col items-center"
          >
            <motion.div 
              className="mb-2 text-purple-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, 0, -10, 0] }}
              transition={{ 
                scale: { delay: 0.5, duration: 0.5 },
                rotate: { delay: 1, duration: 2, repeat: Infinity, repeatDelay: 5 } 
              }}
            >
              <SparklesIcon className="w-6 h-6" />
            </motion.div>
            <p className="text-lg md:text-xl text-purple-800 font-light italic">
              Votre guide vers l'équilibre et la sérénité intérieure
            </p>
          </motion.div>

          {/* Sous-titre avec les mots clés et icônes */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap justify-center items-center max-w-3xl mx-auto text-gray-700"
          >
            <span className="inline-flex items-center gap-1 mx-2 my-1 hover:text-purple-600 transition-colors text-lg md:text-xl font-light">
              <HeartIcon className="w-5 h-5" />
              <span>Soins Énergétiques</span>
            </span>
            <span className="mx-1">•</span>
            <span className="inline-flex items-center gap-1 mx-2 my-1 hover:text-purple-600 transition-colors text-lg md:text-xl font-light">
              <MoonIcon className="w-5 h-5" />
              <span>Accompagnement Holistique</span>
            </span>
            <span className="mx-1">•</span>
            <span className="inline-flex items-center gap-1 mx-2 my-1 hover:text-purple-600 transition-colors text-lg md:text-xl font-light">
              <LightBulbIcon className="w-5 h-5" />
              <span>Éveil Spirituel</span>
            </span>
          </motion.div>

          {/* Bouton CTA amélioré */}
         
<motion.div
  variants={itemVariants}
  className="mt-10"
>
  <motion.a
    href="#contact"
    className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-full"
    aria-label="Prendre rendez-vous"
    whileHover={{
      scale: 1.03,
      boxShadow: "0 20px 30px -10px rgba(139, 92, 246, 0.4)",
    }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Fond avec dégradé */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
    
    {/* Effet de lueur permanent */}
    <div className="absolute inset-0 rounded-full" 
         style={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }} />
    
    {/* Effet de brillance qui traverse en continu */}
    {isClient && (
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "linear",
        }}
      />
    )}
    
    {/* Contenu du bouton */}
    <span className="relative z-10 flex items-center justify-center gap-3 text-white">
      <SparklesIcon className="w-5 h-5" />
      Commencer votre voyage
      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </span>
  </motion.a>
</motion.div>
        </motion.div>

        {/* Badges de spécialité avec icônes */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-6 mx-auto px-4 max-w-md">
          <span className="px-4 py-1.5 bg-purple-100 backdrop-blur-sm rounded-full text-xs font-medium text-purple-700 whitespace-nowrap flex items-center gap-1 hover:bg-purple-200 transition-colors">
            <HandRaisedIcon className="w-3.5 h-3.5" />
            Médium
          </span>
          <span className="px-4 py-1.5 bg-purple-100 backdrop-blur-sm rounded-full text-xs font-medium text-purple-700 whitespace-nowrap flex items-center gap-1 hover:bg-purple-200 transition-colors">
            <SparklesIcon className="w-3.5 h-3.5" />
            Magnétiseuse
          </span>
          <span className="px-4 py-1.5 bg-purple-100 backdrop-blur-sm rounded-full text-xs font-medium text-purple-700 whitespace-nowrap flex items-center gap-1 hover:bg-purple-200 transition-colors">
            <SunIcon className="w-3.5 h-3.5" />
            Guide Spirituel
          </span>
          <span className="px-4 py-1.5 bg-purple-100 backdrop-blur-sm rounded-full text-xs font-medium text-purple-700 whitespace-nowrap flex items-center gap-1 hover:bg-purple-200 transition-colors">
            <HeartIcon className="w-3.5 h-3.5" />
            Soins Énergétiques
          </span>
        </div>

        {/* Indicateur de défilement amélioré */}
        {scrollIndicator && (
          <div
            className="absolute left-1/2 bottom-8 transform -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
            }}
            aria-label="Défiler vers le bas"
          >
            <motion.p 
              className="text-sm text-purple-700 mb-2 font-medium"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Découvrir
            </motion.p>
            
            <motion.div
              className="w-8 h-14 rounded-full border-2 border-purple-500/50 flex items-start justify-center p-1"
              animate={{ 
                boxShadow: [
                  "0 0 0 rgba(167, 139, 250, 0)",
                  "0 0 10px rgba(167, 139, 250, 0.3)",
                  "0 0 0 rgba(167, 139, 250, 0)"
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-2 h-2 bg-purple-600 rounded-full"
                animate={{ y: [2, 8, 2] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
        )}
      </div>
      
      {/* Style pour les animations de dégradés */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .float-animation {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}