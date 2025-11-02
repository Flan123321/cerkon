import React from 'react';
import { Navbar } from '../components/layout/NavBar';
import { ProjectCard } from '../components/ui/ProjectCard';
import { DancingParticles } from '../components/3d/DancingParticles'; // <-- 1. IMPORTAMOS LAS PARTÍCULAS

const projectData = [
  // ... (Tu array de proyectos no cambia)
  {
    title: "Reparación de Tablero",
    category: "Mantenimiento",
    imageUrl: "/images/distribucionfundida.jpg" 
  },
  {
    title: "Recambio de Focos LED",
    category: "Iluminación",
    imageUrl: "/images/led.jpg"
  },
  {
    title: "Empalme Monofásico",
    category: "Instalaciones",
    imageUrl: "/images/empalme.jpg"
  },
  {
    title: "Migración a LED",
    category: "Eficiencia Energética",
    imageUrl: "/images/cambio.jpg"
  },
  {
    title: "Cambio de Acometida",
    category: "Instalaciones",
    imageUrl: "/images/cambiopi.jpg"
  },
  {
    title: "Fugas de Corriente",
    category: "Mantenimiento",
    imageUrl: "/images/revision.jpg"
  },
];

export function Projects() {
  return (
    // 2. Añadimos 'relative'
    <div className="min-h-screen bg-cerkon-light text-cerkon-dark relative overflow-hidden">
      
      {/* 3. FONDO DE PARTÍCULAS */}
      <div className="absolute inset-0 z-0">
        <DancingParticles />
      </div>

      {/* 4. CONTENIDO PRINCIPAL */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-24">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInUp">
              Proyectos Destacados
            </h1>
            <p 
              className="text-xl text-cerkon-gray leading-relaxed animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
            >
              Un vistazo a la calidad y el profesionalismo de nuestro trabajo. Soluciones reales para clientes reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <div 
                key={project.title} 
                className="animate-fadeInUp"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <ProjectCard 
                  title={project.title}
                  category={project.category}
                  imageUrl={project.imageUrl}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}