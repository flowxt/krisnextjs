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
import PatricePresentation from "../components/PatricePresentation";

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
      <PatricePresentation />

      <section className="py-20 bg-gradient-to-b from-blue-50 to-gray-100">
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
              className="inline-flex items-center gap-2 bg-blue-100 px-4 py-1.5 rounded-full mb-4"
            >
              <UserIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium text-sm">
                Services pour hommes
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold font-heading mb-3">
              Soins de <span className="text-blue-600">transformation</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {patriceServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="block text-blue-600 font-bold">
                        {service.price}
                      </span>
                      <span className="text-xs text-gray-500">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description.split("\n\n")[0]}
                  </p>
                </div>

                <div className="mt-auto border-t border-blue-50">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-4 text-blue-600 font-medium hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                  >
                    Voir plus de détails
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-full px-6 py-3"
            >
              <PhoneIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800">
                Réservation uniquement par SMS au 06.65.55.33.41
              </span>
            </motion.div>
          </div>
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
