import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useMemo } from 'react'
import * as THREE from 'three'
// import PopupEl from './Popup';
import { useCharacter } from './CharacterContext';
function Model() {
    const { updateCharacterName } = useCharacter();
    const popupvis = document.querySelector('#popup-container')

    // IMPORTING THE MODEL
    const world = useGLTF("/AnimationResolved_V4.glb");
    const animations = world.animations
    const defaultAnimation = []
    let animationsObj = {
        'flagSheet': null,
    }
    let animationsObjHover = {
        'Object_0011': null, // Whale
        'Map003': null,
        'Cylinder1526': null, // Wheel,
        'bottle': [],
        'Cylinder1582': [], // Box
        'body1_body': [], // Bird
        'Head001': [], // Bird
        'snailmodel': null, // Snail
    }

    // Global ANIMATION
    let animationMixer = new THREE.AnimationMixer(world.scene)
    let animation;

    const matchNames = {
        'body1_body_0043_13': 'body1_body',
        'body1_body_0045': 'body1_body',
        'body1_body_0044': 'body1_body',
        'body1_body_0043': 'body1_body',
        'body1_body_0043_21': 'body1_body',
        'body1_body_0047_1': 'body1_body',
        'body1_body_0048_1': 'body1_body',
        'body1_body_0046_13': 'body1_body',
    }

    // CLICK HANDLER
    const clickHandler = (e) => {

        console.log(e.object.name);

        if (e.object.name.startsWith('characters_9')) {
            popupvis.style.display = 'block';
            updateCharacterName('zoro');
        }else if(e.object.name.startsWith('characters_4')){
            popupvis.style.display = 'block';
            updateCharacterName('usopp');
        }

        let name = matchNames[e.object.name] || e.object.name
        console.log(name);

        if (Object.keys(animationsObj).includes(name)) {

            try {
                if (!animationsObj[name].length) {

                    animation = animationMixer.clipAction(animationsObj[name])
                    animation.clampWhenFinished = true;
                    animation.setLoop(THREE.LoopOnce);
    
                } else {
    
                    animationsObj[name].map(item => {
    
                        const action = animationMixer.clipAction(item)
                        action.clampWhenFinished = true;
                        action.setLoop(THREE.LoopOnce);
                        action.play();
    
                    })
                }
            } catch (error) {
                
            }

            animation?.play()

        }

    }
    // HOVER HANDLER
    const hoverHandler = (e) => {

        // console.log(e.object.name);

        let name = matchNames[e.object.name] || e.object.name
        // console.log(name);

        if (Object.keys(animationsObjHover).includes(name)) {

            try {
                if (!animationsObjHover[name].length) {

                    animation = animationMixer.clipAction(animationsObjHover[name])
                    if (!animation.isRunning()) {
                        animation.reset()
                    }
                    animation.setLoop(THREE.LoopOnce);
                    // animation.clampWhenFinished = true;
    
    
    
                } else {
    
                    if (name === 'body1_body') {
    
                        console.log('bird')
    
                        animationsObjHover[name].map(item => {
    
                            const action = animationMixer.clipAction(item)
                            action.clampWhenFinished = true;
                            action.setLoop(THREE.LoopRepeat);
                            action.play();
    
                        })
                    } else if (name === 'bottle') {
                        animationsObjHover[name].map(item => {
    
                            const action = animationMixer.clipAction(item)
                            action.clampWhenFinished = true;
                            action.setLoop(THREE.LoopOnce);
                            action.play();
    
                        })
                    } else {
    
    
                        animationsObjHover[name].map(item => {
    
                            const action = animationMixer.clipAction(item)
                            if (!action.isRunning()) {
                                action.reset()
                            }
                            action.setLoop(THREE.LoopOnce);
                            action.play();
    
                        })
    
                    }
                }
    
            } catch (error) {
                
            }
            animation?.play()

        }

    }

    // USEMEMO FOR DEFAULT ANIMATION
    useMemo(() => {
        console.log("USEMEMO")

        animations.map(item => {
            if (item.name.startsWith('default')) {
                defaultAnimation.push(item)
            } else if (item.name === 'animateWhale' || item.name === 'animateFire1' || item.name === 'animateFire2' || item.name === 'animateFire3' || item.name === 'animateFire4') {
                defaultAnimation.push(item)
            }

            if (item.name === "animateFlag") {
                animationsObj.flagSheet = item
            } else if (item.name === 'animateSplash') {
                animationsObjHover.Object_0011 = item
            } else if (item.name === 'animateMap') {
                animationsObjHover.Map003 = item
            } else if (item.name === 'animateWheel') {
                animationsObjHover.Cylinder1526 = item
            } else if (item.name === 'animatePaper') {
                animationsObjHover.bottle.push(item)
            } else if (item.name === 'animateLid') {
                animationsObjHover.bottle.push(item)
            } else if (item.name === 'animateBox') {
                animationsObjHover.Cylinder1582.push(item)
            } else if (item.name === 'animateRope') {
                animationsObjHover.Cylinder1582.push(item)
            } else if (item.name === 'animateBird1') {
                animationsObjHover.body1_body.push(item)
            } else if (item.name === 'animateBird2') {
                animationsObjHover.body1_body.push(item)
            } else if (item.name === 'animateBird1HandL') {
                animationsObjHover.body1_body.push(item)
            } else if (item.name === 'animateBird1HandR') {
                animationsObjHover.body1_body.push(item)
            } else if (item.name === 'animateBird2HandL') {
                animationsObjHover.body1_body.push(item)
            } else if (item.name === 'animateBird2HandR') {
                animationsObjHover.body1_body.push(item)
            } else if (item.name === 'animateMouth') {
                animationsObjHover.Head001.push(item)
            } else if (item.name === 'animateShoot') {
                animationsObjHover.Head001.push(item)
            } else if (item.name === 'animateSnail') {
                animationsObjHover.snailmodel = item
            }

        })

        return defaultAnimation

    }, [])

    // DEFAULT ANIMATION MIXER
    let mixerModel
   try {
    if (defaultAnimation.length) {
        mixerModel = new THREE.AnimationMixer(world.scene);
        defaultAnimation.forEach(clip => {
            const action = mixerModel.clipAction(clip)
            action.play();
        });
    }

   } catch (error) {
    
   }
    // USEFRAME
    useFrame((state, delta) => {
        mixerModel?.update(delta * 1)
        animationMixer?.update(delta * 1)
    })

    return (
        <>
            <primitive object={world.scene}
                onClick={(e) => {
                    e.stopPropagation();
                    clickHandler(e)
                }}
                onPointerEnter={(e) => {
                    e.stopPropagation();
                    hoverHandler(e)
                }}
            />
        </>
    )
}

export default Model
