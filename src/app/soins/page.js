"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  RocketLaunchIcon,
  SunIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Cta from "../components/Cta";

const formules = [
  {
    id: 1,
    title: "Boost Changement",
    price: "480€",
    duration: "5 séances intensives - Valable 1 mois",
    description: [
      "Coaching holistique",
      "Soins énergétiques",
      "Définition d’objectifs",
      "Relaxation profonde",
    ],
  },
  {
    id: 2,
    title: "Les Saisons - 4 Soins Énergétiques",
    price: "340€",
    duration: "Valable 12 mois",
    description: [
      "Soins énergétiques personnalisés",
      "Équilibre au fil des saisons",
      "Séance sur mesure",
      "Soin Arbre de Vie",
    ],
  },
  {
    id: 3,
    title: "Accompagnement Holistique - 10h",
    price: "800€",
    duration: "10 séances d’1h - Valable 6 mois",
    description: [
      "Comprendre son mental et ses perceptions",
      "Trouver son équilibre spirituel",
      "Apprendre à se protéger",
      "Découvrir son outil personnel",
    ],
  },
  {
    id: 4,
    title: "Accompagnement Holistique - 30h",
    price: "1 930€",
    duration: "Valable 10 mois",
    description: [
      "Explorer sa voie spirituelle",
      "Développer ses ressentis énergétiques",
      "Maîtriser la canalisation",
      "Pratiquer en pleine conscience",
    ],
  },
];

export default function Soins() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1 },
  };

  return (
    <>
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
            <h2 className="mt-11 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
              <span className="relative z-10 px-4 flex flex-col md:flex-row items-center gap-2 md:gap-0">
                <span className="whitespace-nowrap">Un havre de paix</span>{" "}
                <span className="whitespace-nowrap pl-2">
                  pour{" "}
                  <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-2 inline-block mt-1 md:mt-0">
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

            {/* Élément décoratif discret */}
          </motion.div>

          {/* Galerie images modifiée */}
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

          {/* Nouvelle section intermédiaire */}
          <div className="my-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl rounded-full" />
            <motion.div
              className="relative bg-white/50 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-white/20"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-6 text-center">
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

          {/* Cartes revisitées */}
          <div ref={ref} className="grid md:grid-cols-2 gap-12 relative">
            {formules.map((formule, index) => (
              <motion.div
                key={formule.id}
                variants={cardVariants}
                initial="offscreen"
                animate={isInView ? "onscreen" : "offscreen"}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  delay: index * 0.15,
                }}
                className="relative overflow-visible isolate"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
              >
                {/* Effet de halo au survol avec isolation */}
                <motion.div
                  className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-br from-purple-300/30 via-indigo-300/30 to-blue-300/30 blur-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl transition-all duration-300 h-full flex flex-col justify-between border border-white/30 hover:border-purple-300 group z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 rounded-3xl" />

                  {/* Effet de brillance qui parcourt la carte au survol - avec isolation */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    <motion.div
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </div>

                  <div className="flex items-start gap-6 mb-8 relative z-20">
                    <div className="p-4 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl shadow-sm">
                      {formule.id === 1 && (
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <RocketLaunchIcon className="w-8 h-8 text-purple-500" />
                        </motion.div>
                      )}
                      {formule.id === 2 && (
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <SunIcon className="w-8 h-8 text-purple-500" />
                        </motion.div>
                      )}
                      {formule.id === 3 && (
                        <BookOpenIcon className="w-8 h-8 text-purple-500" />
                      )}
                      {formule.id === 4 && (
                        <motion.div
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <AcademicCapIcon className="w-8 h-8 text-purple-500" />
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        {formule.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xl font-bold text-gray-900">
                          {formule.price}
                        </span>
                        <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                          {formule.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 pl-2 relative z-20">
                    {formule.description.map((desc, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
                        whileHover={{ x: 5, color: "#6d28d9" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/contact" className="relative z-20">
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-purple-400 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>
                        {formule.id === 1
                          ? "Lancer ma transformation"
                          : formule.id === 2
                          ? "Harmoniser mon année"
                          : formule.id === 3
                          ? "Explorer mon potentiel"
                          : "Maîtriser mon énergie"}
                      </span>
                      <motion.div
                        animate={isInView ? { x: [0, 5, 0] } : {}}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: 2,
                          delay: index * 0.5,
                        }}
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Citation */}
          {/* Citation animée */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center mt-16 px-4"
          >
            <div className="max-w-3xl w-full relative">
              {/* Éléments décoratifs */}
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-200 to-indigo-200 opacity-70 dark:opacity-30 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-tr from-purple-200/50 to-indigo-300/40 blur-md"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />

              {/* Conteneur de citation avec animation de bordure */}
              <motion.div
                className="relative overflow-hidden backdrop-blur-sm rounded-xl shadow-lg border border-purple-100"
                whileHover={{
                  boxShadow: "0 15px 30px -10px rgba(124, 58, 237, 0.3)",
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Effet de brillance qui parcourt la citation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 5,
                  }}
                />

                <div className="relative bg-white/60 p-8 flex items-center">
                  {/* Bordure gauche animée */}
                  <motion.div
                    className="absolute left-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-purple-400 via-indigo-500 to-purple-400"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />

                  {/* Conteneur texte */}
                  <div className="pl-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <SparklesIcon className="w-6 h-6 text-purple-400 mb-3" />
                    </motion.div>

                    <motion.p
                      className="text-xl italic text-gray-700 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    >
                      "L'énergie vitale est la clé de toute transformation
                      profonde et durable."
                    </motion.p>

                    <motion.p
                      className="text-right mt-3 text-sm text-purple-600 font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                    >
                      — Kristelle Feron
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Ajout du CTA */}
        </div>
      </section>
      <div className="w-full">
        <Cta page="soins" />
      </div>
    </>
  );
}
