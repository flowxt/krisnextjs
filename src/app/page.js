"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import SplashLoader from "./components/SplashLoader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Optionnel: Vérifier si le loader a déjà été affiché durant cette session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (hasSeenLoader) {
      setShowLoader(false);
    } else {
      // Marquer le loader comme vu pour cette session
      sessionStorage.setItem("hasSeenLoader", "true");
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && <SplashLoader onComplete={() => setShowLoader(false)} />}
      </AnimatePresence>

      <div className={showLoader ? "hidden" : ""}>
        <Hero />
        <main>
          <Presentation />
          <Cta page="accueil" />
        </main>
      </div>
    </>
  );
}
