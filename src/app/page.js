import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <Presentation />
        <Cta page="accueil" />
      </main>
    </div>
  );
}
