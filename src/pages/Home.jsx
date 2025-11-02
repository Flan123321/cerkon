import React, { useRef } from 'react';
import { Navbar } from '../components/layout/Navbar'; // <-- ¡AQUÍ ESTÁ LA CORRECCIÓN!
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { ElectricTendril } from '../components/3d/ElectricTendril';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { FeatureHighlight } from '../components/ui/FeatureHighlight';
import { Footer } from '../components/layout/Footer';

// --- DATOS PARA LAS SECCIONES "POR QUÉ ELEGIRNOS" ---
const features = [
  {
    title: "Seguridad Certificada",
    description: "Nuestra prioridad número uno. Cada instalación, empalme y mantenimiento cumple con las normativas más estrictas de la SEC. Tu tranquilidad es nuestro estándar.",
    imageUrl: "/images/revision.jpg"
  },
  {
    title: "Experiencia y Profesionalismo",
    description: "Años de experiencia en el sector nos respaldan. Abordamos cada proyecto con la seriedad y el conocimiento técnico que tu inversión merece, garantizando resultados duraderos.",
    imageUrl: "/images/empalme.jpg"
  },
  {
    title: "Innovación y Eficiencia",
    description: "No solo reparamos, innovamos. Implementamos tecnología LED y sistemas de gestión energética para reducir tu consumo y optimizar el rendimiento de tus instalaciones.",
    imageUrl: "/images/led.jpg"
  },
];


// --- Componente DarkCore (Núcleo "Agujero Negro") ---
function DarkCore({ mouse }) {
  const coreRef = useRef();
  const lightRef = useRef(); 

  useFrame(() => {
    const distFromCenter = Math.sqrt(mouse.current.x * mouse.current.x + mouse.current.y * mouse.current.y);
    const normalizedDist = Math.min(1, distFromCenter); 

    const lightIntensity = 25 * (1 - normalizedDist); 
    if (lightRef.current) {
      lightRef.current.intensity = lightIntensity;
    }
    
    const scale = 0.7 + 0.1 * (1 - normalizedDist); 
    if (coreRef.current) {
      coreRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group>
      <Sphere ref={coreRef} args={[0.7, 64, 64]}>
        <meshStandardMaterial 
          color="#000000" 
          roughness={0.8} 
          metalness={0.5} 
          emissive="#1a1a1a"
          emissiveIntensity={1.0}
        />
      </Sphere>
      <pointLight ref={lightRef} position={[0, 0, 0]} color="#FFD700" intensity={0} distance={5} decay={2} />
    </group>
  );
}

// --- Componente PlasmaScene (Toda la escena 3D) ---
function PlasmaScene() {
  const colors = [
    new THREE.Color("#FFA500"),
    new THREE.Color("#FFD700"),
    new THREE.Color("#FF4500"),
    new THREE.Color("#FFFFE0"),
    new THREE.Color("#FF8C00"),
  ];

  const tendrils = [];
  const mouse = useRef(new THREE.Vector2()); 

  React.useEffect(() => {
    const handlePointerMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);
  
  tendrils.push(
    <ElectricTendril 
      key="main" 
      color={new THREE.Color("#FFA500")}
      seed={0} 
      targetCursor={true}
      noiseIntensity={1.8} 
      noiseSpeed={1.2}     
      radius={0.035}       
      segments={60}        
      pulseSpeed={3.0}     
      lineOfSight={5}      
      pullStrength={0.3}   
    />
  );

  for (let i = 0; i < 5; i++) { 
    tendrils.push(
      <ElectricTendril 
        key={i} 
        color={colors[i % colors.length]}
        seed={i + 1}
        targetCursor={false}
        noiseIntensity={Math.random() * 1.5 + 0.8} 
        noiseSpeed={Math.random() * 1.0 + 0.6}     
        radius={0.015}                             
        segments={40}                              
        pulseSpeed={Math.random() * 2.5 + 1.5}     
        lineOfSight={4}                            
        pullStrength={0.2}                         
      />
    );
  }

  return (
    <>
      <color attach="background" args={['#000000']} />
      
      <DarkCore mouse={mouse} /> 

      {tendrils} 

      <Sphere args={[5, 64, 64]}> 
        <meshPhysicalMaterial
          transmission={0.85}
          roughness={0.15}
          thickness={0.5}
          ior={1.35}
          reflectivity={0.7}
          color="#d0d0d0"
          side={THREE.DoubleSide} 
        />
      </Sphere>
    </>
  );
}


// --- COMPONENTE PRINCIPAL DE LA PÁGINA 'HOME' ---
export function Home() {
  return (
    <div className="min-h-screen bg-cerkon-light text-cerkon-dark relative overflow-hidden">
      <Navbar />

      {/* --- SECCIÓN HERO (PLASMA) --- */}
      <section className="relative h-[90vh] flex items-center justify-center p-4">

        {/* Fondo 3D */}
        <div className="absolute inset-0 z-0 opacity-100"> 
          <Canvas dpr={[1, 2]} camera={{ fov: 75, position: [0, 0, 10] }}>
            <PlasmaScene />
            <EffectComposer>
              <Bloom
                intensity={3.5}
                luminanceThreshold={0.0001}
                luminanceSmoothing={0.99}
                mipmapBlur={true}
              />
            </EffectComposer>
          </Canvas>
        </div>

        {/* Contenido de Texto del Hero */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 
            className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            Soluciones Eléctricas <span className="text-cerkon-orange">Innovadoras</span>
          </h1>
          <p 
            className="text-xl text-cerkon-gray mb-10 leading-relaxed max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            Expertos en empalmes, instalaciones y mantenimiento. Llevamos tu proyecto al siguiente nivel con seguridad y eficiencia.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN "POR QUÉ ELEGIR" (PARALLAX Y CABLES) --- */}
      <section className="relative py-20 bg-cables-pattern bg-cover bg-center bg-fixed bg-no-repeat px-4 border-t border-gray-100">
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-cerkon-dark opacity-80 z-0"></div> 
        
        <div className="relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-cerkon-light">
              ¿Por qué elegir Cerkon?
            </h2>
          </div>
          
          <div className="space-y-12">
            {features.map((feature, index) => (
              <FeatureHighlight 
                key={feature.title}
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
                reverse={index % 2 === 1} // Alterna el layout
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}