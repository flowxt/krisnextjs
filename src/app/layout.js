import { Cinzel, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PartnersFloatingButton from "./components/PartnersFloatingButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

// Configuration du viewport déplacée dans son propre export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Définition des métadonnées du site
export const metadata = {
  metadataBase: new URL("https://www.krislavoixdesanges.com"),
  title: {
    default:
      "Kris La Voix des Anges | Soins Énergétiques & Guidance Spirituelle",
    template: "%s | Kris La Voix des Anges",
  },
  description:
    "Découvrez les soins énergétiques et la guidance spirituelle avec Kristelle et Patrice. Accompagnement holistique personnalisé pour votre bien-être et votre développement spirituel.",
  keywords: [
    "soins énergétiques",
    "guidance spirituelle",
    "bien-être",
    "chakras",
    "médium",
    "développement personnel",
    "accompagnement holistique",
  ],
  authors: [{ name: "Kristelle Feron" }, { name: "Patrice Guffon" }],
  creator: "Kristelle Feron",
  publisher: "Kris La Voix des Anges",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.krislavoixdesanges.com/",
    siteName: "Kris La Voix des Anges",
    title: "Kris La Voix des Anges | Soins Énergétiques & Guidance Spirituelle",
    description:
      "Découvrez les soins énergétiques et la guidance spirituelle avec Kristelle et Patrice. Accompagnement holistique personnalisé pour votre bien-être.",
    images: [
      {
        url: "/photo/logonew.jpg",
        width: 800,
        height: 600,
        alt: "Kris La Voix des Anges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kris La Voix des Anges | Soins Énergétiques & Guidance",
    description:
      "Découvrez les soins énergétiques et la guidance spirituelle avec Kristelle et Patrice.",
    images: ["/photo/logonew.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-0.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-1.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-2.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${cinzel.variable} ${nunito.variable} font-sans`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <PartnersFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
