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
    description: `Vous ressentez cet appel intérieur, ce doux murmure de votre âme qui vous invite à un retour à l’essentiel ? Une reconnexion, un souffle nouveau, un besoin de vous ressourcer profondément ?

Même si les raisons vous échappent encore, faites confiance à ces élans vibratoires qui ne trompent jamais. Ils sont les messagers d’une transformation en devenir. Cette séance intuitive est une invitation à lâcher prise, à déposer le mental et ses questionnements pour vous abandonner pleinement au moment présent.

C’est dans l’espace du lâcher-prise que l’essentiel se révèle.

Lors de notre rencontre, je serai à l’écoute des signaux subtils de votre être. Grâce à une connexion profonde et une sensibilité intuitive, je vous guiderai vers ce qui résonne le mieux pour vous à cet instant.

✨ Un soin énergétique pour libérer ce qui entrave votre équilibre
✨ Une harmonisation pour réaligner votre corps et votre esprit
✨ Une libération émotionnelle pour ouvrir un nouveau chemin
✨ Un voyage vers le Zéro Mental pour une paix intérieure absolue

Chaque séance est unique et s’adapte à vos besoins profonds, même ceux que vous n’avez pas encore identifiés. Ce moment sera un espace de renaissance, de ressourcement et d’alignement avec votre fréquence vibratoire essentielle.

Si vous ressentez cet appel, c’est qu’il est temps. Il vous suffit d’ouvrir la porte… et de laisser l’univers vous guider.

Nous découvrirons ensemble ce qui est juste pour vous, en toute confiance. ✨`,
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
    description: `Les enfants sont naturellement réceptifs aux énergies qui les entourent. Leur sensibilité innée en fait des êtres particulièrement disposés aux soins énergétiques.

Durant cette séance adaptée, nous créons un espace de douceur et de sécurité où votre enfant peut naturellement s'apaiser et s'épanouir.

✨ Harmonisation énergétique douce
✨ Rééquilibrage des émotions
✨ Apaisement du sommeil
✨ Renforcement de la confiance

Chaque séance est une expérience unique, respectant le rythme et la sensibilité de votre enfant. Dans cet espace protégé, les tensions se dénouent, permettant à leur énergie vitale de circuler librement.

Cette approche délicate contribue à leur développement harmonieux, leur offrant des outils naturels pour grandir sereinement.`,
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

Rien n'est plus précieux que le bien-être et l'épanouissement de votre tout-petit. Dans un environnement apaisant spécialement conçu, nous créons une véritable bulle de douceur pour chouchouter l'être merveilleux qu'est votre bébé.

✨ Harmonisation des flux vitaux
✨ Apaisement des tensions
✨ Amélioration du sommeil
✨ Éveil serein et équilibré

Dans une ambiance douce et sécurisante, votre bébé se laissera porter par des énergies bienfaisantes. Les soins énergétiques agissent en profondeur, aidant à rééquilibrer ses flux vitaux et à dissiper ses petites tensions.

