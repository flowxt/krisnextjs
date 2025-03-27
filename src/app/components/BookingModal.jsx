"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BookingModal({ isOpen, onClose, service = {} }) {
  const [paymentChoice, setPaymentChoice] = useState(null); // null, "online", "onsite"

  // Services disponibles uniquement en paiement en ligne
  const onlineOnlyServices = [4, 7]; // Guidance question et Carte cadeau
  
  // Chargement du script Calendly lors de l'ouverture du modal
  useEffect(() => {
    if (isOpen && service && (paymentChoice || onlineOnlyServices.includes(service?.id) || !canBookOnline(service?.id))) {
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
  }, [isOpen, paymentChoice, service?.id]);

  if (!isOpen || !service) return null;

  // Vérifie si un service est réservable en ligne
  const canBookOnline = (serviceId) => {
    const nonBookableServices = [12, 13, 14, 15]; // IDs des services par SMS uniquement
    return !nonBookableServices.includes(serviceId);
  };

  // Mapping des IDs de service vers les slugs Calendly
  const getCalendlySlug = (serviceId, paymentType) => {
    // Base des slugs
    const baseSlug = {
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
    }[serviceId] || "je-me-laisse-guider";
    
    // Pour le paiement sur place, ajouter le suffixe
    return paymentType === "onsite" 
      ? `${baseSlug}-sur-place` 
      : baseSlug; // URL d'origine pour le paiement en ligne
  };
  
  // Construction de l'URL Calendly
  const getCalendlyUrl = () => {
    if (!canBookOnline(service.id)) {
      return null;
    }
    
    // Pour les services uniquement en ligne, forcer le paiement en ligne
    if (onlineOnlyServices.includes(service.id)) {
      return `https://calendly.com/contact-krislavoixdesanges/${getCalendlySlug(service.id, "online")}`;
    }
    
    // Pour les autres, utiliser le choix de l'utilisateur
    return paymentChoice 
      ? `https://calendly.com/contact-krislavoixdesanges/${getCalendlySlug(service.id, paymentChoice)}`
      : null;
  };
  
  const calendlyUrl = getCalendlyUrl();
  
  // Réinitialiser le choix de paiement lorsqu'on ferme le modal
  const handleClose = () => {
    setPaymentChoice(null);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose}></div>
      
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
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Contenu conditionnel */}
          {!canBookOnline(service.id) ? (
            // Services non réservables en ligne
            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Réservation par SMS uniquement</h3>
              <p className="text-gray-600 mb-3">Ce service n'est pas disponible en réservation en ligne.</p>
              <p className="text-gray-600 mb-6">Veuillez contacter directement au 06 65 55 33 41 pour réserver.</p>
              <button 
                onClick={handleClose}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Fermer
              </button>
            </div>
          ) : onlineOnlyServices.includes(service.id) ? (
            // Services disponibles uniquement en paiement en ligne
            <div className="calendly-inline-widget" 
                data-url={calendlyUrl}
                style={{ minWidth: '320px', height: '700px' }}
            />
          ) : paymentChoice ? (
            // Services standards avec choix de paiement fait
            <div className="calendly-inline-widget" 
                data-url={calendlyUrl}
                style={{ minWidth: '320px', height: '700px' }}
            />
          ) : (
            // Choix du mode de paiement pour les services standards
            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-6">Comment souhaitez-vous payer ?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <button
                  onClick={() => setPaymentChoice("online")}
                  className="flex flex-col items-center p-6 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all"
                >
                  <svg className="w-12 h-12 text-purple-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="font-medium text-lg mb-2">Paiement en ligne</span>
                  <span className="text-sm text-gray-500">Payez maintenant par carte bancaire</span>
                </button>
                
                <button
                  onClick={() => setPaymentChoice("onsite")}
                  className="flex flex-col items-center p-6 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all"
                >
                  <svg className="w-12 h-12 text-purple-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-lg mb-2">Paiement sur place</span>
                  <span className="text-sm text-gray-500">Payez lors de votre rendez-vous</span>
                </button>
              </div>
              
              <p className="mt-8 text-sm text-gray-500">
                Les rendez-vous doivent être annulés au moins 24h à l'avance.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}