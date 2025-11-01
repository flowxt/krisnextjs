"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import PatricePresentation from "./components/PatricePresentation";
import SplashLoader from "./components/SplashLoader";
// import GoogleReviews from "./components/GoogleReviews";
import BlogNewsModal from "./components/BlogNewsModal";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    // Optionnel: Vérifier si le loader a déjà été affiché durant cette session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (hasSeenLoader) {
      setShowLoader(false);
      setLoaderComplete(true);
    } else {
      // Marquer le loader comme vu pour cette session
      sessionStorage.setItem("hasSeenLoader", "true");
    }
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    // Attendre un court délai avant d'afficher la modale
    setTimeout(() => {
      setLoaderComplete(true);
    }, 500);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && <SplashLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {/* Modale des nouveaux articles de blog - affichée seulement après le loader */}
      {loaderComplete && <BlogNewsModal />}

      <div className={showLoader ? "hidden" : ""}>
        <Hero />
        <main>
          <section className="w-full py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 relative overflow-hidden">
            {/* Éléments décoratifs animés */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-r from-purple-200 to-transparent rounded-full opacity-20"
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              {/* Section Immersive - Version améliorée */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 relative"
              >
                <h2 className="font-heading mt-8 md:mt-11 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
                  <span className="relative z-10 block md:inline-block">
                    <span className="block md:inline">Un havre de paix</span>{" "}
                    <span className="block md:inline">
                      pour{" "}
                      <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white px-2 py-1 md:p-2 inline-block mt-2 md:mt-0">
                        votre bien-être
                      </span>
                    </span>
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
                  Niché dans un{" "}
                  <span className="font-semibold text-purple-600">
                    cadre apaisant
                  </span>
                  , cet espace a été pensé pour favoriser la relaxation et
                  l&apos;harmonisation de{" "}
                  <span className="font-semibold text-indigo-600">
                    votre énergie.
                  </span>
                </p>
              </motion.div>

              {/* Galerie images */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                <motion.div
                  className="relative h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="/photo/IMG_8959.JPG"
                    alt="Extérieur du lieu"
                    width={800}
                    height={600}
                    className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                <div className="space-y-8">
                  <motion.div
                    className="relative h-44 rounded-3xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/photo/IMG_8954.JPG"
                      alt="Intérieur du lieu"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                  <motion.div
                    className="relative h-44 rounded-3xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/photo/IMG_8951.JPG"
                      alt="Détails intérieurs"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="/photo/IMG_8950.JPG"
                    alt="Ambiance détente"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>

              {/* Section intermédiaire */}
              <div className="my-24 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl rounded-full" />
                <motion.div
                  className="relative bg-white/50 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-white/20"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  <h3 className="font-heading text-4xl font-bold text-gray-900 mb-6 text-center">
                    🌿 L&apos;énergie qui vous ressemble
                  </h3>
                  <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
                    Mon approche unique combine{" "}
                    <span className="font-semibold text-purple-600">
                      techniques ancestrales
                    </span>{" "}
                    et{" "}
                    <span className="font-semibold text-indigo-600">
                      méthodes modernes
                    </span>{" "}
                    pour un bien-être holistique et durable.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section Interview */}
          <section className="w-full py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Éléments décoratifs */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-indigo-200 to-transparent rounded-full opacity-30"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-r from-purple-200 to-transparent rounded-full opacity-25"
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Découvrez mon parcours
                  </span>
                  <br />
                  dans cette interview
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  ✨ Dans cette émission de La Spiritualité pour Tous, je
                  partage mon univers rempli d'expériences étonnantes,
                  d'anecdotes touchantes et de messages inspirants 👼
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Vidéo YouTube */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="aspect-video w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/_xVkQTn0v6M?si=0PnVewOaTc5Equi6"
                        title="Interview Kris La Voix des Anges - La Spiritualité pour Tous"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-3xl"
                      ></iframe>
                    </div>
                    {/* Overlay décoratif */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"></div>
                  </div>
                </motion.div>

                {/* Contenu textuel */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-3xl mr-3">🎙️</span>
                      Une rencontre authentique
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Médium de naissance, je vous entraîne dans mon univers
                      rempli d'expériences étonnantes, d'anecdotes touchantes et
                      de messages inspirants.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Même avec mes dons innés, je rappelle que rien n'est
                      acquis : il faut oser{" "}
                      <span className="font-semibold text-purple-600">
                        travailler sur soi
                      </span>{" "}
                      💎, apprendre à s'écouter et transformer ses fragilités en
                      forces 💖.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Avec simplicité et authenticité, je partage mon chemin
                      spirituel, mes prises de conscience et ma vision de la
                      médiumnité 🔮. Une rencontre lumineuse, riche
                      d'enseignements et d'espoir 🌈✨.
                    </p>
                  </div>

                  {/* Call to action */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white text-center"
                  >
                    <p className="text-lg font-medium mb-2">
                      💫 Envie d'en savoir plus sur mon approche ?
                    </p>
                    <p className="text-indigo-100">
                      Découvrez mes accompagnements personnalisés
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section unifiée des présentations des thérapeutes */}
          <section className="relative bg-gradient-to-b from-purple-50 via-white to-blue-50 overflow-hidden">
            {/* Particules de fond subtiles */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "#a78bfa" : "#60a5fa",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Titre de section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center pt-20 pb-8 px-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-2 rounded-full mb-6 shadow-md"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Nos Thérapeutes
                </span>
              </motion.div>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Deux expertises,</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  un même engagement
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez nos accompagnements personnalisés pour votre transformation intérieure
              </p>
            </motion.div>

            {/* Présentation de Kristelle */}
            <div className="relative z-10">
              <Presentation />
            </div>

            {/* Séparateur élégant et animé */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative z-10 py-16 px-4"
            >
              <div className="max-w-4xl mx-auto">
                {/* Ligne décorative avec effet de brillance */}
                <div className="relative flex items-center justify-center">
                  {/* Ligne gauche */}
                  <motion.div
                    className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-400"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />

                  {/* Élément central décoratif */}
                  <motion.div
                    className="relative mx-8"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  >
                    {/* Cercles concentriques animés */}
                    <motion.div
                      className="absolute inset-0 -m-4"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-md" />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 -m-2"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-sm" />
                    </motion.div>

                    {/* Symbole central */}
                    <div className="relative w-8 h-8 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-white text-xl"
                      >
                        ⚡
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Ligne droite */}
                  <motion.div
                    className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-300 to-blue-400"
                    initial={{ scaleX: 0, originX: 1 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>

                {/* Texte de transition */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-center mt-12"
                >
                  <div className="inline-block relative">
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-50 blur-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <h3 className="relative font-heading text-2xl md:text-3xl font-bold text-gray-900 px-8 py-4">
                      Découvrez également{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Patrice
                      </span>
                      , expert en libération émotionnelle masculine
                    </h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Présentation de Patrice */}
            <div className="relative z-10">
              <PatricePresentation />
            </div>

            {/* Effet de dégradé en bas de section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />
          </section>

          <Cta page="accueil" />
        </main>
      </div>
    </>
  );
}
