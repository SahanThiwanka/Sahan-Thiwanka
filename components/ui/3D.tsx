"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef, } from "react";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const ref = useRef<any>(null); // Just use 'any' or 'THREE.Group'

  // Auto oscillate the model (unless user is rotating)
  useFrame(({ clock }) => {
    if (ref.current && !ref.current.userData.isInteracting) {
      const angle = Math.sin(clock.getElapsedTime() * 1.2) * 0.4;
      ref.current.rotation.y = angle;
    }
  });

  return <primitive object={scene} ref={ref} scale={0.8} />;
}

export function Hero3DModel() {
  const orbitRef = useRef<any>(null);

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
          onStart={() => {
            if (orbitRef.current) {
              orbitRef.current.object.userData.isInteracting = true;
            }
          }}
          onEnd={() => {
            if (orbitRef.current) {
              orbitRef.current.object.userData.isInteracting = false;
            }
          }}
        />
      </Canvas>
    </div>
  );
}

