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
} from "@heroicons/react/24/outline";

const services = [
  {
    id: 1,
    title: "Séance Énergétique Adulte",
    price: "100€",
    duration: "1h - Présentiel/Distance",
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
    duration: "Distanciel uniquement",
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
  // Ajouter les autres services de la même manière
];

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
        >
          Mes Services Énergétiques
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${
                expandedId === service.id ? "col-span-full" : ""
              }`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === service.id ? null : service.id)
                }
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4">
                      <span className="text-lg font-semibold text-purple-600">
                        {service.price}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                  <ChevronDownIcon
                    className={`w-6 h-6 transform transition-transform ${
                      expandedId === service.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {expandedId === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 space-y-6"
                  >
                    <div className="prose max-w-none text-gray-600">
                      {service.description.split("\n").map((paragraph, idx) => (
                        <p key={idx} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {service.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative h-48 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
                      Réserver maintenant
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
