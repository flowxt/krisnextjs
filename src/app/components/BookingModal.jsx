"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BookingModal({ isOpen, onClose, service = {} }) {
  const [paymentChoice, setPaymentChoice] = useState(null); // null, "online", "onsite"
  const [priceOption, setPriceOption] = useState(null); // Pour stocker l'option de prix sélectionnée

  // Configuration des liens Stripe directs
  const stripeLinks = {
    4: { // Guidance Question
      "guidance-question-1": "https://buy.stripe.com/28o9CuaE75Ifh2w144", // 1 question 20€
      "guidance-question-2": "https://buy.stripe.com/8wM15Y9A32w3dQkeUV", // 2 questions 30€
      "guidance-question-3": "https://buy.stripe.com/14keWOeUnc6D6nS8wy", // 3 questions 40€
    },
    7: { // Cartes Cadeau
      "carte-cadeau-60": "https://buy.stripe.com/eVaeWOfYr6Mj3bGfZ1", // 60€
      "carte-cadeau-80": "https://buy.stripe.com/5kA3e69A38UrfYs8wA", // 80€
      "carte-cadeau-100": "https://buy.stripe.com/28o5mebIb0nV13yaEJ", // 100€
      "carte-cadeau-personnalise": "https://buy.stripe.com/9AQ9Cu8vZfiPfYseV0", // Personnalisée
    }
  };

  // Services disponibles uniquement en paiement en ligne avec Stripe
  const stripeOnlyServices = [4, 7]; // Guidance question et Carte cadeau
  
  // Services disponibles uniquement en paiement en ligne
  const onlineOnlyServices = []; // Autres services en ligne uniquement
  
  // Services avec options de prix multiples
  const multiPriceServices = {
    4: [ // Guidance Question
      { label: "1 Question", price: "20€", slug: "guidance-question-1" },
      { label: "2 Questions", price: "30€", slug: "guidance-question-2" },
      { label: "3 Questions", price: "40€", slug: "guidance-question-3" }
    ],
    7: [ // Carte Cadeau
      { label: "Carte Cadeau 60€", price: "60€", slug: "carte-cadeau-60" },
      { label: "Carte Cadeau 80€", price: "80€", slug: "carte-cadeau-80" },
      { label: "Carte Cadeau 100€", price: "100€", slug: "carte-cadeau-100" },
      { label: "Carte Cadeau Personnalisée", price: "Sur mesure", slug: "carte-cadeau-personnalise" }
    ]
  };
  
  // Fonction pour rediriger vers les liens Stripe
  const handleStripeRedirect = (serviceId, optionSlug) => {
    if (stripeLinks[serviceId] && stripeLinks[serviceId][optionSlug]) {
      window.open(stripeLinks[serviceId][optionSlug], '_blank');
    }
  };
  
  // Vérifier si le service actuel a des options de prix multiples
  const hasMultiplePrices = () => multiPriceServices[service?.id] !== undefined;

  // Vérifier si le service utilise Stripe pour le paiement
  const isStripeService = () => stripeOnlyServices.includes(service?.id);
  
  // Chargement du script Calendly lors de l'ouverture du modal
  useEffect(() => {
    const shouldLoadCalendly = isOpen && service && (
      (paymentChoice && !hasMultiplePrices() && !isStripeService()) || 
      (hasMultiplePrices() && priceOption && !isStripeService()) ||
      (onlineOnlyServices.includes(service?.id) && !hasMultiplePrices()) || 
      !canBookOnline(service?.id)
    );
    
    if (shouldLoadCalendly) {
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
  }, [isOpen, paymentChoice, priceOption, service?.id]);

  if (!isOpen || !service) return null;

  // Vérifie si un service est réservable en ligne
  const canBookOnline = (serviceId) => {
    const nonBookableServices = [12, 13, 14, 15]; // IDs des services par SMS uniquement
    return !nonBookableServices.includes(serviceId);
  };

  // Mapping des IDs de service vers les slugs Calendly
  const getCalendlySlug = (serviceId, paymentType) => {
    // Si c'est un service à prix multiples et qu'une option est sélectionnée
    if (hasMultiplePrices() && priceOption) {
      return priceOption.slug;
    }
    
    // Base des slugs pour les services standards
    const baseSlug = {
      1: "je-me-laisse-guider",
      2: "seance-enfant",
      3: "seance-bebe",
      5: "nettoyage-energetique-du-foyer",
      6: "contact-defunt",
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
    
    // Pour les services à prix multiples qui utilisent Calendly (pas Stripe)
    if (hasMultiplePrices() && !isStripeService()) {
      if (!priceOption) return null;
      return `https://calendly.com/contact-krislavoixdesanges/${priceOption.slug}`;
    }
    
    // Pour les services uniquement en ligne
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
    setPriceOption(null);
    onClose();
  };

  // Rendu de l'interface de sélection de prix
  const renderPriceSelection = () => {
    const options = multiPriceServices[service.id];
    
    return (
      <div className="p-8 text-center">
        <h3 className="text-xl font-semibold mb-6">Choisissez votre formule</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => setPriceOption(option)}
              className="flex flex-col items-center p-5 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all"
            >
              <span className="font-medium text-lg mb-1">{option.label}</span>
              <span className="text-purple-600 font-bold">{option.price}</span>
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => setPaymentChoice(null)}
          className="mt-6 px-4 py-2 text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </button>
      </div>
    );
  };

  // Affichage du module de paiement Stripe pour les services concernés
  const renderStripePayment = () => {
    let stripeTitle, stripeInstructions;
    
    if (service.id === 4) { // Guidance Question
      stripeTitle = "Paiement pour Guidance Question";
      stripeInstructions = "Après votre paiement, vous pourrez poser votre/vos question(s) via WhatsApp au 06 65 55 33 41. Une réponse vous sera apportée dans les 72h.";
    } else if (service.id === 7) { // Carte Cadeau
      stripeTitle = "Paiement de votre Carte Cadeau";
      stripeInstructions = "Après votre paiement, votre carte cadeau vous sera envoyée par email sous 24h. Vous pouvez nous indiquer par mail à contact@krislavoixdesanges.fr le nom du bénéficiaire et un message personnalisé.";
    }
    
    return (
      <div className="p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">{stripeTitle}</h3>
        <p className="text-gray-600 mb-6">
          Vous avez sélectionné : <span className="font-semibold text-purple-600">{priceOption.label}</span> à {priceOption.price}
        </p>
        
        <div className="mb-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
          <p className="text-gray-700 mb-4">
            {stripeInstructions}
          </p>
        </div>
        
        <button 
          onClick={() => handleStripeRedirect(service.id, priceOption.slug)}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
          </svg>
          Payer maintenant
        </button>
        
        <button 
          onClick={() => setPriceOption(null)}
          className="mt-6 px-4 py-2 text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1 mx-auto"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Choisir une autre option
        </button>
      </div>
    );
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
          ) : hasMultiplePrices() ? (
            // Services avec plusieurs options de prix
            priceOption ? (
              // Option sélectionnée, afficher Stripe ou Calendly selon le service
              isStripeService() ? (
                // Utilisation de Stripe pour les services 4 et 7
                renderStripePayment()
              ) : (
                // Utilisation de Calendly pour les autres services
                <div className="calendly-inline-widget" 
                  data-url={calendlyUrl}
                  style={{ minWidth: '320px', height: '700px' }}
                />
              )
            ) : (
              // Afficher les options de prix
              renderPriceSelection()
            )
          ) : onlineOnlyServices.includes(service.id) ? (
            // Services disponibles uniquement en paiement en ligne (autres que Stripe)
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