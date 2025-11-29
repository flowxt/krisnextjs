"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function PartnersFloatingButton() {
  const pathname = usePathname();
  
  // Ne pas afficher le bouton sur la page partenaires elle-même
  if (pathname === "/partenaires") {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link href="/partenaires">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          {/* Effet de glow animé en arrière-plan */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
            animate={{
              background: [
                "linear-gradient(to right, #c084fc, #6366f1, #a855f7)",
                "linear-gradient(to right, #a855f7, #c084fc, #6366f1)",
                "linear-gradient(to right, #6366f1, #a855f7, #c084fc)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Bouton principal */}
          <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
            <SparklesIcon className="w-5 h-5 animate-pulse" />
            <span className="font-medium text-sm">Voir nos recommandations</span>
          </div>
          
          {/* Effet de particules scintillantes */}
          <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/60 rounded-full"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                x: [-10, 10],
                y: [-10, 10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-purple-200 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [10, -10],
                y: [10, -10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

