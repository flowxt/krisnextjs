"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ClientOnly from "../components/ClientOnly";

const ContactForm = () => {
  // États du formulaire améliorés
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formStep, setFormStep] = useState(0);

  // Gestion des changements de champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Effacer l'erreur quand l'utilisateur commence à corriger
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Classes dynamiques pour les champs du formulaire
  const inputClasses = (fieldName) => {
    return `w-full px-4 py-3 rounded-lg border transition-all duration-300 bg-white text-gray-900 placeholder-gray-500
      ${
        errors[fieldName]
          ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
          : activeField === fieldName
          ? "border-purple-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
          : "border-purple-100 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
      }`;
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (
      formData.phone &&
      !/^(\+33|0)[1-9](\d{2}){4}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Format de téléphone invalide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Erreur d'envoi");
      }

      setSubmitSuccess(true);

      // Réinitialiser le formulaire après un certain délai
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setErrors({
        ...errors,
        submit:
          "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Effet visuel pour mettre en évidence les champs avec erreurs
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [errors]);

  // Animation des particules cosmiques
  const particleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-20 px-4 relative overflow-hidden">
      {/* Particules cosmiques */}
      <ClientOnly>
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          variants={particleVariants}
          initial="hidden"
          animate="visible"
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-300/30 mix-blend-screen blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 120 + 30}px`,
                height: `${Math.random() * 120 + 30}px`,
              }}
              variants={{
                hidden: {
                  scale: 0,
                  opacity: 0,
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                },
                visible: {
                  scale: [0, 1.2, 1],
                  opacity: [0, 0.7, 0.3],
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 4 + Math.random() * 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
            />
          ))}
        </motion.div>
      </ClientOnly>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mt-11 relative z-10"
      >
        {/* Élément décoratif */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>

        <div className="flex flex-col lg:flex-row">
          {/* Section Photo Améliorée */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 to-indigo-800/10 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/photo/imagecontact.png"
                alt="Énergie guérisseuse"
                width={800}
                height={800}
                className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
                priority
              />
            </div>

            {/* Overlay et texture */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-indigo-900/30 to-transparent z-20"></div>
            <div
              className="absolute inset-0 opacity-10 z-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                backgroundSize: "100px 100px",
              }}
            ></div>

            {/* Contenu texte */}
            <div className="absolute bottom-0 left-0 right-0 z-30 p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.h2
                  className="font-heading text-2xl lg:text-3xl font-bold mb-4 text-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  Connectons nos énergies
                </motion.h2>

                <motion.p
                  className="text-lg opacity-95 text-purple-100 mb-6 italic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  &quot;Votre message est la première vibration de notre échange
                  énergétique&quot;
                </motion.p>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5, color: "#f0fdff" }}
                  >
                    <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-purple-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-white">Réponse rapide sous 24h</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5, color: "#f0fdff" }}
                  >
                    <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-purple-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white">
                      Accompagnement personnalisé
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5, color: "#f0fdff" }}
                  >
                    <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-purple-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <span className="text-white">
                      Disponible pour séances à distance
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          {/* Section formulaire amélioré */}
          <div className="lg:w-1/2 px-8 py-12 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-lg mx-auto"
            >
              <motion.h3
                className="font-heading text-2xl font-bold text-gray-800 mb-2"
                whileHover={{ scale: 1.01 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Envoyez-moi votre message
                </span>
              </motion.h3>
              <p className="text-gray-600 mb-8">
                Je vous répondrai personnellement pour échanger sur vos besoins
                et vos objectifs énergétiques.
              </p>

              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-inner border border-emerald-100"
                  >
                    <motion.div
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Message envoyé avec succès!
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Merci de m&apos;avoir contacté. Je vous répondrai très
                        bientôt pour débuter notre voyage énergétique ensemble.
                      </p>
                      <motion.div
                        className="relative inline-block overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full h-1 absolute bottom-0 left-0 right-0" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Nom */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Votre nom complet<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.input
                          type="text"
                          name="name"
                          required
                          placeholder="Entrez votre nom"
                          className={inputClasses("name")}
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField("name")}
                          onBlur={() => setActiveField(null)}
                          whileFocus={{ scale: 1.01 }}
                          whileHover={{
                            boxShadow: "0 4px 12px rgba(139, 92, 246, 0.15)",
                          }}
                        />
                        <div
                          className={`absolute right-4 top-3.5 ${
                            errors.name ? "text-red-400" : "text-purple-400"
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-500"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Votre email<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.input
                          type="email"
                          name="email"
                          required
                          placeholder="Votre adresse email"
                          className={inputClasses("email")}
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setActiveField("email")}
                          onBlur={() => setActiveField(null)}
                          whileFocus={{ scale: 1.01 }}
                          whileHover={{
                            boxShadow: "0 4px 12px rgba(139, 92, 246, 0.15)",
                          }}
                        />
                        <div
                          className={`absolute right-4 top-3.5 ${
                            errors.email ? "text-red-400" : "text-purple-400"
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-500"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Votre téléphone{" "}
                        <span className="text-gray-400 text-sm">
                          (optionnel)
                        </span>
                      </label>
                      <div className="relative">
                        <motion.input
                          type="tel"
                          name="phone"
                          placeholder="Votre numéro de téléphone"
                          className={inputClasses("phone")}
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setActiveField("phone")}
                          onBlur={() => setActiveField(null)}
                          whileFocus={{ scale: 1.01 }}
                          whileHover={{
                            boxShadow: "0 4px 12px rgba(139, 92, 246, 0.15)",
                          }}
                        />
                        <div
                          className={`absolute right-4 top-3.5 ${
                            errors.phone ? "text-red-400" : "text-purple-400"
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-500"
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </div>

                    {/* Sujet */}
                    {/* <div>
                      <label className="block text-gray-700 mb-2 font-medium ">
                        Sujet du message
                      </label>
                      <div className="relative">
                        <motion.select
                          name="subject"
                          className={inputClasses("subject")}
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setActiveField("subject")}
                          onBlur={() => setActiveField(null)}
                          whileFocus={{ scale: 1.01 }}
                          whileHover={{
                            boxShadow: "0 4px 12px rgba(139, 92, 246, 0.15)",
                          }}
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="consultation">
                            Demande de consultation
                          </option>
                          <option value="information">
                            Demande d'informations
                          </option>
                          <option value="tarifs">
                            Renseignements sur les tarifs
                          </option>
                          <option value="autres">Autre demande</option>
                        </motion.select>
                        <div
                          className={`absolute right-4 top-3.5 ${
                            errors.subject ? "text-red-400" : "text-purple-400"
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div> */}

                    {/* Message */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Votre message<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.textarea
                          name="message"
                          required
                          rows="6"
                          placeholder="Comment puis-je vous aider dans votre chemin spirituel ?"
                          className={`${inputClasses("message")} resize-none`}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField("message")}
                          onBlur={() => setActiveField(null)}
                          whileFocus={{ scale: 1.005 }}
                          whileHover={{
                            boxShadow: "0 4px 12px rgba(139, 92, 246, 0.15)",
                          }}
                        ></motion.textarea>
                        <div
                          className={`absolute right-4 top-3.5 ${
                            errors.message ? "text-red-400" : "text-purple-400"
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-500"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Erreur de soumission */}
                    {errors.submit && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-50 text-red-700 rounded-lg border border-red-200"
                      >
                        {errors.submit}
                      </motion.div>
                    )}

                    {/* Bouton de soumission */}
                    <div className="pt-3">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full relative overflow-hidden py-4 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg transition-all duration-300 font-medium
                          ${
                            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                          }`}
                        whileHover={{
                          scale: isSubmitting ? 1 : 1.02,
                          boxShadow:
                            "0 20px 30px -10px rgba(139, 92, 246, 0.4)",
                        }}
                        whileTap={{
                          scale: isSubmitting ? 1 : 0.98,
                        }}
                      >
                        {/* Effet de brillance */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={isSubmitting ? {} : { x: "100%" }}
                          transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 2,
                            ease: "linear",
                          }}
                        />

                        {/* Contenu du bouton */}
                        <div className="relative flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <span className="mr-2">✨</span>
                              Envoyer mon message
                              <svg
                                className="w-5 h-5 ml-2 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </>
                          )}
                        </div>
                      </motion.button>
                    </div>

                    {/* Note de confidentialité */}
                    <motion.p
                      className="text-xs text-gray-500 text-center mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ delay: 0.5 }}
                    >
                      En soumettant ce formulaire, vous acceptez que vos
                      informations soient utilisées uniquement pour vous
                      recontacter et ne seront jamais partagées avec des tiers.
                    </motion.p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Section de localisation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-6xl mx-auto mt-20 p-6 bg-white rounded-[2rem] shadow-lg"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-gray-800 mb-4">
              Me trouver
            </h3>
            <p className="text-gray-600 mb-6">
              Je propose des consultations en présentiel et à distance.
              N&apos;hésitez pas à me contacter pour organiser une séance qui
              vous convient.
            </p>

            <div className="space-y-4">
              <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Adresse</h4>
                  <p className="text-gray-600">
                    208 Imp. des Fiers Gens, 74800 Saint-Laurent
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Horaires</h4>
                  <p className="text-gray-600">
                    Du lundi au samedi, de 9h à 19h
                    <br />
                    Sur rendez-vous uniquement
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Contact</h4>
                  <p className="text-gray-600">
                    Email : contact@krislavoixdesanges.fr
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 z-10 rounded-2xl pointer-events-none"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.5276717556167!2d6.364611076820642!3d45.90250060356368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478bee5864faffff%3A0x86ac8004929c05b4!2s208%20Imp.%20des%20Fiers%20Gens%2C%2074800%20Saint-Laurent%2C%20France!5e0!3m2!1sfr!2sfr!4v1709887011957!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              title="Carte de localisation"
            ></iframe>

            {/* Effet de scintillement sur la carte */}
            <motion.div
              className="absolute inset-0 opacity-0 bg-gradient-to-tr from-purple-400/10 to-indigo-400/10 pointer-events-none z-20"
              animate={{
                opacity: [0, 0.2, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto mt-10 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5 }}
      >
        <p>
          © {new Date().getFullYear()} Kris La Voix des Anges - Accompagnement
          spirituel et énergétique
        </p>
      </motion.div>

      <div className="h-20"></div>
    </div>
  );
};

export default ContactForm;
