"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function BlogFilters({ onFilterChange, onSearchChange, onYearChange }) {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [activeYear, setActiveYear] = useState("Toutes");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { name: "Tous", colorActive: "bg-gray-600 text-white shadow-md", colorInactive: "bg-gray-50 text-gray-600 hover:bg-gray-100" },
    { name: "Bien-être", colorActive: "bg-purple-600 text-white shadow-md", colorInactive: "bg-purple-50 text-purple-600 hover:bg-purple-100" },
    { name: "Développement personnel", colorActive: "bg-pink-600 text-white shadow-md", colorInactive: "bg-pink-50 text-pink-600 hover:bg-pink-100" },
    { name: "Nouvelle lune", colorActive: "bg-indigo-600 text-white shadow-md", colorInactive: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100" },
    { name: "Pleine lune", colorActive: "bg-blue-600 text-white shadow-md", colorInactive: "bg-blue-50 text-blue-600 hover:bg-blue-100" },
    { name: "Rituel", colorActive: "bg-amber-600 text-white shadow-md", colorInactive: "bg-amber-50 text-amber-600 hover:bg-amber-100" },
  ];

  const years = [
    { name: "Toutes", label: "Toutes les années" },
    { name: "2026", label: "2026" },
    { name: "2025", label: "2025" },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter === "Tous" ? null : filter);
  };

  const handleYearClick = (year) => {
    setActiveYear(year);
    onYearChange(year === "Toutes" ? null : year);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <div className="mb-12 space-y-6">
      {/* Filtres par année */}
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <CalendarIcon className="h-5 w-5 text-gray-500 mr-1" />
        {years.map((year) => (
          <button
            key={year.name}
            onClick={() => handleYearClick(year.name)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeYear === year.name
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
                : "bg-white/80 text-gray-600 hover:bg-purple-50 border border-gray-200"
            }`}
          >
            {year.label}
          </button>
        ))}
      </div>

      {/* Filtres de catégories */}
      <div className="flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => handleFilterClick(filter.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === filter.name
                ? filter.colorActive
                : filter.colorInactive
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Barre de recherche */}
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Rechercher un article..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
        />
      </div>
    </div>
  );
} 