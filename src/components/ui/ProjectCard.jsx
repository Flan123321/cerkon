import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi'; // Un ícono para un "call to action"

export function ProjectCard({ title, category, imageUrl }) {
  return (
    // CAMBIOS: Fondo blanco, borde, sombra y efecto hover
    <div className="bg-cerkon-light rounded-2xl shadow-lg border border-gray-200 
                    overflow-hidden group transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:border-cerkon-orange hover:-translate-y-2">
      
      {/* 1. Imagen del Proyecto */}
      {/* La imagen tendrá un sutil zoom al hacer hover en la tarjeta */}
      <div className="overflow-hidden h-56">
        <img 
          src={imageUrl} 
          alt={`Imagen del proyecto ${title}`} 
          className="w-full h-full object-cover 
                     transition-transform duration-300 ease-in-out
                     group-hover:scale-105" // Efecto de zoom en hover
        />
      </div>

      {/* 2. Contenido de la Tarjeta */}
      <div className="p-6">
        <span className="text-sm font-medium text-cerkon-orange uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-2xl font-heading text-cerkon-dark mt-2">
          {title}
        </h3>
        {/* Opcional: descripción corta 
        <p className="text-cerkon-gray mt-2 text-sm">{description}</p> 
        */}
      </div>
    </div>
  );
}