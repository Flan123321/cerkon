import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// Función para generar 10,000 posiciones aleatorias
function createRandomParticles() {
  const count = 10000; // 1. Aumentamos a 10,000 para más DENSIDAD
  const positions = new Float32Array(count * 3);
  const boxSize = 25; // Las mantenemos en una caja de tamaño similar

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

  // El "baile": rotamos un poco más rápido para que sea perceptible
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02; // 2. Ligeramente más rápido
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#111827" // 3. COLOR: Usamos 'cerkon-dark' (negro) para contraste
        size={0.03}      // 4. TAMAÑO: Un poco más grandes
        opacity={0.35}   // 5. OPACIDAD: Mucho más visibles (0.35)
        depthWrite={false}
      />
    </Points>
  );
}

// El componente Canvas que exportamos
export function DancingParticles() {
  return (
    // 6. CÁMARA: La acercamos para que las partículas se sientan más grandes
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ParticleCloud />
    </Canvas>
  );
}