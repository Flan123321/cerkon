import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Tube } from '@react-three/drei';
import * as THREE from 'three';
import { simplexNoise3D } from '../../utils/simplexNoise';

export function ElectricTendril({ 
  color, 
  seed = 0, 
  targetCursor = false, 
  noiseIntensity = 1.0,  
  noiseSpeed = 0.8,      
  radius = 0.02,         
  segments = 40,
  pulseSpeed = 2.0,
  lineOfSight = 3,       
  pullStrength = 0.2     
}) {
  
  const tubeRef = useRef();
  const mouse = useRef(new THREE.Vector2());
  const currentTarget3D = useRef(new THREE.Vector3());

  const curve = useMemo(() => {
    const initialPoints = Array(segments).fill().map(() => new THREE.Vector3());
    return new THREE.CatmullRomCurve3(initialPoints, false);
  }, [segments]);

  React.useEffect(() => {
    const handlePointerMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', handlePointerMove); 
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    const vector = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5);
    vector.unproject(state.camera);
    const dir = vector.sub(state.camera.position).normalize();
    const distance = -state.camera.position.z / dir.z;
    const cursor3DPos = state.camera.position.clone().add(dir.multiplyScalar(distance));
    
    let endPoint = new THREE.Vector3();

    if (targetCursor) {
      const mainTendrilNoiseX = simplexNoise3D(time * 0.5 + seed, 0, 0, seed) * 0.8; 
      const mainTendrilNoiseY = simplexNoise3D(0, time * 0.5 + seed, 0, seed) * 0.8;
      const targetWithNoise = cursor3DPos.clone().add(new THREE.Vector3(mainTendrilNoiseX, mainTendrilNoiseY, 0));
      
      currentTarget3D.current.lerp(targetWithNoise, 0.25); 
      endPoint.copy(currentTarget3D.current);
    } else {
      const randomX = simplexNoise3D(time * 0.1 + seed, 0, 0, seed) * 6; 
      const randomY = simplexNoise3D(0, time * 0.1 + seed, 0, seed) * 6;
      const randomPoint = new THREE.Vector3(randomX, randomY, 0);

      const distToCursor = randomPoint.distanceTo(cursor3DPos);
      if (distToCursor < lineOfSight) {
        const pullFactor = 1.0 - (distToCursor / lineOfSight);
        endPoint.copy(randomPoint).lerp(cursor3DPos, pullFactor * pullStrength); 
      } else {
        endPoint.copy(randomPoint);
      }
    }

    const points = curve.points;
    const startPoint = new THREE.Vector3(0, 0, 0);
    const direction = endPoint.clone().normalize(); 

    const perpendicular = new THREE.Vector3(direction.y, -direction.x, 0).normalize();

    for (let i = 0; i < points.length; i++) {
      const t = i / (points.length - 1); 
      
      const straightPoint = new THREE.Vector3().lerpVectors(startPoint, endPoint, t);

      const frequency = 15; 
      const amplitude = noiseIntensity * (1 - t) * 0.7; 
      const speed = time * noiseSpeed * 5 + seed; 

      const waveOffset = Math.sin(t * frequency + speed) * amplitude;
      
      const offset = perpendicular.clone().multiplyScalar(waveOffset);
      
      const subtleNoiseZ = simplexNoise3D(t * 5, time, seed, seed) * 0.1 * (1 - t);
      offset.z += subtleNoiseZ;

      points[i].copy(straightPoint.add(offset));
    }
    
    if (points.length > 0) {
      points[points.length - 1].copy(endPoint);
    }

    if (tubeRef.current) {
      tubeRef.current.geometry.setFromPoints(points);
    }
  });

  return (
    <Tube ref={tubeRef} args={[curve, segments, radius, 8, false]}>
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={10}
        transparent={true}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Tube>
  );
}