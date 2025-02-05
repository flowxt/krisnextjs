"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Cta = () => {
    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full py-16 bg-gradient-to-r from-purple-100 to-purple-50"
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Prêt à transformer votre <span className='text-purple-800'>énergie ?</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Découvrez nos soins énergétiques sur-mesure et offrez-vous une
            expérience de transformation unique.
          </p>
          <motion.a
            href="#services" // Assurez-vous que cette ancre mène à la section des services
            className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-700"
            whileHover={{ scale: 1.05 }}
          >
            En savoir plus
          </motion.a>
        </div>
      </motion.section>
    );
};

export default Cta;