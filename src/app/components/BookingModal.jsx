"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Calendar from "react-calendar";

// Variants pour les animations
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.2 }
  }
};

// Créneaux horaires temporaires
const DEFAULT_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function BookingModal({ isOpen, onClose, service }) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const availableSlots = DEFAULT_SLOTS;

  const handleConfirmation = () => {
    const reservation = {
      service,
      date: selectedDate,
      time: selectedTime,
      paymentMethod,
    };
    console.log("Réservation:", reservation);
    // Ici, vous pouvez ajouter la logique pour envoyer la réservation
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => onClose()}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {service?.title}
              </h2>
              <p className="text-gray-600">
                {service?.price} - {service?.duration}
              </p>
            </div>

            {/* Indicateur d'étapes */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNumber
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-16 h-1 mx-2 ${
                        step > stepNumber ? "bg-purple-600" : "bg-gray-100"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Contenu des étapes avec animations */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Étape 1: Sélection de la date */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Choisissez une date
                    </h3>
                    <Calendar
                      onChange={setSelectedDate}
                      value={selectedDate}
                      locale={fr}
                      minDate={new Date()}
                      className="w-full rounded-xl border-none"
                    />
                    {selectedDate && (
                      <div className="p-4 bg-purple-50 rounded-xl">
                        <p className="text-purple-700 font-medium">
                          Date sélectionnée : {format(selectedDate, "EEEE d MMMM yyyy", { locale: fr })}
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => selectedDate && setStep(2)}
                      disabled={!selectedDate}
                      className="w-full py-3 bg-purple-600 text-white rounded-xl disabled:opacity-50 hover:bg-purple-700 transition-colors"
                    >
                      Continuer
                    </button>
                  </div>
                )}

                {/* Étape 2: Sélection de l'heure */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Choisissez un horaire
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {availableSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 rounded-lg transition-all ${
                            selectedTime === time
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Retour
                      </button>
                      <button
                        onClick={() => selectedTime && setStep(3)}
                        disabled={!selectedTime}
                        className="w-full py-3 bg-purple-600 text-white rounded-xl disabled:opacity-50 hover:bg-purple-700 transition-colors"
                      >
                        Continuer
                      </button>
                    </div>
                  </div>
                )}

                {/* Étape 3: Résumé et paiement */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="p-4 bg-purple-50 rounded-xl">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Résumé de votre réservation
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>🗓 {format(selectedDate, "EEEE d MMMM yyyy", { locale: fr })}</p>
                        <p>⌚️ {selectedTime}</p>
                        <p>💜 {service?.title}</p>
                        <p>💰 {service?.price}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Mode de paiement
                      </h3>
                      <button
                        onClick={() => setPaymentMethod("onsite")}
                        className={`w-full p-4 border rounded-xl transition-all ${
                          paymentMethod === "onsite"
                            ? "border-purple-500 bg-purple-50"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        Paiement sur place
                      </button>
                      <button
                        onClick={() => setPaymentMethod("online")}
                        className={`w-full p-4 border rounded-xl transition-all ${
                          paymentMethod === "online"
                            ? "border-purple-500 bg-purple-50"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        Paiement en ligne (Stripe)
                      </button>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => setStep(2)}
                        className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Retour
                      </button>
                      <button
                        onClick={handleConfirmation}
                        disabled={!paymentMethod}
                        className="w-full py-3 bg-purple-600 text-white rounded-xl disabled:opacity-50 hover:bg-purple-700 transition-colors"
                      >
                        Confirmer la réservation
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
