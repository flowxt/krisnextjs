"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Composant CTA générique (à adapter par page)
const Cta = ({ page }) => {
  const content = {
    accueil: {
      titre: "Prêt à transformer votre énergie ?",
      bouton: "En savoir plus",
      lien: "/soins"
    },
    soins: {
      titre: "Besoin d'un accompagnement sur-mesure ?",
      bouton: "Prendre rendez-vous",
      lien: "/contact"
    },
    services: {
      titre: "Envie d'une séance personnalisée ?",
      bouton: "Contactez-moi",
      lien: "/contact"
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 bg-gradient-to-t from-pink-50 to-purple-100 dark:bg-gradient-to-t dark:from-purple-700 dark:to-indigo-900"
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 dark:text-purple-100">
          {content[page].titre.split(' ').map((word, index) => 
            word === 'énergie' || word === 'personnalisée' || word === 'sur-mesure' ? (
              <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 ">
                {word + ' '}
              </span>
            ) : (
              <React.Fragment key={index}>{word + ' '}</React.Fragment>
            )
          )}
        </h3>
        <motion.a
          href={content[page].lien}
          className="inline-block bg-gradient-to-r from-purple-400 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          {content[page].bouton}
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Cta;