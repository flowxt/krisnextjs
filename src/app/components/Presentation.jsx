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
  //
];

export default function Presentation() {
  const [openItems, setOpenItems] = useState({});
  return (
    <>
<motion.section 
  className="w-full py-24 overflow-hidden relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>


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
          className="absolute inset-0 bg-gradient-to-r from-purple-100 to-teal-100 transform -rotate-3 rounded-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02, rotate: "-2deg" }}
        />
        <motion.div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/photo/kris.jpg"
            alt="Kristelle Feron"
            width={500}
            height={700}
            className="relative transform group-hover:-translate-y-2 transition-all duration-500 object-cover h-[550px] w-full"
          />
          {/* Overlay lumineux qui se déplace au survol */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-purple-300/0 via-white/20 to-transparent opacity-0 group-hover:opacity-100"
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
            <SparklesIcon className="w-5 h-5 text-purple-600" />
          </motion.div>
          <span className="text-purple-600 font-semibold">Médium • Magnétiseuse • Guide</span>
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
      <motion.div 
  className="flex items-center gap-4 mb-4"
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  <motion.h2 
    className="font-heading text-4xl font-bold text-gray-900 leading-tight"
  >
    Kristelle{" "}
    <motion.span 
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 inline-block"
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: "100% 0%" }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
    >
      Feron
    </motion.span>
  </motion.h2>
  
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.7 }}
    whileHover={{ scale: 1.05, rotate: 5 }}
    className="relative h-14 w-14 lg:h-16 lg:w-16"
  >
    <Image
      src="/photo/logonew.jpg"
      alt="Logo Kristelle Feron"
      fill
      className="object-contain rounded-full shadow-sm"
    />
  </motion.div>
</motion.div>

      <div className="space-y-8">
        {/* Section 1 - avec animations */}
        <motion.div 
          className="relative pl-8 border-l-4 border-purple-500 overflow-hidden"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ 
            boxShadow: "0 4px 20px -8px rgba(147, 51, 234, 0.3)",
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
              <HeartIcon className="w-8 h-8 text-purple-600" />
            </motion.div>
            <h3 className="font-heading text-2xl font-semibold">Un héritage énergétique</h3>
          </motion.div>
          <p className="font-sans text-gray-600 leading-relaxed ">
            Dès les premiers battements de mon cœur, un lien sacré s'est tissé avec les royaumes invisibles qui sous-tendent notre existence. Un fil d'or vibrant, hérité au tréfonds de mes gènes par mon arrière-grand-mère, celle qui m'a transmis ses dons de médiumnité et son magnétisme singulier. Je percevais les énergies subtiles rayonner tout autour de moi, telles des auréoles invisibles. Cette connexion innée aux dimensions spirituelles éveilla très tôt en moi un destin. Vers l'âge de 7 ans, à l'aube de ma tendre innocence, j'ai pris conscience de mon lien privilégié avec l'au-delà. Des ressentis profonds, des émotions que mon jeune être ne parvenait à saisir.<br /><br />
            Des années durant, j'ai cheminé avec ces sens exacerbés, ces facultés à fleur de peau que je n'osais révéler. Ce n'est qu'une fois l'âge adulte atteint que j'ai pu embrasser pleinement ce don, cette grâce de communier avec les royaumes angéliques.
          </p>
        </motion.div>

        {/* Section 2 - avec animations */}
        <motion.div 
          className="relative pl-8 border-l-4 border-teal-500"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ 
            boxShadow: "0 4px 20px -8px rgba(20, 184, 166, 0.3)",
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
              <ScaleIcon className="w-8 h-8 text-teal-600" />
            </motion.div>
            <h3 className="font-heading text-2xl font-semibold">Un équilibre holistique</h3>
          </motion.div>
          <p className="font-sans text-gray-600 leading-relaxed">
            En écoutant les murmures secrets des Anges et des Guides, je vous propose un accompagnement holistique unique, alliant psychologie positive et techniques énergétiques avancées. Par le magnétisme, les soins énergétiques sur-mesure, l'harmonisation et le coaching holistique, nous agirons ensemble sur les plans physique, mental, émotionnel et spirituel pour une libération totale de votre énergie vitale, nécessaire à votre évolution du quotidien.<br /><br />
            Quelle que soit l'étape de votre cheminement, je vous accompagne à révéler la plénitude de votre être. En m'ouvrant les portes de votre âme, nous adhérerons à un processus de renaissance vibratoire, où chaque cellule de votre corps rayonnera d'une nouvelle lumière apaisée et resplendissante.<br /><br />Sur les sentiers sacrés de l'évolution, vers l'accomplissement de votre destinée la plus précieuse
          </p>
        </motion.div>

        {/* Citation avec animation */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          className="bg-gradient-to-br from-purple-50 to-purple-100  p-6 rounded-xl border border-purple-100  shadow-sm relative overflow-hidden"
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
                className="absolute w-1 h-1 rounded-full bg-purple-300/40 "
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
            <p className="text-xl italic text-purple-800 relative z-10">
              "Le changement n'est pas douloureux, seule la résistance l'est..."
            </p>
          </motion.div>
          
          {/* Élément décoratif pour la citation */}
          <motion.div 
            className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-purple-200/30 "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  </div>
</motion.section>

    {/* Section voyage en 4 etapes */}
    
    <motion.section 
  className="py-24 overflow-hidden relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  


  <div className="max-w-7xl mx-auto px-4">
    <motion.h3 
      className="font-heading text-4xl font-bold text-center mb-16 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.span 
        className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent "
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 0%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
      >
        Votre voyage en 4 étapes sécurisées
      </motion.span>
    </motion.h3>
    
    <div className=" grid md:grid-cols-4 gap-8">
      {[
        { icon: '🕊️', title: "Diagnostic énergétique", desc: "Analyse approfondie de vos blocages", delay: 0 },
        { icon: '🌀', title: "Protection sacrée", desc: "Mise en place d'un bouclier vibratoire", delay: 0.2 },
        { icon: '🌿', title: "Soin personnalisé", desc: "Procédure adaptée à votre signature énergétique", delay: 0.4 },
        { icon: '✨', title: "Intégration durable", desc: "Rituel de pérennisation des bienfaits", delay: 0.6 }
      ].map((step, i) => (
        <motion.div
          key={i}
          className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-200 hover:border-indigo-300 hover:bg-white relative overflow-hidden group shadow-md hover:shadow-2xl"
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
              className="absolute w-16 h-16 rounded-full bg-purple-100 "
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
  className="py-24 overflow-hidden"
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
        className="font-heading text-4xl font-bold mb-8 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 0%" }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
        >
          Charte Éthique
        </motion.span>
      </motion.h3>
      
      <div className="space-y-8 text-left ">
        {[
          { title: "Confidentialité Absolue", icon: LockClosedIcon, delay: 0 },
          { title: "Non-Jugement", icon: HeartIcon, delay: 0.2 },
          { title: "Respect du Libre Arbitre", icon: ScaleIcon, delay: 0.4 }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-6 p-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white relative overflow-hidden group shadow-md hover:shadow-xl border border-purple-100 hover:border-indigo-200"
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
  className="py-24 overflow-hidden"
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
      Vos questions, {' '}
      <motion.span 
        className="text-purple-600  inline-block"
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