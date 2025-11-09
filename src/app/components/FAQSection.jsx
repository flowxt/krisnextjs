"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

const faqItems = [
  {
    question: "Comment se déroule une séance ?",
    answer: "Chaque séance commence par un temps d'échange pour comprendre vos besoins. Ensuite, selon la prestation choisie, nous procédons au soin énergétique dans un environnement serein et protégé. La séance se termine par un debriefing pour intégrer les changements."
  },
  {
    question: "Les séances à distance sont-elles aussi efficaces ?",
    answer: "Oui, l'énergie n'est pas limitée par la distance physique. Les séances à distance sont tout aussi puissantes que celles en présentiel, car nous travaillons sur le plan vibratoire qui transcende l'espace."
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer: "Cela dépend de votre situation et de vos objectifs. Certaines personnes ressentent des changements significatifs dès la première séance, d'autres préfèrent un accompagnement sur plusieurs séances pour une transformation plus profonde."
  },
  {
    question: "Comment se préparer à une séance ?",
    answer: "Venez comme vous êtes, dans une tenue confortable. Il est conseillé d'être dans un état d'esprit ouvert et d'éviter les repas copieux juste avant la séance. L'essentiel est votre intention de changement."
  },
  {
    question: "Les soins énergétiques remplacent-ils les traitements médicaux ?",
    answer: "Non, les soins énergétiques sont complémentaires à la médecine conventionnelle. Ils ne remplacent en aucun cas un traitement médical en cours. Ils agissent en synergie pour votre bien-être global."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState({});

  return (
    <motion.section 
      className="py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-purple-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h3 
          className="font-heading text-4xl font-bold text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Vos questions,{' '}
          <motion.span 
            className="text-purple-600 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            nos réponses
          </motion.span>
        </motion.h3>

        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden group border border-purple-100 hover:border-indigo-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 70
              }}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 10px 30px -10px rgba(120, 80, 170, 0.2)"
              }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setOpenItems(prev => ({ ...prev, [i]: !prev[i] }))}
            >
              {/* Effet de vague au survol */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              
              <div className="flex justify-between items-center relative z-10">
                <motion.h4 
                  className="text-xl font-semibold"
                  animate={{ 
                    color: openItems[i] ? "#9333ea" : "#1f2937"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.question}
                </motion.h4>
                
                <motion.div
                  animate={{ 
                    rotate: openItems[i] ? 180 : 0,
                    backgroundColor: openItems[i] ? "rgba(147, 51, 234, 0.1)" : "transparent"
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="p-2 rounded-full"
                >
                  <ChevronDownIcon 
                    className="w-6 h-6 text-purple-600"
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ 
                  height: openItems[i] ? "auto" : 0,
                  opacity: openItems[i] ? 1 : 0
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.04, 0.62, 0.23, 0.98]
                }}
              >
                <motion.p 
                  className="mt-4 text-gray-600 relative z-10"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ 
                    y: openItems[i] ? 0 : -10,
                    opacity: openItems[i] ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: openItems[i] ? 0.2 : 0
                  }}
                >
                  {item.answer}
                </motion.p>

                {/* Ligne décorative qui apparaît quand la FAQ est ouverte */}
                <motion.div 
                  className="h-0.5 bg-gradient-to-r from-purple-200 to-transparent mt-4"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ 
                    scaleX: openItems[i] ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

