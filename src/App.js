import './App.css';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Box from "./Components/Box"
import CameraControls from "./Components/CameraControls"

function App() {
  return (
    <Canvas>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default App;
