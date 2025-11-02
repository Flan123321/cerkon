import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// Función para generar 2,500 posiciones aleatorias
function createRandomParticles() {
  // --- 💡 CAMBIO 1: Reducimos de 10,000 a 2,500 partículas ---
  // (¡Un 75% menos de carga!)
  const count = 2500; 
  const positions = new Float32Array(count * 3);
  const boxSize = 25; 

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * boxSize; // x
    positions[i3 + 1] = (Math.random() - 0.5) * boxSize; // y
    positions[i3 + 2] = (Math.random() - 0.5) * boxSize; // z
  }
  return positions;
}

// Componente interno que renderiza y anima los puntos
function ParticleCloud() {
  const pointsRef = useRef();

  const positions = useMemo(() => createRandomParticles(), []);

  // El "baile": rotamos suavemente
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#F97316" // Naranja
        // --- 💡 CAMBIO 2: Aumentamos el tamaño ---
        // (Para compensar la menor cantidad)
        size={0.05}      
        // --- 💡 CAMBIO 3: Aumentamos la opacidad ---
        opacity={0.4}    
        depthWrite={false}
      />
    </Points>
  );
}

// El componente Canvas que exportamos
export function DancingParticlesFooter() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ParticleCloud />
    </Canvas>
  );
}