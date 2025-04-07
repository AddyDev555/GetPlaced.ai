"use client"

import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AvatarViewer = ({ modelUrl, animationUrl }) => {
    const modelRef = useRef();
    const mixerRef = useRef();

    const Scene = () => {
        const { scene } = useLoader(GLTFLoader, modelUrl);
        const animation = useLoader(FBXLoader, animationUrl);

        useEffect(() => {
            if (scene && animation) {
                // 1. Set up the mixer:
                mixerRef.current = new THREE.AnimationMixer(scene);

                // 2. Create AnimationActions:
                const animationAction = mixerRef.current.clipAction(animation.animations[0]);  // Get the first animation clip

                // 3. Play the animation:
                animationAction.play();

                // Clean up the mixer on unmount
                return () => {
                    if (mixerRef.current) {
                        mixerRef.current.uncacheRoot(scene);
                    }
                };
            }
        }, [scene, animation]);

        useFrame((state, delta) => {
            if (mixerRef.current) {
                mixerRef.current.update(delta);
            }

            scene.scale.set(6, 6, 6); // Make it smaller

            // Adjust the Y position.  This is very model-specific.
            scene.position.y = -9.3;

        });
        return <primitive object={scene} ref={modelRef} />;
    }

    return (
        <Canvas
            className='bottom-[0]'
            camera={{ position: [0, 1, 3] }}
            style={{ width: '500px', height: '85vh' }}
        >
            <ambientLight intensity={1.0} />
            <directionalLight color="#ffffff" position={[1, 1, 1]} intensity={1} />
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
};

const AnimatedAvatarPage = () => {
    return (
        <AvatarViewer
            modelUrl="./models/avatar.glb"
            animationUrl="./animations/standingAnime.fbx" //  REPLACE THIS WITH YOUR ANIMATION FILE
        />
    )
}

export default AnimatedAvatarPage;
