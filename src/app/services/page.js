"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  SparklesIcon,
  HeartIcon,
  UserIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  GiftIcon,
  SunIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Cta from "../components/Cta";
import BookingModal from "../components/BookingModal";

const services = [
  {
    id: 1,
    title: "Séance Énergétique Adulte",
    price: "100€",
    duration: "1h - Présentiel/Distance",
    intervenant: "Kris",
    icon: <SparklesIcon className="w-8 h-8" />,
    description: `Une invitation au retour à l'essentiel, à l'écoute de ce doux murmure de votre âme.

Faites confiance à vos élans vibratoires et laissez-vous guider dans un espace de lâcher-prise où l'essentiel se révèle.

Ce que cette séance vous offre :
✨ Libération des entraves énergétiques
✨ Harmonisation corps-esprit
✨ Libération émotionnelle profonde
✨ Voyage vers la paix intérieure

À l'écoute des signaux subtils de votre être, je vous accompagne dans un processus unique et personnalisé, adapté à vos besoins les plus profonds.

Si vous ressentez cet appel intérieur, c'est que votre être est prêt pour cette transformation. Ensemble, découvrons ce qui est juste pour vous.`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
  },

  // Carte 2
  {
    id: 2,
    title: "Séance Enfant (4-12 ans)",
    price: "80€",
    duration: "1h - Présentiel",
    intervenant: "Kris",
    icon: <UserIcon className="w-8 h-8" />,
    description: `Les enfants, naturellement réceptifs aux énergies, bénéficient particulièrement des soins adaptés à leur sensibilité unique.

Dans un espace de douceur et de sécurité, votre enfant découvre un chemin vers l'apaisement et l'épanouissement.

Ce que cette séance offre :
✨ Harmonisation énergétique douce
✨ Rééquilibrage des émotions
✨ Apaisement du sommeil
✨ Renforcement de la confiance

Chaque séance respecte le rythme de votre enfant, permettant à son énergie vitale de circuler librement pour un développement harmonieux et serein.`,
    images: ["/photo/IMG_8970.JPG", "/photo/IMG_8969.JPG"],
  },

  // Carte 3
  {
    id: 3,
    title: "Séance Enfant (3 mois à 3 ans)",
    price: "45€",
    duration: "30min - Présentiel",
    intervenant: "Kris",
    icon: <UserIcon className="w-8 h-8" />,
    description: `Une Bulle de Douceur pour l'Épanouissement de Bébé

Dans un environnement apaisant spécialement conçu, nous créons une véritable bulle de douceur pour chouchouter votre tout-petit.

✨ Harmonisation des flux vitaux
✨ Apaisement des tensions
✨ Amélioration du sommeil
✨ Éveil serein et équilibré

Votre bébé se laissera porter par des énergies bienfaisantes qui agissent en profondeur, rééquilibrant ses flux et dissipant ses petites tensions.

Les bienfaits :
• Sommeil plus serein et réparateur
• Énergie qui circule en toute fluidité
• Développement harmonieux
• Paix intérieure naturelle

N'oubliez pas doudou et tétine pour un moment de pure douceur.`,
    images: ["/photo/IMG_8966.JPG", "/photo/IMG_8965.JPG"],
  },
  //Carte 4
  {
    id: 4,
    title: "Guidance à la Question",
    price: "à partir de 20€",
    duration: "Reponse sous 3j - Distanciel uniquement",
    intervenant: "Kris",
    icon: <QuestionMarkCircleIcon className="w-8 h-8" />,
    description: `À chaque carrefour de votre vie, offrez-vous une guidance précise pour éclairer votre chemin.

✨ Réponse claire par OUI ou NON
✨ Message vocal personnalisé
✨ Précisions et conseils inclus
✨ Réponse sous 3 jours maximum*

Formules disponibles :
• 1 question : 20€
• 2 questions : 30€
• 3 questions : 40€

Cette consultation ciblée apporte une clarté immédiate, comme un phare dissipant la brume de vos doutes.

Modalités pratiques :
• Contact via WhatsApp : 06 65 55 33 41
• Règlement préalable obligatoire
• Délai de réponse : 3 jours maximum*
• Message vocal personnalisé

* Hors week-end et jours fériés`,
    images: ["/photo/IMG_8962.JPG", "/photo/IMG_8963.JPG"],
  },
  //Carte 5
  {
    id: 5,
    title: "Nettoyage Énergétique du Foyer",
    price: "à partir de 250€",
    duration: "3h minimum - Présentiel",
    intervenant: "Kris",
    icon: <HomeIcon className="w-8 h-8" />,
    description: `L'harmonisation de votre espace de vie est fondamentale pour votre bien-être. Un foyer énergétiquement sain est la base d'une vie équilibrée.

✨ Nettoyage énergétique approfondi
✨ Purification des espaces chargés
✨ Harmonisation vibratoire complète
✨ Passage d'âme si nécessaire

Chaque intervention est unique et adaptée aux besoins spécifiques de votre lieu de vie. Le processus comprend une analyse approfondie des zones perturbées, l'application de techniques ancestrales de purification, et l'ancrage final des énergies positives.

Cette transformation crée un espace de vie plus léger et harmonieux, avec une nouvelle dynamique énergétique bénéfique et durable.

* Le tarif et la durée varient selon la surface à traiter et l'intensité énergétique requise. Une évaluation précise sera établie lors de notre premier échange.`,
    images: ["/photo/IMG_8961.JPG", "/photo/IMG_8960.JPG"],
  },
  {
    id: 6,
    title: "Contact Défunt",
    price: "100€",
    duration: "1h - Préférence Présentiel",
    intervenant: "Kris",
    icon: <HeartIcon className="w-8 h-8" />,
    description: `Un moment sacré pour renouer avec ceux qui nous ont quittés et apaiser votre cœur dans votre processus de deuil.
  
✨ Connexion spirituelle respectueuse
✨ Accompagnement bienveillant
✨ Messages et échanges authentiques
✨ Espace d'écoute et de guérison

Le contact avec les défunts s'appuie sur une approche respectueuse et éthique :
• Les défunts viennent d'eux-mêmes, sans être dérangés
• Parfois, un autre défunt peut se manifester
• Venez sans attentes spécifiques
• Laissez-vous porter par l'instant présent

Pour optimiser la connexion :
• Photo du défunt nécessaire
• Date de décès pour un canal plus précis
• Démarche qui doit être un choix réfléchi

Important :
Pour toute séance en distanciel, règlement minimum 48h avant la prestation.

* Un moment unique pour avancer sur le chemin du deuil, dans le respect et la bienveillance. ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer par les images appropriées
  },
  {
    id: 7,
    title: "Carte Cadeau Soin Énergétique",
    price: "100€",
    duration: "1h - Présentiel/Distance",
    intervenant: "Kris",
    icon: <GiftIcon className="w-8 h-8" />,
    description: `Offrez un moment de sérénité à un être cher avec ce cadeau unique qui touche l'âme et le cœur.
  
✨ Soin énergétique personnalisé
✨ Bon cadeau nominatif élégant
✨ Validité d'un an
✨ Envoi par mail ou courrier

Le bon cadeau comprend :
• Une séance énergétique complète d'1h
• Un message personnalisé de votre part
• La flexibilité du présentiel ou distanciel

Modalités pratiques :
• Envoi dès réception du règlement
• Choix d'envoi par mail ou courrier postal
• Personnalisation de votre message
• Valable 1 an à partir de l'émission

* Un présent précieux offrant un véritable moment de reconnexion et de profond ressourcement. ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  },
  {
    id: 8,
    title: "Soin Énergétique Personnalisé",
    price: "100€",
    duration: "1h - Présentiel/Distance",
    intervenant: "Kris",
    icon: <SparklesIcon className="w-8 h-8" />,
    description: `Un Océan de Sérénité à Votre Portée
  
✨ Vos Besoins, Votre Soin
✨ Retrouver équilibre, bien-être et apaisement
✨ Une expérience sur-mesure unique
✨ Un accompagnement personnalisé

Imaginez une vague apaisante vous enveloppant de ses flots bienfaisants, harmonisant l'ensemble de vos flux vitaux et effaçant toute trace de fatigue, de stress ou de dysfonctionnements.

C'est la promesse du Soin Énergétique Personnalisé, une expérience sur-mesure répondant avec justesse aux appels profonds de votre corps et de votre âme.

Les outils à votre service :
• Bols Tibétains pour une détente absolue
• Battements chamaniques des tambours anciens
• Libération des blocages énergétiques
• Protection et harmonisation de votre aura

Chaque séquence vibratoire est ciselée avec précision pour répondre aux besoins spécifiques révélés par votre aura, permettant libération et guérison des blessures émotionnelles ou physiques.

Important :
Pour toute séance en distanciel, règlement minimum 48h avant la prestation.

* Laissez-vous porter par cette vague de plénitude qui redéfinira votre existence dans sa forme la plus rayonnante. ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  },
  {
    id: 9,
    title: "Guidance 1h30",
    price: "120€",
    duration: "1h30 - Présentiel/Distance",
    intervenant: "Kris",
    icon: <SunIcon className="w-8 h-8" />,
    description: `Ouvrez les Portes de Votre Destinée pour éclairer votre chemin de vie et vos choix.
  
✨ Guidance personnalisée approfondie
✨ Éclairage sur vos questionnements
✨ Accompagnement bienveillant
✨ Connexion à votre intuition
  
Tel un explorateur dans la jungle de la vie, vous pouvez parfois vous sentir perdu. C'est là qu'intervient la guidance spirituelle, véritable phare dans la brume !
  
Ce que vous découvrirez :
• Une nouvelle perspective sur vos situations
• Des réponses claires à vos questions
• Des pistes concrètes d'évolution
• Une reconnexion profonde avec vous-même
  
La guidance spirituelle c'est :
• Un moment privilégié pour faire le point
• Une écoute profonde et bienveillante
• Des conseils inspirés et pratiques
• Un éclairage nouveau sur votre chemin
  
Cette séance vous permettra de :
• Clarifier vos choix de vie
• Comprendre les messages de l'univers
• Retrouver confiance en votre intuition
• Avancer avec plus de sérénité
  
Important :
Pour toute séance en distanciel (via WhatsApp), règlement minimum 48h avant la prestation.
  
* Comme une lampe dans la nuit, laissez la guidance illuminer votre chemin ! ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  },
  {
    id: 10,
    title: "Guidance 1h",
    price: "80€",
    duration: "1h - Présentiel/Distance",
    intervenant: "Kris",
    icon: <LightBulbIcon className="w-8 h-8" />,
    description: `Ouvrez les Portes de Votre Destinée pour éclairer votre chemin de vie.
  
✨ Guidance intuitive personnalisée
✨ Éclairage sur vos questionnements
✨ Accompagnement et écoute profonde
✨ Reconnexion à votre essence

Guidance en présentiel ou visio via Whatsapp
MERCI DE L'INDIQUER DANS LE FORMULAIRE

Tel un explorateur dans la jungle de la vie parfois déroutante, laissez la guidance spirituelle devenir votre boussole pour retrouver votre chemin.

Ce que cette séance vous offre :
• Une écoute attentive de vos questions
• Des réponses guidées par l'intuition
• Des conseils pratiques pour avancer
• Une clarté nouvelle sur votre situation

Cette guidance vous aide à :
• Retrouver confiance en votre intuition
• Éclaircir vos choix de vie
• Avancer avec plus de sérénité
• Reconnecter avec votre sagesse intérieure

Important :
Pour toute séance en distanciel (WhatsApp), règlement 48h minimum avant la prestation.

* Comme une lampe dans la nuit, laissez la guidance éclairer votre chemin ! ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  },
  {
    id: 11,
    title: "Guidance 45min",
    price: "60€",
    duration: "45min - Présentiel/Distance",
    intervenant: "Kris",
    icon: <LightBulbIcon className="w-8 h-8" />,
    description: `Ouvrez les Portes de Votre Destinée pour éclairer votre chemin de vie.
  
✨ Guidance intuitive ciblée
✨ Éclairage sur vos questionnements
✨ Accompagnement et écoute attentive
✨ Reconnexion essentielle

Guidance en présentiel ou visio via Whatsapp
MERCI DE L'INDIQUER DANS LE FORMULAIRE

Tel un explorateur dans la jungle de la vie, parfois le chemin semble embrouillé. La guidance spirituelle devient votre boussole précieuse pour retrouver votre direction.

Ce que cette séance vous offre :
• Une écoute attentive de vos questions
• Des réponses guidées par l'intuition
• Des conseils pratiques pour avancer
• Une reconnexion à votre sagesse intérieure

Cette guidance vous permet de :
• Retrouver confiance en votre intuition
• Éclaircir vos choix de vie
• Avancer avec plus de sérénité
• Développer votre clarté intérieure

Important :
Pour toute séance en distanciel (WhatsApp), règlement 48h minimum avant la prestation.

* Comme une lampe dans la nuit, laissez la guidance éclairer votre chemin ! ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
  },
  {
    id: 12,
    title: "Force Intérieure & Renaissance Masculine",
    price: "100€",
    duration: "1h - Présentiel",
    intervenant: "Patrice",
    icon: <UserIcon className="w-8 h-8" />, // Vous pouvez changer l'icône selon vos préférences
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
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  },
  {
    id: 13,
    title: "Soin Libre d'Être Soi",
    price: "180€",
    duration: "2h - Présentiel",
    intervenant: "Patrice",
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
    id: 14,
    title: "Zero Mental",
    price: "100€",
    duration: "1h - Présentiel",
    intervenant: "Patrice",
    icon: <SparklesIcon className="w-8 h-8" />,
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
    id: 15,
    title: "Olfactothérapie",
    price: "100€",
    duration: "1h - Présentiel",
    intervenant: "Patrice",
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

  // Ajouter les autres services de la même manière
];

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative overflow-hidden"
          >
            <h2 className="mt-11 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative inline-block px-4">
              <span className="relative z-10">
                Mes Services{" "}
                <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-2 inline-block">
                  Énergétiques
                </span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10 px-4">
              Découvrez une gamme de{" "}
              <span className="font-semibold text-purple-600">
                soins personnalisés
              </span>{" "}
              pour harmoniser votre{" "}
              <span className="font-semibold text-indigo-600">
                corps, cœur et esprit
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative ${
                  service.intervenant === "Patrice"
                    ? "bg-gradient-to-br from-white to-blue-50"
                    : "bg-gradient-to-br from-white to-purple-50"
                } rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  expandedId === service.id ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className="p-8 cursor-pointer"
                  onClick={() =>
                    setExpandedId(expandedId === service.id ? null : service.id)
                  }
                >
                  <div className="flex items-start gap-6">
                    {/* Icône avec dégradé selon l'intervenant */}
                    <div
                      className={`p-4 ${
                        service.intervenant === "Patrice"
                          ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                          : "bg-gradient-to-br from-purple-500 to-indigo-500"
                      } rounded-2xl text-white shadow-lg`}
                    >
                      {service.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-2xl font-bold text-gray-800 font-serif truncate-2-lines">
                        {service.title}
                      </h3>

                      {/* Badge intervenant */}
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          service.intervenant === "Patrice"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {service.intervenant}
                      </span>

                      <div className="mt-4 flex flex-col space-y-2">
                        <span
                          className={`text-xl font-bold bg-gradient-to-r ${
                            service.intervenant === "Patrice"
                              ? "from-blue-600 to-cyan-600"
                              : "from-purple-600 to-indigo-600"
                          } bg-clip-text text-transparent`}
                        >
                          {service.price}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`text-sm font-medium ${
                              service.intervenant === "Patrice"
                                ? "text-blue-600 bg-blue-50"
                                : "text-purple-600 bg-purple-50"
                            } px-3 py-1.5 rounded-full`}
                          >
                            ⌛ {service.duration.split(" - ")[0]}
                          </span>
                          <span
                            className={`text-sm font-medium ${
                              service.intervenant === "Patrice"
                                ? "text-cyan-600 bg-cyan-50"
                                : "text-indigo-600 bg-indigo-50"
                            } px-3 py-1.5 rounded-full`}
                          >
                            📍 {service.duration.split(" - ")[1]}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ChevronDownIcon
                      className={`w-8 h-8 ${
                        service.intervenant === "Patrice"
                          ? "text-blue-600"
                          : "text-purple-600"
                      } transform transition-transform ${
                        expandedId === service.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {expandedId === service.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-8 space-y-8"
                    >
                      <div className="space-y-6 text-gray-700 leading-relaxed">
                        {service.description
                          .split("\n")
                          .map((paragraph, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              {paragraph.startsWith("✨") ? (
                                <>
                                  <span className="text-xl">✨</span>
                                  <p className="font-medium">
                                    {paragraph.substring(2)}
                                  </p>
                                </>
                              ) : (
                                <p>{paragraph}</p>
                              )}
                            </div>
                          ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative group rounded-xl overflow-hidden shadow-lg"
                          >
                            <Image
                              src={img}
                              alt={service.title}
                              width={1200}
                              height={800}
                              className="object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => {
                          setSelectedService(service);
                          setIsBookingModalOpen(true);
                        }}
                        className={`w-full py-4 bg-gradient-to-r ${
                          service.intervenant === "Patrice"
                            ? "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                            : "from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        } text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl`}
                      >
                        🌟 Réserver cette séance
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <Cta page="services" />
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={selectedService}
      />
    </>
  );
}
