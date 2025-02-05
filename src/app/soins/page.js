"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  RocketLaunchIcon,
  SunIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const formules = [
  {
    id: 1,
    title: "Boost Changement",
    price: "480€",
    duration: "5 Séances intensives - Valable 1 mois",
    description: [
      "Coaching d'Accompagnement Holistique",
      "Soins Énergétiques",
      "Définir ses objectifs",
      "Relaxation profonde",
    ],
  },
  {
    id: 2,
    title: "Les Saisons - 4 Soins Énergétiques",
    price: "340€",
    duration: "Valable 12 mois",
    description: [
      "Soin Énergétique Personnalisé",
      "Les Soins Saisons Formule 4 soins",
      "Séance à définir",
      "Soin Arbre de Vie",
    ],
  },
  {
    id: 3,
    title: "10h Accompagnement Holistique à l'Éveil",
    price: "800€",
    duration: "10 séances d’1h - Valable 6 mois",
    description: [
      "Reconnaître son mental et les perceptions",
      "Trouver un équilibre dans la vie spirituelle",
      "Comment se protéger",
      "Trouver son outil",
      "Comment faire un soin",
      "La canalisation, ce que je ressens",
    ],
  },
  {
    id: 4,
    title: "30h Accompagnement Holistique à l'Éveil",
    price: "1 930€",
    duration: "Valable 10 mois",
    description: [
      "Suis-je fait pour me diriger dans une voie spirituelle",
      "Les différents mondes",
      "La mission de vie et pourquoi",
      "Explorer et s’exercer",
      "Mise en condition de soin",
      "Couper son mental et son égo",
      "Maitriser totalement ce que l'on travaille",
      "Ressentir les énergies qui viennent dans notre canal",
      "Temps de paroles",
      "Sortie en nature",
      "Pleine conscience",
    ],
  },
];

export default function Soins() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête animé */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Soins & <span className="text-purple-600">Formules</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos offres et choisissez la formule qui vous convient pour
            un accompagnement holistique sur-mesure.
          </p>
        </motion.div>

        {/* Grille de cartes */}
        <div className="grid md:grid-cols-2 gap-12">
          {formules.map((formule, index) => (
            <motion.div
              key={formule.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Effet de fond gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-teal-100 transform -rotate-3 rounded-2xl shadow-lg" />

              {/* Carte */}
              <div className="relative bg-white p-8 rounded-2xl shadow-md transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col justify-between">
                {/* En-tête de carte */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    {formule.id === 1 && (
                      <RocketLaunchIcon className="w-8 h-8 text-purple-600" />
                    )}
                    {formule.id === 2 && (
                      <SunIcon className="w-8 h-8 text-purple-600" />
                    )}
                    {formule.id === 3 && (
                      <BookOpenIcon className="w-8 h-8 text-purple-600" />
                    )}
                    {formule.id === 4 && (
                      <AcademicCapIcon className="w-8 h-8 text-purple-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {formule.title}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {formule.price}
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      {formule.duration}
                    </p>
                  </div>
                </div>

                {/* Liste des caractéristiques */}
                <ul className="space-y-3 mb-8 pl-2">
                  {formule.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="text-purple-500">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Bouton */}
                <Link href="/contact">
                  <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                    Sélectionner
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citation en bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-xl italic text-gray-600 border-l-4 border-purple-500 pl-4">
            “L'énergie vitale est la clé de toute transformation profonde et
            durable.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
