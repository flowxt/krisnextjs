"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BookingModal({ isOpen, onClose, service = {} }) {
  const [paymentChoice, setPaymentChoice] = useState(null); // null, "online", "onsite"
  const [priceOption, setPriceOption] = useState(null); // Pour stocker l'option de prix sélectionnée
  const [formStep, setFormStep] = useState(null); // null, "form", "payment"
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
  
  // Services avec bon cadeau (pas de paiement nécessaire)
  const giftCardRedemptionServices = [16]; // ID du service "Utilisation Bon Cadeau"
  
  // Services nécessitant un devis
  const quoteServices = [5]; // ID du service "Nettoyage Harmonisation"
  
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
  
  // Fonction pour vérifier si la Guidance Question est en pause
  const isGuidanceQuestionPaused = () => {
    if (service?.id !== 4) return false; // Seulement pour Guidance Question
    
    const now = new Date();
    const currentYear = now.getFullYear();
    const startPause = new Date(currentYear, 6, 24); // 24 juillet (mois 6 = juillet, 0-indexé)
    const endPause = new Date(currentYear, 6, 31); // 31 juillet
    
    return now >= startPause && now <= endPause;
  };

  // Chargement du script Calendly lors de l'ouverture du modal
  useEffect(() => {
    const shouldLoadCalendly = isOpen && service && (
      (paymentChoice && !hasMultiplePrices() && !isStripeService()) || 
      (hasMultiplePrices() && priceOption && !isStripeService()) ||
      (onlineOnlyServices.includes(service?.id) && !hasMultiplePrices()) || 
      giftCardRedemptionServices.includes(service?.id) ||
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
      16: "reserver-cadeau", // Nouveau service pour utiliser un bon cadeau
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
    
    // Pour les services de bon cadeau
    if (giftCardRedemptionServices.includes(service.id)) {
      return `https://calendly.com/contact-krislavoixdesanges/${getCalendlySlug(service.id)}`;
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
    setFormStep(null);
    setFormData({});
    setSubmitError("");
    setSubmitSuccess(false);
    onClose();
  };

  // Gérer les changements dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Soumettre le formulaire
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formDataToSend = {
        ...formData,
        service: service.title,
        option: priceOption?.label || '',
        price: priceOption?.price || '',
        date: new Date().toISOString()
      };

      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setSubmitSuccess(true);
      setFormStep("payment");
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitError("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
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
              onClick={() => {
                setPriceOption(option);
                if (isStripeService()) {
                  setFormStep("form");
                }
              }}
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

  // Rendu du bandeau de pause pour Guidance Question
  const renderGuidanceQuestionPauseBanner = () => {
    return (
      <div className="p-8 text-center">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-orange-800 mb-3">
            Service temporairement en pause
          </h3>
          <p className="text-orange-700 mb-4">
            La <strong>Guidance à la question</strong> est actuellement en pause du <strong>24 juillet au 31 juillet</strong> inclus.
          </p>
          <p className="text-orange-600 text-sm">
            Ce service sera de nouveau disponible à partir du <strong>1er août</strong>. 
            <br />
            Merci de votre compréhension ! 🙏
          </p>
        </div>
        
        <button 
          onClick={handleClose}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
        >
          Fermer
        </button>
      </div>
    );
  };

  // Rendu du formulaire de Guidance Question
  const renderGuidanceQuestionForm = () => {
    const questionCount = priceOption?.slug === "guidance-question-1" ? 1 : 
                          priceOption?.slug === "guidance-question-2" ? 2 : 3;
    
    return (
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Formulaire pour Guidance Question</h3>
        
        {submitError && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
            {submitError}
          </div>
        )}
        
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Nom*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="Votre nom"
              />
            </div>
            
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Prénom*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="Votre prénom"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
              Numéro de téléphone*
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              value={formData.telephone || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Votre adresse email"
            />
          </div>
          
          {Array.from({ length: questionCount }).map((_, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={`question${index + 1}`} className="block text-sm font-medium text-gray-700 mb-1">
                Question précise {index + 1}*
              </label>
              <textarea
                id={`question${index + 1}`}
                name={`question${index + 1}`}
                required
                value={formData[`question${index + 1}`] || ''}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder={`Posez votre question ${index + 1}`}
              ></textarea>
            </div>
          ))}
          
          <div className="flex items-center justify-between mt-6">
            <button 
              type="button"
              onClick={() => {
                setPriceOption(null);
                setFormStep(null);
              }}
              className="px-4 py-2 text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour
            </button>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Envoi en cours...</span>
              ) : (
                <>
                  <span>Continuer vers le paiement</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Rendu du formulaire de demande de devis pour Nettoyage Harmonisation
  const renderQuoteForm = () => {
    return (
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Demande de devis - Nettoyage Harmonisation</h3>
        
        {submitError && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
            {submitError}
          </div>
        )}
        
        {submitSuccess ? (
          <div className="text-center">
            <div className="mb-6 p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-green-800 mb-2">Demande de devis envoyée !</h4>
              <p className="text-green-700">
                Merci pour votre demande. Je vous répondrai rapidement avec un devis personnalisé adapté à vos besoins spécifiques.
              </p>
            </div>
            <button 
              onClick={handleClose}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Informations personnelles */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Vos informations</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Votre prénom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Votre adresse email"
                  />
                </div>
                
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone*
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
              </div>
            </div>
            
            {/* Informations sur le lieu */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Informations sur le lieu à traiter</h4>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse postale complète*
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    value={formData.address || ''}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Numéro, rue, code postal, ville"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="squareMeters" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre de mètres carrés à traiter*
                  </label>
                  <input
                    type="number"
                    id="squareMeters"
                    name="squareMeters"
                    required
                    min="1"
                    value={formData.squareMeters || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Superficie en m²"
                  />
                </div>
                
                <div>
                  <label htmlFor="interventionReason" className="block text-sm font-medium text-gray-700 mb-1">
                    Pourquoi demandez-vous mon intervention ?*
                  </label>
                  <textarea
                    id="interventionReason"
                    name="interventionReason"
                    required
                    value={formData.interventionReason || ''}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Décrivez la situation et ce qui vous amène à demander cette intervention..."
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="phenomenaDuration" className="block text-sm font-medium text-gray-700 mb-1">
                    Depuis combien de temps les phénomènes (physiques ou paranormaux) sont-ils présents ?*
                  </label>
                  <input
                    type="text"
                    id="phenomenaDuration"
                    name="phenomenaDuration"
                    required
                    value={formData.phenomenaDuration || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Ex: Depuis 3 mois, depuis 1 an..."
                  />
                </div>
                
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                    Informations complémentaires
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo || ''}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Toute information que vous jugez utile..."
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <button 
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Annuler
              </button>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Envoyer ma demande de devis</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    );
  };

  // Rendu du formulaire de Carte Cadeau
  const renderGiftCardForm = () => {
    return (
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Formulaire pour Carte Cadeau</h3>
        
        {submitError && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
            {submitError}
          </div>
        )}
        
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Vos informations</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="buyerName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom*
                </label>
                <input
                  type="text"
                  id="buyerName"
                  name="buyerName"
                  required
                  value={formData.buyerName || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="buyerFirstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom*
                </label>
                <input
                  type="text"
                  id="buyerFirstName"
                  name="buyerFirstName"
                  required
                  value={formData.buyerFirstName || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div>
                <label htmlFor="buyerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="buyerEmail"
                  name="buyerEmail"
                  required
                  value={formData.buyerEmail || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Votre email"
                />
              </div>
              
              <div>
                <label htmlFor="buyerPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone*
                </label>
                <input
                  type="tel"
                  id="buyerPhone"
                  name="buyerPhone"
                  required
                  value={formData.buyerPhone || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Destinataire du cadeau</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom*
                </label>
                <input
                  type="text"
                  id="recipientName"
                  name="recipientName"
                  required
                  value={formData.recipientName || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Nom du destinataire"
                />
              </div>
              
              <div>
                <label htmlFor="recipientFirstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom*
                </label>
                <input
                  type="text"
                  id="recipientFirstName"
                  name="recipientFirstName"
                  required
                  value={formData.recipientFirstName || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Prénom du destinataire"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="personalMessage" className="block text-sm font-medium text-gray-700 mb-1">
              Message personnalisé
            </label>
            <textarea
              id="personalMessage"
              name="personalMessage"
              value={formData.personalMessage || ''}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Votre message personnalisé pour la carte cadeau"
            ></textarea>
          </div>
          
          <div className="flex items-center justify-between mt-6">
            <button 
              type="button"
              onClick={() => {
                setPriceOption(null);
                setFormStep(null);
              }}
              className="px-4 py-2 text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour
            </button>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Envoi en cours...</span>
              ) : (
                <>
                  <span>Continuer vers le paiement</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Affichage du module de paiement Stripe pour les services concernés
  const renderStripePayment = () => {
    let stripeTitle, stripeInstructions;
    
    if (service.id === 4) { // Guidance Question
      stripeTitle = "Paiement pour Guidance Question";
      stripeInstructions = "Merci d'avoir rempli le formulaire. Vous allez être redirigé vers la page de paiement. Une réponse vous sera apportée dans les 72h.";
    } else if (service.id === 7) { // Carte Cadeau
      stripeTitle = "Paiement de votre Carte Cadeau";
      stripeInstructions = "Merci d'avoir rempli le formulaire. Vous allez être redirigé vers la page de paiement. Le bon vous sera envoyé par mail dans les 48h (hors W.E).";
    }
    
    return (
      <div className="p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">{stripeTitle}</h3>
        
        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-100 text-green-700">
            Votre formulaire a été envoyé avec succès!
          </div>
        )}
        
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
          onClick={() => {
            setFormStep("form");
            setSubmitSuccess(false);
          }}
          className="mt-6 px-4 py-2 text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1 mx-auto"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour au formulaire
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
          {quoteServices.includes(service.id) ? (
            // Formulaire de devis pour Nettoyage Harmonisation
            renderQuoteForm()
          ) : !canBookOnline(service.id) ? (
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
            isGuidanceQuestionPaused() ? (
              // Afficher le bandeau de pause pour Guidance Question
              renderGuidanceQuestionPauseBanner()
            ) : priceOption ? (
              // Option sélectionnée, afficher formulaires ou Stripe
              isStripeService() ? (
                formStep === "form" ? (
                  // Affichage du formulaire selon le service
                  service.id === 4 ? renderGuidanceQuestionForm() : renderGiftCardForm()
                ) : formStep === "payment" ? (
                  // Affichage du module de paiement Stripe
                renderStripePayment()
                ) : null
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
          ) : giftCardRedemptionServices.includes(service.id) ? (
            // Affichage direct de Calendly pour les services de bon cadeau
            <div className="calendly-inline-widget" 
              data-url={calendlyUrl}
              style={{ minWidth: '320px', height: '700px' }}
            />
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
              <h3 className="text-xl font-semibold mb-6">Souhaitez-vous une séance en présentiel ou à distance ? Sachez que les disponibilités sont identiques</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <button
                  onClick={() => setPaymentChoice("online")}
                  className="flex flex-col items-center p-6 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all"
                >
                  <svg className="w-12 h-12 text-purple-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="font-medium text-lg mb-2">À distance / en visio</span>
                  <span className="text-sm text-gray-500">Paiement en ligne par carte bancaire</span>
                </button>
                
                <button
                  onClick={() => setPaymentChoice("onsite")}
                  className="flex flex-col items-center p-6 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all"
                >
                  <svg className="w-12 h-12 text-purple-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-lg mb-2">En présentiel au cabinet</span>
                  <span className="text-sm text-gray-500">Paiement sur place</span>
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