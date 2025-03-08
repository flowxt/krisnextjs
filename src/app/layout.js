import { Cinzel, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"], // Ajoutez les poids dont vous avez besoin
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700"], // Plus de poids pour plus de flexibilité
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${cinzel.variable} ${nunito.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
