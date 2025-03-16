"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
          <img src="/photo/logonew.jpg" alt="Kristelle Feron" className="w-12 h-12 mr-4 rounded-full" />
          Kris & Patrice
        </Link>

        {/* Navigation Desktop - seulement sur grands écrans */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="text-gray-800 hover:text-indigo-600 font-medium">Accueil</Link>
          
          {/* Menu déroulant pour les soins */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 hover:text-indigo-600 font-medium flex items-center gap-1"
            >
              Nos soins <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                <div className="py-1">
                  <Link 
                    href="/services" 
                    className="block px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Soins avec Kris
                  </Link>
                  <Link 
                    href="/patrice" 
                    className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors" 
                    onClick={() => setDropdownOpen(false)}
                  >
                    Soins pour hommes avec Patrice
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link href="/soins" className="text-gray-800 hover:text-indigo-600 font-medium">Forfaits</Link>
          <Link href="/blog" className="text-gray-800 hover:text-indigo-600 font-medium">Blog</Link>
          <Link href="/partenaires" className="text-gray-800 hover:text-indigo-600 font-medium">Partenaires</Link>
          <Link href="/contact" className="text-gray-800 hover:text-indigo-600 font-medium">Contact</Link>
        </nav>

        {/* Menu Burger - visible sur mobile et tablette */}
        <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile/Tablette */}
      {isOpen && (
        <nav className="lg:hidden backdrop-blur-md bg-white/70 p-4 space-y-4 absolute w-[calc(100%-2rem)] left-4 top-20 rounded-2xl shadow-lg">
          <Link href="/" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Accueil</Link>
          
          {/* Les liens de soins sont directement affichés sans dropdown sur mobile */}
          <div className="pl-4 border-l-2 border-indigo-200 space-y-4">
            <Link 
              href="/services" 
              className="block text-gray-800 font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Soins avec Kris
            </Link>
            <Link 
              href="/patrice" 
              className="block text-gray-800 font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Soins pour hommes avec Patrice
            </Link>
          </div>
          
          <Link href="/soins" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Forfaits</Link>
          <Link href="/blog" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/partenaires" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Partenaires</Link>
          <Link href="/contact" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </div>
  );
}