"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 backdrop-blur-sm bg-white/30 m-4 rounded-full shadow-lg">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 flex items-center">
          <img src="/photo/logo.png" alt="Kristelle Feron" className="w-12 h-12 mr-4" />
          Kristelle Feron
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-800 hover:text-indigo-600 font-medium">Accueil</Link>
          <Link href="/soins" className="text-gray-800 hover:text-indigo-600 font-medium">Les soins</Link>
          <Link href="/services" className="text-gray-800 hover:text-indigo-600 font-medium">Services</Link>
          <Link href="/blog" className="text-gray-800 hover:text-indigo-600 font-medium">Blog</Link>
          <Link href="/partenaires" className="text-gray-800 hover:text-indigo-600 font-medium">Nos partenaires</Link>
          <Link href="/contact" className="text-gray-800 hover:text-indigo-600 font-medium">Contact</Link>
        </nav>

        {/* Menu Burger Mobile */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden backdrop-blur-md bg-white/70 p-4 space-y-4 absolute w-[calc(100%-2rem)] left-4 top-20 rounded-2xl shadow-lg">
          <Link href="/" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link href="/soins" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Les soins</Link>
          <Link href="/services" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/blog" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/partenaires" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Partenaires</Link>
          <Link href="/contact" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}