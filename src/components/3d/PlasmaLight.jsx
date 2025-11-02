import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
// Solo importamos los 'helpers' de 'drei'
import { Sphere, Box } from '@react-three/drei'; 
import * as THREE from 'three'; 

// --- Componente principal del efecto de plasma que sigue el mouse ---
function PlasmaEffect() {
  const lightRef = useRef(); 
  const pointer = useRef(new THREE.Vector2()); 

  useEffect(() => {
    const handlePointerMove = (event) => {
      // Normaliza la posición del cursor a un rango de -1 a 1
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame((state) => {
    if (lightRef.current) {
      // Proyecta la posición 2D del cursor a una posición 3D
      const vector = new THREE.Vector3(pointer.current.x, pointer.current.y, 0.5); 
      vector.unproject(state.camera); 
      
      const dir = vector.sub(state.camera.position).normalize();
      const distance = -state.camera.position.z / dir.z;
      const pos = state.camera.position.clone().add(dir.multiplyScalar(distance));
      
      // Mueve la luz al plano Z=0
      lightRef.current.position.set(pos.x, pos.y, 0); 

      // Pequeña animación de la intensidad de la luz para simular un pulso
      lightRef.current.intensity = 1.5 + Math.sin(state.clock.elapsedTime * 3) * 0.5;
    }
  });

  return (
    <>
      {/* CORRECCIÓN: 'pointLight' en minúscula */}
      <pointLight 
        ref={lightRef} 
        intensity={2} 
        distance={30} 
        decay={2} 
        color="#F97316" 
      />
      
      {/* CORRECCIÓN: 'ambientLight' en minúscula */}
      <ambientLight intensity={0.3} />

      <Sphere args={[1.5, 32, 32]} scale={[2,2,2]}>
        {/* CORRECCIÓN: 'meshStandardMaterial' en minúscula */}
        <meshStandardMaterial 
            color="#FFD700" 
            emissive="#F97316" 
            emissiveIntensity={1.5}
            transparent
            opacity={0.3}
            roughness={0.1}
            metalness={0.9}
        />
      </Sphere>

      <Box args={[1.5, 1.5, 1.5]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
         {/* CORRECCIÓN: 'meshStandardMaterial' en minúscula */}
         <meshStandardMaterial 
            color="#005A9C" // Un toque de azul para contrastar
            emissive="#005A9C"
            emissiveIntensity={0.8}
            transparent
            opacity={0.2}
            roughness={0.2}
            metalness={0.7}
         />
      </Box>
    </>
  );
}

export function PlasmaLight() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 75, position: [0, 0, 10] }}>
      <PlasmaEffect />
    </Canvas>
  );
}