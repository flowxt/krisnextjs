"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative border-t border-gray-100"
  >
    {/* Ajout du fond dégradé sphérique */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-100/80 via-purple-50/50 to-transparent pointer-events-none" />
    
    {/* Ajout d'un effet de flou */}
    <div className="absolute inset-0 backdrop-blur-[2px]" />
    
    {/* Contenu du footer avec z-index pour passer au-dessus du gradient */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/photo/logo.png" 
                alt="Kristelle Feron"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-xl font-bold text-gray-800">Kristelle Feron</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Guidance holistique & soins énergétiques<br />
              Libérez votre potentiel vibratoire
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Contact</h3>
            <div className="space-y-2">
              <a href="tel:0665553341" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
                <span className="i-heroicons-phone-solid text-purple-500" />
                06 65 55 33 41
              </a>
              <a href="mailto:contact@krislavoixdesanges.com" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
                <span className="i-heroicons-envelope-solid text-purple-500" />
                contact@krislavoixdesanges.com
              </a>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Suivez-moi</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                target="_blank" 
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-purple-600" />
              </a>
              <a 
                href="#" 
                target="_blank"
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-purple-600" />
              </a>
            </div>
          </div>

          {/* Adresse */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Localisation</h3>
            <address className="not-italic text-gray-700 space-y-2">
              <p>208 impasse des Fiers Gens<br />
              74800 Saint-Laurent<br />
              74 Haute-Savoie et Suisse</p>
              <p className="text-sm text-purple-500 font-medium">En présentiel ou à distance</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kristelle Feron - Tous droits réservés<br />
            Créé avec <span className="text-purple-500">♥</span> par Florian Barjon
          </p>
        </div>
      </div>
    </motion.footer>
  );
}