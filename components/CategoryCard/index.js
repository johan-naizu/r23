import React from "react"
import styles from "@/styles/CategoryCard.module.css";
import { useLayoutEffect, useRef } from 'react';
import { gsap, Power4, Linear } from "gsap";
import Image from "next/image";
import Box from "./threed";
import ThreeD from "./threed";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CategoryCard() {


    // const el = useRef();
    // const tl_main = useRef();

    // useLayoutEffect(() => {
    //     const ctx = gsap.context(() => {
    //         tl_main.current = gsap
    //             .timeline()
    //             .delay(1.0)
    //             .to(".card", {
    //                 stagger: 1,
    //                 translateY: -50,
    //                 rotationX: "-220",
    //                 // transformOrigin: "50% 50% -1000px",
    //                 ease: Linear.easeOut,
    //                 duration: 4,
    //                 repeat: -1,
    //             })
    //     }, el);
    //     // return () => ctx.revert(); // cleanup
    // }, []);
    return (
        <ThreeD/>

        // <div ref={el} className={`${styles.card_wrapper_p} card_wrapper_p`}>
        // {/* <div className={`${styles.card_wrapper} card_wrapper`} >
        //     <div className={`${styles.card} card`}>
        //         <Image src="/images/main.png" fill/>
        //     </div>
        //     <div className={`${styles.card} card`}>
        //         2
        //     </div>
        //     <div className={`${styles.card} card`}>
        //         3
        //     </div>
        // </div> */}
        // </div>
    )
}