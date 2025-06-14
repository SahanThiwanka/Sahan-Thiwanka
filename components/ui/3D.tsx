"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(scene as THREE.Group);

  useFrame(({ clock }) => {
    if (ref.current && !ref.current.userData.isInteracting) {
      const angle = Math.sin(clock.getElapsedTime() * 1.2) * 0.4;
      ref.current.rotation.y = angle;
    }
  });

  return <primitive object={scene} ref={ref} scale={0.8} />;
}

export function Hero3DModel() {
  const orbitRef = useRef<OrbitControlsImpl>(null);

  const setUserInteracting = (isInteracting: boolean) => {
    const controls = orbitRef.current;
    const targetObject = controls?.object;
    if (targetObject) {
      targetObject.userData.isInteracting = isInteracting;
    }
  };

  return (
    <div className="w-full h-[500px] md:h-full">
      <Canvas camera={{ position: [20, 7, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model url="/models/pc-on-desk.glb" />
        </Suspense>
        <OrbitControls
          ref={orbitRef}
          enableZoom={false}
          enableRotate={true}
          onStart={() => setUserInteracting(true)}
          onEnd={() => setUserInteracting(false)}
        />
      </Canvas>
    </div>
  );
}
