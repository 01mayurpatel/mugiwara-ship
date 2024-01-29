import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import { OrbitControls } from '@react-three/drei';
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three'
import Experience from './Experience';
import { Suspense } from 'react';
import Loader from './Loader';
import Popup from './Popup';
import Collective from './Collective';
import { CharacterProvider } from './CharacterContext';

function App() {

  return (
    <div className="App">
      <CharacterProvider>
      <Suspense fallback={<Loader />} >
        <Canvas camera={{ position: [-15, 10, 15] }}  >
          <Experience />
        </Canvas>
      </Suspense>
      <Popup />
      <Collective/>
      </CharacterProvider>
    </div>
  );
}

export default App;
