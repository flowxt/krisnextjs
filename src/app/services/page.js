"use client";
import { useState, useEffect } from "react";
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
    title: 'Séance "Je me laisse guider"',
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
    id: 13,
    title: "Soin Libre d'Être Soi",
    price: "180€",
    duration: "2h - Présentiel",
    intervenant: "Kris & Patrice",
    icon: <SparklesIcon className="w-8 h-8" />,
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
  //   {
  //     id: 12,
  //     title: "Force Intérieure & Renaissance Masculine",
  //     price: "100€",
  //     duration: "1h - Présentiel",
  //     intervenant: "Patrice",
  //     icon: <UserIcon className="w-8 h-8" />, // Vous pouvez changer l'icône selon vos préférences
  //     description: `Un espace dédié à la libération émotionnelle masculine, alliant olfactothérapie et zéro mental pour une transformation profonde.

  // ✨ Libération émotionnelle masculine
  // ✨ Approche holistique personnalisée
  // ✨ Techniques d'olfactothérapie ciblées
  // ✨ Pratique du zéro mental guidée

  // RESERVATION PAR SMS UNIQUEMENT 06.65.55.33.41

  // Cette approche unique combine deux méthodes puissantes :

  // 1. Olfactothérapie - Le Pouvoir des Odeurs :
  // • Libération des blocages émotionnels
  // • Réveil des mémoires enfouies
  // • Reconnexion à soi par les sens

  // 2. Le Zéro Mental - L'Art du Lâcher-Prise :
  // • Atteindre un état de calme intérieur profond
  // • Se détacher des jugements limitants
  // • Développer la présence authentique à soi

  // Une approche entre hommes pour :
  // • Créer un espace sécurisant sans jugement
  // • Briser les tabous autour de la vulnérabilité masculine
  // • Développer une fraternité bienveillante

  // Bénéfices :
  // • Libération émotionnelle profonde
  // • Clarté mentale retrouvée
  // • Légèreté intérieure et sérénité

  // Cette méthode offre une voie unique pour reconnecter corps, esprit et émotions dans un cadre spécialement conçu pour les hommes en quête d'authenticité et de transformation.`,
  //     images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  //   },
  //   {
  //     id: 13,
  //     title: "Soin Libre d'Être Soi",
  //     price: "180€",
  //     duration: "2h - Présentiel",
  //     intervenant: "Patrice",
  //     icon: <SparklesIcon className="w-8 h-8" />,
  //     description: `𝙇'𝙐𝙡𝙩𝙞𝙢𝙚 𝙍𝙚𝙣𝙖𝙞𝙨𝙨𝙖𝙣𝙘𝙚 𝙙𝙚 𝙑𝙤𝙩𝙧𝙚 𝙀𝙨𝙨𝙚𝙣𝙘𝙚 𝙋𝙪𝙧𝙚

  // ✨ Duo Zéro Mental + Soin
  // ✨ Séance Réalisée avec 2 thérapeutes
  // ✨ Renaissance de Votre Essence Pure
  // ✨ Intense connexion du Corps de l'Âme et de l'Esprit

  // RESERVATION PAR SMS UNIQUEMENT 06.65.55.33.41

  // Imaginez un sanctuaire vibratoire conçu pour briser les chaînes des schémas limitants et des souffrances anciennes qui entravent votre libération.

  // C'est la séance audacieuse du "Soin Libre d'Être Soi", une expérience immersive qui conjugue le lâcher-prise absolu du Zéro Mental à la profonde reconnexion vibratoire du Soin Énergétique.

  // Ce que cette séance vous apporte :
  // • Libération des schémas limitants
  // • Reconnexion à votre essence profonde
  // • Double accompagnement expert
  // • Transformation vibratoire complète

  // Le processus de transformation :
  // • Démantèlement des prisons mentales
  // • Libération des traumatismes
  // • Harmonisation énergétique profonde
  // • Renaissance de votre lumière essentielle

  // Une fusion experte de deux thérapeutes œuvrera en parfaite symbiose pour une transformation totale et durable.

  // Libre d'être Soi dans toute sa gloire, telle est la promesse de cette expérience transformatrice à l'état pur !`,
  //     images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
  //   },
  //   {
  //     id: 14,
  //     title: "Zero Mental",
  //     price: "100€",
  //     duration: "1h - Présentiel",
  //     intervenant: "Patrice",
  //     icon: <SparklesIcon className="w-8 h-8" />,
  //     description: `𝑳'𝑨𝒖𝒃𝒆 𝒅'𝒖𝒏𝒆 𝑵𝒐𝒖𝒗𝒆𝒍𝒍𝒆 𝑪𝒐𝒏𝒔𝒄𝒊𝒆𝒏𝒄𝒆 𝑳𝒊𝒃𝒆́𝒓𝒆́𝒆

  // ✨ Libération du mental limitant
  // ✨ Reconnexion à votre essence pure
  // ✨ Transformation vibratoire profonde
  // ✨ État de plénitude intérieure absolue

  // RESERVATION PAR SMS UNIQUEMENT 06.65.55.33.41

  // 𝑽𝒐𝒖𝒔 𝒍'𝒂𝒗𝒆𝒛 𝒅𝒆́𝒋𝒂̀ 𝒈𝒐𝒖̂𝒕𝒆́ 𝒑𝒂𝒓 𝒃𝒓𝒊𝒃𝒆𝒔, ce sentiment exaltant de plénitude intérieure, tel un parfum d'éternité flottant dans l'air, avant de le voir se dissiper aussi vite dans le tumulte du quotidien.

  // Aujourd'hui, transformez cet état éphémère en votre nouvel étalon, votre fréquence vibratoire naturelle et immuable. Faites de ce moment rare une Demeure pérenne, baignée des rayons d'une Lumière céleste.

  // 𝑳𝒆 𝒁𝒆́𝒓𝒐 𝑴𝒆𝒏𝒕𝒂𝒍 est ce levier de puissante alchimie intérieure qui vous permettra d'accéder à ce royaume de sérénité ineffable.

  // Ce que cette séance vous apporte :
  // • Libération des pensées limitantes
  // • Accès à un état de conscience élargi
  // • Reconnexion à votre essence véritable
  // • Transformation vibratoire profonde

  // Le processus de transformation :
  // • Démantèlement des schémas mentaux limitants
  // • Libération des conditionnements
  // • Ouverture à une conscience élargie
  // • Accès à votre potentiel illimité

  // 𝑰𝒍 𝒏'𝒚 𝒂𝒖𝒓𝒂 𝒑𝒍𝒖𝒔 𝒅𝒆 𝒒𝒖𝒆̂𝒕𝒆 𝒂̀ 𝒎𝒆𝒏𝒆𝒓, mais un état d'être à savourer dans la reconnexion totale avec l'étincelle divine qui brûle en vous depuis toujours.

  // Le Zéro Mental, clé ouvrant les portes d'une Nouvelle Conscience libérée des chaînes du mental limitant. L'entrée glorieuse dans le Royaume de votre Moi essentiel !`,
  //     images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
  //   },
  //   {
  //     id: 15,
  //     title: "Olfactothérapie",
  //     price: "100€",
  //     duration: "1h - Présentiel",
  //     intervenant: "Patrice",
  //     icon: <SparklesIcon className="w-8 h-8" />,
  //     description: `𝑳𝒂 𝑷𝒖𝒊𝒔𝒔𝒂𝒏𝒄𝒆 𝒅𝒆𝒔 𝑺𝒆𝒏𝒔 𝒑𝒐𝒖𝒓 𝒖𝒏𝒆 𝑳𝒊𝒃𝒆́𝒓𝒂𝒕𝒊𝒐𝒏 É𝒎𝒐𝒕𝒊𝒐𝒏𝒏𝒆𝒍𝒍𝒆

  // ✨ Libération des émotions cristallisées
  // ✨ Thérapie psycho-corporelle ciblée
  // ✨ Transformation des schémas répétitifs
  // ✨ Reconnexion sensorielle profonde

  // RESERVATION PAR SMS UNIQUEMENT 06.65.55.33.41

  // L'olfacto-thérapie utilise la puissance évocatrice des odeurs pour accéder à vos mémoires émotionnelles les plus profondes et libérer les blocages ancrés dans votre corps.

  // Ce que cette séance vous apporte :
  // • Libération des traumatismes émotionnels
  // • Transformation des schémas limitants
  // • Reconnexion à vos ressources intérieures
  // • Harmonisation corps-esprit

  // Le processus de transformation :
  // • Exploration olfactive guidée
  // • Identification des nœuds émotionnels
  // • Libération par les essences naturelles
  // • Ancrage des nouveaux schémas positifs

  // 𝑳𝒂 𝒑𝒖𝒊𝒔𝒔𝒂𝒏𝒄𝒆 𝒅𝒆𝒔 𝒐𝒅𝒆𝒖𝒓𝒔 permet un accès direct à la mémoire émotionnelle, créant un pont entre conscient et inconscient. Les fragrances soigneusement sélectionnées deviennent les clés qui ouvrent les portes de votre guérison.

  // 𝑪𝒉𝒂𝒒𝒖𝒆 𝒔𝒆́𝒂𝒏𝒄𝒆 𝒆𝒔𝒕 𝒖𝒏 𝒗𝒐𝒚𝒂𝒈𝒆 𝒖𝒏𝒊𝒒𝒖𝒆 𝒂𝒖 𝒄œ𝒖𝒓 𝒅𝒆 𝒗𝒐𝒔 𝒔𝒆𝒏𝒔𝒂𝒕𝒊𝒐𝒏𝒔, une exploration guidée vers une liberté émotionnelle retrouvée.`,
  //     images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"],
  //   },

  // Ajouter les autres services de la même manière
];

