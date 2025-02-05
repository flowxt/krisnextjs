"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon, HeartIcon, ScaleIcon } from "@heroicons/react/24/outline";

export default function Presentation() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 gap-16">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 relative"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-teal-100 transform -rotate-3 rounded-2xl" />
            <Image
              src="/photo/kris.jpg"
              alt="Kristelle Feron"
              width={500}
              height={700}
              className="relative rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300 object-cover h-[550px] w-full"
            />
            <div className="absolute -bottom-8 right-8 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">Médium • Magnétiseuse • Guide</span>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 space-y-10"
        >
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Kristelle <span className="text-purple-600">Feron</span>
          </h2>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="relative pl-8 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <HeartIcon className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-semibold">Un héritage énergétique</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
              Dès les premiers battements de mon cœur, un lien sacré s'est tissé avec les royaumes invisibles qui sous-tendent notre existence.Un fil d'or vibrant, hérité au tréfonds de mes gènes par mon arrière-grand-mère, celle qui m'a transmis ses dons de médiumnité et son magnétisme singulier.Je percevais les énergies subtiles rayonner tout autour de moi, telles des auréoles invisibles. Cette connexion innée aux dimensions spirituelles éveilla très tôt en moi un destin.Vers l'âge de 7 ans, à l'aube de ma tendre innocence, j'ai pris conscience de mon lien privilégié avec l'au-delà.Des ressentis profonds,des émotions que mon jeune être ne parvenait à saisir.<br /><br />
              Des années durant, j'ai cheminé avec ces sens exacerbés,ces facultés à fleur de peau que je n'osais révéler.Ce n'est qu'une fois l'âge adulte atteint que j'ai pu embrasser pleinement ce don,cette grâce de communier avec les royaumes angéliques.
              </p>
            </div>

            {/* Section 2 */}
            <div className="relative pl-8 border-l-4 border-teal-500">
              <div className="flex items-center gap-3 mb-4">
                <ScaleIcon className="w-8 h-8 text-teal-600" />
                <h3 className="text-2xl font-semibold">Un équilibre holistique</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
              En écoutant les murmures secrets des Anges et des Guides,je vous propose un accompagnement holistique unique,alliant psychologie positive et techniques énergétiques avancées.Par le magnétisme, les soins énergétiques sur-mesure,l'harmonisation et le coaching holistique, nous agirons ensemble sur les plans physique, mental, émotionnel et spirituelpour une libération totale de votre énergie vitale, nécessaire à votre évolution du quotidien.<br /><br />
              Quelle que soit l'étape de votre cheminement,je vous accompagne à révéler la plénitude de votre être. En m'ouvrant les portes de votre âme,nous adhérerons à un processus de renaissance vibratoire,où chaque cellule de votre corps rayonnera d'une nouvelle lumière apaisée et resplendissante.<br /><br />Sur les sentiers sacrés de l'évolution, vers l'accomplissement de votre destinée la plus précieuse
              </p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-purple-50 p-6 rounded-xl border border-purple-100"
            >
              <p className="text-xl italic text-purple-800">
                “Le changement n'est pas douloureux, seule la résistance l'est...”
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    
  );
}