import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';

import Loader from './Loader';
import Bird from '../models/Bird';
import Island from '../models/Island';
import Plane from '../models/Plane';
import Sky from '../models/Sky';

const getIslandLayout = () => {
  const screenPosition = [0, -6.5, -43];
  const rotation = [0.1, 4.7, 0];
  const screenScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];

  return [screenScale, screenPosition, rotation];
};

const getPlaneLayout = () => {
  if (window.innerWidth < 768) {
    return [[1.5, 1.5, 1.5], [0, -1.5, 0]];
  }

  return [[3, 3, 3], [0, -4, -4]];
};

const HomeScene = ({ isRotating, setCurrentStage, setIsRotating }) => {
  const [islandScale, islandPosition, islandRotation] = useMemo(() => getIslandLayout(), []);
  const [planeScale, planePosition] = useMemo(() => getPlaneLayout(), []);

  return (
    <Canvas
      className={`h-screen w-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{ near: 0.1, far: 1000 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Bird />
        <Sky isRotating={isRotating} />
        <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        <Plane isRotating={isRotating} scale={planeScale} position={planePosition} rotation={[0, 20, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default HomeScene;
