import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import PartnersGrid from "../components/PartnersGrid";

export const metadata = {
  title: "Mes Partenaires | Kris La Voix des Anges",
  description:
    "Découvrez les professionnels de confiance avec qui je collabore pour vous offrir un accompagnement holistique complet.",
  alternates: {
    canonical: "https://www.krislavoixdesanges.com/partenaires",
  },
};

export default function PartenairesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-11">
        {/* En-tête de la page */}
        <div className="text-center mb-16 relative">
          {/* Cercles décoratifs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-purple-200/20 blur-3xl -z-10" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-indigo-200/20 blur-3xl -z-10" />

          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
              Mes Partenaires
            </span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
            Je m&apos;entoure de professionnels d&apos;exception pour vous
            proposer un accompagnement complet. Découvrez mon réseau de
            confiance avec qui je partage des valeurs d&apos;authenticité et
            d&apos;excellence.
          </p>
        </div>

        {/* Grille des partenaires */}
        <PartnersGrid />

        {/* Section avis Google */}
        <div className="mt-24 mb-16"></div>
      </div>
    </div>
  );
}
