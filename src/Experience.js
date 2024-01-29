import { Environment, OrbitControls } from '@react-three/drei';
import './App.css';
import Model from './Model';
import Ocean from './Ocean';


function Experience() {

    return (
        <>
            <OrbitControls maxPolarAngle={1.5} minPolarAngle={0} minDistance={8} maxDistance={40} />
            <ambientLight intensity={1} />

            <Ocean />
            <Model />

            <Environment files="je_gray_02_1k.hdr" />
        </>
    )
}

export default Experience
