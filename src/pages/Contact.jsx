import React from 'react';
import { Navbar } from '../components/layout/NavBar';
// Importamos los iconos
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

export function Contact() {
  return (
    <div className="min-h-screen bg-cerkon-light text-cerkon-dark">
      <Navbar />

      <main className="container mx-auto px-4 py-24">
        {/* Encabezado */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInUp">
            Ponte en Contacto
          </h1>
          <p 
            className="text-xl text-cerkon-gray leading-relaxed animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            ¿Tienes un proyecto en mente o necesitas una cotización? Escríbenos. Estamos listos para energizar tus ideas.
          </p>
        </div>

        {/* Contenedor Principal (Formulario + Info) */}
        {/* Usamos 'border' para crear una gran tarjeta contenedora */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto
                        border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

          {/* Columna 1: Formulario */}
          <form 
            className="space-y-6 p-8 md:p-12 animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
            name="contact"
            method="POST"
            data-netlify="true" // Para Netlify Forms
          >
            {/* Campo Oculto para Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <h2 className="text-3xl font-heading mb-8">Envíanos un Mensaje</h2>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cerkon-dark mb-2">
                Tu Nombre
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-cerkon-dark
                           focus:ring-2 focus:ring-cerkon-orange focus:border-cerkon-orange"
                required 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cerkon-dark mb-2">
                Tu Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-cerkon-dark
                           focus:ring-2 focus:ring-cerkon-orange focus:border-cerkon-orange"
                required 
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cerkon-dark mb-2">
                Tu Mensaje
              </label>
              <textarea 
                id="message" 
                name="message"
                rows="5"
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-cerkon-dark
                           focus:ring-2 focus:ring-cerkon-orange focus:border-cerkon-orange"
                placeholder="Cuéntanos sobre tu proyecto..."
                required 
              ></textarea>
            </div>

            <div>
              <button 
                type="submit" 
                className="w-full bg-cerkon-orange text-white font-bold py-3 px-6 rounded-full
                           text-lg transition-all duration-300
                           hover:opacity-90 hover:shadow-lg"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>

          {/* Columna 2: Información Directa */}
          {/* Fondo oscuro en contraste para la info, como en muchos diseños pro */}
          <div 
            className="space-y-8 p-8 md:p-12 bg-cerkon-dark text-white rounded-r-2xl animate-fadeInUp"
            style={{ animationDelay: '0.3s' }}
          >
            <h2 className="text-3xl font-heading mb-8">Información Directa</h2>

            {/* Teléfono */}
            <div className="flex items-start gap-4">
              <span className="text-cerkon-orange mt-1">
                <HiOutlinePhone size={24} />
              </span>
              <div>
                <h4 className="text-xl font-semibold text-white">Llámanos</h4>
                <a href="tel:+56912345678" className="text-lg text-gray-300 hover:text-cerkon-orange">
                  +56 9 1234 5678
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="text-cerkon-orange mt-1">
                <HiOutlineMail size={24} />
              </span>
              <div>
                <h4 className="text-xl font-semibold text-white">Escríbenos</h4>
                <a href="mailto:contacto@cerkon.cl" className="text-lg text-gray-300 hover:text-cerkon-orange">
                  contacto@cerkon.cl
                </a>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex items-start gap-4">
              <span className="text-cerkon-orange mt-1">
                <HiOutlineLocationMarker size={24} />
              </span>
              <div>
                <h4 className="text-xl font-semibold text-white">Visítanos</h4>
                <p className="text-lg text-gray-300">
                  Av. Siempre Viva 123, Oficina 45<br />
                  Ciudad Ejemplo, Chile
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}