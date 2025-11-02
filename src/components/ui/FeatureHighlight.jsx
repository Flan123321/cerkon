import React, { useRef } from 'react'; // Eliminamos useScroll y useTransform
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';

// Variantes para la animación de entrada del CONTAINER completo
const sectionVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut",
      staggerChildren: 0.2
    } 
  },
};

// Variantes para los elementos de TEXTO
const textItemVariants = {
  hidden: { opacity: 0, x: -75 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20, 
      duration: 0.8,
      delay: 0.2
    } 
  },
};

// Variantes para la IMAGEN
const imageItemVariants = {
  hidden: { opacity: 0, x: 75, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20, 
      duration: 0.8 
    } 
  },
};

// SVG de decoración (pequeño rayo/chispa)
const LightningSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export function FeatureHighlight({ title, description, imageUrl, reverse = false }) {
  const ref = useRef(null); // Mantenemos useRef para el 'ref' del div principal

  // --- ELIMINAMOS los hooks de parallax (yText, yImage, useScroll) ---

  return (
    <motion.div
      ref={ref}
      className={`relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20 
                 border-b border-gray-700/50 last:border-b-0`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      {/* --- ELIMINADOS los dos <motion.div> de rayos con parallax --- */}


      {/* Columna de Texto */}
      <motion.div
        className={`relative p-8 rounded-lg bg-black/50 backdrop-blur-sm shadow-xl 
                   border border-cerkon-orange/30 ${reverse ? 'md:order-last' : ''}`}
        variants={textItemVariants}
      >
        {/* ESTOS SÍ LOS DEJAMOS */}
        <LightningSVG className="absolute top-2 left-2 w-6 h-6 text-cerkon-orange opacity-40" />
        <LightningSVG className="absolute bottom-2 right-2 w-6 h-6 text-cerkon-orange opacity-40 rotate-180" />

        <span className="text-lg font-semibold text-cerkon-orange uppercase block mb-2">
          Por qué Cerkon
        </span>
        <h2 className="text-4xl md:text-5xl font-heading text-cerkon-light mt-2 mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          {description}
        </p>
        <button className="flex items-center gap-2 text-lg font-semibold text-cerkon-orange group hover:text-white transition-all duration-300">
          Saber más
          <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </motion.div>

      {/* Columna de Imagen */}
      <motion.div
        className="relative group overflow-hidden rounded-2xl shadow-2xl border border-cerkon-orange/30"
        variants={imageItemVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-96 object-cover object-center transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-cerkon-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>
    </motion.div>
  );
}