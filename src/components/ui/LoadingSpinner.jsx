import React from 'react';

// Un spinner simple hecho con Tailwind y CSS
export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div 
        className="w-12 h-12 border-4 border-cerkon-orange border-b-transparent rounded-full animate-spin"
        role="status"
      >
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  );
}