"use client";
import { FiInstagram, FiFacebook, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-cursive mb-4 text-sky-300">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-pink-300">Accueil</a></li>
              <li><a href="/soins" className="hover:text-pink-300">Soins</a></li>
              <li><a href="/a-propos" className="hover:text-pink-300">À propos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-cursive mb-4 text-sky-300">Contact</h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a href="mailto:contact@krislavoixdesanges.com" className="flex items-center hover:text-rose-300">
                <FiMail className="mr-2" /> contact@krislavoixdesanges.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-cursive mb-4 text-sky-300">Réseaux</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <FiInstagram className="text-2xl hover:text-pink-400 cursor-pointer" />
              <FiFacebook className="text-2xl hover:text-pink-400 cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-400 text-center">
          <p>© 2024 Kris La Voix des Anges - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}