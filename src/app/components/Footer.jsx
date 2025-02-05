"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            LaVoixDesAnges
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">Accueil</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">À propos</Link>
            <Link href="/services" className="text-gray-700 hover:text-indigo-600">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
          </nav>

          {/* Menu Burger Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <nav className="md:hidden bg-white shadow-md p-4 space-y-4 absolute w-full left-0 top-16">
            <Link href="/" className="block text-gray-700" onClick={() => setIsOpen(false)}>Accueil</Link>
            <Link href="/about" className="block text-gray-700" onClick={() => setIsOpen(false)}>À propos</Link>
            <Link href="/services" className="block text-gray-700" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/contact" className="block text-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        )}
      </header>

      <footer className="bg-gray-900 text-white mt-16 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-sm">© 2025 LaVoixDesAnges. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-indigo-400">Facebook</Link>
            <Link href="#" className="hover:text-indigo-400">Instagram</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
