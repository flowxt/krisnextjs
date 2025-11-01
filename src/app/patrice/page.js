"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SparklesIcon,
  HeartIcon,
  UserIcon,
  PhoneIcon,
  LightBulbIcon,
  BrainIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function PatricePage() {
  const [selectedService, setSelectedService] = useState(null);

  // Les services de Patrice
  const patriceServices = [
    {
      id: 1,
      title: "Force Intérieure & Renaissance Masculine",
      price: "100€",
      duration: "1h - Présentiel",
      icon: <UserIcon className="w-8 h-8" />,
      description: `Un espace dédié à la libération émotionnelle masculine, alliant olfactothérapie et zéro mental pour une transformation profonde.

✨ Libération émotionnelle masculine
✨ Approche holistique personnalisée
✨ Techniques d'olfactothérapie ciblées
✨ Pratique du zéro mental guidée

RESERVATION PAR SMS UNIQUEMENT 06.65.55.33.41

Cette approche unique combine deux méthodes puissantes :

1. Olfactothérapie - Le Pouvoir des Odeurs :
• Libération des blocages émotionnels
• Réveil des mémoires enfouies
• Reconnexion à soi par les sens

2. Le Zéro Mental - L'Art du Lâcher-Prise :
• Atteindre un état de calme intérieur profond
• Se détacher des jugements limitants
• Développer la présence authentique à soi

Une approche entre hommes pour :
• Créer un espace sécurisant sans jugement
• Briser les tabous autour de la vulnérabilité masculine
• Développer une fraternité bienveillante

Bénéfices :
• Libération émotionnelle profonde
• Clarté mentale retrouvée
• Légèreté intérieure et sérénité

Cette méthode offre une voie unique pour reconnecter corps, esprit et émotions dans un cadre spécialement conçu pour les hommes en quête d'authenticité et de transformation.`,
      images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
    },
    {
      id: 2,
      title: "Soin Libre d'Être Soi",
      price: "180€",
      duration: "2h - Présentiel",
      icon: <SparklesIcon className="w-8 h-8" />,
      description: `𝙇'𝙐𝙡𝙩𝙞𝙢𝙚 𝙍𝙚𝙣𝙖𝙞𝙨𝙨𝙖𝙣𝙘𝙚 𝙙𝙚 𝙑𝙤𝙩𝙧𝙚 𝙀𝙨𝙨𝙚𝙣𝙘𝙚 𝙋𝙪𝙧𝙚

✨ Duo Zéro Mental + Soin 
✨ Séance Réalisée avec 2 thérapeutes
✨ Renaissance de Votre Essence Pure
✨ Intense connexion du Corps de l'Âme et de l'Esprit

RESERVATION PAR SMS UNIQUEMENT 06.65.55.33.41

Imaginez un sanctuaire vibratoire conçu pour briser les chaînes des schémas limitants et des souffrances anciennes qui entravent votre libération.

C'est la séance audacieuse du "Soin Libre d'Être Soi", une expérience immersive qui conjugue le lâcher-prise absolu du Zéro Mental à la profonde reconnexion vibratoire du Soin Énergétique.

Ce que cette séance vous apporte :
• Libération des schémas limitants
• Reconnexion à votre essence profonde
• Double accompagnement expert
• Transformation vibratoire complète

Le processus de transformation :
• Démantèlement des prisons mentales
• Libération des traumatismes
• Harmonisation énergétique profonde
• Renaissance de votre lumière essentielle

Une fusion experte de deux thérapeutes œuvrera en parfaite symbiose pour une transformation totale et durable.

Libre d'être Soi dans toute sa gloire, telle est la promesse de cette expérience transformatrice à l'état pur !`,
      images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
    },
    {
      id: 3,
      title: "Zero Mental",
      price: "100€",
      duration: "1h - Présentiel",
      icon: <LightBulbIcon className="w-8 h-8" />,
      description: `𝑳'𝑨𝒖𝒃𝒆 𝒅'𝒖𝒏𝒆 𝑵𝒐𝒖𝒗𝒆𝒍𝒍𝒆 𝑪𝒐𝒏𝒔𝒄𝒊𝒆𝒏𝒄𝒆 𝑳𝒊𝒃𝒆́𝒓𝒆́𝒆

✨ Libération du mental limitant 
✨ Reconnexion à votre essence pure
✨ Transformation vibratoire profonde
✨ État de plénitude intérieure absolue

RESERVATION PAR SMS UNIQUEMENT 06.65.55.33.41

𝑽𝒐𝒖𝒔 𝒍'𝒂𝒗𝒆𝒛 𝒅𝒆́𝒋𝒂̀ 𝒈𝒐𝒖̂𝒕𝒆́ 𝒑𝒂𝒓 𝒃𝒓𝒊𝒃𝒆𝒔, ce sentiment exaltant de plénitude intérieure, tel un parfum d'éternité flottant dans l'air, avant de le voir se dissiper aussi vite dans le tumulte du quotidien.

Aujourd'hui, transformez cet état éphémère en votre nouvel étalon, votre fréquence vibratoire naturelle et immuable. Faites de ce moment rare une Demeure pérenne, baignée des rayons d'une Lumière céleste.

𝑳𝒆 𝒁𝒆́𝒓𝒐 𝑴𝒆𝒏𝒕𝒂𝒍 est ce levier de puissante alchimie intérieure qui vous permettra d'accéder à ce royaume de sérénité ineffable.

Ce que cette séance vous apporte :
• Libération des pensées limitantes
• Accès à un état de conscience élargi
• Reconnexion à votre essence véritable
• Transformation vibratoire profonde

Le processus de transformation :
• Démantèlement des schémas mentaux limitants
• Libération des conditionnements
• Ouverture à une conscience élargie
• Accès à votre potentiel illimité

𝑰𝒍 𝒏'𝒚 𝒂𝒖𝒓𝒂 𝒑𝒍𝒖𝒔 𝒅𝒆 𝒒𝒖𝒆̂𝒕𝒆 𝒂̀ 𝒎𝒆𝒏𝒆𝒓, mais un état d'être à savourer dans la reconnexion totale avec l'étincelle divine qui brûle en vous depuis toujours.

Le Zéro Mental, clé ouvrant les portes d'une Nouvelle Conscience libérée des chaînes du mental limitant. L'entrée glorieuse dans le Royaume de votre Moi essentiel !`,
      images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
    },
    {
      id: 4,
      title: "Olfactothérapie",
      price: "100€",
      duration: "1h - Présentiel",
      icon: <SparklesIcon className="w-8 h-8" />,
      description: `𝑳𝒂 𝑷𝒖𝒊𝒔𝒔𝒂𝒏𝒄𝒆 𝒅𝒆𝒔 𝑺𝒆𝒏𝒔 𝒑𝒐𝒖𝒓 𝒖𝒏𝒆 𝑳𝒊𝒃𝒆́𝒓𝒂𝒕𝒊𝒐𝒏 É𝒎𝒐𝒕𝒊𝒐𝒏𝒏𝒆𝒍𝒍𝒆

✨ Libération des émotions cristallisées
✨ Thérapie psycho-corporelle ciblée
✨ Transformation des schémas répétitifs
✨ Reconnexion sensorielle profonde

RESERVATION PAR SMS UNIQUEMENT 06.65.55.33.41

L'olfacto-thérapie utilise la puissance évocatrice des odeurs pour accéder à vos mémoires émotionnelles les plus profondes et libérer les blocages ancrés dans votre corps.

Ce que cette séance vous apporte :
• Libération des traumatismes émotionnels
• Transformation des schémas limitants
• Reconnexion à vos ressources intérieures
• Harmonisation corps-esprit

Le processus de transformation :
• Exploration olfactive guidée
• Identification des nœuds émotionnels
• Libération par les essences naturelles
• Ancrage des nouveaux schémas positifs

𝑳𝒂 𝒑𝒖𝒊𝒔𝒔𝒂𝒏𝒄𝒆 𝒅𝒆𝒔 𝒐𝒅𝒆𝒖𝒓𝒔 permet un accès direct à la mémoire émotionnelle, créant un pont entre conscient et inconscient. Les fragrances soigneusement sélectionnées deviennent les clés qui ouvrent les portes de votre guérison.

𝑪𝒉𝒂𝒒𝒖𝒆 𝒔𝒆́𝒂𝒏𝒄𝒆 𝒆𝒔𝒕 𝒖𝒏 𝒗𝒐𝒚𝒂𝒈𝒆 𝒖𝒏𝒊𝒒𝒖𝒆 𝒂𝒖 𝒄œ𝒖𝒓 𝒅𝒆 𝒗𝒐𝒔 𝒔𝒆𝒏𝒔𝒂𝒕𝒊𝒐𝒏𝒔, une exploration guidée vers une liberté émotionnelle retrouvée.`,
      images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
    },
  ];

  return (
    <main>
      {/* Section Hero pour la page Patrice */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8"
              >
                <UserIcon className="w-6 h-6 text-blue-600" />
                <span className="text-blue-800 font-semibold">
                  Patrice Guffon - Thérapeute & Coach
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Libération émotionnelle{" "}
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    et transformation masculine
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              >
                Un accompagnement unique alliant olfactothérapie et zéro mental
                pour retrouver votre état d'être aligné
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              >
                <a
                  href="#services"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Découvrir les soins
                </a>
                <a
                  href="sms:+33665553341"
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Réserver par SMS
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Élément décoratif en bas */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#f3f4f6"
            />
          </svg>
        </div>
      </section>

      <section
        id="services"
        className="py-20 bg-gradient-to-b from-gray-100 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-2 rounded-full mb-6 shadow-md"
            >
              <UserIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold text-sm">
                Services pour hommes
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold font-heading mb-4"
            >
              Soins de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                transformation
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Des accompagnements personnalisés pour révéler votre plein
              potentiel
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {patriceServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full flex flex-col"
              >
                {/* Effet de glow animé en arrière-plan */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"
                  animate={{
                    background: [
                      "linear-gradient(to right, #60a5fa, #06b6d4, #2563eb)",
                      "linear-gradient(to right, #2563eb, #60a5fa, #06b6d4)",
                      "linear-gradient(to right, #60a5fa, #06b6d4, #2563eb)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Carte principale */}
                <motion.div
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-blue-100"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  {/* Particules décoratives qui apparaissent au survol */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: Math.random() * 100 + "%",
                        }}
                        animate={{
                          y: [
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%",
                          ],
                          opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    ))}
                  </div>

                  {/* Bande décorative supérieure avec dégradé */}
                  <div className="h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600" />

                  <div className="p-6 flex-grow relative z-10">
                    {/* Header avec icône et prix */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Icône avec effet de glow */}
                      <motion.div
                        className="relative"
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 group-hover:border-blue-300 transition-colors">
                          <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                            {service.icon}
                          </div>
                        </div>
                      </motion.div>

                      {/* Badge prix stylé */}
                      <motion.div
                        className="text-right"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full shadow-lg">
                          <span className="block font-bold text-lg">
                            {service.price}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 mt-2 block bg-blue-50 px-3 py-1 rounded-full">
                          {service.duration}
                        </span>
                      </motion.div>
                    </div>

                    {/* Titre avec effet au survol */}
                    <motion.h3
                      className="font-heading text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {service.description.split("\n\n")[0]}
                    </p>
                  </div>

                  {/* Bouton avec effet moderne */}
                  <div className="mt-auto relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <button
                      onClick={() => setSelectedService(service)}
                      className="relative w-full py-4 text-blue-600 font-semibold hover:text-blue-700 transition-all flex items-center justify-center gap-2 border-t border-blue-100 group-hover:border-blue-300"
                    >
                      <span>Voir plus de détails</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <div className="relative inline-block">
              {/* Effet de glow en arrière-plan */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-lg opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.a
                href="sms:+33665553341"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-white/20 p-2 rounded-full"
                >
                  <PhoneIcon className="w-6 h-6" />
                </motion.div>
                <div className="text-left">
                  <span className="block text-sm font-medium opacity-90">
                    Réservation par SMS uniquement
                  </span>
                  <span className="block text-lg font-bold">
                    06.65.55.33.41
                  </span>
                </div>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-2xl"
                >
                  →
                </motion.span>
              </motion.a>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-gray-600 text-sm"
            >
              📱 Cliquez pour envoyer un SMS et réserver votre séance
            </motion.p>
          </motion.div>
        </div>
      </section>

      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold font-heading">
                  {selectedService.title}
                </h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="rounded-full h-10 w-10 flex items-center justify-center bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={selectedService.images[0]}
                      alt={selectedService.title}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 bg-blue-100 rounded-full text-blue-800 font-medium">
                      {selectedService.price}
                    </span>
                    <span className="px-4 py-1.5 bg-gray-100 rounded-full text-gray-800 text-sm">
                      {selectedService.duration}
                    </span>
                  </div>

                  <div className="prose max-w-none">
                    {selectedService.description
                      .split("\n\n")
                      .map((paragraph, i) => (
                        <p key={i} className="mb-4 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
