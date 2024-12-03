import { createRoot } from 'react-dom/client';
import React, { useRef, useState, StrictMode, useEffect, useLayoutEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from "three";
import { useCursor, MeshReflectorMaterial, Text, Environment } from '@react-three/drei'
import gsap from 'gsap';
import styles from "@/styles/CategoryCard.module.css"

const GOLDENRATIO = 1.61803398875
function Image({ img, parentRef }) {
    const mesh = useRef()
    const el = useRef();
    const tl_main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl_main.current = gsap
                .timeline(
                    {
                        scrollTrigger: {
                            trigger: parentRef.current,
                            scrub: 0.8,
                            markers: true,
                            pin: true,
                            pinSpacing: 0,
                            preventOverlaps: false,
                            // start: "top-=400px 10%",
                            // end: "bottom+=400px top",
                        }
                    }
                )
                .add("start")
                .fromTo(mesh.current.rotation, {
                    y: 2.0,
                }, {
                    y: 3.5,
                    ease: 'none',
                    duration: 40
                }, "start")
                .to(mesh.current.position, {
                    y: 3,
                    duration: 40
                },"start")
                // .to(".content", {
                //     y: 0,
                //     ease: "Power4.easeInOut",
                //     duration: 2
                // }, "start")
        }, parentRef);
        // return () => ctx.revert(); // cleanup
    }, []);
    // useFrame((state, delta) => {
    //     // console.log(mesh.current.position)
    //     if (mesh.current.rotation.y < 2.0 || mesh.current.rotation.y > 3.5) {
    //         mesh.current.rotation.y = 2.1
    //         mesh.current.position.y = 0
    //     }
    //     else {
    //         mesh.current.rotation.y += delta / 10;
    //         mesh.current.position.y -= delta/10

    //     }
    //     // mesh.current.rotation.y += delta
    // })
    useThree(({ camera }) => {
        camera.position.set(0, 0, -20);
        camera.rotation.set(0, 0, 1.3);
    });
    const texture = useLoader(THREE.TextureLoader, img)
    useEffect(() => {
        // mesh.current.rotation.z = 1
        // mesh.current.rotation.y = 60

    }, [mesh.current])
    // <cylinderGeometry args={[25, 25, 25, 21,1, true,0.2, 0.15 ]} />

    return (
        <mesh visible ref={mesh}>
            <cylinderGeometry args={[25, 25, 5, 21, 1, true, 0.2, 0.15]} />
            {/* <meshBasicMaterial color={0xfff1ef} attach="material" /> */}
            <meshBasicMaterial attach="material" map={texture} side={THREE.DoubleSide} />
        </mesh>
    )
}

export default function ThreeD() {
    const canvasRef = useRef();
    return (
        <StrictMode>
            <div
                className={styles.canvasParent}
                ref={canvasRef}
            >
                <Canvas
                    className={styles.canvas}> <perspectiveCamera args={[30, 1, 100, 500]} />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {/* <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} /> */}
                    <Image img={"/images/main.png"} parentRef={canvasRef} />
                </Canvas>
                {/* <div className={`${styles.content} content`} >
                    <div className={styles.section}>
                        Section 1
                    </div>
                    <div className={styles.section}>
                        Section 2
                    </div>
                    <div className={styles.section}>
                        Section 3
                    </div>
                </div> */}
            </div>
        </StrictMode>
    )
}
