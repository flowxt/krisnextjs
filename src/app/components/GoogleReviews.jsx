"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useAnimationFrame } from "framer-motion";

// Avis clients
const reviewsData = [
  {
    id: 1,
    name: "Betty S.",
    rating: 5,
    text: "Kris est une personne attentif en canal direct. Elle vous reçoit dans un endroit doux et chaleureux Kris est incroyable vous vous sentez en confiance totale remplie de douceur...",
    date: "Mars 2025"
  },
  {
    id: 2,
    name: "Katia F.",
    rating: 5,
    text: "Kris m'a été conseillé par une amie et je suis vraiment ravie de cette séance qui m'a bluffé dès le départ. Son approche est douce et je me suis senti en confiance à la minute où je suis rentrée...",
    date: "Octobre 2024"
  },
  {
    id: 3,
    name: "Julie",
    rating: 5,
    text: "Au delà des mots, cette séance est venue toucher mon cœur. Je me suis laissé guider et j'en suis ressortie apaisée, éclairée. Ce n'est pas une expérience qui se raconte mais qui se vit.",
    date: "Mars 2025"
  },
  {
    id: 4,
    name: "Nathalie J.",
    rating: 5,
    text: "Merci infiniment! Ce fut une séance incroyable! Elle m'a fait un bien fou et je remercie Kris pour tout ce qu'elle a fait pour moi!",
    date: "Mars 2025"
  },
  {
    id: 5,
    name: "T B.",
    rating: 5,
    text: "Merciii Kris pour cette belle expérience !! Vous êtes vraiment bluffante et merveilleuse, j'ai beaucoup aimé et je reviendrai pour un soin. Je recommande et conseille Kris...",
    date: "Février 2025"
  },
  {
    id: 6,
    name: "Sophie G.",
    rating: 5,
    text: "Je tiens Kris à vous exprimer toute ma gratitude. Merci pour votre écoute et votre bienveillance. Je n'attendais rien de précis de cette séance mais votre soin énergétique a été une vraie source de réconfort...",
    date: "Novembre 2024"
  },
  {
    id: 7,
    name: "Yassine L.",
    rating: 5,
    text: "Très beau rendez-vous de Voyance 🙏🏼 Révélation très surprenante sur ce qui se passe en nous et dans notre vie! La guidance que KRIS pratique nous aide à comprendre clairement et avec précision ce qui se manifeste autour de nous...",
    date: "Novembre 2024"
  },
  {
    id: 8,
    name: "Mel T.",
    rating: 5,
    text: "Très belle rencontre. Un moment hors du temps partagé en visio. Un ressenti très juste de mes émotions et énergies du moment avec beaucoup de bienveillance. Une sensation de légèreté après la séance.",
    date: "Octobre 2024"
  },
  {
    id: 9,
    name: "Hedonia Equi-Reiki",
    rating: 5,
    text: "Kristelle est une professionnelle hors normes, elle accompagne ses patientes grâce à diverses approches qui se complètent les unes les autres. C'est très fluide et ça suit un fil conducteur qui permet d'atteindre un réel mieux être...",
    date: "Novembre 2024"
  },
  {
    id: 10,
    name: "Jou Elle",
    rating: 5,
    text: "Krys est d une grande empathie et bienveillance. Son soin m'a apaisée. Et je sais que je retournerai en séance.",
    date: "Février 2025"
  }
];

// Composant pour afficher les étoiles
const RatingStars = () => (
  <div className="flex items-center gap-1 mb-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Composant pour un avis individuel
const ReviewCard = ({ review }) => (
  <div className="bg-white p-5 rounded-xl shadow-md min-w-[260px] max-w-[300px] mx-3 flex flex-col h-[220px]">
    <RatingStars />
    
    <p className="text-gray-700 italic mb-4 line-clamp-4 text-sm flex-grow">
      "{review.text}"
    </p>
    
    <div>
      <p className="font-semibold text-purple-800">{review.name}</p>
      <p className="text-xs text-gray-500">{review.date}</p>
    </div>
  </div>
);

// Composant pour une ligne de défilement infini
const InfiniteScrollRow = ({ reviews, direction = "left", speed = 1 }) => {
  const rowRef = useRef(null);
  const [xPosition, setXPosition] = useState(0);
  const [rowWidth, setRowWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [totalItems, setTotalItems] = useState(3);
  
  useEffect(() => {
    if (rowRef.current) {
      // Largeur du contenu (tous les éléments)
      const scrollWidth = rowRef.current.scrollWidth;
      
      // Largeur du conteneur visible
      const offsetWidth = rowRef.current.offsetWidth;
      
      setRowWidth(scrollWidth / totalItems);
      setContainerWidth(offsetWidth);
      
      // Déterminer combien de fois nous devons dupliquer les éléments pour assurer un défilement fluide
      const neededDuplication = Math.ceil((offsetWidth * 2) / (scrollWidth / totalItems)) + 1;
      setTotalItems(neededDuplication);
    }
  }, []);
  
  useAnimationFrame((time) => {
    if (!rowWidth || !containerWidth) return;
    
    // Calculer le déplacement basé sur la vitesse (plus petit = plus rapide)
    const speedFactor = direction === "left" ? 60 / speed : 60 / speed;
    
    // Calculer la nouvelle position
    let newPosition;
    if (direction === "left") {
      // De droite à gauche
      newPosition = (time / speedFactor) % rowWidth;
      setXPosition(-newPosition);
    } else {
      // De gauche à droite
      newPosition = (time / speedFactor) % rowWidth;
      setXPosition(newPosition - rowWidth);
    }
  });
  
  // Générer plusieurs copies des avis pour assurer un défilement sans vide
  const renderReviewCopies = () => {
    const copies = [];
    for (let i = 0; i < totalItems; i++) {
      copies.push(
        ...reviews.map((review) => (
          <ReviewCard key={`row-${i}-${review.id}`} review={review} />
        ))
      );
    }
    return copies;
  };
  
  return (
    <div className="overflow-hidden">
      <motion.div 
        ref={rowRef}
        className="flex"
        style={{ x: xPosition }}
      >
        {renderReviewCopies()}
      </motion.div>
    </div>
  );
};

export default function GoogleReviews() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
      <div className="text-center mb-10">
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
      
      {/* Première rangée - défilement de droite à gauche */}
      <div className="mb-8 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-r from-purple-50/95 via-purple-50/70 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-l from-indigo-50/95 via-indigo-50/70 to-transparent pointer-events-none"></div>
        <InfiniteScrollRow reviews={reviewsData} direction="left" speed={1} />
      </div>
      
      {/* Deuxième rangée - défilement de gauche à droite, plus rapide */}
      <div className="mb-10 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-r from-purple-50/95 via-purple-50/70 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-l from-indigo-50/95 via-indigo-50/70 to-transparent pointer-events-none"></div>
        <InfiniteScrollRow reviews={reviewsData} direction="right" speed={1.6} />
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