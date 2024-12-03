import React, { useEffect } from "react"
import styles from "@/styles/Transition.module.css";
import { useLayoutEffect, useRef } from 'react';
import { gsap, Power4, Linear, Power2, Expo } from "gsap";
import Image from "next/image";


export default function Transition({ hidden }) {

    return (

        <div className={styles.transition} style={{
            display: hidden ? "none" : "flex",
        }}>
            {/* <object className={styles.image} type="image/svg+xml" data="/preloader.svg"></object> */}
            <div className={`${styles.card} ${styles.blackish} move1 ${styles.first1}`}></div>
            {/* <div className={`${styles.card} ${styles.whitish} move1 ${styles.second1}`}></div> */}
            <div className={`${styles.card} ${styles.blackish} ${styles.doublewidth} ${styles.third1} move1`}>
                <img src="/images/assets/loader.gif" width={250}/>
                {/* <video width="320" height="240" controls={false} autoPlay>
                    <source src="images/assets/loader.webm" type="video/mp4" />
                    Preloader....
                </video> */}
                {/* Loader... */}
            </div>
            {/* <div className={`${styles.card} ${styles.blackish} move2 ${styles.first2}`}></div>
            <div className={`${styles.card} ${styles.whitish} move2 ${styles.second2}`}></div>
            <div className={`${styles.card} ${styles.blackish} move2 ${styles.third2}`}></div> */}

        </div>
    )
}