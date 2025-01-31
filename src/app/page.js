import { FiChevronDown, FiInstagram, FiFacebook } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-700">
      {/* Hero Section avec vidéo */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          className="absolute z-0 w-full h-full object-cover filter brightness-50"
        >
          <source src="/video/space2.mp4" type="video/mp4" />
        </video>

        <div className="z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-light mb-6 font-cursive">
            Kris La Voix des Anges
          </h1>
          <p className="text-xl md:text-3xl mb-8 italic">
            "Retrouvez l'harmonie entre{" "}
            <span className="inline-block bg-pink-500 -rotate-1 px-1">
              corps et esprit
            </span>
            "
          </p>
          <p className="text-lg md:text-2xl mb-6">
            Soin Holistique et énergétique
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg transition-all">
            Prendre rendez-vous
          </button>
        </div>
        <FiChevronDown className="absolute bottom-8 text-white text-4xl animate-bounce z-10" />
      </section>

      {/* Présentation de Kris */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="/photo/kris.jpg"
            alt="Kris - Praticienne énergétique"
            className="w-full md:w-1/3 rounded-2xl shadow-xl"
          />

          <div className="space-y-6 text-gray-800">
            <h2 className="text-4xl text-indigo-800 font-cursive">
              Une connexion sacrée dès la naissance
            </h2>
            <p className="text-lg leading-relaxed">
              Dès les premiers battements de mon cœur, un lien sacré s'est tissé
              avec les royaumes invisibles. Un fil d’or vibrant, hérité au
              tréfonds de mes gènes par mon arrière-grand-mère, celle qui m'a
              transmis ses dons de médiumnité et son magnétisme singulier.
            </p>
            <p className="text-lg leading-relaxed">
              Aujourd’hui, guidée par les murmures des Anges et des Guides, je
              vous propose un accompagnement holistique unique. Grâce à une
              approche alliant psychologie positive et techniques énergétiques
              avancées, je vous aide à retrouver l’équilibre et à libérer votre
              plein potentiel.
            </p>
            <p className="text-xl text-purple-700 font-semibold italic">
              “Révélez la plénitude de votre être et initiez un processus de
              renaissance vibratoire.”
            </p>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl text-purple-900 mb-12 font-cursive">
            Leurs avis
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Une expérience transformatrice qui m'a redonné espoir."
                </p>
                <p className="text-indigo-600">- Marie, 34 ans</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
