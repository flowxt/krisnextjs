import Link from "next/link";

const formules = [
  {
    id: 1,
    title: "Boost Changement",
    price: "480€",
    duration: "5 Séances intensives - Valable 1 mois",
    description: [
      "Coaching d'Accompagnement Holistique",
      "Soins Énergétiques",
      "Définir ses objectifs",
      "Relaxation profonde",
    ],
  },
  {
    id: 2,
    title: "Les Saisons - 4 Soins Énergétiques",
    price: "340€",
    duration: "Valable 12 mois",
    description: [
      "Soin Énergétique Personnalisé",
      "Les Soins Saisons Formule 4 soins",
      "Séance à définir",
      "Soin Arbre de Vie",
    ],
  },
  {
    id: 3,
    title: "10h Accompagnement Holistique à l'Éveil",
    price: "800€",
    duration: "10 séances d’1h - Valable 6 mois",
    description: [
      "Reconnaître son mental et les perceptions",
      "Trouver un équilibre dans la vie spirituelle",
      "Comment se protéger",
      "Trouver son outil",
      "Comment faire un soin",
    ],
  },
  {
    id: 4,
    title: "30h Accompagnement Holistique à l'Éveil",
    price: "1 930€",
    duration: "Valable 10 mois",
    description: [
      "Suis-je fait pour me diriger dans une voie spirituelle",
      "Les différents mondes",
      "La mission de vie et pourquoi",
      "Explorer et s’exercer",
      "Mise en condition de soin",
    ],
  },
];

export default function Soins() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold text-center mb-10">
          Soins & Formules
        </h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Découvrez nos offres et choisissez la formule qui vous convient pour
          un accompagnement holistique sur-mesure.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {formules.map((formule) => (
            <div
              key={formule.id}
              className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-semibold text-purple-700">
                {formule.title}
              </h2>
              <p className="text-lg font-bold text-indigo-600">
                {formule.price}
              </p>
              <p className="italic text-sm mb-4">{formule.duration}</p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                {formule.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full w-full">
                  Sélectionner
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
