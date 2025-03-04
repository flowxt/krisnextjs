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
            Kristelle <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Feron</span>
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

    {/* Section voyage en 4 etapes */}
    <motion.section 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  className="py-24 bg-gradient-to-b from-pink-50 to-purple-100 ">
  <div className="max-w-7xl mx-auto px-4">
    <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      Votre voyage en 4 étapes sécurisées
    </h3>
    
    <div className="grid md:grid-cols-4 gap-8">
      {[
        { icon: '🕊️', title: "Diagnostic énergétique", desc: "Analyse approfondie de vos blocages" },
        { icon: '🌀', title: "Protection sacrée", desc: "Mise en place d'un bouclier vibratoire" },
        { icon: '🌿', title: "Soin personnalisé", desc: "Procédure adaptée à votre signature énergétique" },
        { icon: '✨', title: "Intégration durable", desc: "Rituel de pérennisation des bienfaits" }
      ].map((step, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          className="p-8 rounded-2xl bg-purple-50 border border-purple-100"
        >
          <div className="text-4xl mb-4">{step.icon}</div>
          <h4 className="text-xl font-bold mb-2">{step.title}</h4>
          <p className="text-gray-600">{step.desc}</p>
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
<section className="py-24 bg-gradient-to-t from-pink-50 to-purple-100">
  <div className="max-w-7xl mx-auto px-4">
    <div className="lg:w-1/2 mx-auto text-center">
      <h3 className="text-4xl font-bold mb-8">
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Charte Éthique
        </span>
      </h3>
      
      <div className="space-y-8 text-left">
        {[
          { title: "Confidentialité Absolue", icon: LockClosedIcon },
          { title: "Non-Jugement", icon: HeartIcon },
          { title: "Respect du Libre Arbitre", icon: ScaleIcon }
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl"
          >
            <item.icon className="w-12 h-12 text-purple-600 flex-shrink-0" />
            <span className="text-xl font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="py-24 bg-gradient-to-b from-pink-50 to-purple-100">
  <div className="max-w-4xl mx-auto px-4">
    <h3 className="text-4xl font-bold text-center mb-16">
      Vos questions, <span className="text-purple-600">nos réponses</span>
    </h3>

    <div className="space-y-6">
      {faqItems.map((item, i) => (
        <motion.div
          key={i}
          className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onClick={() => setOpenItems(prev => ({ ...prev, [i]: !prev[i] }))}
        >
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold">{item.question}</h4>
            <ChevronDownIcon 
              className={`w-6 h-6 text-purple-600 transition-transform duration-300 ${
                openItems[i] ? 'rotate-180' : ''
              }`}
            />
          </div>
          <motion.p 
            className={`mt-4 text-gray-600 ${openItems[i] ? 'block' : 'hidden'}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: openItems[i] ? 'auto' : 0,
              opacity: openItems[i] ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {item.answer}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </>
    
  );
}