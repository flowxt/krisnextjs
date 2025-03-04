"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={ref}
      className="relative w-full h-screen overflow-hidden"
      aria-label="Présentation principale"
    >
      {/* Optimisation vidéo */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/video/space2.mp4" 
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ 
            filter: "brightness(0.6) contrast(1.1) hue-rotate(220deg)",
            transform: "scale(1.05)" // Compensation du zoom
          }}
        />
        {/* Couches de superposition */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-indigo-900/80 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-indigo-900/50" />
      </div>

      {/* Contenu amélioré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Titre avec découpe de gradient animé */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-7xl font-bold mb-6 leading-normal pb-2"
            style={{
              background: "linear-gradient(45deg, #9F7AEA, #667EEA, #6B46C1)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "300% 300%",
              animation: "gradientShift 8s ease infinite"
            }}
          >
            <span className="sr-only">Kristelle Feron</span>
            <span aria-hidden="true">Kris</span>
            <motion.span 
              className="inline-block ml-2"
              animate={{
                textShadow: [
                  "0 0 10px rgba(159,122,234,0.3)",
                  "0 0 20px rgba(103,126,234,0.4)",
                  "0 0 10px rgba(159,122,234,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LaVoixDesAnges
            </motion.span>
          </motion.h1>

          {/* Sous-titre avec effet de séquence */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-200"
          >
            {["Soins Énergétiques", "&", "Accompagnement Holistique"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.4 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Bouton amélioré */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
            whileHover="hover"
          >
            <a
              href="#contact"
              className="group relative inline-block px-8 py-4 text-lg font-semibold rounded-full overflow-hidden"
              aria-label="Prendre rendez-vous"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 transform group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full" />
              <span className="relative z-10 flex items-center gap-2 text-gray-100">
                Prendre Rendez-vous
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Indicateur de défilement */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="animate-bounce w-8 h-14 rounded-full border-2 border-indigo-300 flex items-start justify-center p-1">
            <div className="w-2 h-2 bg-indigo-300 rounded-full animate-scrollIndicator" />
          </div>
        </motion.div>
      </div>

      {/* Effets de particules subtils */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s infinite`
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
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-100vh) translateX(20px); }
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