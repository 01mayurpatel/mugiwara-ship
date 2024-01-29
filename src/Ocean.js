import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from 'three'

function Ocean() {

    const ocean = useGLTF("/Dayscene.glb");

    let mixerOcean
    if (ocean.animations.length) {
        mixerOcean = new THREE.AnimationMixer(ocean.scene);
        ocean.animations.forEach(clip => {
            const action = mixerOcean.clipAction(clip)
            action.play();
        });
    }

    useFrame((state, delta) => {
        mixerOcean?.update(delta * .4)
    })

    return (<primitive object={ocean.scene} position={[0, -.5, 0]} />)
}

export default Ocean
