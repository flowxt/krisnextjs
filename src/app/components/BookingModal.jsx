"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BookingModal({ isOpen, onClose, service }) {
  // Chargement du script Calendly lors de l'ouverture du modal
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Mapping des IDs de service vers les slugs Calendly
  const getCalendlySlug = (serviceId) => {
    const slugs = {
      1: "je-me-laisse-guider",
      2: "seance-enfant",
      3: "seance-bebe",
      4: "guidance-question",
      5: "nettoyage-energetique-du-foyer",
      6: "contact-defunt",
      7: "carte-cadeau",
      8: "soin-personnalise",
      9: "guidance-90",
      10: "guidance-1h",
      11: "guidance-45min",
      // Ajoutez ici les autres services si nécessaire
    };
    
    return slugs[service.id] || "je-me-laisse-guider"; // Valeur par défaut
  };
  
  // Certains services ne sont pas réservables en ligne
  const nonBookableServices = [12, 13, 14, 15]; // IDs des services de Patrice (SMS uniquement)
  
  // Construction de l'URL Calendly
  const calendlyUrl = nonBookableServices.includes(service.id) 
    ? null 
    : `https://calendly.com/contact-krislavoixdesanges/${getCalendlySlug(service.id)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden relative z-10"
        >
          <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {service.title} - {service.price}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Widget Calendly ou Message alternatif */}
          {!calendlyUrl ? (
            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Réservation par SMS uniquement</h3>
              <p className="text-gray-600 mb-3">Ce service n'est pas disponible en réservation en ligne.</p>
              <p className="text-gray-600 mb-6">Veuillez contacter directement au 06 65 55 33 41 pour réserver.</p>
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Fermer
              </button>
            </div>
          ) : (
            <div 
              className="calendly-inline-widget" 
              data-url={calendlyUrl}
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          )}
        </motion.div>
      </div>
    </motion.div>
      );
    }