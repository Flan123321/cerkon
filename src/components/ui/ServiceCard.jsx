import React from 'react';

// El ícono ahora se pasará como un prop (un elemento JSX de react-icons)
export function ServiceCard({ title, description, icon }) {
  return (
    // CAMBIOS: Fondo blanco, borde sutil, sombra y hover efecto
    <div className="bg-cerkon-light p-8 rounded-2xl shadow-lg border border-gray-200
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:border-cerkon-orange hover:-translate-y-2">
      
      <div className="mb-5">
        {/* Contenedor del ícono con el nuevo estilo */}
        <span className="inline-block p-4 bg-cerkon-orange/10 rounded-xl text-cerkon-orange">
          {/* Renderiza el ícono que le pasemos */}
          {icon}
        </span>
      </div>
      
      {/* Tipografías y colores actualizados */}
      <h3 className="text-2xl font-heading text-cerkon-dark mb-3">
        {title}
      </h3>
      
      <p className="text-base font-sans text-cerkon-gray leading-relaxed">
        {description}
      </p>
    </div>
  );
}