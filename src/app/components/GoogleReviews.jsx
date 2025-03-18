"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Avis clients
const reviewsData = [
  {
    id: 1,
    name: "Betty S.",
    rating: 5,
    text: "Kris est une personne attentif en canal direct. Elle vous reçoit dans un endroit doux et chaleureux Kris est incroyable vous vous sentez en confiance totale remplie de douceur elle ne vous prodigueras pas de soin si vous n en avez pas besoin elle est a votre écoute est feras en sorte d adapter le soin qui vous seras utile est nécessaire...",
    date: "mars 2025"
  },
  {
    id: 2,
    name: "Katia F.",
    rating: 5,
    text: "Kris m'a été conseillé par une amie et je suis vraiment ravie de cette séance qui m'a bluffé dès le départ. Son approche est douce et je me suis senti en confiance à la minute où je suis rentrée. Tout le travail qu'elle a effectué sur moi à été bénéfique, je me suis senti vraiment libérer de trop de choses qui me pesait...",
    date: "Decembre 2024"
  },
  {
    id: 3,
    name: "Stephanie M.",
    rating: 5,
    text: "Je suis pleine de gratitude d'avoir fait la connaissance de Kris, c'est une énergéticienne extraordinaire, cette séance m'a fait énormément de bien. Kris est très bienveillante, elle prend le temps de faire les choses, de répondre à mes questions, c'est une belle personne humble, merci Kris à vous et aux anges, je reviendrai avec un immense plaisir",
    date: "Il y a 1 mois"
  },
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleNextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handlePrevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 font-heading">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
            Ce que disent mes clients
          </span>
        </h2>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-lg font-bold ml-2">5/5</span>
        </div>
        <p className="text-gray-600">Basé sur plus de 190 avis vérifiés sur Google</p>
      </div>
      
      {/* Carrousel d'avis */}
      <div 
        className="relative overflow-hidden rounded-2xl bg-white shadow-md mb-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-6 md:p-8 min-h-[300px] flex flex-col">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <p className="text-gray-700 italic mb-6 line-clamp-6 md:line-clamp-[8] text-sm md:text-base">
                "{reviewsData[currentIndex].text}"
              </p>
              
              <div>
                <p className="font-semibold text-purple-800">{reviewsData[currentIndex].name}</p>
                <p className="text-sm text-gray-500">{reviewsData[currentIndex].date}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Boutons navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full hidden md:flex justify-between px-2">
  <button 
    onClick={handlePrevReview}
    className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600 hover:bg-purple-50"
    aria-label="Avis précédent"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </button>
  
  <button 
    onClick={handleNextReview}
    className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600 hover:bg-purple-50"
    aria-label="Avis suivant"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  </button>
</div>
        
        {/* Indicateurs de pagination */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setAutoplay(false);
                setTimeout(() => setAutoplay(true), 10000);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Voir l'avis ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Bouton Google */}
      <div className="text-center">
        <Link 
          href="https://g.co/kgs/mLVvCp8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm"
        >
          <div className="mr-2 flex items-center justify-center">
            <span className="flex">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
          </div>
          Voir tous mes avis
        </Link>
      </div>
    </div>
  );
}