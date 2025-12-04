"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  RocketLaunchIcon,
  SunIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Cta from "../components/Cta";
import BookingModal from "../components/BookingModal";

const formules = [
  {
    id: 1,
    title: "Boost Changement",
    price: "480€",
    duration: "5 séances intensives - Valable 1 mois",
    description: [
      "Coaching holistique",
      "Soins énergétiques",
      "Définition d'objectifs",
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
    duration: "10 séances d'1h - Valable 6 mois",
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

const servicesSeance = [
  {
    id: 22,
    title: "Coaching & Accompagnement Holistique",
    price: "100€",
    duration: "1h - Présentiel/Distance",
    intervenant: "Kris",
    icon: <UserGroupIcon className="w-8 h-8" />,
    description: `Révéler ton potentiel, réaligner ta vie

Un accompagnement complet qui unit corps, esprit et âme pour t'aider à avancer avec clarté, confiance et authenticité.

Que ce soit pour ta vie personnelle, professionnelle ou ton évolution intérieure, je t'accompagne à libérer ce qui freine, activer tes ressources et poser des actions alignées.

✨ Compréhension profonde de tes enjeux
✨ Mise en lumière de ta vérité intérieure
✨ Clarté, structure et guidance
✨ Transformation durable et consciente

Un espace sécurisant, bienveillant et puissant pour t'accompagner vers une version plus alignée, sereine et rayonnante de toi.

Réserve ton accompagnement.`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
  },
];

export default function Soins() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Animation variants
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1 },
  };

  return (
    <>
      {/* Section Services à la séance - EN PREMIER */}
      <section className="w-full pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="block mb-2">
                Séances{" "}
                <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white px-2 py-1 inline-block">
                  à l'unité
                </span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement personnalisé pour avancer à ton rythme
            </p>
          </motion.div>

          <div className="flex justify-center">
            {servicesSeance.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full flex flex-col w-full max-w-md"
              >
                {/* Effet de glow animé en arrière-plan */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"
                />

                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-purple-100">
                  {/* Bande décorative supérieure */}
                  <div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600" />

                  <div className="p-6 flex-grow relative z-10">
                    {/* Header avec icône */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="relative"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 group-hover:border-purple-300 transition-colors">
                          <div className="text-purple-600 group-hover:text-purple-700 transition-colors">
                            {service.icon}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Badge intervenant */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-purple-100 text-purple-800">
                      {service.intervenant}
                    </span>

                    {/* Prix et badges */}
                    <div className="mt-4 flex flex-col space-y-3">
                      <span className="text-xl font-bold text-purple-600">
                        {service.price}
                      </span>

                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm font-medium px-3 py-1.5 rounded-full text-indigo-600 bg-indigo-50">
                          <span className="inline-block mr-1">⌛</span>{" "}
                          {service.duration.split(" - ")[0]}
                        </span>
                        <span className="text-sm font-medium px-3 py-1.5 rounded-full text-indigo-600 bg-indigo-50">
                          <span className="inline-block mr-1">📍</span>{" "}
                          {service.duration.split(" - ")[1]}
                        </span>
                      </div>
                    </div>

                    {/* Aperçu de description */}
                    <div className="mt-6">
                      <p className="text-gray-600 line-clamp-3">
                        {service.description.split("\n\n")[0]}
                      </p>
                    </div>
                  </div>

                  {/* Bouton d'action */}
                  <div className="mt-auto p-4 border-t border-purple-100">
                    <button
                      onClick={() => {
                        setSelectedService(service);
                        setIsBookingModalOpen(true);
                      }}
                      className="w-full py-3 px-4 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Réserver
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Forfaits - EN SECOND */}
      <section className="w-full py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Éléments décoratifs animés */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-r from-purple-200 to-transparent rounded-full opacity-20"
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Immersive - Version améliorée */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center md:pb-8">
            <span className="relative z-10 block">
              <span className="block mb-2 md:inline-block md:mb-0">
                Mes forfaits
              </span>{" "}
              <span className="block md:inline-block">
                pour{" "}
                <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white px-2 py-1 md:p-2 inline-block mt-1 md:mt-0">
                  votre bien-être
                </span>
              </span>
            </span>
          </h2>
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
                      <h3 className="font-heading text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
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
                className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-200 to-indigo-200 opacity-70  blur-md"
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
                      &quot;L&apos;énergie vitale est la clé de toute
                      transformation profonde et durable&quot;
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

      {/* Modal de réservation */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={selectedService}
      />
    </>
  );
}
