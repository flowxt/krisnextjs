"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon, HeartIcon, ScaleIcon, ShieldCheckIcon, LockClosedIcon } from "@heroicons/react/24/outline";
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

export default function Presentation() {
  const [openItems, setOpenItems] = useState({});
  return (
    <>
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-purple-50 dark:bg-gradient-to-t dark:from-purple-700 dark:to-indigo-900">
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
          <h2 className="text-5xl font-bold text-gray-900 leading-tight dark:text-white">
            Kristelle <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 dark:from-purple-100 dark:to-indigo-200">Feron</span>
          </h2>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="relative pl-8 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <HeartIcon className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-semibold">Un héritage énergétique</h3>
              </div>
              <p className="text-gray-600 leading-relaxed dark:text-purple-100">
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
              <p className="text-gray-600 leading-relaxed dark:text-purple-100">
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

    {/* Section voyage en 4 etapes */}
    
    <motion.section 
  className="py-24 bg-gradient-to-b from-pink-50 to-purple-100 dark:bg-gradient-to-b dark:from-purple-700 dark:to-indigo-900 overflow-hidden relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  {/* Particules d'arrière-plan subtiles */}
  <motion.div 
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.4 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    {[...Array(20)].map((_, i) => (
      <motion.div 
        key={i}
        className="absolute w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-300"
        initial={{ 
          x: Math.random() * 100 + "%", 
          y: Math.random() * 100 + "%",
          opacity: 0.3
        }}
        animate={{ 
          y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{ 
          duration: 5 + Math.random() * 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </motion.div>

  <div className="max-w-7xl mx-auto px-4">
    <motion.h3 
      className="text-4xl font-bold text-center mb-16 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.span 
        className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:bg-gradient-to-l dark:from-purple-50 dark:to-indigo-200"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 0%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
      >
        Votre voyage en 4 étapes sécurisées
      </motion.span>
    </motion.h3>
    
    <div className="grid md:grid-cols-4 gap-8 dark:text-purple-700">
      {[
        { icon: '🕊️', title: "Diagnostic énergétique", desc: "Analyse approfondie de vos blocages", delay: 0 },
        { icon: '🌀', title: "Protection sacrée", desc: "Mise en place d'un bouclier vibratoire", delay: 0.2 },
        { icon: '🌿', title: "Soin personnalisé", desc: "Procédure adaptée à votre signature énergétique", delay: 0.4 },
        { icon: '✨', title: "Intégration durable", desc: "Rituel de pérennisation des bienfaits", delay: 0.6 }
      ].map((step, i) => (
        <motion.div
          key={i}
          className="p-8 rounded-2xl bg-purple-50 border border-purple-100 hover:bg-white relative overflow-hidden group shadow-sm hover:shadow-xl"
          initial={{ 
            opacity: 0, 
            y: 30,
            scale: 0.9 
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            scale: 1 
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.8, 
            delay: step.delay,
            type: "spring", 
            stiffness: 50 
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          {/* Icône avec animation */}
          <motion.div 
            className="text-4xl mb-6 relative flex justify-center items-center h-16"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: step.delay + 0.3,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.2,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5, repeat: Infinity }
            }}
          >
            <motion.div 
              className="absolute w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-300/20"
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.2, 1] }}
              viewport={{ once: true }}
              transition={{ 
                delay: step.delay + 0.2,
                duration: 0.8
              }}
            />
            <span className="relative z-10">{step.icon}</span>
          </motion.div>
          
          <motion.h4 
            className="text-xl font-bold mb-3 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: step.delay + 0.4 }}
          >
            {step.title}
          </motion.h4>
          
          <motion.p 
            className="text-gray-600 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: step.delay + 0.5 }}
          >
            {step.desc}
          </motion.p>
          
          {/* Suppression des lignes de connexion entre les étapes */}
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

{/* Section des anges gardien et alliés spirituels */}
{/* <motion.section 
  className="py-24 relative overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
  <div className="absolute inset-0 bg-[url('/svg/angel-wings.svg')] opacity-10" />
  
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h3 className="text-4xl font-bold mb-8">
      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Vos alliés spirituels
      </span>
    </h3>
    
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {[
        { name: "Archange Michaël", role: "Protection & Courage", color: "blue" },
        { name: "Maitre Kuthumi", role: "Sagesse Intérieure", color: "gold" },
        { name: "Marie-Madeleine", role: "Guérison Emotionnelle", color: "pink" }
      ].map((guide, i) => (
        <div key={i} className="p-8 rounded-2xl bg-white shadow-lg">
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-${guide.color}-100 flex items-center justify-center`}>
            <SparklesIcon className={`w-12 h-12 text-${guide.color}-600`} />
          </div>
          <h4 className="text-xl font-bold mb-2">{guide.name}</h4>
          <p className="text-gray-600">{guide.role}</p>
        </div>
      ))}
    </div>

    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
      Chaque séance s'effectue sous la bienveillance active de ces êtres de lumière qui veillent à votre intégrité énergétique.
    </p>
  </div>
</motion.section> */}

{/* Banniere protection energetique  */}
{/* <motion.div 
  className="py-16 bg-purple-900 text-center"
  initial={{ y: 100 }}
  whileInView={{ y: 0 }}
>
  <div className="max-w-4xl mx-auto px-4">
    <ShieldCheckIcon className="w-16 h-16 mx-auto text-purple-300 mb-6" />
    <h3 className="text-3xl font-bold text-white mb-4">
      Environnement Sécurisé et Protégé
    </h3>
    <p className="text-purple-200 text-lg">
      Chaque séance est précédée d'un rituel de purification et protégée par un bouclier<br /> 
      énergétique selon les traditions chamaniques et reiki.
    </p>
  </div>
</motion.div> */}

{/* Notre ethique */}
<motion.section 
  className="py-24 bg-gradient-to-t from-pink-50 to-purple-100 dark:from-purple-700 dark:to-indigo-900 overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
      className="lg:w-1/2 mx-auto text-center"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 
        className="text-4xl font-bold mb-8 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:bg-gradient-to-l dark:from-purple-100 dark:to-indigo-200"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 0%" }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
        >
          Charte Éthique
        </motion.span>
      </motion.h3>
      
      <div className="space-y-8 text-left dark:text-purple-700">
        {[
          { title: "Confidentialité Absolue", icon: LockClosedIcon, delay: 0 },
          { title: "Non-Jugement", icon: HeartIcon, delay: 0.2 },
          { title: "Respect du Libre Arbitre", icon: ScaleIcon, delay: 0.4 }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl hover:bg-white relative overflow-hidden group shadow-sm hover:shadow-xl"
            initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: item.delay,
              type: "spring", 
              stiffness: 70 
            }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-indigo-100/30 opacity-0 group-hover:opacity-100"
              animate={{ x: ["0%", "100%", "0%"], opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="w-12 h-12 flex-shrink-0 relative"
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <item.icon className="w-12 h-12 text-purple-600 z-10 absolute" />
              <motion.div 
                className="w-12 h-12 bg-purple-200 rounded-full absolute -inset-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.delay + 0.3 }}
              />
            </motion.div>
            <motion.span 
              className="text-xl font-semibold relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay + 0.3 }}
            >
              {item.title}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</motion.section>

{/* FAQ */}
{/* FAQ */}
<motion.section 
  className="py-24 bg-gradient-to-b from-pink-50 to-purple-100 dark:from-purple-700 dark:to-indigo-900 overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-4xl mx-auto px-4">
    <motion.h3 
      className="text-4xl font-bold text-center mb-16 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      Vos questions, {' '}
      <motion.span 
        className="text-purple-600 dark:text-purple-400 inline-block"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        nos réponses
      </motion.span>
    </motion.h3>

    <div className="space-y-6 dark:text-purple-700">
      {faqItems.map((item, i) => (
        <motion.div
          key={i}
          className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden group"
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
                className={`w-6 h-6 text-purple-600`}
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
    </>
    
  );
}