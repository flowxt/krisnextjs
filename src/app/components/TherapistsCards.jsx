"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesIcon, XMarkIcon, HeartIcon, ScaleIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function TherapistsCards() {
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  const therapists = [
    {
      id: "kris",
      name: "Kristelle",
      lastName: "Feron",
      title: "Médium • Énergéticienne • Coach",
      image: "/photo/kris.jpg",
      logo: "/photo/logonew.jpg",
      colors: {
        primary: "purple",
        secondary: "indigo",
        gradient: "from-purple-400 to-indigo-600",
        gradientBg: "from-purple-100 to-indigo-100",
        glow: "from-purple-400 via-indigo-500 to-purple-600",
        border: "border-purple-200 hover:border-purple-300",
        text: "text-purple-600",
        bgLight: "bg-purple-50",
      },
      shortDescription: "Un héritage énergétique transmis de génération en génération pour vous guider vers votre plénitude.",
      fullDescription: [
        {
          icon: HeartIcon,
          title: "Un héritage énergétique",
          content: "Dès les premiers battements de mon cœur, un lien sacré s'est tissé avec les royaumes invisibles qui sous-tendent notre existence. Un fil d'or vibrant, hérité au tréfonds de mes gènes par mon arrière-grand-mère, celle qui m'a transmis ses dons de médiumnité et son magnétisme singulier. Je percevais les énergies subtiles rayonner tout autour de moi, telles des auréoles invisibles. Cette connexion innée aux dimensions spirituelles éveilla très tôt en moi un destin. Vers l'âge de 7 ans, à l'aube de ma tendre innocence, j'ai pris conscience de mon lien privilégié avec l'au-delà. Des ressentis profonds, des émotions que mon jeune être ne parvenait à saisir.\n\nDes années durant, j'ai cheminé avec ces sens exacerbés, ces facultés à fleur de peau que je n'osais révéler. Ce n'est qu'une fois l'âge adulte atteint que j'ai pu embrasser pleinement ce don, cette grâce de communier avec les royaumes angéliques."
        },
        {
          icon: ScaleIcon,
          title: "Un équilibre holistique",
          content: "En écoutant les murmures secrets des Anges et des Guides, je vous propose un accompagnement holistique unique, alliant psychologie positive et techniques énergétiques avancées. Par le magnétisme, les soins énergétiques sur-mesure, l'harmonisation et le coaching holistique, nous agirons ensemble sur les plans physique, mental, émotionnel et spirituel pour une libération totale de votre énergie vitale, nécessaire à votre évolution du quotidien.\n\nQuelle que soit l'étape de votre cheminement, je vous accompagne à révéler la plénitude de votre être. En m'ouvrant les portes de votre âme, nous adhérerons à un processus de renaissance vibratoire, où chaque cellule de votre corps rayonnera d'une nouvelle lumière apaisée et resplendissante.\n\nSur les sentiers sacrés de l'évolution, vers l'accomplissement de votre destinée la plus précieuse."
        }
      ],
      quote: "Le changement n'est pas douloureux, seule la résistance l'est...",
      link: "/services"
    },
    {
      id: "patrice",
      name: "Patrice",
      lastName: "Guffon",
      title: "Thérapeute • Coach",
      image: "/photo/patrice.jpg",
      logo: "/photo/logo-patrice.jpg",
      colors: {
        primary: "blue",
        secondary: "cyan",
        gradient: "from-blue-400 to-cyan-600",
        gradientBg: "from-blue-100 to-cyan-100",
        glow: "from-blue-400 via-cyan-500 to-blue-600",
        border: "border-blue-200 hover:border-blue-300",
        text: "text-blue-600",
        bgLight: "bg-blue-50",
      },
      shortDescription: "Libération émotionnelle masculine par l'olfactothérapie et le zéro mental pour retrouver votre état d'être aligné.",
      fullDescription: [
        {
          icon: HeartIcon,
          title: "Libération émotionnelle masculine",
          content: "J'accompagne les hommes vers leur libération émotionnelle profonde en travaillant sur les ressentis corporels, amenant à une transformation de leur état d'être. En comprenant que nous ne souffrons que de deux choses - notre mémoire et notre imagination - nous pouvons retrouver un état d'être aligné, libre et apaisé."
        },
        {
          icon: LightBulbIcon,
          title: "Mon approche",
          content: "👉 L'Olfacto-Thérapie : L'odorat est directement lié à la zone du cerveau, responsable de la mémoire. Ainsi une thérapie olfactive aide à se libérer des blocages émotionnels liés au passé. Un véritable changement d'état d'être.\n\n👉 Le Zéro-Mental : Nous sommes hypnothisés à 99% par nos pensées. Nous ne voyons pas le monde tel qu'il est mais le reflet de nos pensées. Il n'y a qu'une seule chose qui part en thérapie, c'est le mental.\n\nJe propose également une approche combinée Zéro-Mental & soin énergétique pour un résultat optimal, conduisant à une transformation complète et durable."
        }
      ],
      quote: "Parce qu'il faut une étiquette pour être classé, identifié dans notre société, j'ai choisi par convention celle de thérapeute/Coach pour accompagner votre transformation.\n\nElle commence dès maintenant : vous êtes responsable à 100% de votre état d'être, la croyance que le thérapeute va gagner le combat que vous menez contre vous même, est une illusion qui n'amènera que plus de souffrance en vous.\n\nMa responsabilité : mon intention, mon engagement, ma détermination au service de votre désir profond de changement",
      link: "/patrice"
    }
  ];

  return (
    <>
      <section className="w-full py-24 bg-gradient-to-b from-purple-50 via-white to-blue-50 relative overflow-hidden">
        {/* Particules de fond subtiles */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? "#a78bfa" : "#60a5fa",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-16 px-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-2 rounded-full mb-6 shadow-md"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Nos Thérapeutes
            </span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Deux expertises,</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              un même engagement
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos accompagnements personnalisés pour votre transformation intérieure
          </p>
        </motion.div>

        {/* Cartes des thérapeutes */}
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {therapists.map((therapist, index) => (
              <motion.div
                key={therapist.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Effet de glow animé en arrière-plan */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${therapist.colors.glow} rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Carte principale */}
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 ${therapist.colors.border} transition-all duration-300`}>
                  {/* Bande décorative supérieure */}
                  <div className={`h-2 bg-gradient-to-r ${therapist.colors.glow}`} />

                  {/* Image avec overlay magique */}
                  <div className="relative h-[450px] overflow-hidden">
                    <Image
                      src={therapist.image}
                      alt={`${therapist.name} ${therapist.lastName}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent`} />
                    
                    {/* Particules magiques qui apparaissent au survol */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 ${therapist.colors.bgLight} rounded-full`}
                          initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                          }}
                          animate={{
                            y: [
                              Math.random() * 100 + "%",
                              Math.random() * 100 + "%",
                            ],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1.5, 0.5],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      ))}
                    </div>

                    {/* Badge avec logo */}
                    <motion.div
                      className="absolute top-6 right-6"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: "spring" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="relative h-16 w-16 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border-2 border-white/50 overflow-hidden">
                        <Image
                          src={therapist.logo}
                          alt={`Logo ${therapist.name}`}
                          fill
                          className="object-cover p-1"
                        />
                      </div>
                    </motion.div>

                    {/* Informations en bas de l'image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      >
                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                          {therapist.name}{" "}
                          <span className={`bg-gradient-to-r ${therapist.colors.gradient} bg-clip-text text-transparent`}>
                            {therapist.lastName}
                          </span>
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <SparklesIcon className={`w-5 h-5 ${therapist.colors.text}`} />
                          </motion.div>
                          <span className={`${therapist.colors.text} font-semibold text-sm bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full`}>
                            {therapist.title}
                          </span>
                        </div>

                        <p className="text-white/90 text-sm leading-relaxed">
                          {therapist.shortDescription}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Zone des boutons */}
                  <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.button
                        onClick={() => setSelectedTherapist(therapist)}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${therapist.colors.glow} shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                      >
                        <SparklesIcon className="w-5 h-5" />
                        <span>En savoir plus</span>
                      </motion.button>

                      <Link href={therapist.link} className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full py-4 px-6 rounded-xl font-semibold ${therapist.colors.text} bg-white border-2 ${therapist.colors.border} hover:${therapist.colors.bgLight} transition-all duration-300 flex items-center justify-center gap-2`}
                        >
                          <span>Voir les soins</span>
                          <span className="text-xl">→</span>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modale de présentation détaillée */}
      <AnimatePresence>
        {selectedTherapist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTherapist(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
            >
              {/* Bande décorative supérieure */}
              <div className={`h-2 bg-gradient-to-r ${selectedTherapist.colors.glow}`} />

              {/* Bouton fermer */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedTherapist(null)}
                className={`absolute top-6 right-6 z-10 p-2 rounded-full bg-white shadow-lg ${selectedTherapist.colors.text} hover:${selectedTherapist.colors.bgLight} transition-colors`}
              >
                <XMarkIcon className="w-6 h-6" />
              </motion.button>

              {/* Contenu scrollable */}
              <div className="overflow-y-auto max-h-[85vh] p-8">
                {/* En-tête avec logo */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="relative h-20 w-20 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-xl border-2 border-white overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src={selectedTherapist.logo}
                      alt={`Logo ${selectedTherapist.name}`}
                      fill
                      className="object-cover p-2"
                    />
                  </motion.div>

                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
                      {selectedTherapist.name}{" "}
                      <span className={`bg-gradient-to-r ${selectedTherapist.colors.gradient} bg-clip-text text-transparent`}>
                        {selectedTherapist.lastName}
                      </span>
                    </h2>
                    <p className={`${selectedTherapist.colors.text} font-semibold text-sm`}>
                      {selectedTherapist.title}
                    </p>
                  </div>
                </div>

                {/* Sections de contenu */}
                <div className="space-y-8">
                  {selectedTherapist.fullDescription.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`relative pl-8 border-l-4 border-${selectedTherapist.colors.primary}-500`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <section.icon className={`w-8 h-8 ${selectedTherapist.colors.text}`} />
                        </motion.div>
                        <h3 className="font-heading text-2xl font-semibold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}

                  {/* Citation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`bg-gradient-to-br ${selectedTherapist.colors.gradientBg} p-6 rounded-xl border ${selectedTherapist.colors.border} shadow-sm relative overflow-hidden`}
                  >
                    {/* Particules de citation */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 rounded-full ${selectedTherapist.colors.bgLight}`}
                          initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                          }}
                          animate={{
                            y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                            opacity: [0.2, 0.8, 0.2],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      ))}
                    </div>

                    <p className={`text-lg italic ${selectedTherapist.colors.text} relative z-10 whitespace-pre-line`}>
                      "{selectedTherapist.quote}"
                    </p>
                  </motion.div>
                </div>

                {/* Bouton d'action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 flex justify-center"
                >
                  <Link href={selectedTherapist.link}>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`py-4 px-8 rounded-xl font-semibold text-white bg-gradient-to-r ${selectedTherapist.colors.glow} shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                    >
                      <span>Découvrir les soins</span>
                      <span className="text-xl">→</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

