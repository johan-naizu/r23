import styles from '@/styles/LandingPage.module.css'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

export default function Hero({prompt}) {

    // useEffect(() =>{
    //     const elts = {
    //         text1: document.getElementById("text1"),
    //         text2: document.getElementById("text2")
    //     };
    //     const h_el = document.getElementById("hero-upper");
    //     // The strings to morph between. You can change these to anything you want!
    // const texts = [
    //     "ராகம்",
    //     "RAGAM",
    //     "രാഗം",
    //     "रागम",
    //     "రాగం"
    // ];
    
    // // Controls the speed of morphing.
    // const morphTime = 1;
    // const cooldownTime = 2;
    // let textIndex = texts.length - 1;
    // let time = new Date();
    // let morph = 0;
    // let cooldown = cooldownTime;
    
    // elts.text1.textContent = texts[textIndex % texts.length];
    // elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    
    // function doMorph() {
    //     h_el.style.filter='url(#threshold)';
    //     morph -= cooldown;
    //     cooldown = 0;
        
    //     let fraction = morph / morphTime;
        
    //     if (fraction > 1) {
    //         cooldown = cooldownTime;
    //         fraction = 1;
    //     }
        
    //     setMorph(fraction);
    // }
    
    // // A lot of the magic happens here, this is what applies the blur filter to the text.
    // function setMorph(fraction) {
    //     // fraction = Math.cos(fraction * Math.PI) / -2 + .5;
        
    //     elts.text1.textContent = texts[textIndex % texts.length];
    //     elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    //     elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    //     elts.text2.style.opacity = `${Math.pow(fraction, 0.9) * 100}%`;
        
    //     fraction = 1 - fraction;
    //     elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    //     elts.text1.style.opacity = `${Math.pow(fraction, 0.9) * 100}%`;
        
    // }
    
    // async function doCooldown() {
    //     morph = 0;
        
    //     elts.text2.style.filter = "";
    //     // elts.text2.style.opacity = "100%";
    //     // await sleep(1000);
    //     elts.text1.style.filter = "";
    //     // elts.text1.style.opacity = "0%";
    //     h_el.style.filter="";
    // }
    
    // // Animation loop, which is called every frame.
    // // function animate() {
    // //     requestAnimationFrame(animate);
        
    // //     let newTime = new Date();
    // //     let shouldIncrementIndex = cooldown > 0;
    // //     let dt = (newTime - time) / 1000;
    // //     time = newTime;
        
    // //     cooldown -= dt;
        
    // //     if (cooldown <= 0) {
    // //         if (shouldIncrementIndex) {
    // //             textIndex++;
    // //         }
            
    // //         doMorph();
    // //     } else {
    // //         doCooldown();
    // //     }
    // // }
    // // setTimeout(function() {
    // //     //your code to be executed after 1 second
    // //     animate();
    // //   }, 5700);

    useEffect(() => {
        let typewriter = document.getElementById('typewriter')
        // gsap.to(typewriter, {delay: 7, duration:1, y:0})
        setTimeout(()=> typewriter.style.opacity = '100%', 5000)
    }, [])
    // },[])
    
    
    


    return (<>
        <div className={`${styles["hero-text"]} hero-text`}>
            <div className={`${styles["hero-upper"]} hero-upper` } id='hero-upper' 
            style={ {filter: 'url(#threshold)'} }
            >
                <span className={`${styles["hero-t"]} ${styles["text-zero-opacity"]} hero-t ${styles["hero-anim"]}`} id="text1">RAGAM</span>
                <span className={`${styles["hero-t"]} ${styles["text-zero-opacity"]} hero-t ${styles["hero-anim"]}`} id="text2">രാഗം</span>
                <span className={`${styles["hero-t"]} ${styles["text-zero-opacity"]} hero-t ${styles["hero-anim"]}`} id="text3">ராகம்</span>
                <span className={`${styles["hero-t"]} ${styles["text-zero-opacity"]} hero-t ${styles["hero-anim"]}`} id="text4">रागम</span>
                <span className={`${styles["hero-t"]} ${styles["text-zero-opacity"]} hero-t ${styles["hero-anim"]}`} id="text5">రాగం</span>
                

            </div>
            <div className={`${styles["hero-lower"]} hero-lower`}>
                <span className={`${styles["hero-t"]} hero-t ${styles["year-anim"]}`}>2023</span>
            </div>
        </div>
        <div className={styles['typewriter-container']} >
            <div className={styles.Typewriter} id='typewriter'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(7000)
                            .typeString(`<span class="imagine">/imagine: </span>${prompt}`)
                            .start();
                    }}
                />
            </div>
        </div>
        <div style={{
            display: "none"
        }}>
        {prompt}
        </div>
        {/* <div className={`${styles["scroll-main"]}`}>

            <span className={`${styles["scroll-text"]}`}>Scroll down</span>
            <div className={`${styles["scroll-container"]}`}>
            <div className={`${styles["scroller"]}`}></div>
            </div>
        </div> */}
        <svg id="filters" style={{height: 0}}>
            <defs>
                <filter id="threshold">
                    {/* <!-- Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. --> */}
                    <feColorMatrix in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 255 -125" />
                    {/* <feGaussianBlur stdDeviation="0.1" /> */}
                </filter>
            </defs>
    </svg>
    </>
    // <!-- The SVG filter used to create the merging effect -->

    )
}
