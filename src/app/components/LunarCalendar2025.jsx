import React from "react";

const lunarData = [
  { mois: "Janvier", nouvelle: "29 janv. 13:35", pleine: "13 janvier à 23:26" },
  { mois: "Février", nouvelle: "28 févr. 01:44", pleine: "12 février à 14:53" },
  { mois: "Mars", nouvelle: "29 mars 11:57", pleine: "14 mars à 07:54" },
  { mois: "Avril", nouvelle: "27 avril 21:31", pleine: "13 avril à 18:55" },
  { mois: "Mai", nouvelle: "27 juin 12:31", pleine: "12 mai à 19:43" },
  { mois: "Juillet", nouvelle: "24 juillet 21:11", pleine: "10 juillet à 22:36" },
  { mois: "Août", nouvelle: "23 août 08:06", pleine: "9 août à 09:54" },
  { mois: "Septembre", nouvelle: "21 sept. 21:54", pleine: "7 septembre 20:08" },
  { mois: "Octobre", nouvelle: "21 oct. 14:25", pleine: "7 octobre 05:47" },
  { mois: "Novembre", nouvelle: "20 nov. 07:47", pleine: "5 novembre 14:19" },
  { mois: "Décembre", nouvelle: "20 déc. 02:43", pleine: "5 décembre 00:14" },
];

export default function LunarCalendar2025() {
  return (
    <section className="my-12 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 rounded-2xl shadow-xl p-8 border border-indigo-200 relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-indigo-100 mb-8 tracking-wide drop-shadow-lg">Calendrier Lunaire 2025</h2>
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