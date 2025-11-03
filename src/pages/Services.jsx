import React from 'react';
import { Navbar } from '../components/layout/NavBar'; // <-- ¡AQUÍ ESTÁ LA CORRECCIÓN!
import { ServiceCard } from '../components/ui/ServiceCard';
import { DancingParticles } from '../components/3d/DancingParticles';
import { 
  HiOutlineLightningBolt, 
  HiOutlineHome, 
  HiOutlineOfficeBuilding, 
  HiOutlineShieldCheck, 
  HiOutlineDocumentText, 
  HiOutlineLightBulb 
} from 'react-icons/hi';

const cerkonServices = [
  {
    title: "Empalmes Eléctricos",
    description: "Conexiones seguras y certificadas (monofásicas y trifásicas) para tu hogar o negocio, asegurando el cumplimiento normativo.",
    icon: <HiOutlineLightningBolt size={32} />
  },
  {
    title: "Instalaciones Domiciliarias",
    description: "Diseñamos e implementamos el sistema eléctrico completo para tu hogar, desde el tablero principal hasta el último interruptor.",
    icon: <HiOutlineHome size={32} />
  },
  {
    title: "Instalaciones Comerciales",
    description: "Soluciones eléctricas a medida para locales, oficinas y empresas, optimizando el consumo y la seguridad operativa.",
    icon: <HiOutlineOfficeBuilding size={32} />
  },
  {
    title: "Mantenimiento Preventivo",
    description: "Inspeccionamos y mantenemos tus instalaciones para prevenir fallos, sobrecargas y garantizar la continuidad de tu operación.",
    icon: <HiOutlineShieldCheck size={32} />
  },
  {
    title: "Certificación SEC (TE1)",
    description: "Gestionamos y ejecutamos la declaración de tus instalaciones ante la Superintendencia de Electricidad y Combustibles.",
    icon: <HiOutlineDocumentText size={32} />
  },
  {
    title: "Proyectos de Iluminación",
    description: "Diseño e instalación de sistemas de iluminación LED eficientes y estéticos para interiores, exteriores y áreas de trabajo.",
    icon: <HiOutlineLightBulb size={32} />
  },
];

export default function Services() { // <-- Añadimos 'export default' para React.lazy
  return (
    <div className="min-h-screen bg-cerkon-light text-cerkon-dark relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <DancingParticles />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-24">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInUp">
              Nuestros Servicios
            </h1>
            <p 
              className="text-xl text-cerkon-gray leading-relaxed animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
            >
              Soluciones integrales en electricidad. Nos enfocamos en la seguridad, la eficiencia energética y el cumplimiento normativo para cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cerkonServices.map((service, index) => (
              <div 
                key={service.title} 
                className="animate-fadeInUp"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <ServiceCard 
                  title={service.title} 
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}