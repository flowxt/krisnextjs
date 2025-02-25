"use client";

import { useState, useEffect } from "react";
import { getArticles } from "@/lib/strapi";
import ArticleCard from "../components/ArticleCard";

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
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          🌿 L'Énergie en Motifs - Blog des Soins Holistiques
        </h1>

        {/* Explication contextuelle */}
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explorez notre univers vibratoire où science énergétique et bien-être
          spirituel s'entrelacent. Découvrez des articles éclairants sur les
          thérapies subtiles, les récits de transformation et les clés pour
          harmoniser vos flux vitaux. Un espace dédié à l'éveil de votre
          potentiel énergétique.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
