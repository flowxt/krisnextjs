"use client";
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallaxe au scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Effet parallaxe à la souris
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative w-full h-screen overflow-hidden"
      aria-label="Présentation principale"
    >
      {/* Conteneur vidéo sans loader */}
      <div className="absolute inset-0">
        {/* Image de secours en cas d'erreur de vidéo */}
        {videoError && (
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('/images/space-bg.jpg')",
              filter: "brightness(0.8) contrast(1.05)"
            }}
          />
        )}
        
        {!videoError && (
          <video
            className="w-full h-full object-cover"
            src="/video/space2.mp4" 
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => {
              console.error("Erreur de chargement de la vidéo");
              setVideoError(true);
            }}
            style={{ 
              filter: "brightness(0.8) contrast(1.05) hue-rotate(180deg)",
              transform: `scale(1.05) translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
              transition: "transform 0.6s ease-out"
            }}
          />
        )}
        
        {/* Couches de superposition avec moins d'opacité */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-indigo-900/60 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/10 to-indigo-900/30" />
        
        {/* Effet de brume cosmique */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: "url('/images/cosmic-dust.png')",
            backgroundSize: "cover",
            x: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]),
          }}
        />
      </div>

      {/* Overlay étoilé */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: "white",
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, Math.random() * 0.3 + 1, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Contenu amélioré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ 
            y: useTransform(scrollYProgress, [0, 0.5], [0, -100]),
            opacity
          }}
        >
          {/* Élément décoratif au-dessus du titre */}
          <motion.div 
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mx-auto"
                animate={{ 
                  width: ["20%", "80%", "20%"],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full"
                animate={{ 
                  boxShadow: [
                    "0 0 0px rgba(159, 122, 234, 0.3)",
                    "0 0 15px rgba(159, 122, 234, 0.7)",
                    "0 0 0px rgba(159, 122, 234, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Titre avec découpe de gradient animé - Hover corrigé */}
          <motion.h1
  variants={itemVariants}
  className="text-4xl md:text-7xl font-bold mb-8 leading-snug pb-4" // Augmentation du padding et line-height
>
  <span className="sr-only">Kristelle Feron</span>
  <span 
    className="inline-block bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent bg-size-200 animate-gradient"
  >
    Kris
  </span>
  <motion.span 
    className="inline-block ml-2 bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent bg-size-200 animate-gradient"
    animate={{
      textShadow: [
        "0 0 10px rgba(159,122,234,0.3)",
        "0 0 20px rgba(103,126,234,0.4)",
        "0 0 10px rgba(159,122,234,0.3)"
      ]
    }}
    transition={{ duration: 2, repeat: Infinity }}
    style={{ paddingBottom: "0.15em" }} // Ajout d'un peu d'espace en bas pour les lettres descendantes
  >
    LaVoixDesAnges
  </motion.span>
</motion.h1>

          {/* Phrase d'accroche */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <p className="text-lg md:text-xl text-purple-200 font-light italic">
              Votre guide vers l'équilibre et la sérénité intérieure
            </p>
          </motion.div>

          {/* Sous-titre avec effet de séquence */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-200"
          >
            {["Soins Énergétiques", "•", "Accompagnement Holistique", "•", "Éveil Spirituel"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mx-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  color: word !== "•" ? "#d8b4fe" : "#f9fafb"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Bouton amélioré */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-full overflow-hidden"
              aria-label="Prendre rendez-vous"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
                animate={{
                  background: [
                    "linear-gradient(90deg, #8b5cf6, #6366f1)",
                    "linear-gradient(180deg, #9333ea, #4f46e5)",
                    "linear-gradient(270deg, #8b5cf6, #6366f1)",
                    "linear-gradient(0deg, #9333ea, #4f46e5)",
                    "linear-gradient(90deg, #8b5cf6, #6366f1)"
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Halo lumineux */}
              <motion.div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ boxShadow: "0 0 0 rgba(139, 92, 246, 0)" }}
                whileHover={{ 
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.5)",
                    "0 0 30px rgba(139, 92, 246, 0.6)",
                    "0 0 20px rgba(139, 92, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Effet de brillance */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1 }}
              />
              
              <span className="relative z-10 flex items-center gap-3 text-white">
                Commencer votre voyage
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Badges de spécialité */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ opacity }}
        >
          {["Médium", "Magnétiseuse", "Guide Spirituel", "Soins Énergétiques"].map((badge, i) => (
            <motion.span
              key={i}
              className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-purple-100"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(255, 255, 255, 0.2)" 
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Indicateur de défilement amélioré */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
          }}
        >
          <div className="relative flex flex-col items-center">
            <motion.p 
              className="text-sm text-purple-200 mb-2 font-light"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Découvrir
            </motion.p>
            <motion.div
              className="w-8 h-14 rounded-full border-2 border-purple-300/50 flex items-start justify-center p-1"
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
                className="w-2 h-2 bg-purple-300 rounded-full"
                animate={{ y: [2, 8, 2] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Effets de particules améliorés */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: `rgba(${139 + Math.random() * 50}, ${92 + Math.random() * 50}, ${246 + Math.random() * 10}, ${0.3 + Math.random() * 0.5})`,
              filter: `blur(${Math.random() * 2}px)`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationName: "floatParticle"
            }}
          />
        ))}
      </motion.div>

      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        .animate-gradient {
          animation: gradientShift 8s ease infinite;
        }
        
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          25% { opacity: 1; }
          50% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0.5; }
          75% { opacity: 0.7; }
          100% { transform: translateY(-200vh) translateX(${Math.random() * 200 - 100}px); opacity: 0; }
        }
        
        .animate-scrollIndicator {
          animation: scrollIndicator 1.5s ease-in-out infinite;
        }
        
        @keyframes scrollIndicator {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 80 
    }
  }
};