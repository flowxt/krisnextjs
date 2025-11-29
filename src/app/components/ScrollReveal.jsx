"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Différents types d'animations disponibles
const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
    margin: "-50px 0px"
  });

  const selectedVariant = animationVariants[animation] || animationVariants.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier pour une animation fluide
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Composant pour animer plusieurs éléments en séquence (stagger)
export function ScrollRevealGroup({
  children,
  animation = "fadeUp",
  staggerDelay = 0.1,
  duration = 0.5,
  className = "",
  childClassName = "",
  once = true,
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
    margin: "-50px 0px"
  });

  const selectedVariant = animationVariants[animation] || animationVariants.fadeUp;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={childVariants} className={childClassName}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={childVariants} className={childClassName}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