Cette approche délicate offre de nombreux bienfaits :
• Un sommeil plus serein et réparateur
• Une énergie qui circule en toute fluidité
• Un développement harmonieux
• Une paix intérieure naturelle

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
    description: `Les grandes questions existentielles méritent des réponses claires et éclairées. Face aux carrefours décisifs de votre vie, offrez-vous une guidance précise et inspirée.

✨ Réponse claire par OUI ou NON
✨ Message vocal personnalisé
✨ Précisions et conseils inclus
✨ Réponse sous 3 jours maximum*

Formules disponibles :
• 1 question : 20€
• 2 questions : 30€
• 3 questions : 40€

Cette consultation ciblée vous apporte une clarté immédiate, directement inspirée par les sagesses universelles. Comme un phare dans la brume, elle illumine votre chemin et dissipe vos doutes.

Modalités pratiques :
• Contact via WhatsApp : 06 65 55 33 41
• Règlement préalable obligatoire
• Délai de réponse : 3 jours maximum (hors week-end et jours fériés)
• Message vocal personnalisé

* Une guidance éclairée pour transformer vos questions en réponses lumineuses. ✨`,
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
    description: `L'harmonisation de votre espace de vie est fondamentale pour votre bien-être global. Un foyer énergétiquement sain est la base d'une vie équilibrée et épanouie.

✨ Nettoyage énergétique approfondi
✨ Purification des espaces chargés
✨ Harmonisation vibratoire complète
✨ Passage d'âme si nécessaire

Chaque intervention est unique et adaptée aux besoins spécifiques de votre lieu de vie. Je commence par une analyse approfondie pour détecter les zones perturbées et les charges négatives accumulées au fil du temps. Cette étape essentielle permet d'identifier précisément les points nécessitant une attention particulière.

Ensuite, j'applique des techniques ancestrales de purification pour dissoudre ces énergies stagnantes. Le processus de nettoyage énergétique transforme progressivement l'atmosphère de votre foyer, créant un espace de vie plus léger et harmonieux.

La séance se termine par un ancrage des nouvelles énergies positives, garantissant une transformation durable de votre espace. Cette ultime étape permet de sceller le travail accompli et d'installer une nouvelle dynamique énergétique bénéfique.

* Le tarif et la durée varient selon la surface à traiter et l'intensité énergétique requise. Une évaluation précise sera établie lors de notre premier échange. 
 `,
    images: ["/photo/IMG_8961.JPG", "/photo/IMG_8960.JPG"],
  },
  {
    id: 6,
    title: "Contact Défunt",
    price: "100€",
    duration: "1h - Préférence Présentiel",
    intervenant: "Kris",
    icon: <HeartIcon className="w-8 h-8" />,
    description: `Un moment sacré pour renouer avec ceux qui nous ont quittés. Un espace de connexion unique pour apaiser votre cœur et accompagner votre processus de deuil.
  
  ✨ Connexion spirituelle respectueuse
  ✨ Accompagnement bienveillant
  ✨ Messages et échanges authentiques
  ✨ Espace d'écoute et de guérison
  
  Le contact avec les défunts est une expérience délicate qui nécessite une approche respectueuse et éthique. Quelques points essentiels à savoir :
  
  • Je ne dérange pas les défunts, ils viennent d'eux-mêmes
  • Parfois, un autre défunt peut se manifester
  • Venez sans attentes spécifiques
  • Laissez-vous porter par l'instant présent
  
  Pour optimiser la connexion :
  • Une photo du défunt est nécessaire
  • La date de décès permet un canal plus précis
  • Cette démarche doit être un choix réfléchi de votre part
  
  Important :
  Pour toute séance en distanciel, le règlement devra être effectué au minimum 48h avant la prestation.
  
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
    description: `Quoi de mieux que d'offrir un moment de sérénité à une personne qui vous est chère ? Un cadeau unique qui touche l'âme et le cœur.
  
  ✨ Soin énergétique personnalisé
  ✨ Bon cadeau nominatif élégant
  ✨ Validité d'un an
  ✨ Envoi par mail ou courrier
  
  Modalités pratiques :
  • Envoi du bon cadeau à réception du règlement
  • Choix de l'envoi : mail ou courrier postal
  • Personnalisation possible du message
  • Valable pendant 1 an à partir de la date d'émission
  
  Le bon cadeau comprend :
  • Une séance énergétique complète (1h)
  • Un message personnalisé de votre part
  • La flexibilité du présentiel ou distanciel
  
  * Un cadeau précieux qui offre un moment de reconnexion à soi et de profond ressourcement. ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  },
  {
    id: 8,
    title: "Soin Énergétique Personnalisé",
    price: "100€",
    duration: "1h - Présentiel/Distance",
    intervenant: "Kris",
    icon: <SparklesIcon className="w-8 h-8" />,
    description: `𝙐𝙣 𝙊𝙘𝙚́𝙖𝙣 𝙙𝙚 𝙎𝙚́𝙧𝙚́𝙣𝙞𝙩𝙚́ 𝙖̀ 𝙑𝙤𝙩𝙧𝙚 𝙋𝙤𝙧𝙩𝙚́𝙚
  
  ✨ Vos Besoins, Votre Soin
  ✨ Retrouver un équilibre, un bien-être, un apaisement
  ✨ Une expérience sur-mesure unique
  ✨ Un accompagnement personnalisé
  
  𝙄𝙢𝙖𝙜𝙞𝙣𝙚𝙯 𝙪𝙣𝙚 𝙫𝙖𝙜𝙪𝙚 𝙖𝙥𝙖𝙞𝙨𝙖𝙣𝙩𝙚 𝙫𝙤𝙪𝙨 𝙚𝙣𝙫𝙚𝙡𝙤𝙥𝙥𝙖𝙣𝙩 𝙙𝙚 𝙨𝙚𝙨 𝙛𝙡𝙤𝙩𝙨 𝙗𝙞𝙚𝙣𝙛𝙖𝙞𝙨𝙖𝙣𝙩𝙨, 𝙖𝙥𝙖𝙞𝙨𝙖𝙣𝙩 𝙡𝙚𝙨 𝙩𝙚𝙣𝙨𝙞𝙤𝙣𝙨 𝙚𝙩 𝙝𝙖𝙧𝙢𝙤𝙣𝙞𝙨𝙖𝙣𝙩 𝙡'𝙚𝙣𝙨𝙚𝙢𝙗𝙡𝙚 𝙙𝙚 𝙫𝙤𝙨 𝙛𝙡𝙪𝙭 𝙫𝙞𝙩𝙖𝙪𝙭.
  
  Un océan de quiétude se déversant sur votre être pour effacer toute trace de fatigue, de stress ou de dysfonctionnements.
  
  𝘾'𝙚𝙨𝙩 𝙡𝙖 𝙥𝙧𝙤𝙢𝙚𝙨𝙨𝙚 𝙙𝙪 𝙎𝙤𝙞𝙣 𝙀́𝙣𝙚𝙧𝙜𝙚́𝙩𝙞𝙦𝙪𝙚 𝙋𝙚𝙧𝙨𝙤𝙣𝙣𝙖𝙡𝙞𝙨𝙚́, 𝙪𝙣𝙚 𝙚𝙭𝙥𝙚́𝙧𝙞𝙚𝙣𝙘𝙚 𝙨𝙪𝙧-𝙢𝙚𝙨𝙪𝙧𝙚 𝙥𝙤𝙪𝙧 𝙧𝙚́𝙥𝙤𝙣𝙙𝙧𝙚 𝙖𝙫𝙚𝙘 𝙟𝙪𝙨𝙩𝙚𝙨𝙨𝙚 𝙖𝙪𝙭 𝙖𝙥𝙥𝙚𝙡𝙨 𝙥𝙧𝙤𝙛𝙤𝙣𝙙𝙨 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙘𝙤𝙧𝙥𝙨 𝙚𝙩 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙖̂𝙢𝙚.
  
  Les outils à votre service :
  • Les Bols Tibétains pour une détente absolue
  • Les battements chamaniques des tambours anciens
  • La libération des blocages énergétiques
  • La protection et l'harmonisation de votre aura
  
  Chaque geste, chaque séquence vibratoire sera ciselée avec précision pour répondre aux besoins spécifiques révélés par votre aura. 𝙇𝙞𝙗𝙚́𝙧𝙖𝙩𝙞𝙤𝙣, protection, 𝙜𝙪𝙚́𝙧𝙞𝙨𝙤𝙣 𝙙𝙚𝙨 𝙗𝙡𝙚𝙨𝙨𝙪𝙧𝙚𝙨 𝙚́𝙢𝙤𝙩𝙞𝙤𝙣𝙣𝙚𝙡𝙡𝙚𝙨 𝙤𝙪 𝙥𝙝𝙮𝙨𝙞𝙦𝙪𝙚𝙨...
  
  Important :
  Pour toute séance en distanciel, le règlement devra être effectué au minimum 48h avant la prestation.
  
  * Laissez-vous porter par cette vague de plénitude qui redéfinira votre existence dans sa forme la plus aboutie et rayonnante. ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  },
  {
    id: 9,
    title: "Guidance 1h30",
    price: "120€",
    duration: "1h30 - Présentiel/Distance",
    intervenant: "Kris",
    icon: <SunIcon className="w-8 h-8" />,
    description: `Ouvrez Grand les Portes de Votre Destinée pour éclairer votre chemin de vie et vos choix.
  
  ✨ Guidance personnalisée approfondie
  ✨ Éclairage sur vos questionnements
  ✨ Accompagnement bienveillant
  ✨ Connexion à votre intuition
  
  Imaginez-vous comme un explorateur dans la jungle de la vie. Parfois, le chemin peut sembler embrouillé, et vous pouvez vous sentir un peu perdu. C'est là qu'intervient la guidance spirituelle, tel un phare dans la brume !
  
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
  Pour toute séance en distanciel (via WhatsApp), le règlement devra être effectué au minimum 48h avant la prestation.
  
  * Comme une lampe dans la nuit, laissez la guidance illuminer votre chemin et vous permettre d'avancer sans crainte ! ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  },
  {
    id: 10,
    title: "Guidance 1h",
    price: "80€",
    duration: "1h - Présentiel/Distance",
    intervenant: "Kris",
    icon: <LightBulbIcon className="w-8 h-8" />,
    description: `Ouvrez Grand les Portes de Votre Destinée pour éclairer sur votre chemin de vie et vos choix.
  
  ✨ Guidance intuitive personnalisée
  ✨ Éclairage bienveillant sur vos questionnements
  ✨ Accompagnement et écoute profonde
  ✨ Reconnexion à votre essence
  
  Guidance en présentiel ou en visio via Whatsapp
  MERCI DE BIEN INDIQUER DANS LE FORMULAIRE
  
  Imagine que tu es un explorateur dans la jungle de la vie. Parfois, le chemin peut sembler embrouillé, et tu peux te sentir un peu perdu. C'est là qu'intervient la guidance spirituelle, un peu comme une boussole ou une carte au trésor !
  
  Un guide spirituel, c'est comme un ami invisible qui te donne des indices et des conseils pour t'aider à naviguer :
  • Une écoute attentive de vos questions
  • Des réponses guidées par l'intuition
  • Des conseils pratiques et éclairants
  • Une reconnexion à votre sagesse intérieure
  
  Ce que la séance vous apporte :
  • Un moment privilégié pour faire le point
  • Des pistes concrètes d'évolution
  • Une clarté nouvelle sur votre situation
  • Un accompagnement bienveillant
  
  Cette guidance vous permet de :
  • Vous reconnecter à votre intuition
  • Éclaircir vos choix de vie
  • Retrouver confiance en vous
  • Avancer avec plus de sérénité
  
  Important :
  Pour toute séance en distanciel (via WhatsApp), le règlement devra être effectué au minimum 48h avant la prestation.
  
  * Comme une lampe dans la nuit, laissez la guidance éclairer votre chemin et vous permettre d'avancer avec confiance ! ✨`,
    images: ["/photo/IMG_8967.JPG", "/photo/IMG_8963.JPG"], // À remplacer avec les images appropriées
  },
  {
    id: 11,
    title: "Guidance 45min",
    price: "60€",
    duration: "45min - Présentiel/Distance",
    intervenant: "Kris",
    icon: <LightBulbIcon className="w-8 h-8" />,
    description: `Ouvrez Grand les Portes de Votre Destinée pour éclairer sur votre chemin de vie et vos choix.
  
  ✨ Guidance intuitive ciblée
  ✨ Éclairage bienveillant sur vos questionnements
  ✨ Accompagnement et écoute attentive
  ✨ Reconnexion essentielle
  
  Guidance en présentiel ou en visio via Whatsapp
  MERCI DE BIEN INDIQUER DANS LE FORMULAIRE
  
  Imagine que tu es un explorateur dans la jungle de la vie. Parfois, le chemin peut sembler embrouillé, et tu peux te sentir un peu perdu. C'est là qu'intervient la guidance spirituelle, un peu comme une boussole ou une carte au trésor !
  
  Un guide spirituel, c'est comme un ami invisible qui te donne des indices et des conseils pour t'aider à naviguer :
  • Une écoute attentive de vos questions
  • Des réponses guidées par l'intuition
  • Des conseils pratiques et éclairants
  • Une reconnexion à votre sagesse intérieure
  
  Ce que la séance vous apporte :
  • Un moment privilégié pour faire le point
  • Des pistes d'évolution concrètes
  • Une clarté renouvelée
  • Un accompagnement bienveillant
  
  Cette guidance vous permet de :
  • Vous reconnecter à votre intuition
  • Éclaircir vos choix de vie
  • Retrouver confiance en vous
  • Avancer avec plus de sérénité
  
  Important :
  Pour toute séance en distanciel (via WhatsApp), le règlement devra être effectué au minimum 48h avant la prestation.
  
  * Comme une lampe dans la nuit, laissez la guidance éclairer votre chemin et vous permettre d'avancer avec confiance ! ✨`,
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

Cette approche unique combine plusieurs aspects pour une transformation complète :

1. Olfactothérapie - Le Pouvoir des Odeurs :
• Libération des blocages émotionnels
• Réveil des mémoires enfouies
• Apaisement des tensions mentales et corporelles
• Reconnexion à soi par les sens

2. Le Zéro Mental - L'Art du Lâcher-Prise :
• Atteindre un état de calme intérieur profond
• Se détacher des jugements limitants
• Développer la présence à soi
• Faciliter l'introspection authentique

Pourquoi une Approche Entre Hommes :
• Créer un espace sécurisant et sans jugement
• Briser les tabous autour de la vulnérabilité masculine
• Partager et se reconnaître dans les expériences des autres
• Développer une fraternité bienveillante

Bénéfices Après la Séance :
• Libération émotionnelle profonde
• Clarté mentale retrouvée
• Légèreté intérieure
• Meilleure gestion des émotions
• Avancement serein dans sa vie

Cette combinaison puissante offre une voie unique pour reconnecter corps, esprit et émotions dans un cadre bienveillant, spécialement conçu pour les hommes en quête d'authenticité et de transformation.`,
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

𝙄𝙣𝙩𝙚𝙣𝙨𝙚 𝙘𝙤𝙣𝙣𝙚𝙭𝙞𝙤𝙣 𝙙𝙪 𝘾𝙤𝙧𝙥𝙨 𝙙𝙚 𝙡'𝘼̂𝙢𝙚 𝙚𝙩 𝙙𝙚 𝙡'𝙀𝙨𝙥𝙧𝙞𝙩 & 𝙇𝙖̂𝙘𝙝𝙚𝙧 𝙋𝙧𝙞𝙨𝙚 𝙐𝙡𝙩𝙞𝙢𝙚

Imaginez un cocon douillet où plus rien ne pourrait entraver le déploiement de votre moi essentiel dans sa plénitude rayonnante. 𝙐𝙣 𝙨𝙖𝙣𝙘𝙩𝙪𝙖𝙞𝙧𝙚 𝙫𝙞𝙗𝙧𝙖𝙩𝙤𝙞𝙧𝙚 𝙘𝙤𝙣𝙘̧𝙪 𝙥𝙤𝙪𝙧 𝙗𝙧𝙞𝙨𝙚𝙧 𝙡𝙚𝙨 𝙘𝙝𝙖𝙞̂𝙣𝙚𝙨 𝙙𝙚𝙨 𝙨𝙘𝙝𝙚́𝙢𝙖𝙨 𝙡𝙞𝙢𝙞𝙩𝙖𝙣𝙩𝙨 𝙚𝙩 𝙙𝙚𝙨 𝙨𝙤𝙪𝙛𝙛𝙧𝙖𝙣𝙘𝙚𝙨 𝙖𝙣𝙘𝙞𝙚𝙣𝙣𝙚𝙨 𝙦𝙪𝙞 𝙚𝙣𝙩𝙧𝙖𝙫𝙚𝙣𝙩 𝙚𝙣𝙘𝙤𝙧𝙚 𝙫𝙤𝙩𝙧𝙚 𝙚𝙣𝙩𝙞𝙚̀𝙧𝙚 𝙡𝙞𝙗𝙚́𝙧𝙖𝙩𝙞𝙤𝙣.

C'est la séance audacieuse du "Soin Libre d'Être Soi", une expérience immersive et duale qui conjugue le lâcher-prise absolu du Zéro Mental à la profonde reconnexion vibratoire du Soin Énergétique.

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

𝙪𝙣𝙚 𝙛𝙪𝙨𝙞𝙤𝙣 𝙚𝙭𝙥𝙚𝙧𝙩𝙚 𝙙𝙚 𝙙𝙚𝙪𝙭 𝙩𝙝𝙚́𝙧𝙖𝙥𝙚𝙪𝙩𝙚𝙨 œ𝙪𝙫𝙧𝙚𝙧𝙖 𝙚𝙣 𝙥𝙖𝙧𝙛𝙖𝙞𝙩𝙚 𝙨𝙮𝙢𝙗𝙞𝙤𝙨𝙚 pour une transformation totale et durable.

Alors plus aucun frein, plus aucune barrière provisoire ne saurait entraver l'éclosion de votre grandeur essentielle !

Libre d'être Soi dans toute sa gloire manifeste, vibrante et épanouie, telle est la promesse de cette expérience transformatrice à l'état pur !`,
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

𝑽𝒐𝒖𝒔 𝒍'𝒂𝒗𝒆𝒛 𝒅𝒆́𝒋𝒂̀ 𝒈𝒐𝒖̂𝒕𝒆́ 𝒑𝒂𝒓 𝒃𝒓𝒊𝒃𝒆𝒔, 𝒄𝒆 𝒔𝒆𝒏𝒕𝒊𝒎𝒆𝒏𝒕 𝒆𝒙𝒂𝒍𝒕𝒂𝒏𝒕 𝒅𝒆 𝒑𝒍𝒆́𝒏𝒊𝒕𝒖𝒅𝒆 𝒊𝒏𝒕𝒆́𝒓𝒊𝒆𝒖𝒓𝒆. 
𝑪𝒐𝒎𝒎𝒆 𝒖𝒏 𝒑𝒂𝒓𝒇𝒖𝒎 𝒅'𝒆́𝒕𝒆𝒓𝒏𝒊𝒕𝒆́ 𝒇𝒍𝒐𝒕𝒕𝒂𝒏𝒕 𝒅𝒂𝒏𝒔 𝒍'𝒂𝒊𝒓, 𝒗𝒐𝒖𝒔 𝒆𝒏 𝒂𝒗𝒆𝒛 𝒓𝒆𝒔𝒑𝒊𝒓𝒆́ 𝒍𝒆𝒔 𝒆𝒇𝒇𝒍𝒖𝒗𝒆𝒔 𝒆𝒏𝒕𝒆̂𝒕𝒂𝒏𝒕𝒔... 𝑨𝒗𝒂𝒏𝒕 𝒅𝒆 𝒍𝒆𝒔 𝒗𝒐𝒊𝒓 𝒔𝒆 𝒅𝒊𝒔𝒔𝒊𝒑𝒆𝒓 𝒂𝒖𝒔𝒔𝒊 𝒗𝒊𝒕𝒆 𝒅𝒂𝒏𝒔 𝒍𝒆 𝒕𝒖𝒎𝒖𝒍𝒕𝒆 𝒅𝒆 𝒍'𝒆𝒔𝒑𝒓𝒊𝒕.

Aujourd'hui, c'est l'opportunité de recapturer cet état de grâce pour en faire votre nouvel étalon, votre fréquence vibratoire naturelle et immuable. De transformer l'éphémère en Demeure pérenne, baignée des rayons d'une Lumière céleste intarissable.

𝑳𝒆 𝒁𝒆́𝒓𝒐 𝑴𝒆𝒏𝒕𝒂𝒍 𝒔𝒆𝒓𝒂 𝒄𝒆 𝒍𝒆𝒗𝒊𝒆𝒓 𝒅𝒆 𝒑𝒖𝒊𝒔𝒔𝒂𝒏𝒕𝒆 𝒂𝒍𝒄𝒉𝒊𝒎𝒊𝒆 𝒊𝒏𝒕𝒆́𝒓𝒊𝒆𝒖𝒓𝒆 𝒑𝒂𝒓 𝒍𝒆𝒒𝒖𝒆𝒍 𝒗𝒐𝒖𝒔 𝒂𝒄𝒄𝒆́𝒅𝒆𝒓𝒆𝒛 𝒂̀ 𝒄𝒆 𝒓𝒐𝒚𝒂𝒖𝒎𝒆 𝒅𝒆 𝒔𝒆́𝒓𝒆́𝒏𝒊𝒕𝒆́ 𝒊𝒏𝒆𝒇𝒇𝒂𝒃𝒍𝒆.

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

𝑰𝒍 𝒏'𝒚 𝒂𝒖𝒓𝒂 𝒂𝒍𝒐𝒓𝒔 𝒑𝒍𝒖𝒔 𝒅𝒆 𝒒𝒖𝒆̂𝒕𝒆 𝒂̀ 𝒎𝒆𝒏𝒆𝒓, 𝒎𝒂𝒊𝒔 𝒖𝒏 𝒆́𝒕𝒂𝒕 𝒅'𝒆̂𝒕𝒓𝒆 𝒂̀ 𝒔𝒂𝒗𝒐𝒖𝒓𝒆𝒓 𝒅𝒂𝒏𝒔 𝒍'𝒆𝒙𝒕𝒂𝒔𝒆 𝒅'𝒖𝒏𝒆 𝒓𝒆𝒄𝒐𝒏𝒏𝒆𝒙𝒊𝒐𝒏 𝒕𝒐𝒕𝒂𝒍𝒆 𝒂𝒗𝒆𝒄 𝒍'𝒆́𝒕𝒊𝒏𝒄𝒆𝒍𝒍𝒆 𝒅𝒊𝒗𝒊𝒏𝒆 𝒒𝒖𝒊 𝒃𝒓𝒖̂𝒍𝒆 𝒆𝒏 𝒗𝒐𝒖𝒔 𝒅𝒆𝒑𝒖𝒊𝒔 𝒍𝒂 𝒏𝒖𝒊𝒕 𝒅𝒆𝒔 𝒕𝒆𝒎𝒑𝒔.

Le Zéro Mental sera cette clé ouvrant les portes d'une Nouvelle Conscience libérée des chaînes du mental limitant. L'entrée glorieuse dans le Royaume de votre Moi essentiel... définitivement retrouvé !`,
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

L'olfacto-thérapie est une approche thérapeutique unique qui utilise la puissance évocatrice des odeurs pour accéder à vos mémoires émotionnelles les plus profondes. Cette thérapie brève mais intense permet de libérer les blocages émotionnels ancrés dans votre corps.

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

𝑳𝒂 𝒑𝒖𝒊𝒔𝒔𝒂𝒏𝒄𝒆 𝒅𝒆𝒔 𝒐𝒅𝒆𝒖𝒓𝒔 :
• Accès direct à la mémoire émotionnelle
• Libération des charges émotionnelles
• Reprogrammation neurosensorielle
• Activation des ressources naturelles de guérison

Cette approche holistique permet de :
• Dépasser les blocages émotionnels
• Transformer les schémas répétitifs
• Retrouver un équilibre intérieur
• Développer une nouvelle relation à soi

L'olfactothérapie agit comme un pont entre le conscient et l'inconscient, permettant d'accéder aux mémoires cellulaires pour une libération profonde et durable. Les fragrances soigneusement sélectionnées deviennent les clés qui ouvrent les portes de votre guérison émotionnelle.

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
            <h2 className="mt-11 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative inline-block px-4">
              <span className="relative z-10">
                Mes Services{" "}
                <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-2 inline-block">
                  Énergétiques
                </span>
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute bottom-3 left-0 w-full h-3 bg-purple-100/80 z-0"
                style={{ originX: 0 }}
              />
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
                      <h3 className="text-2xl font-bold text-gray-800 font-serif truncate-2-lines">
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
                              {paragraph.startsWith("✨") && (
                                <span
                                  className={`${
                                    service.intervenant === "Patrice"
                                      ? "text-blue-500"
                                      : "text-purple-500"
                                  } mt-1`}
                                >
                                  ●
                                </span>
                              )}
                              <p
                                className={
                                  paragraph.startsWith("✨")
                                    ? "font-medium"
                                    : ""
                                }
                              >
                                {paragraph.replace("✨ ", "")}
                              </p>
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
