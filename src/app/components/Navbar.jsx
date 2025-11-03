"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Fonction pour vérifier si un lien est actif
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Vérifier si on est dans la section Réservation
  const isReservationActive = () => {
    return pathname === "/services" || pathname === "/patrice" || pathname === "/soins";
  };

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 backdrop-blur-sm bg-white/30 m-4 rounded-full shadow-lg">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800 flex items-center font-heading">
          <img src="/photo/logo-fusion.jpg" alt="Kristelle Feron" className="w-12 h-12 mr-4 rounded-full" />
          Kris & Patrice
        </Link>

        {/* Navigation Desktop - seulement sur grands écrans */}
        <nav className="hidden lg:flex space-x-6">
          <Link 
            href="/" 
            className={`relative font-medium transition-colors duration-300 ${
              isActive("/") && pathname === "/"
                ? "text-indigo-600" 
                : "text-gray-800 hover:text-indigo-600"
            }`}
          >
            Accueil
            {isActive("/") && pathname === "/" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
            )}
          </Link>
          
          {/* Menu déroulant pour les soins */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`relative font-medium flex items-center gap-1 transition-colors duration-300 ${
                isReservationActive()
                  ? "text-indigo-600" 
                  : "text-gray-800 hover:text-indigo-600"
              }`}
            >
              Réservation 
              <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              {isReservationActive() && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
              )}
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-56 bg-white rounded-xl shadow-lg overflow-hidden z-50 border border-purple-100">
                <div className="py-1">
                  <Link 
                    href="/services" 
                    className={`block px-4 py-3 transition-colors ${
                      pathname === "/services"
                        ? "bg-indigo-50 text-indigo-600 font-semibold"
                        : "text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      {pathname === "/services" && <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />}
                      Soins ou Guidances avec Kris
                    </span>
                  </Link>
                  <Link 
                    href="/patrice" 
                    className={`block px-4 py-3 transition-colors ${
                      pathname === "/patrice"
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      {pathname === "/patrice" && <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
                      Soins pour hommes avec Patrice
                    </span>
                  </Link>
                  <Link 
                    href="/soins" 
                    className={`block px-4 py-3 transition-colors ${
                      pathname === "/soins"
                        ? "bg-purple-50 text-purple-600 font-semibold"
                        : "text-gray-800 hover:bg-purple-50 hover:text-purple-600"
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      {pathname === "/soins" && <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />}
                      Forfaits
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link 
            href="/blog" 
            className={`relative font-medium transition-colors duration-300 ${
              isActive("/blog")
                ? "text-indigo-600" 
                : "text-gray-800 hover:text-indigo-600"
            }`}
          >
            Blog
            {isActive("/blog") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
            )}
          </Link>
          
          <Link 
            href="/contact" 
            className={`relative font-medium transition-colors duration-300 ${
              isActive("/contact")
                ? "text-indigo-600" 
                : "text-gray-800 hover:text-indigo-600"
            }`}
          >
            Contact
            {isActive("/contact") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
            )}
          </Link>
          
          <Link 
            href="/avis" 
            className={`relative font-medium transition-colors duration-300 ${
              isActive("/avis")
                ? "text-indigo-600" 
                : "text-gray-800 hover:text-indigo-600"
            }`}
          >
            Avis
            {isActive("/avis") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
            )}
          </Link>
          
          <Link 
            href="/partenaires" 
            className={`relative font-medium transition-colors duration-300 ${
              isActive("/partenaires")
                ? "text-indigo-600" 
                : "text-gray-800 hover:text-indigo-600"
            }`}
          >
            Recommandations
            {isActive("/partenaires") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
            )}
          </Link>
        </nav>

        {/* Menu Burger - visible sur mobile et tablette */}
        <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile/Tablette */}
      {isOpen && (
        <nav className="lg:hidden backdrop-blur-md bg-white/90 p-4 space-y-4 absolute w-[calc(100%-2rem)] left-4 top-20 rounded-2xl shadow-lg border border-purple-100">
          <Link 
            href="/" 
            className={`block font-medium transition-colors ${
              pathname === "/" 
                ? "text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg" 
                : "text-gray-800"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {pathname === "/" && <span className="mr-2">•</span>}
            Accueil
          </Link>
          
          {/* Section Réservation avec sous-liens */}
          <div>
            <div className={`font-medium mb-2 ${
              isReservationActive() ? "text-indigo-600" : "text-gray-800"
            }`}>
              Réservation
            </div>
            <div className={`pl-4 border-l-2 space-y-3 ${
              isReservationActive() ? "border-indigo-400" : "border-indigo-200"
            }`}>
              <Link 
                href="/services" 
                className={`block font-medium transition-colors ${
                  pathname === "/services"
                    ? "text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {pathname === "/services" && <span className="mr-2">•</span>}
                Soins ou Guidances avec Kris
              </Link>
              <Link 
                href="/patrice" 
                className={`block font-medium transition-colors ${
                  pathname === "/patrice"
                    ? "text-blue-600 bg-blue-50 px-3 py-2 rounded-lg"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {pathname === "/patrice" && <span className="mr-2">•</span>}
                Soins pour hommes avec Patrice
              </Link>
              <Link 
                href="/soins" 
                className={`block font-medium transition-colors ${
                  pathname === "/soins"
                    ? "text-purple-600 bg-purple-50 px-3 py-2 rounded-lg"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {pathname === "/soins" && <span className="mr-2">•</span>}
                Forfaits
              </Link>
            </div>
          </div>
          
          <Link 
            href="/blog" 
            className={`block font-medium transition-colors ${
              isActive("/blog")
                ? "text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg"
                : "text-gray-800"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {isActive("/blog") && <span className="mr-2">•</span>}
            Blog
          </Link>
          
          <Link 
            href="/contact" 
            className={`block font-medium transition-colors ${
              isActive("/contact")
                ? "text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg"
                : "text-gray-800"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {isActive("/contact") && <span className="mr-2">•</span>}
            Contact
          </Link>
          
          <Link 
            href="/avis" 
            className={`block font-medium transition-colors ${
              isActive("/avis")
                ? "text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg"
                : "text-gray-800"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {isActive("/avis") && <span className="mr-2">•</span>}
            Avis
          </Link>
          
          <Link 
            href="/partenaires" 
            className={`block font-medium transition-colors ${
              isActive("/partenaires")
                ? "text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg"
                : "text-gray-800"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {isActive("/partenaires") && <span className="mr-2">•</span>}
            Recommandations
          </Link>
        </nav>
      )}
    </div>
  );
}