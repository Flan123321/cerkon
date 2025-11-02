import React, { useRef, useEffect, forwardRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// 1. IMPORTAMOS MeshDistortMaterial DE DREI
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// --- Componente del Orbe (con forwardRef) ---
// Usamos forwardRef para poder pasar la ref desde el componente padre
const TrailOrb = forwardRef(({ position, color, size, delay }, ref) => {

  useFrame((state) => {
    if (ref.current) {
      // Simular un pulso de escala
      ref.current.scale.setScalar(size + Math.sin(state.clock.elapsedTime * 5 + delay) * 0.1);
    }
  });

  return (
    // Usamos la ref que nos pasaron
    <Sphere ref={ref} args={[1, 16, 16]} position={position} scale={size}>
      {/* 2. USAMOS MeshDistortMaterial (CON 'M' MAYÚSCULA) */}
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={1}
        roughness={0.1}
        emissive={color}
        emissiveIntensity={0.8}
      />
    </Sphere>
  );
});

// --- Componente principal del efecto de plasma con rastro ---
function PlasmaTrailEffect() {
  const mouse = useRef(new THREE.Vector2());
  const currentTargetPos = useRef(new THREE.Vector3());

  // 3. LÓGICA DE REFS REFACTORIZADA
  // Creamos un array de refs, uno para cada orbe
  const numOrbs = 10;
  const orbRefs = useRef([]);
  // Nos aseguramos de que el array tenga la cantidad correcta de refs
  orbRefs.current = Array(numOrbs).fill().map((_, i) => orbRefs.current[i] || React.createRef());

  // Escuchar el movimiento del mouse
  useEffect(() => {
    const handlePointerMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame((state) => {
    // 1. Convertir la posición 2D del mouse a una posición 3D
    const vector = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5);
    vector.unproject(state.camera);
    const dir = vector.sub(state.camera.position).normalize();
    const distance = -state.camera.position.z / dir.z;
    const pos = state.camera.position.clone().add(dir.multiplyScalar(distance));
    
    // Suavizar el movimiento del objetivo
    currentTargetPos.current.lerp(new THREE.Vector3(pos.x, pos.y, 0), 0.1);

    // 2. Mover cada orbe para que siga el rastro
    orbRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const orbMesh = ref.current;
        const target = new THREE.Vector3();

        if (index === 0) {
          // El primer orbe sigue directamente el cursor
          target.copy(currentTargetPos.current);
        } else {
          // Los orbes siguientes siguen al orbe anterior
          const prevOrbMesh = orbRefs.current[index - 1].current;
          if (prevOrbMesh) {
            target.copy(prevOrbMesh.position);
          }
        }
        // El movimiento se suaviza (lerp)
        // Los orbes más lejanos se mueven un poco más lento
        orbMesh.position.lerp(target, 0.2 - (index * 0.015));
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 5]} intensity={1.5} color="#F97316" />

      {/* 3. Renderizamos los orbes y les pasamos su ref */}
      {orbRefs.current.map((ref, i) => (
        <TrailOrb
          key={i}
          ref={ref} // Pasamos la ref correspondiente
          position={[0, 0, 0]} // Todos empiezan en el centro
          color={i % 2 === 0 ? "#F97316" : "#FFD700"}
          size={0.2 - (i * 0.01)} // Se hacen más pequeños
          delay={i * 0.5}
        />
      ))}
    </>
  );
}

export function PlasmaTrail() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 75, position: [0, 0, 10] }}>
      <PlasmaTrailEffect />
    </Canvas>
  );
}