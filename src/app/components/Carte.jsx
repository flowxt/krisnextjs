import { motion } from "framer-motion";
import { RocketLaunchIcon, SunIcon, BookOpenIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Carte({ formule, index }) {
  return (
    <motion.div
      key={formule.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Effet de fond gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-teal-100 transform -rotate-3 rounded-2xl shadow-lg" />

      {/* Carte */}
      <div className="relative bg-white p-8 rounded-2xl shadow-md transition-all duration-300 group-hover:-translate-y-2 h-full">
        {/* En-tête de carte */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-purple-100 rounded-lg">
            {formule.id === 1 && <RocketLaunchIcon className="w-8 h-8 text-purple-600" />}
            {formule.id === 2 && <SunIcon className="w-8 h-8 text-purple-600" />}
            {formule.id === 3 && <BookOpenIcon className="w-8 h-8 text-purple-600" />}
            {formule.id === 4 && <AcademicCapIcon className="w-8 h-8 text-purple-600" />}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{formule.title}</h3>
            <p className="text-purple-600 font-semibold">{formule.price}</p>
          </div>
        </div>
        {/* Contenu de la carte */}
        <p className="text-gray-600 leading-relaxed">{formule.description}</p>
      </div>
    </motion.div>
  );
}