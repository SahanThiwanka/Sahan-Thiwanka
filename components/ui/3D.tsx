// 1. Install required packages
// npm install three @react-three/fiber @react-three/drei

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// 2. Component to load and display your .glb model
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} />;
}

// 3. Main 3D canvas component to place in your hero section
export function Hero3DModel() {
  return (
    <div className="w-full h-[500px] md:h-full">
      <Canvas camera={{ position: [20, 7, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model url="/models/pc-on-desk.glb" /> {/* Put your model in public/models */}
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
