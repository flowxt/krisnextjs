"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SparklesIcon,
  HeartIcon,
  UserIcon,
  LightBulbIcon,
  BrainIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import BookingModal from "../components/BookingModal";
import { StarIcon } from "@heroicons/react/24/solid";

export default function PatricePage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Service mis en avant - Force Intérieure
  const featuredService = {
    id: 18,
    title: "Force Intérieure & Renaissance Masculine",
    price: "100€",
    duration: "1h - Présentiel",
    icon: <UserIcon className="w-8 h-8" />,
    calendlyLink: "https://calendly.com/contact-krislavoixdesanges/force-interieure-et-renaissance",
    description: `Un espace dédié à la libération émotionnelle masculine, alliant olfactothérapie et zéro mental pour une transformation profonde.

✨ Libération émotionnelle masculine
✨ Approche holistique personnalisée
✨ Techniques d'olfactothérapie ciblées
✨ Pratique du zéro mental guidée

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
  };

  // Les autres services de Patrice
  const patriceServices = [
    {
      id: 13,
      title: "Soin Libre d'Être Soi",
      price: "180€",
      duration: "2h - Présentiel",
      icon: <SparklesIcon className="w-8 h-8" />,
      calendlyLink: "https://calendly.com/contact-krislavoixdesanges/libre-d-etre-soi",
      description: `𝙇'𝙐𝙡𝙩𝙞𝙢𝙚 𝙍𝙚𝙣𝙖𝙞𝙨𝙨𝙖𝙣𝙘𝙚 𝙙𝙚 𝙑𝙤𝙩𝙧𝙚 𝙀𝙨𝙨𝙚𝙣𝙘𝙚 𝙋𝙪𝙧𝙚

✨ Duo Zéro Mental + Soin 
✨ Séance Réalisée avec 2 thérapeutes
✨ Renaissance de Votre Essence Pure
✨ Intense connexion du Corps de l'Âme et de l'Esprit

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
      id: 19,
      title: "Zéro Mental",
      price: "100€",
      duration: "1h - Présentiel",
      icon: <LightBulbIcon className="w-8 h-8" />,
      calendlyLink: "https://calendly.com/contact-krislavoixdesanges/zero-mental",
      description: `𝑳'𝑨𝒖𝒃𝒆 𝒅'𝒖𝒏𝒆 𝑵𝒐𝒖𝒗𝒆𝒍𝒍𝒆 𝑪𝒐𝒏𝒔𝒄𝒊𝒆𝒏𝒄𝒆 𝑳𝒊𝒃𝒆́𝒓𝒆́𝒆

✨ Libération du mental limitant 
✨ Reconnexion à votre essence pure
✨ Transformation vibratoire profonde
✨ État de plénitude intérieure absolue

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
      id: 21,
      title: "Olfactothérapie",
      price: "100€",
      duration: "1h - Présentiel",
      icon: <SparklesIcon className="w-8 h-8" />,
      calendlyLink: "https://calendly.com/contact-krislavoixdesanges/olfactotherapie",
      description: `𝑳𝒂 𝑷𝒖𝒊𝒔𝒔𝒂𝒏𝒄𝒆 𝒅𝒆𝒔 𝑺𝒆𝒏𝒔 𝒑𝒐𝒖𝒓 𝒖𝒏𝒆 𝑳𝒊𝒃𝒆́𝒓𝒂𝒕𝒊𝒐𝒏 É𝒎𝒐𝒕𝒊𝒐𝒏𝒏𝒆𝒍𝒍𝒆

✨ Libération des émotions cristallisées
✨ Thérapie psycho-corporelle ciblée
✨ Transformation des schémas répétitifs
✨ Reconnexion sensorielle profonde

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
      <section className="relative min-h-[650px] md:min-h-[500px] md:h-[60vh] bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50 overflow-hidden pt-32 md:pt-0">
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

        <div className="relative z-10 h-full flex items-center justify-center px-4 py-12 md:py-8">
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
                className="inline-flex items-center gap-2 md:gap-3 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg mb-6 md:mb-8"
              >
                <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <span className="text-blue-800 font-semibold text-sm md:text-base">
                  Patrice Guffon - Thérapeute & Coach
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-4"
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
                className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4"
              >
                Un accompagnement unique alliant olfactothérapie et zéro mental
                pour retrouver votre état d'être aligné
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8 px-4"
              >
                <a
                  href="#services"
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Découvrir les soins
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

      {/* Section mise en avant - Force Intérieure */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-100 to-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-2 rounded-full mb-6 shadow-md"
            >
              <StarIcon className="w-5 h-5 text-amber-600" />
              <span className="text-amber-800 font-semibold text-sm">
                Séance Homme Exclusive
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-3 md:mb-4 px-4"
            >
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Force Intérieure
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4"
            >
              Un espace unique pour la libération émotionnelle masculine
            </motion.p>
          </motion.div>

          {/* Carte mise en avant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            {/* Effet de glow animé spécial */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-all duration-500"
              animate={{
                background: [
                  "linear-gradient(to right, #f59e0b, #ea580c, #f59e0b)",
                  "linear-gradient(to right, #ea580c, #f59e0b, #ea580c)",
                  "linear-gradient(to right, #f59e0b, #ea580c, #f59e0b)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200">
              {/* Bande décorative supérieure */}
              <div className="h-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Colonne gauche - Infos principales */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className="relative"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-md opacity-60" />
                        <div className="relative p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                          <UserIcon className="w-8 h-8 text-amber-600" />
                        </div>
                      </motion.div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {featuredService.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-bold text-lg">
                            {featuredService.price}
                          </span>
                          <span className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                            {featuredService.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="prose prose-sm max-w-none text-gray-600 mb-6">
                      {featuredService.description.split("\n\n").slice(0, 2).map((paragraph, i) => (
                        <p key={i} className="mb-3 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Points clés */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {["Libération émotionnelle", "Olfactothérapie", "Zéro Mental", "Espace sécurisant"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colonne droite - Image */}
                  <div className="md:w-1/3">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={featuredService.images[0]}
                        alt={featuredService.title}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-amber-100">
                  <button
                    onClick={() => setSelectedService(featuredService)}
                    className="flex-1 py-3 px-6 rounded-xl font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Voir tous les détails
                  </button>
                  <button
                    onClick={() => {
                      setSelectedService(featuredService);
                      setIsBookingModalOpen(true);
                    }}
                    className="flex-1 py-3 px-6 rounded-xl font-medium text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Réserver cette séance
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="py-12 md:py-20 bg-gradient-to-b from-blue-100 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-2 rounded-full mb-6 shadow-md"
            >
              <UserIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold text-sm">
                Tous les services
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-3 md:mb-4 px-4"
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
              className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4"
            >
              Des accompagnements personnalisés pour révéler votre plein
              potentiel
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

                  <div className="p-4 sm:p-6 flex-grow relative z-10">
                    {/* Header avec icône et prix */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
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
                        <div className="relative p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 group-hover:border-blue-300 transition-colors">
                          <div className="text-blue-600 group-hover:text-blue-700 transition-colors scale-90 sm:scale-100">
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
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                          <span className="block font-bold text-base sm:text-lg">
                            {service.price}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 mt-1.5 sm:mt-2 block bg-blue-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                          {service.duration}
                        </span>
                      </motion.div>
                    </div>

                    {/* Titre avec effet au survol */}
                    <motion.h3
                      className="font-heading text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                      {service.description.split("\n\n")[0]}
                    </p>
                  </div>

                  {/* Boutons d'action */}
                  <div className="mt-auto relative overflow-hidden border-t border-blue-100 group-hover:border-blue-300">
                    <div className="flex gap-2 p-3 sm:p-4">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Détails
                      </button>
                      <button
                        onClick={() => {
                          setSelectedService(service);
                          setIsBookingModalOpen(true);
                        }}
                        className="flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
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
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-2 sm:p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
          >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex justify-between items-start gap-4 mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-heading leading-tight flex-1">
                  {selectedService.title}
                </h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center bg-blue-50 hover:bg-blue-100 transition-colors flex-shrink-0"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-full md:w-1/3">
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

                <div className="w-full md:w-2/3">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-100 rounded-full text-blue-800 font-medium text-sm sm:text-base">
                      {selectedService.price}
                    </span>
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 rounded-full text-gray-800 text-xs sm:text-sm">
                      {selectedService.duration}
                    </span>
                  </div>

                  <div className="prose prose-sm sm:prose max-w-none">
                    {selectedService.description
                      .split("\n\n")
                      .map((paragraph, i) => (
                        <p
                          key={i}
                          className="mb-3 sm:mb-4 whitespace-pre-line text-sm sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex gap-4 justify-center">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 sm:px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium transition-colors"
                >
                  Fermer
                </button>
                <button
                  onClick={() => {
                    setIsBookingModalOpen(true);
                  }}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg text-white rounded-full font-medium transition-all flex items-center gap-2"
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
        </div>
      )}

      {/* Modal de réservation */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={selectedService}
      />
    </main>
  );
}
