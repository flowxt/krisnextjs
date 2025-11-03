import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import PartnersGrid from "../components/PartnersGrid";
import GoogleReviews from "../components/GoogleReviews";
export const metadata = {
  title: "Mes Recommandations | Kris La Voix des Anges",
  description:
    "Découvrez les professionnels de confiance que je recommande pour vous offrir un accompagnement holistique complet.",
  alternates: {
    canonical: "https://www.krislavoixdesanges.com/partenaires",
  },
};

export default function PartenairesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Section avec animation */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animations de fond */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 opacity-20 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 opacity-20 blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-200 to-indigo-200 opacity-10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-11 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-purple-200">
              <span className="text-2xl animate-bounce">🤝</span>
              <span className="text-purple-700 font-semibold">
                Réseau de confiance
              </span>
            </div>
          </div>

          {/* Titre principal */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight">
              <span className="block text-gray-900 mb-2">Mes</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Recommandations
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-sans leading-relaxed px-4">
              Découvrez mon réseau de professionnels d&apos;exception. Des
              praticiens avec qui je partage des valeurs d&apos;
              <span className="font-semibold text-purple-600">
                authenticité
              </span>
              , d&apos;
              <span className="font-semibold text-pink-600">excellence</span> et
              de{" "}
              <span className="font-semibold text-indigo-600">
                bienveillance
              </span>
              .
            </p>
          </div>

          {/* Section valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                emoji: "✨",
                title: "Qualité",
                desc: "Des professionnels rigoureusement sélectionnés",
              },
              {
                emoji: "💜",
                title: "Confiance",
                desc: "Un réseau éprouvé et authentique",
              },
              {
                emoji: "🌟",
                title: "Excellence",
                desc: "Des accompagnements d'exception",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{value.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Citation */}
      <section className="py-12 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-2xl md:text-3xl text-white font-medium italic leading-relaxed">
            "Seul on va plus vite, ensemble on va plus loin"
          </p>
          <p className="text-white/80 mt-4 text-lg">— Proverbe africain</p>
        </div>
      </section>

      {/* Grille des partenaires */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartnersGrid />
        </div>
      </section>

      {/* Section CTA final */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Vous êtes professionnel du bien-être ?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Rejoignez notre réseau de confiance et partageons nos valeurs
              d&apos;excellence
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
