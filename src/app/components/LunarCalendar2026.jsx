import React from "react";

const lunarData = [
  { mois: "Janvier", nouvelle: "18 janv. 20:52", pleine: "3 janvier à 11:02" },
  { mois: "Février", nouvelle: "17 févr. 13:01", pleine: "1 février à 23:09" },
  { mois: "Mars", nouvelle: "19 mars 02:23", pleine: "3 mars à 12:37" },
  { mois: "Avril", nouvelle: "17 avril 13:51", pleine: "2 avril à 04:11" },
  { mois: "Mai", nouvelle: "16 mai 22:01", pleine: "1 mai à 19:23" },
  { mois: "Juin", nouvelle: "15 juin 04:54", pleine: "30 juin à 01:56" },
  { mois: "Juillet", nouvelle: "14 juil. 11:43", pleine: "29 juillet à 16:35" },
  { mois: "Août", nouvelle: "12 août 19:36", pleine: "28 août à 06:18" },
  { mois: "Septembre", nouvelle: "11 sept. 05:27", pleine: "26 septembre à 18:49" },
  { mois: "Octobre", nouvelle: "10 oct. 17:50", pleine: "26 octobre à 05:11" },
  { mois: "Novembre", nouvelle: "9 nov. 12:47", pleine: "24 novembre à 21:28" },
  { mois: "Décembre", nouvelle: "9 déc. 01:51", pleine: "24 décembre à 02:28" },
];

export default function LunarCalendar2026() {
  return (
    <section className="my-12 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 rounded-2xl shadow-xl p-8 border border-indigo-200 relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-indigo-100 mb-8 tracking-wide drop-shadow-lg">Calendrier Lunaire 2026</h2>
      {/* Lune animée en arrière-plan */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <span className="lune-anim block absolute" />
      </div>
      {/* Étoiles animées de fond */}
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className={`star absolute block rounded-full bg-white opacity-70 pointer-events-none`}
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 90 + 2}%`,
            left: `${Math.random() * 98 + 1}%`,
            animationDelay: `${Math.random() * 6}s`,
            zIndex: 1,
          }}
        />
      ))}
      {/* Petite Ourse (coin supérieur droit) */}
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        className="absolute right-8 top-6 z-10"
        style={{ pointerEvents: "none" }}
      >
        {/* Lignes */}
        <polyline
          points="10,70 30,60 50,50 70,40 90,30 110,20 100,10"
          fill="none"
          stroke="#fff8"
          strokeWidth="1.2"
        />
        {/* Étoiles de la Petite Ourse */}
        <circle cx="10" cy="70" r="3" fill="#fff" className="petite-ourse-star" />
        <circle cx="30" cy="60" r="2.2" fill="#fff" className="petite-ourse-star" />
        <circle cx="50" cy="50" r="2.5" fill="#fff" className="petite-ourse-star" />
        <circle cx="70" cy="40" r="2" fill="#fff" className="petite-ourse-star" />
        <circle cx="90" cy="30" r="2.8" fill="#fff" className="petite-ourse-star" />
        <circle cx="110" cy="20" r="2" fill="#fff" className="petite-ourse-star" />
        <circle cx="100" cy="10" r="2.5" fill="#fff" className="petite-ourse-star" />
      </svg>
      <div className="flex justify-center gap-8 flex-wrap relative z-10">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <table className="w-full text-center text-indigo-50 bg-indigo-950/60 rounded-xl overflow-hidden relative z-10">
            <thead>
              <tr className="bg-indigo-800/80">
                <th className="py-3 px-2 font-semibold text-lg">Mois</th>
                <th className="py-3 px-2 font-semibold text-lg">Nouvelle Lune</th>
                <th className="py-3 px-2 font-semibold text-lg">Pleine Lune</th>
              </tr>
            </thead>
            <tbody>
              {lunarData.map((ligne) => (
                <tr key={ligne.mois} className="border-b border-indigo-700/40 last:border-none hover:bg-indigo-800/30 transition-colors">
                  <td className="py-2 px-2 font-medium">{ligne.mois}</td>
                  <td className="py-2 px-2">{ligne.nouvelle}</td>
                  <td className="py-2 px-2">{ligne.pleine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Petites étoiles */}
      <div className="absolute top-6 left-8 w-3 h-3 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-20 right-12 w-2 h-2 bg-white rounded-full opacity-40"></div>
      <div className="absolute bottom-10 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-16 w-2 h-2 bg-white rounded-full opacity-50"></div>
      <style jsx>{`
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-orbit {
          animation: orbit 12s linear infinite;
          transform-origin: 50% 60%;
        }
        .star {
          animation: twinkle 3.5s infinite alternate;
        }
        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        .petite-ourse-star {
          filter: drop-shadow(0 0 4px #fff8);
          animation: twinkle 4s infinite alternate;
        }
        .lune-anim {
          width: 64px;
          height: 64px;
          background: #fef9c3;
          border-radius: 50%;
          border: 4px solid #fef08a;
          box-shadow: 0 0 32px 8px #fef9c3aa;
          opacity: 0.85;
          top: 60%;
          left: 0%;
          z-index: 0;
          position: absolute;
          animation: moon-move 18s linear infinite;
        }
        @keyframes moon-move {
          0% {
            left: 0%;
            top: 60%;
            transform: translateY(0) scale(1);
          }
          20% {
            left: 20%;
            top: 50%;
            transform: translateY(-10px) scale(1.05);
          }
          50% {
            left: 50%;
            top: 40%;
            transform: translateY(-20px) scale(1.1);
          }
          80% {
            left: 80%;
            top: 50%;
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            left: 100%;
            top: 60%;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}

