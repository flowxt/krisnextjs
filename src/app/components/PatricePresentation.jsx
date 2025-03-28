"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon, HeartIcon, LightBulbIcon, BrainIcon } from "@heroicons/react/24/outline";

export default function PatricePresentation() {
  return (
    <>
      <motion.section 
        className="w-full py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:bg-gradient-to-t dark:from-blue-700 dark:to-indigo-900 overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Particules d'arrière-plan subtiles */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-300 dark:bg-blue-300/40"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0.2
              }}
              animate={{ 
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{ 
                duration: 8 + Math.random() * 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 gap-16 relative z-10">
          {/* Image Section - avec animations améliorées */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 50 
            }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 transform -rotate-3 rounded-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, rotate: "-2deg" }}
              />
              <motion.div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/photo/patrice.jpg" // Assurez-vous d'avoir cette image
                  alt="Patrice Guffon"
                  width={500}
                  height={700}
                  className="relative transform group-hover:-translate-y-2 transition-all duration-500 object-cover h-[550px] w-full"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-300/0 via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  whileHover={{ 
                    x: ["100%", "-100%"],
                    transition: { duration: 1.5, ease: "easeInOut" }
                  }}
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-8 right-8 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                >
                  <SparklesIcon className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span className="text-blue-600 font-semibold">Thérapeute • Coach</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section - avec animations améliorées */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              type: "spring",
              stiffness: 50 
            }}
            className="w-full lg:w-7/12 space-y-10"
          >
            <motion.h2 
              className="font-heading text-4xl font-bold text-gray-900 leading-tight dark:text-white mt-11"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Patrice{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 dark:from-blue-100 dark:to-cyan-200 inline-block"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 0%" }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
              >
                Guffon
              </motion.span>
            </motion.h2>

            <div className="space-y-8">
              {/* Section 1 - Approche */}
              <motion.div 
                className="relative pl-8 border-l-4 border-blue-500 overflow-hidden"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ 
                  boxShadow: "0 4px 20px -8px rgba(37, 99, 235, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <HeartIcon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-semibold">Libération émotionnelle masculine</h3>
                </motion.div>
                <p className="font-sans text-gray-600 leading-relaxed dark:text-blue-100">
                  J'accompagne les hommes vers leur libération émotionnelle profonde en travaillant sur les ressentis corporels, amenant à une transformation de leur état d'être. En comprenant que nous ne souffrons que de deux choses - notre mémoire et notre imagination - nous pouvons retrouver un état d'être aligné, libre et apaisé.<br /><br />
                  Ma conviction profonde est qu'il ne s'agit pas de changer la vie, mais de transformer notre regard sur elle. Comme je le dis souvent : "Ce n'est pas la vie qui est belle, c'est notre regard qui la rend belle."
                </p>
              </motion.div>

              {/* Section 2 - Méthodes */}
              <motion.div 
                className="relative pl-8 border-l-4 border-cyan-500"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ 
                  boxShadow: "0 4px 20px -8px rgba(6, 182, 212, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <LightBulbIcon className="w-8 h-8 text-cyan-600" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-semibold">Mon approche</h3>
                </motion.div>
                <p className="font-sans text-gray-600 leading-relaxed dark:text-blue-100">
                  <strong>👉 L'Olfacto-Thérapie :</strong> Les odeurs agissent directement sur nos émotions et notre mémoire pour transformer nos pensées et libérer les blocages profondément ancrés.<br /><br />
                  <strong>👉 Le Zéro-Mental :</strong> Nous sommes hypnothisés à 99% par nos pensées. Nous ne voyons pas le monde tel qu'il est mais le reflet de nos pensées. Il n'y a qu'une seule chose qui part en thérapie, c'est le mental.<br /><br />
                  Je propose également une approche combinée Zéro-Mental & soin énergétique pour un résultat optimal, conduisant à une transformation complète et durable.
                </p>
              </motion.div>

              {/* Citation avec animation */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-indigo-900/40 p-6 rounded-xl border border-blue-100 dark:border-blue-700/50 shadow-sm relative overflow-hidden"
              >
                {/* Petites particules de citation */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-blue-300/40 dark:bg-blue-300/20"
                      initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: Math.random() * 100 + "%",
                      }}
                      animate={{ 
                        y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                        opacity: [0.2, 0.8, 0.2]
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <p className="text-xl italic text-blue-800 dark:text-blue-200 relative z-10">
                    "Ce n'est pas la vie qui est belle, c'est notre regard qui la rend belle."
                  </p>
                </motion.div>
                
                {/* Élément décoratif pour la citation */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-blue-200/30 dark:bg-blue-500/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}