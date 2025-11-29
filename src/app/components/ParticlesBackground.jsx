"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Étoiles scintillantes
function Star({ style, delay }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0, 1, 0.8, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
      }}
    />
  );
}

// Particule flottante
function FloatingParticle({ index }) {
  // Positions et propriétés fixes basées sur l'index pour éviter les problèmes d'hydratation
  const particles = [
    { x: 10, y: 20, size: 4, duration: 8, delay: 0 },
    { x: 85, y: 15, size: 3, duration: 10, delay: 1 },
    { x: 25, y: 70, size: 5, duration: 12, delay: 0.5 },
    { x: 70, y: 60, size: 3, duration: 9, delay: 1.5 },
    { x: 45, y: 30, size: 4, duration: 11, delay: 2 },
    { x: 90, y: 45, size: 3, duration: 8, delay: 0.8 },
    { x: 15, y: 55, size: 5, duration: 10, delay: 1.2 },
    { x: 60, y: 80, size: 4, duration: 9, delay: 0.3 },
    { x: 35, y: 10, size: 3, duration: 12, delay: 1.8 },
    { x: 80, y: 35, size: 4, duration: 8, delay: 2.2 },
  ];

  const p = particles[index % particles.length];

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${p.x}%`,
        top: `${p.y}%`,
        width: p.size,
        height: p.size,
        background: `radial-gradient(circle, rgba(167, 139, 250, 0.8) 0%, rgba(139, 92, 246, 0.4) 50%, transparent 100%)`,
        boxShadow: `0 0 ${p.size * 2}px rgba(167, 139, 250, 0.5)`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: p.duration,
        delay: p.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Orbe lumineux
function Orb({ position, size, color, delay }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
        x: [0, 20, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function ParticlesBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Positions fixes pour les étoiles (évite les problèmes d'hydratation)
  const starPositions = [
    { top: "5%", left: "10%", width: 2, height: 2 },
    { top: "15%", left: "25%", width: 3, height: 3 },
    { top: "8%", left: "45%", width: 2, height: 2 },
    { top: "20%", left: "65%", width: 3, height: 3 },
    { top: "12%", left: "80%", width: 2, height: 2 },
    { top: "35%", left: "5%", width: 3, height: 3 },
    { top: "45%", left: "15%", width: 2, height: 2 },
    { top: "55%", left: "90%", width: 3, height: 3 },
    { top: "65%", left: "75%", width: 2, height: 2 },
    { top: "75%", left: "35%", width: 3, height: 3 },
    { top: "85%", left: "55%", width: 2, height: 2 },
    { top: "25%", left: "95%", width: 2, height: 2 },
    { top: "40%", left: "50%", width: 3, height: 3 },
    { top: "60%", left: "20%", width: 2, height: 2 },
    { top: "80%", left: "85%", width: 3, height: 3 },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orbes lumineux en arrière-plan */}
      <Orb
        position={{ x: "-10%", y: "20%" }}
        size="400px"
        color="radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)"
        delay={0}
      />
      <Orb
        position={{ x: "70%", y: "10%" }}
        size="300px"
        color="radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)"
        delay={2}
      />
      <Orb
        position={{ x: "40%", y: "60%" }}
        size="350px"
        color="radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)"
        delay={4}
      />

      {/* Étoiles scintillantes */}
      {starPositions.map((style, i) => (
        <Star key={`star-${i}`} style={style} delay={i * 0.3} />
      ))}

      {/* Particules flottantes */}
      {[...Array(10)].map((_, i) => (
        <FloatingParticle key={`particle-${i}`} index={i} />
      ))}

      {/* Lignes de connexion subtiles (effet constellation) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
        <motion.line
          x1="10%"
          y1="20%"
          x2="25%"
          y2="15%"
          stroke="url(#purpleGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.line
          x1="25%"
          y1="15%"
          x2="45%"
          y2="30%"
          stroke="url(#purpleGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.line
          x1="70%"
          y1="60%"
          x2="85%"
          y2="45%"
          stroke="url(#purpleGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        />
        <motion.line
          x1="85%"
          y1="45%"
          x2="90%"
          y2="15%"
          stroke="url(#purpleGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
        />
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Effet de lueur centrale qui pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

