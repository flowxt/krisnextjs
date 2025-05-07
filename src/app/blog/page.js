"use client";

import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import BlogPresentation from "../components/BlogPresentation";
import BlogFilters from "../components/BlogFilters";
import { MoonIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import LunarCalendar2025 from "../components/LunarCalendar2025";

// Version client qui n'utilise pas fs directement
export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Charger les articles au chargement de la page
  useEffect(() => {
    async function loadArticles() {
      try {
        // Appel à un API endpoint que nous allons créer
        const response = await fetch("/api/articles");
        if (!response.ok)
          throw new Error("Erreur lors du chargement des articles");

        const articlesData = await response.json();
        setArticles(articlesData);
        setFilteredArticles(articlesData);
      } catch (error) {
        console.error("Erreur lors du chargement des articles:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadArticles();
  }, []);

  // Filtrer les articles quand les filtres changent
  useEffect(() => {
    let result = [...articles];

    // Filtre par catégorie
    if (categoryFilter) {
      result = result.filter(
        (article) => article.attributes.categories === categoryFilter
      );
    }

    // Filtre par recherche
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (article) =>
          article.attributes.Title.toLowerCase().includes(query) ||
          (article.attributes.description &&
            article.attributes.description.toLowerCase().includes(query))
      );
    }

    setFilteredArticles(result);
  }, [articles, categoryFilter, searchQuery]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-pattern py-20 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <ArrowPathIcon className="h-12 w-12 text-purple-500 animate-spin mb-4" />
          <p className="text-lg text-gray-600">Chargement des articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pattern py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-11">
        <BlogPresentation />
        <LunarCalendar2025 />
        <BlogFilters
          onFilterChange={(category) => setCategoryFilter(category)}
          onSearchChange={(query) => setSearchQuery(query)}
        />

        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <MoonIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-lg text-gray-600">
              Aucun article ne correspond à votre recherche.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
