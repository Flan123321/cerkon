import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// --- 1. ELIMINAMOS la importación de 'DancingParticlesFooter' ---
import { Link } from 'react-router-dom';

// Variantes de Framer Motion (sin cambios)
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-cerkon-dark text-cerkon-light py-16 px-4 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      
      {/* --- 2. FONDO DE PARTÍCULAS CSS (INSTANTÁNEO) --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20 
                   [--tw-gradient-stops:theme(colors.cerkon-orange)] 
                   bg-particle-pattern bg-20 animate-particle-dance"
      />

      {/* 3. CONTENIDO PRINCIPAL (con z-10) */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10 mb-10">
          
          {/* Columna 1: Logo y Descripción */}
          <motion.div variants={itemVariants}>
            <Link 
              to="/" 
              className="text-3xl font-bold font-heading tracking-tight text-white mb-6 block"
            >
              Cerkon<span className="text-cerkon-orange">.</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Conectando tu mundo con soluciones eléctricas innovadoras, seguras y eficientes. Tu energía es nuestra misión.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Iconos de Redes Sociales */}
              <motion.a 
                href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cerkon-orange transition-colors duration-300"
                whileHover={{ scale: 1.2 }} variants={itemVariants}
              ><FaFacebookF size={20} /></motion.a>
              <motion.a 
                href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cerkon-orange transition-colors duration-300"
                whileHover={{ scale: 1.2 }} variants={itemVariants}
              ><FaInstagram size={20} /></motion.a>
              <motion.a 
                href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cerkon-orange transition-colors duration-300"
                whileHover={{ scale: 1.2 }} variants={itemVariants}
              ><FaLinkedinIn size={20} /></motion.a>
              <motion.a 
                href="https://wa.me/XXXXXXXXXX" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cerkon-orange transition-colors duration-300"
                whileHover={{ scale: 1.2 }} variants={itemVariants}
              ><FaWhatsapp size={20} /></motion.a>
            </div>
          </motion.div>

          {/* Columna 2: Servicios */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-cerkon-orange mb-6">Nuestros Servicios</h3>
            <ul className="space-y-3 text-sm">
              <motion.li variants={itemVariants} whileHover={{ x: 5, color: '#F97316' }}><a href="#empalmes" className="text-gray-400 hover:text-cerkon-orange transition-all duration-200">Empalmes Eléctricos</a></motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5, color: '#F97316' }}><a href="#instalaciones" className="text-gray-400 hover:text-cerkon-orange transition-all duration-200">Instalaciones Residenciales</a></motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5, color: '#F97316' }}><a href="#mantenimiento" className="text-gray-400 hover:text-cerkon-orange transition-all duration-200">Mantenimiento Preventivo</a></motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5, color: '#F97316' }}><a href="#asesoria" className="text-gray-400 hover:text-cerkon-orange transition-all duration-200">Asesoría Energética</a></motion.li>
            </ul>
          </motion.div>

          {/* Columna 3: Compañía */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-cerkon-orange mb-6">Compañía</h3>
            <ul className="space-y-3 text-sm">
              <motion.li variants={itemVariants} whileHover={{ x: 5, color: '#F97316' }}><a href="#nosotros" className="text-gray-400 hover:text-cerkon-orange transition-all duration-200">Sobre Nosotros</a></motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5, color: '#F97316' }}><a href="#equipo" className="text-gray-400 hover:text-cerkon-orange transition-all duration-200">Nuestro Equipo</a></motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5, color: '#F97316' }}><a href="#proyectos" className="text-gray-400 hover:text-cerkon-orange transition-all duration-200">Proyectos</a></motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5, color: '#F97316' }}><a href="#contacto" className="text-gray-400 hover:text-cerkon-orange transition-all duration-200">Contacto</a></motion.li>
            </ul>
          </motion.div>

          {/* Columna 4: Suscripción */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-cerkon-orange mb-6">Mantente Conectado</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recibe nuestras últimas noticias y ofertas especiales directamente en tu bandeja de entrada.
            </p>
            <form className="flex flex-col gap-4">
              <motion.div variants={itemVariants} className="relative">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 
                             focus:border-cerkon-orange focus:ring-1 focus:ring-cerkon-orange outline-none 
                             transition-all duration-300 placeholder-gray-500"
                />
                <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              </motion.div>
              <motion.button 
                type="submit" 
                className="w-full bg-cerkon-orange text-white py-3 rounded-md font-semibold 
                           hover:bg-cerkon-dark hover:border-cerkon-orange border border-cerkon-orange 
                           transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                Suscribirse
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* Sección de Copyright */}
        <div className="text-center text-gray-500 text-xs">
          <p>&copy; {currentYear} Cerkon. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}