"use client";

import { motion } from "framer-motion";
import TherapistsCards from "../components/TherapistsCards";
import { metadata } from "./metadata";

export default function APropos() {
  return (
    <main className="pt-20">
      {/* Section Nos Thérapeutes */}
      <TherapistsCards />

      {/* Section Interview */}
      <section className="w-full py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-indigo-200 to-transparent rounded-full opacity-30"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-r from-purple-200 to-transparent rounded-full opacity-25"
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Découvrez mon parcours
              </span>
              <br />
              dans cette interview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ✨ Dans cette émission de La Spiritualité pour Tous, je
              partage mon univers rempli d'expériences étonnantes,
              d'anecdotes touchantes et de messages inspirants 👼
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vidéo YouTube */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_xVkQTn0v6M?si=0PnVewOaTc5Equi6"
                    title="Interview Kris La Voix des Anges - La Spiritualité pour Tous"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-3xl"
                  ></iframe>
                </div>
                {/* Overlay décoratif */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"></div>
              </div>
            </motion.div>

            {/* Contenu textuel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🎙️</span>
                  Une rencontre authentique
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Médium de naissance, je vous entraîne dans mon univers
                  rempli d'expériences étonnantes, d'anecdotes touchantes et
                  de messages inspirants.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Même avec mes dons innés, je rappelle que rien n'est
                  acquis : il faut oser{" "}
                  <span className="font-semibold text-purple-600">
                    travailler sur soi
                  </span>{" "}
                  💎, apprendre à s'écouter et transformer ses fragilités en
                  forces 💖.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Avec simplicité et authenticité, je partage mon chemin
                  spirituel, mes prises de conscience et ma vision de la
                  médiumnité 🔮. Une rencontre lumineuse, riche
                  d'enseignements et d'espoir 🌈✨.
                </p>
              </div>

              {/* Call to action */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white text-center"
              >
                <p className="text-lg font-medium mb-2">
                  💫 Envie d'en savoir plus sur mon approche ?
                </p>
                <p className="text-indigo-100">
                  Découvrez mes accompagnements personnalisés
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