export default function Services() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [visibleItems, setVisibleItems] = useState(6);

  // Optimisation: Charger plus d'éléments au défilement
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000
      ) {
        setVisibleItems((prev) => Math.min(prev + 4, services.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ouvrir la modale de détails
  const openDetailsModal = (service) => {
    setSelectedService(service);
    setIsDetailsModalOpen(true);
  };

  // Ouvrir la modale de réservation
  const openBookingModal = (service) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* En-tête simplifié */}
          <div className="text-center mb-16">
            <h2 className="font-heading mt-11 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span>
                Mes Services{" "}
                <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-2 inline-block">
                  Énergétiques
                </span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Découvrez une gamme de{" "}
              <span className="font-semibold text-purple-600">
                soins personnalisés
              </span>{" "}
              pour harmoniser votre{" "}
              <span className="font-semibold text-indigo-600">
                corps, cœur et esprit
              </span>
            </p>
          </div>

          {/* Grille de services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, visibleItems).map((service, index) => {
              const isPatrice = service.intervenant === "Patrice";
              const mainColor = isPatrice ? "blue" : "purple";
              const secondaryColor = isPatrice ? "cyan" : "indigo";

              return (
                <div
                  key={service.id}
                  className="relative opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div
                    className={`relative h-full rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2
                    ${
                      isPatrice
                        ? "hover:shadow-blue-200/30"
                        : "hover:shadow-purple-200/30"
                    }`}
                  >
                    {/* Élément décoratif */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-${mainColor}-500 to-${secondaryColor}-400`}
                      ></div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="p-8 relative z-10 flex flex-col h-full">
                      <div className="flex items-start gap-6 relative">
                        {/* Icône */}
                        <div
                          className={`p-5 rounded-2xl text-white shadow-md overflow-hidden
                          bg-gradient-to-br from-${mainColor}-500 to-${secondaryColor}-400`}
                        >
                          <div className="relative z-10">{service.icon}</div>
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Titre */}
                          <h3 className="text-base md:text-xl font-bold text-gray-800 font-heading mb-2">
                            <span
                              className={`bg-clip-text text-${mainColor}-600`}
                            >
                              {service.title}
                            </span>
                          </h3>

                          {/* Badge intervenant */}
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3
                            ${
                              isPatrice
                                ? "bg-blue-100 text-blue-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {service.intervenant}
                          </span>
                        </div>
                      </div>

                      {/* Prix et badges */}
                      <div className="mt-4 flex flex-col space-y-3">
                        {/* Prix */}
                        <span
                          className={`text-xl font-bold text-${mainColor}-600`}
                        >
                          {service.price}
                        </span>

                        {/* Badges simplifiés */}
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`text-sm font-medium px-3 py-1.5 rounded-full
                            ${
                              isPatrice
                                ? "text-blue-600 bg-blue-50"
                                : "text-purple-600 bg-purple-50"
                            }`}
                          >
                            <span className="inline-block mr-1">⌛</span>{" "}
                            {service.duration.split(" - ")[0]}
                          </span>

                          <span
                            className={`text-sm font-medium px-3 py-1.5 rounded-full
                            ${
                              isPatrice
                                ? "text-cyan-600 bg-cyan-50"
                                : "text-indigo-600 bg-indigo-50"
                            }`}
                          >
                            <span className="inline-block mr-1">📍</span>{" "}
                            {service.duration.split(" - ")[1]}
                          </span>
                        </div>
                      </div>

                      {/* Aperçu de description */}
                      <div className="mt-6 mb-6">
                        <p className="text-gray-600 line-clamp-3">
                          {service.description.split("\n")[0]}
                        </p>
                      </div>

                      {/* Boutons d'action */}
                      <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => openDetailsModal(service)}
                          className={`flex-1 py-3 px-4 rounded-xl font-medium bg-${mainColor}-50 text-${mainColor}-600 
            hover:bg-${mainColor}-100 hover:shadow-md hover:-translate-y-0.5 
            active:translate-y-0 active:shadow-sm
            transition-all duration-200`}
                        >
                          <span className="flex items-center justify-center gap-2">
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
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            En savoir plus
                          </span>
                        </button>
                        <button
                          onClick={() => openBookingModal(service)}
                          className={`flex-1 py-3 px-4 rounded-xl font-medium text-white 
            bg-gradient-to-r from-${mainColor}-600 to-${secondaryColor}-600 
            hover:shadow-lg hover:shadow-${mainColor}-200/50 hover:-translate-y-0.5 
            active:translate-y-0 active:shadow-sm
            transition-all duration-200`}
                        >
                          <span className="flex items-center justify-center gap-2">
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
                              ></path>
                            </svg>
                            Réserver
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full">
        <Cta page="services" />
      </div>

      {/* Modal de détails du service */}
      <AnimatePresence>
        {isDetailsModalOpen && selectedService && (
          <ServiceDetailsModal
            service={selectedService}
            onClose={() => setIsDetailsModalOpen(false)}
            onBooking={() => {
              setIsDetailsModalOpen(false);
              setTimeout(() => setIsBookingModalOpen(true), 300);
            }}
          />
        )}
      </AnimatePresence>

      {/* Modal de réservation */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={selectedService}
      />
    </>
  );
}

// Nouveau composant pour la modale de détails
function ServiceDetailsModal({ service, onClose, onBooking }) {
  const isPatrice = service.intervenant === "Patrice";
  const mainColor = isPatrice ? "blue" : "purple";
  const secondaryColor = isPatrice ? "cyan" : "indigo";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden relative z-10"
        >
          {/* Entête de la modale */}
          <div
            className={`px-6 py-4 border-b border-gray-200 bg-${mainColor}-50 flex items-center justify-between`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl bg-${mainColor}-100 text-${mainColor}-600`}
              >
                {service.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h2>
                <p className={`text-${mainColor}-700 font-medium`}>
                  {service.price} · {service.duration}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Corps de la modale */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {/* Description */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {service.description.split("\n").map((paragraph, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {paragraph.startsWith("✨") ? (
                    <>
                      <span className="text-xl">✨</span>
                      <p className={`font-medium text-${mainColor}-700`}>
                        {paragraph.substring(2)}
                      </p>
                    </>
                  ) : (
                    <p>{paragraph}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Images */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={img}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pied de la modale */}
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={onBooking}
              className={`py-3 px-6 rounded-xl font-medium text-white 
          bg-gradient-to-r from-${mainColor}-600 to-${secondaryColor}-600 
          hover:shadow-lg hover:shadow-${mainColor}-200/50 hover:-translate-y-0.5 
          active:translate-y-0 active:shadow-sm
          transition-all duration-200`}
            >
              <span className="flex items-center justify-center gap-2">
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
                  ></path>
                </svg>
                Réserver cette séance
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
