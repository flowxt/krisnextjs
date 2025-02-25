"use client";
import { motion } from "framer-motion";
import ArticleCard from "../components/ArticleCard";

const tempArticles = [
  {
    id: 1,
    title: "L'importance de la méditation quotidienne",
    description:
      "Découvrez comment la méditation peut transformer votre vie et vous apporter plus de sérénité au quotidien.",
    image: "/photo/IMG_8967.JPG",
    slug: "importance-meditation-quotidienne",
    categories: ["Méditation", "Bien-être"],
    date: "2024-02-25",
  },
  {
    id: 2,
    title: "Les cristaux et leurs pouvoirs",
    description:
      "Guide complet sur les propriétés des cristaux et comment les utiliser pour votre développement spirituel.",
    image: "/photo/IMG_8963.JPG",
    slug: "cristaux-et-pouvoirs",
    categories: ["Lithothérapie", "Spiritualité"],
    date: "2024-02-24",
  },
  // ... ajoutez d'autres articles si souhaité
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* En-tête du blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative overflow-hidden"
        >
          <h2 className="mt-11 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative inline-block px-4">
            <span className="relative z-10">
              Mon{" "}
              <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-2 inline-block">
                Blog
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
            Découvrez mes articles sur{" "}
            <span className="font-semibold text-purple-600">
              le développement personnel
            </span>{" "}
            et{" "}
            <span className="font-semibold text-indigo-600">
              la spiritualité
            </span>
          </p>
        </motion.div>

        {/* Zone des articles (à remplir plus tard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tempArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
