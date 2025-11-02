import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Iconos SVG para el menú ---
// ESTO ERA LO QUE FALTABA:
const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
// ---------------------------------

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-cerkon-light/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="text-3xl font-bold font-heading tracking-tight">
            Cerkon<span className="text-cerkon-orange">.</span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium text-cerkon-gray hover:text-cerkon-orange transition-colors">Inicio</Link>
            <Link to="/servicios" className="text-lg font-medium text-cerkon-gray hover:text-cerkon-orange transition-colors">Servicios</Link>
            <Link to="/proyectos" className="text-lg font-medium text-cerkon-gray hover:text-cerkon-orange transition-colors">Proyectos</Link>
            {/* Botón de Contacto principal (AQUÍ ESTABA EL OTRO ERROR, YA CORREGIDO) */}
            <Link to="/contacto" className="text-lg font-medium bg-cerkon-orange text-white py-2 px-5 rounded-full
                                             hover:opacity-90 transition-opacity">
              Contacto
            </Link>
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cerkon-dark hover:text-cerkon-orange transition-colors"
              aria-label="Abrir menú"
            >
              {/* Ahora HamburgerIcon y CloseIcon sí están definidos */}
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-cerkon-light border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-4 space-y-2">
          <Link to="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-cerkon-dark hover:bg-gray-100">Inicio</Link>
          <Link to="/servicios" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-cerkon-dark hover:bg-gray-100">Servicios</Link>
          <Link to="/proyectos" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-cerkon-dark hover:bg-gray-100">Proyectos</Link>
          <Link to="/contacto" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-cerkon-dark hover:bg-gray-100">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}