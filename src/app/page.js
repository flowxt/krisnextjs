"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import SplashLoader from "./components/SplashLoader";
import GoogleReviews from "./components/GoogleReviews";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Optionnel: Vérifier si le loader a déjà été affiché durant cette session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (hasSeenLoader) {
      setShowLoader(false);
    } else {
      // Marquer le loader comme vu pour cette session
      sessionStorage.setItem("hasSeenLoader", "true");
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && <SplashLoader onComplete={() => setShowLoader(false)} />}
      </AnimatePresence>

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
                  l'harmonisation de{" "}
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
                    🌿 L'énergie qui vous ressemble
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
          <Presentation />

          <Cta page="accueil" />
          <GoogleReviews />
        </main>
      </div>
    </>
  );
}
