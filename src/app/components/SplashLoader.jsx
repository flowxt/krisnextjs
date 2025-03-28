"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashLoader({ onComplete }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Timer pour la durée du loader
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // 3.5 secondes au total
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: [1, 0.8, 0], 
        scale: [1, 1.05, 1.1],
        filter: ["brightness(1)", "brightness(1.2)", "brightness(1.5)"]
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut" 
      }}
    >
      {/* Vidéo spatiale en arrière-plan avec filtre violet-bleu amélioré */}
      <div className="absolute inset-0 z-0">
        {/* Overlay dégradé violet-bleu */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-800/60 to-violet-900/70 mix-blend-overlay z-20"></div>
        
        {/* Seconde couche pour intensifier les tons */}
        <div className="absolute inset-0 bg-indigo-700/20 mix-blend-color z-10"></div>
        
        <video
          autoPlay
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="absolute w-full h-full object-cover"
          style={{ 
            filter: "hue-rotate(-30deg) saturate(130%) brightness(85%)", 
            opacity: 0.8
          }}
        >
          <source src="/video/space2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animation du texte uniquement */}
      <div className="relative z-10 text-center">
        {/* Animation du texte lettre par lettre */}
        <motion.h1 className="text-4xl md:text-6xl font-bold text-white relative font-heading mb-8">
          {/* Kris */}
          <motion.span 
            className="inline-block bg-gradient-to-br from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Kris
          </motion.span>
          {" "}
          {/* La Voix des Anges */}
          <motion.span 
            className="inline-block bg-gradient-to-br from-fuchsia-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            La<span className="hidden sm:inline">&#8202;</span>Voix<span className="hidden sm:inline">&#8202;</span>Des<span className="hidden sm:inline">&#8202;</span>Anges
          </motion.span>
        </motion.h1>

        {/* Effet de chargement */}
        <motion.div 
          className="mt-6 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80%", opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          style={{ margin: "0 auto" }}
        />
      </div>
    </motion.div>
  );
}