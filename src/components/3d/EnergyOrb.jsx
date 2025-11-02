import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function Orb() {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.x += 0.002;
    }
  });

  return (
    <Sphere ref={mesh} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#F97316" // <-- ¡CAMBIO AQUÍ! Usamos el naranja
        attach="material"
        distort={0.5} 
        speed={1.5}  
        roughness={0.5}
      />
    </Sphere>
  );
}

export function EnergyOrb() {
  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Orb />
      {/* <OrbitControls enableZoom={false} autoRotate speed={0.5} /> */}{" "}
      {/* Opcional: permite al usuario rotar */}
    </Canvas>
  );
}
