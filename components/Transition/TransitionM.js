import React, { useEffect, useState } from "react"
import styles from "@/styles/Transition.module.css";
import { useLayoutEffect, useRef } from 'react';
import { gsap, Power4, Linear, Power2, Expo } from "gsap";
import Image from "next/image";
import Marquee from "react-fast-marquee";


export default function TransitionM({ hidden }) {
    const Ref = useRef();
    const [scale, setScale] = useState({
        scale: 1,
        angle: 0,
    });
    useLayoutEffect(() => {
        let h = window.innerHeight;
        let w = window.innerWidth;
        let r = w * w + h * h;
        let a = Math.atan(h / w)
        a = a * 180 / Math.PI
        r = Math.sqrt(r);
        h = r / h;
        w = r / w;
        let s = h > w ? h : w;
        setScale({ scale: s, angle: a });
    }, [])
    useEffect(() => {
        if (!Ref.current.childNodes[0]) return;
        if (Ref.current?.childNodes[0]?.childNodes[0].style.getPropertyValue("--duration") === "0s") {
            Ref.current?.childNodes[0].childNodes[0].style.setProperty("--duration", "15s");
            Ref.current?.childNodes[0].childNodes[1].style.setProperty("--duration", "15s");
        }
        console.log(Ref.current?.childNodes[0]?.childNodes[0].style.getPropertyValue("--duration"))
    }, [Ref.current, hidden])


    return (

        <div className={styles.transition} style={{
            display: hidden && scale.scale !== -1 ? "none" : "flex",
        }}>
            <div className={styles.transition_child} style={{
                transform: `scale(${scale.scale}) rotate(-${scale.angle}deg)`
            }}>
                <div className={styles.top}>
                    <div className={`${styles.top_movin} topmovin`}>
                        <div className={styles.noise}>

                        </div>
                    </div>
                </div>
                <div ref={Ref} className={`${styles.marquee} marqueeText`}>
                    <Marquee gradient={false} className={styles.marquee_component} speed={200} pauseOnHover={false} pauseOnClick={scale.scale} play >
                        <span className={styles.marquee_text_normal}>THE BOOK OF ETERNAL FOLKLORES</span>
                        <span className={styles.marquee_ragam}> RAGAM 2023</span>
                        <span className={styles.marquee_text_normal}>THE BOOK OF ETERNAL FOLKLORES</span>
                        <span className={styles.marquee_ragam}> RAGAM 2023</span>
                        <span className={styles.marquee_text_normal}>THE BOOK OF ETERNAL FOLKLORES </span>
                    </Marquee>
                </div>
                <div className={styles.bottom}>
                    <div className={`${styles.bottom_movin} bottommovin`}>
                        <div className={styles.noise}>

                        </div>
                    </div>
                </div>
                {/* <object className={styles.image} type="image/svg+xml" data="/preloader.svg"></object> */}
                {/* <div className={`${styles.card} ${styles.blackish} move1 ${styles.first1}`}></div>
            <div className={`${styles.card} ${styles.whitish} move1 ${styles.second1}`}></div>
            <div className={`${styles.card} ${styles.blackish} ${styles.doublewidth} ${styles.third1} move1`}>
                Loader HERE
            </div> */}
                {/* <div className={`${styles.card} ${styles.blackish} move2 ${styles.first2}`}></div>
            <div className={`${styles.card} ${styles.whitish} move2 ${styles.second2}`}></div>
            <div className={`${styles.card} ${styles.blackish} move2 ${styles.third2}`}></div> */}
            </div>
        </div>
    )
}