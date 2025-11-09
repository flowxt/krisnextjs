"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HeartIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function PartnersCTA() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 relative overflow-hidden">
      {/* Particules décoratives animées */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#818cf8" : "#60a5fa",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Effet de glow en arrière-plan */}
          <motion.div
            className="absolute -inset-8 bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-blue-400/20 rounded-3xl blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Carte principale */}
          <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Bande décorative supérieure avec gradient animé */}
            <div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Colonne gauche - Contenu texte */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 px-4 py-2 rounded-full"
                  >
                    <UserGroupIcon className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-700 text-sm">
                      Réseau de confiance
                    </span>
                  </motion.div>

                  {/* Titre */}
                  <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Découvrez nos{" "}
                    <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      partenaires de confiance
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nous collaborons avec des professionnels du bien-être partageant nos valeurs d'excellence, 
                    d'authenticité et de bienveillance pour vous accompagner dans votre transformation.
                  </p>

                  {/* Points clés */}
                  <div className="space-y-4">
                    {[
                      { icon: "✨", text: "Professionnels certifiés et expérimentés" },
                      { icon: "💖", text: "Approches complémentaires à nos soins" },
                      { icon: "🌟", text: "Sélection rigoureuse basée sur nos valeurs" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <motion.span
                          className="text-2xl"
                          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span className="text-gray-700 font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bouton CTA */}
                  <Link href="/partenaires">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group mt-4 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <HeartIcon className="w-6 h-6" />
                      <span>Voir nos recommandations</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-xl"
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Colonne droite - Visuel décoratif */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative hidden lg:block"
                >
                  <div className="relative">
                    {/* Cercles concentriques animés */}
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2"
                        style={{
                          borderColor: i === 1 ? "#a78bfa" : i === 2 ? "#818cf8" : "#60a5fa",
                          opacity: 0.3,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 8 + i * 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ))}

                    {/* Icônes flottantes */}
                    <div className="relative w-80 h-80 mx-auto">
                      {[
                        { icon: SparklesIcon, delay: 0, position: "top-1/4 left-1/4" },
                        { icon: HeartIcon, delay: 0.3, position: "top-1/3 right-1/4" },
                        { icon: UserGroupIcon, delay: 0.6, position: "bottom-1/3 left-1/3" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className={`absolute ${item.position}`}
                          animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            delay: item.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="p-4 bg-white rounded-xl shadow-lg border border-purple-100">
                            <item.icon className="w-8 h-8 text-purple-600" />
                          </div>
                        </motion.div>
                      ))}

                      {/* Centre */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="p-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-2xl">
                          <UserGroupIcon className="w-12 h-12 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

