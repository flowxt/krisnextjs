"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, SparklesIcon } from "@heroicons/react/24/outline";

// Données des partenaires - à remplacer par vos partenaires réels
const partnersData = [
  {
    id: 1,
    name: "Sirkice Coaching",
    logo: "/images/logo1.png",
    description: "Accompagnement holistique",
    category: "centre",
    website: "https://www.sirkice.com/"
  },
  {
    id: 2,
    name: "Natka La clé du bien-être",
    logo: "/images/natka.png",
    description: "Réflexologie plantaire",
    category: "praticien",
    website: "https://www.natkalaclefdubienetre.fr/"
  },
  {
    id: 3,
    name: "MICHEL PIRMAIER",
    logo: "/images/logo3.png",
    description: "Lecture de Vie Antérieure.",
    category: "praticien",
    website: "https://www.nostredame.com/"
  },
  {
    id: 4,
    name: "Luminaissant",
    logo: "/images/logo4.png",
    description: "Hypnose Spirituelle, QHHT et médiumnité",
    category: "praticien",
    website: "https://lumi-naissant.com/"
  },
  {
    id: 5,
    name: "Geomancie 74",
    logo: "/images/logo5.png",
    description: "Réponse à une question par la Géomancie",
    category: "praticien",
    website: "https://g.co/kgs/D9fQyYQ"
  },
  {
    id: 6,
    name: "Enki Bioresonance",
    logo: "/images/logo6.png",
    description: "Bioresonance",
    category: "centre",
    website: "https://enki-bioresonance.fr/"
  },

  {
    id: 8,
    name: "Corinne Barreau",
    logo: "/images/corinne.png",
    description: "Hypnothérapeute",
    category: "praticien",
    website: "https://hypnose74geneve.com/"
  },
  {
    id: 9,
    name: "Reflexozen",
    logo: "/images/logo9.png",
    description: "Astrologie et Reflexologie",
    category: "praticien",
    website: "https://www.reflexozen.fr/"
  },
  {
    id: 10,
    name: "Atypik Code",
    logo: "/images/atypik-code.png",
    description: "Creation de site internet",
    category: "boutique",
    website: "https://www.atypikcode.fr"
  },
  {
    id: 11,
    name: "Harmonie et Sens",
    logo: "/photo/stephanie.png",
    description: "Sophro-analyste",
    category: "praticien",
    website: "https://harmonieetsens74.fr"
  },
  {
    id: 12,
    name: "My Easy Plan",
    logo: "/photo/myeasyplan.png",
    description: "Permis de construire",
    category: "boutique",
    website: "https://my-easy-plan.com"
  },
  // Ajoutez vos autres partenaires ici
];

const categories = [
  { id: "all", label: "Tous" },
  { id: "praticien", label: "Praticiens" },
  { id: "centre", label: "Centres" },
  { id: "boutique", label: "Boutiques" },
];

export default function PartnersGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredPartners = activeCategory === "all" 
    ? partnersData 
    : partnersData.filter(partner => partner.category === activeCategory);

  return (
    <div>
      {/* Titre de section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 rounded-full mb-4">
          <SparklesIcon className="w-5 h-5 text-purple-600" />
          <span className="text-purple-800 font-semibold">Nos Partenaires</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
          Découvrez nos professionnels
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Chaque partenaire a été soigneusement sélectionné pour son expertise et ses valeurs
        </p>
      </motion.div>

      {/* Filtres par catégorie - Design amélioré */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-16"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-purple-50 border border-purple-200 shadow-md"
            }`}
          >
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Grille des partenaires - Cartes ultra-modernes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPartners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(partner.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative"
          >
            {/* Effet de glow au survol - optimisé */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-700" />

            {/* Carte principale */}
            <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col transition-shadow duration-300 group-hover:shadow-2xl">
              {/* Image avec overlay */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Badge catégorie sur l'image */}
                <div className="absolute top-4 right-4 transition-transform duration-300 group-hover:scale-110">
                  <span className="bg-white/90 backdrop-blur-sm text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full border border-purple-200 shadow-md">
                    {categories.find(c => c.id === partner.category)?.label}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading transition-colors duration-300 group-hover:text-purple-600">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {partner.description}
                </p>

                {/* Bouton avec animation */}
                <Link 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Visiter le site</span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message si aucun résultat */}
      {filteredPartners.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-600">
            Aucun partenaire dans cette catégorie pour le moment
          </p>
        </motion.div>
      )}
    </div>
  );
}