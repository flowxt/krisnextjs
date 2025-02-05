"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vidéo de fond */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/space2.mp4"
        autoPlay
        loop
        muted
        style={{ filter: "brightness(0.5) contrast(1.2) sepia(1) hue-rotate(200deg) saturate(2)" }}
      />
      {/* Filtre bleu/violet */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-50 mix-blend-multiply"></div>

      {/* Contenu de la section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Animation du titre */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold"
        >
           Kris <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">LaVoixDesAnges</span>
         
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
        Soins Energétiques & Accompagnement holistique
        </motion.p>

        {/* Animation du bouton */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            Prendre Rendez-vous
          </a>
        </motion.div>
      </div>
    </section>
  );
}