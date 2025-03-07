"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const isPatrice = service.intervenant === "Patrice";
              const gradientColors = isPatrice
                ? [
                    "from-blue-500",
                    "via-blue-400",
                    "to-cyan-400",
                    "from-blue-600",
                    "to-cyan-600",
                    "bg-blue-50",
                  ]
                : [
                    "from-purple-500",
                    "via-fuchsia-400",
                    "to-indigo-400",
                    "from-purple-600",
                    "to-indigo-600",
                    "bg-purple-50",
                  ];

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.21, 1.11, 0.81, 0.99], // Effet de ressort élégant
                  }}
                  className={`relative ${
                    expandedId === service.id ? "md:col-span-2" : ""
                  }`}
                >
                  <motion.div
                    className={`relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500
            ${
              isPatrice
                ? "hover:shadow-blue-200/50"
                : "hover:shadow-purple-200/50"
            }`}
                    whileHover={{ y: -8 }}
                    layout
                  >
                    {/* Éléments décoratifs en arrière-plan */}
                    <div className="absolute inset-0 opacity-10 overflow-hidden">
                      <div
                        className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${gradientColors[0]} ${gradientColors[1]} ${gradientColors[2]} blur-3xl`}
                      ></div>
                      <div
                        className={`absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-gradient-to-br ${gradientColors[0]} ${gradientColors[2]} ${gradientColors[1]} blur-2xl`}
                      ></div>
                    </div>

                    {/* Pattern subtil */}
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                      }}
                    ></div>

                    {/* Bordure lumineuse */}
                    <div
                      className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700
              ${
                isPatrice
                  ? "group-hover:border-2 group-hover:border-blue-300/30"
                  : "group-hover:border-2 group-hover:border-purple-300/30"
              }`}
                    ></div>

                    <div
                      className="group p-8 cursor-pointer relative z-10"
                      onClick={() =>
                        setExpandedId(
                          expandedId === service.id ? null : service.id
                        )
                      }
                    >
                      <div className="flex items-start gap-6 relative">
                        {/* Icône avec animation */}
                        <motion.div
                          className={`relative p-5 rounded-2xl text-white shadow-lg overflow-hidden
                  bg-gradient-to-br ${gradientColors[0]} ${gradientColors[1]} ${gradientColors[2]}`}
                          initial={{ rotate: 0 }}
                          whileHover={{
                            rotate: [0, -5, 5, -3, 3, 0],
                            scale: 1.1,
                            transition: { duration: 0.5 },
                          }}
                        >
                          {/* Effet de brillance */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: "-100%", opacity: 0 }}
                            whileHover={{ x: "100%", opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                          />
                          <div className="relative z-10">{service.icon}</div>
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <motion.h3
                            className="text-base md:text-2xl font-bold text-gray-800 font-serif mb-2"
                            initial={{ lineHeight: "1.4" }}
                            whileHover={{ scale: 1.01 }}
                          >
                            {/* Effet de gradient au survol du titre */}
                            <motion.span
                              className={`inline-block bg-clip-text bg-gradient-to-r ${gradientColors[3]} ${gradientColors[4]}`}
                              whileHover={{
                                color: "transparent",
                                transition: { duration: 0.3 },
                              }}
                            >
                              {service.title}
                            </motion.span>
                          </motion.h3>

                          {/* Badge intervenant avec animation */}
                          <motion.span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3
                    ${
                      isPatrice
                        ? "bg-blue-100 text-blue-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                            whileHover={{
                              y: -3,
                              boxShadow: isPatrice
                                ? "0 4px 10px rgba(96, 165, 250, 0.3)"
                                : "0 4px 10px rgba(167, 139, 250, 0.3)",
                            }}
                          >
                            {service.intervenant}
                          </motion.span>

                          <div className="mt-4 flex flex-col space-y-3">
                            {/* Prix avec animation */}
                            <motion.span
                              className={`text-xl font-bold bg-gradient-to-r ${gradientColors[3]} ${gradientColors[4]} bg-clip-text text-transparent`}
                              whileHover={{
                                scale: 1.05,
                                textShadow: isPatrice
                                  ? "0 0 8px rgba(96, 165, 250, 0.3)"
                                  : "0 0 8px rgba(167, 139, 250, 0.3)",
                              }}
                            >
                              {service.price}
                            </motion.span>

                            {/* Badges durée et lieu avec animation */}
                            <div className="flex flex-wrap gap-2">
                              <motion.span
                                className={`text-sm font-medium px-3 py-1.5 rounded-full
                        ${
                          isPatrice
                            ? "text-blue-600 bg-blue-50"
                            : "text-purple-600 bg-purple-50"
                        }`}
                                whileHover={{ scale: 1.08 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                }}
                              >
                                <span className="relative inline-block mr-1">
                                  ⌛
                                </span>{" "}
                                {service.duration.split(" - ")[0]}
                              </motion.span>

                              <motion.span
                                className={`text-sm font-medium px-3 py-1.5 rounded-full
                        ${
                          isPatrice
                            ? "text-cyan-600 bg-cyan-50"
                            : "text-indigo-600 bg-indigo-50"
                        }`}
                                whileHover={{ scale: 1.08 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                }}
                              >
                                <span className="relative inline-block mr-1">
                                  📍
                                </span>{" "}
                                {service.duration.split(" - ")[1]}
                              </motion.span>
                            </div>
                          </div>
                        </div>

                        {/* Icône de flèche avec animation */}
                        <motion.div
                          className="relative"
                          animate={{
                            rotate: expandedId === service.id ? 180 : 0,
                            y: expandedId === service.id ? 3 : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <ChevronDownIcon
                            className={`w-8 h-8 
                    ${isPatrice ? "text-blue-600" : "text-purple-600"}`}
                          />

                          {/* Effet de halo autour de la flèche */}
                          <motion.div
                            className={`absolute inset-0 rounded-full -z-10
                    ${isPatrice ? "bg-blue-100" : "bg-purple-100"}`}
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.7, opacity: 0.5 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Contenu déplié */}
                      <AnimatePresence>
                        {expandedId === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              opacity: { duration: 0.4 },
                              height: { duration: 0.6 },
                            }}
                          >
                            <motion.div
                              className="mt-8 space-y-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.4 }}
                            >
                              {/* Description avec effet de mise en évidence */}
                              <motion.div
                                className="space-y-6 text-gray-700 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                              >
                                {service.description
                                  .split("\n")
                                  .map((paragraph, idx) => (
                                    <motion.div
                                      key={idx}
                                      className="flex items-start gap-3"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                        delay: 0.3 + idx * 0.05,
                                        duration: 0.5,
                                      }}
                                      whileHover={{
                                        x: paragraph.startsWith("✨") ? 5 : 0,
                                        transition: {
                                          type: "spring",
                                          stiffness: 300,
                                          damping: 20,
                                        },
                                      }}
                                    >
                                      {paragraph.startsWith("✨") ? (
                                        <>
                                          <motion.span
                                            className="text-xl"
                                            animate={{
                                              rotate: [0, 5, -5, 5, 0],
                                              scale: [1, 1.1, 1, 1.1, 1],
                                              color: [
                                                isPatrice
                                                  ? "#3b82f6"
                                                  : "#8b5cf6",
                                                isPatrice
                                                  ? "#60a5fa"
                                                  : "#a78bfa",
                                                isPatrice
                                                  ? "#3b82f6"
                                                  : "#8b5cf6",
                                              ],
                                            }}
                                            transition={{
                                              duration: 3,
                                              repeat: Infinity,
                                              repeatType: "reverse",
                                            }}
                                          >
                                            ✨
                                          </motion.span>
                                          <motion.p
                                            className="font-medium"
                                            whileHover={{
                                              color: isPatrice
                                                ? "#3b82f6"
                                                : "#8b5cf6",
                                              fontWeight: "600",
                                            }}
                                          >
                                            {paragraph.substring(2)}
                                          </motion.p>
                                        </>
                                      ) : (
                                        <motion.p
                                          whileHover={{ color: "#4b5563" }}
                                        >
                                          {paragraph}
                                        </motion.p>
                                      )}
                                    </motion.div>
                                  ))}
                              </motion.div>

                              {/* Images avec animations */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.images.map((img, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="relative group rounded-xl overflow-hidden shadow-lg"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                      delay: 0.4 + idx * 0.1,
                                      duration: 0.5,
                                    }}
                                    whileHover={{ scale: 1.03, zIndex: 10 }}
                                  >
                                    <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <Image
                                      src={img}
                                      alt={service.title}
                                      width={1200}
                                      height={800}
                                      className="object-cover w-full h-64 transform transition-transform duration-700 ease-out"
                                      style={{
                                        transformOrigin:
                                          idx === 0
                                            ? "left center"
                                            : "right center",
                                      }}
                                    />

                                    {/* Effet de brillance au survol */}
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                      initial={{ x: "-100%" }}
                                      whileHover={{ x: "100%" }}
                                      transition={{ duration: 1.5 }}
                                    />
                                  </motion.div>
                                ))}
                              </div>

                              {/* Bouton de réservation amélioré */}
                              <motion.button
                                onClick={() => {
                                  setSelectedService(service);
                                  setIsBookingModalOpen(true);
                                }}
                                className={`w-full py-5 relative overflow-hidden rounded-xl font-bold text-lg shadow-lg`}
                                whileHover={{
                                  scale: 1.02,
                                  boxShadow: isPatrice
                                    ? "0 20px 30px -10px rgba(96, 165, 250, 0.4)"
                                    : "0 20px 30px -10px rgba(167, 139, 250, 0.4)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                              >
                                {/* Fond animé du bouton */}
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-r ${gradientColors[3]} ${gradientColors[4]}`}
                                  animate={{
                                    background: isPatrice
                                      ? [
                                          "linear-gradient(90deg, #3b82f6, #0ea5e9)",
                                          "linear-gradient(180deg, #60a5fa, #22d3ee)",
                                          "linear-gradient(270deg, #3b82f6, #0ea5e9)",
                                          "linear-gradient(0deg, #60a5fa, #22d3ee)",
                                        ]
                                      : [
                                          "linear-gradient(90deg, #8b5cf6, #6366f1)",
                                          "linear-gradient(180deg, #a78bfa, #818cf8)",
                                          "linear-gradient(270deg, #8b5cf6, #6366f1)",
                                          "linear-gradient(0deg, #a78bfa, #818cf8)",
                                        ],
                                  }}
                                  transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                />

                                {/* Effet de brillance */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "100%" }}
                                  transition={{ duration: 1 }}
                                />

                                {/* Étoiles animées */}
                                <motion.div
                                  className="absolute left-[10%] top-1/2 -translate-y-1/2 text-lg"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                  }}
                                >
                                  ✨
                                </motion.div>

                                <motion.div
                                  className="absolute right-[10%] top-1/2 -translate-y-1/2 text-lg"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: 0.5,
                                  }}
                                >
                                  ✨
                                </motion.div>

                                {/* Texte du bouton */}
                                <span className="relative z-10 flex items-center justify-center gap-3 text-white">
                                  <span>Réserver cette séance</span>
                                  <motion.svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      repeatDelay: 1,
                                    }}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                  </motion.svg>
                                </span>
                              </motion.button>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
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
