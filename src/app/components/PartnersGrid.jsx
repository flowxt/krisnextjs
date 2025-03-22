"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

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
    id: 7,
    name: "Esprit du Cèdre",
    logo: "/images/logo7.png",
    description: "Gite en Haute-Savoie",
    category: "boutique",
    website: "https://sejourhautesavoie.fr/"
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

  const filteredPartners = activeCategory === "all" 
    ? partnersData 
    : partnersData.filter(partner => partner.category === activeCategory);

  return (
    <div>
      {/* Filtres par catégorie */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-purple-600 text-white"
                : "bg-white border border-purple-200 text-gray-700 hover:bg-purple-50"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grille des partenaires */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPartners.map((partner) => (
          <div 
            key={partner.id} 
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative h-56">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-heading">{partner.name}</h3>
              <p className="text-gray-600 mb-4">{partner.description}</p>
              <Link 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
              >
                Visiter le site
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}