"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current && !(ref.current.userData.isInteracting as boolean)) {
      const angle = Math.sin(clock.getElapsedTime() * 1.2) * 0.4;
      ref.current.rotation.y = angle;
    }
  });

  return <primitive object={scene} ref={ref} scale={0.8} />;
}

export function Hero3DModel() {
  const orbitRef = useRef<THREE.Group>(null);

  return (
    <div className="w-full h-[500px] md:h-full">
      <Canvas camera={{ position: [20, 7, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model url="/models/pc-on-desk.glb" />
        </Suspense>
        <OrbitControls
          ref={orbitRef as any} // OrbitControls doesn't expose a default ref type
          enableZoom={false}
          enableRotate={true}
          onStart={() => {
            const obj = (orbitRef.current as any)?.object as THREE.Object3D;
            if (obj) {
              obj.userData.isInteracting = true;
            }
          }}
          onEnd={() => {
            const obj = (orbitRef.current as any)?.object as THREE.Object3D;
            if (obj) {
              obj.userData.isInteracting = false;
            }
          }}
        />
      </Canvas>
    </div>
  );
}
