"use client";

import { motion } from "framer-motion";
import { SparklesIcon, HeartIcon, SunIcon } from "@heroicons/react/24/outline";

export default function BlogPresentation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="text-center relative">
        {/* Cercles décoratifs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-purple-200/20 blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-indigo-200/20 blur-3xl -z-10" />

        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-heading"
        >
          <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
            Éveil & Harmonie
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-700 max-w-3xl mx-auto mb-10"
        >
          Explorez l'univers du développement spirituel, des soins
          énergétiques et du bien-être holistique à travers nos articles
          inspirants.
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {/* Carte 1 */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <SparklesIcon className="w-6 h-6 text-purple-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Spiritualité & Éveil
          </h3>
          <p className="text-gray-600">
            Découvrez des articles sur le cheminement spirituel, l'éveil de
            la conscience et le développement personnel.
          </p>
        </div>

        {/* Carte 2 */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <HeartIcon className="w-6 h-6 text-purple-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Soins & Énergie
          </h3>
          <p className="text-gray-600">
            Explorez les bienfaits des soins énergétiques, les pratiques de
            guérison et les méthodes pour harmoniser votre être.
          </p>
        </div>

        {/* Carte 3 */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <SunIcon className="w-6 h-6 text-purple-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Bien-être & Harmonie
          </h3>
          <p className="text-gray-600">
            Des conseils pratiques et des réflexions sur l'équilibre
            corps-esprit, la méditation et les pratiques quotidiennes.
          </p>
        </div>
      </motion.div>

      {/* Citation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gradient-to-r from-purple-100 to-indigo-100 p-10 rounded-3xl shadow-inner relative overflow-hidden mb-16"
      >
        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-white/30 to-transparent" />

        <div className="relative">
          <SparklesIcon className="w-8 h-8 text-purple-400 mb-4" />
          <p className="text-xl md:text-2xl font-light text-gray-800 italic mb-4 leading-relaxed">
            "Les mots ont le pouvoir de guérir l'âme et d'éveiller la
            conscience. Bienvenue dans cet espace où je partage avec vous ma
            vision, mes expériences et mes conseils pour vous accompagner
            sur votre chemin spirituel."
          </p>
          <p className="text-right text-purple-700 font-medium">
            — Kristelle Feron
          </p>
        </div>
      </motion.div>

      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
        >
          Mes derniers articles
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="h-1 w-24 bg-gradient-to-r from-purple-400 to-indigo-500 mx-auto mb-12"
        />
      </div>
    </motion.div>
  );
}