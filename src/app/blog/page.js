"use client";

import { useState, useEffect } from "react";
import { getArticles } from "@/lib/strapi";
import ArticleCard from "../components/ArticleCard";
import { motion } from "framer-motion";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const data = await getArticles();
      setArticles(data);
      setIsLoading(false);
    }

    fetchArticles();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 mt-11">
        {/* Titre amélioré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative overflow-hidden"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block px-4">
            <span className="relative z-10">
              🌿 L'
              <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-1">
                Énergie
              </span>
              en Motifs - Blog des Soins{" "}
              <span className="bg-gradient-to-br from-indigo-400 to-purple-600 text-white p-1">
                Holistiques
              </span>
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute bottom-3 left-0 w-full h-3 bg-purple-100/80 z-0"
              style={{ originX: 0 }}
            />
          </h1>

          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12 relative z-10 px-4">
            Explorez notre univers{" "}
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              vibratoire
            </span>{" "}
            où science énergétique et{" "}
            <span className="font-semibold text-indigo-600">
              bien-être spirituel
            </span>{" "}
            s'entrelacent. Découvrez des articles éclairants sur les{" "}
            <span className="font-semibold text-purple-600">
              thérapies subtiles
            </span>
            ...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
