"use client";
import { useState, useEffect } from "react";
import GoogleReviews from "../components/GoogleReviews";

export default function Avis() {
  return (
    <main className="min-h-screen bg-pattern py-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-11">
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span>
              Ce qu&apos;ils{" "}
              <span className="bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-2 inline-block">
                pensent de nous
              </span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients qui ont bénéficié de nos{" "}
            <span className="font-semibold text-purple-600">
              soins énergétiques
            </span>{" "}
            et nos{" "}
            <span className="font-semibold text-indigo-600">
              guidances spirituelles
            </span>
          </p>
        </div>

        {/* Intégration du composant GoogleReviews existant */}
        <GoogleReviews />

        <div className="mt-16 text-center">
          <a
            href="https://g.co/kgs/T5osgxD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Laisser un avis sur Google
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
