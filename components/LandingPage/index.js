import styles from '@/styles/LandingPage.module.css'
import Card from './card'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, Expo, Power2, Power4, Power1, Power3, Power0, Linear } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import Hero from './hero';
import dancers from "@/public/images/dancers.jpeg"
import elephant from "@/public/images/elephant.jpeg"
import femaledancer from "@/public/images/femaledancer.jpeg"
import ghoomar from "@/public/images/ghoomar.jpeg"
import knight from "@/public/images/knight.jpeg"
import main from "@/public/images/main.jpeg"
import mountainman from "@/public/images/mountainman.jpeg"
import theyyam_1 from "@/public/images/theyyam 1.jpeg"
import theyyam_2 from "@/public/images/theyyam 2.png"
import theyyam_3 from "@/public/images//theyyam 3.jpeg"
import theyyam_4 from "@/public/images/theyyam 4.png"

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
// if (typeof document === 'undefined') {
//     React.useLayoutEffect = React.useEffect;
//   }
function random(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}
const getImages = () => {
    // console.log("called")
    let time = Math.floor(Date.now()/10000);

    let imagefiles = [
        // { file: '/ashoka.png', prompt: 'Emperor Ashoka with a cape looks over a kingdom' },
        { file: dancers, prompt: 'Traditional Kerala dancers perform around a lake' },
        { file: elephant, prompt: 'An elephant with ornaments during a festival in Kerala' },
        { file: femaledancer, prompt: 'A female dancer performs in the courtyard of an Indian palace' },
        { file: ghoomar, prompt: 'Two women performing ghoomar dance in a dimly lit stage' },
        { file: knight, prompt: 'An Indian emperor in a forest at night with his horse' },
        { file: main, prompt: 'The face of an imaginary Indian folk art performer.' },
        { file: mountainman, prompt: 'An old emperor looks over his kingdom from a mountain' },
        // { file: '/mountaindance.png', prompt: 'three indian traditional women dancing in a field' },
        { file: theyyam_1, prompt: 'Theyyam performing in the dark on a field' },
        { file: theyyam_2, prompt: 'Portrait of a theyyam against a dark background' },
        { file: theyyam_3, prompt: 'Theyyam performing in the middle of a forest.' },
        { file: theyyam_4, prompt: 'A theyyam artist against a dark background' },
    ]
    imagefiles = imagefiles
        .map((value,idx) => ({ value, sort: random(time + idx) }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return imagefiles
}

export default function LandingPage() {


    const [images, setImages] = useState(getImages());
    // setImages(imagefiles)

    const el = useRef();
    const tl = useRef();
    const tl_main = useRef();
    const sec_img_ref = useRef();
    const [makeActive, setMakeactive] = useState(false)
    useLayoutEffect(() => {


        const ctx = gsap.context(() => {

            let scale = window.innerWidth / window.outerHeight;
            const cardW = 320;
            const cardH = 180;

            const scaleH = window.outerHeight * 1.15 / cardH;
            const scaleW = window.innerWidth * 1.15 / cardW;
            scale = scale > (cardW / cardH) ? scaleW : scaleH;
            const borderWidth = 40;
            const borderScale = cardH / (cardH - 2 * borderWidth);
            tl_main.current = gsap
                .timeline()
                .delay(4.2)
                .to(".main-sliders", {
                    scale: scale,
                    // ease: CustomEase.create("custom", "M0,0 C0.366,0 0.355,0.059 0.492,0.18 0.62,0.293 0.591,0.751 0.676,0.916 0.701,0.964 0.825,0.964 0.868,0.98 0.924,1 1,1 1,1 "),
                    ease: Power3.easeInOut,
                    duration: 2.35
                })
                // .to
                // .delay(3)
                // .to(".hero-t", {
                //     top: 0,
                //     stagger: 0.25,
                //     ease: Power4.easeOut,
                //     duration: 0.8
                // })


                ;
            // const cardsEase = CustomEase.create("custom", "M0,0 C0.25,0 0.248,0.032 0.276,0.054 0.294,0.068 0.374,0.107 0.43,0.2 0.477,0.279 0.483,0.404 0.498,0.502 0.532,0.73 0.586,0.88 0.64,0.928 0.679,0.962 0.698,1 1,1 ");
            const cardsEase = Power2.easeInOut

            tl.current = gsap.timeline()
                .to(".card", {
                    y: 0,
                    ease: cardsEase,
                    duration: 2.75,
                    stagger: function (idx, target, list) {
                        let i = idx % 5;
                        let j = Math.floor(idx / 5) % 2;
                        let d = Math.floor(idx / 5) == 2 ? 0 : 0.5;
                        let finalDelay = j == 0 ? (d + (i / 5)) : (d + ((4 - i) / 5));
                        return finalDelay;

                    }
                })
                .delay(2)
            gsap.to(".overlay", {
                scale: borderScale,
                delay: 4.5,
                duration: 2.8,
                ease: CustomEase.create("custom", "M0,0,C0.13,0.001,0.349,0.051,0.464,0.148,0.73,0.372,0.853,0.788,1,1")
            })

            gsap.to("#typewriter", {delay: 5, duration:2, y:0, opacity: 1})
        }, el);
        return () => ctx.revert(); // cleanup
    }, []);
    console.log(images[12])
    return (
        <div ref={el} className={styles.main}>
            {images[0] &&
                <>
                    <Hero prompt={images[12 % images.length].prompt} />
                    <div className={`${styles['home-wrapper']}`}>

                        <div className={`${styles['main-sliders']} main-sliders`}>
                            <div className={`${styles['cards-wrapper']} cards-wrapper`} >
                                <Card imgUrl={images[0 % images.length].file} fromTop />
                                <Card imgUrl={images[1 % images.length].file} fromTop />
                                <Card imgUrl={images[2 % images.length].file} fromTop />
                                <Card imgUrl={images[3 % images.length].file} fromTop />
                                <Card imgUrl={images[4 % images.length].file} fromTop />

                            </div>
                            <div className={`${styles['cards-wrapper']} cards-wrapper`} >
                                <Card imgUrl={images[5 % images.length].file} />
                                <Card imgUrl={images[6 % images.length].file} />
                                <Card imgUrl={images[7 % images.length].file} />
                                <Card imgUrl={images[8 % images.length].file} />
                                <Card imgUrl={images[9 % images.length].file} />
                            </div>
                            <div className={`${styles['cards-wrapper']} cards-wrapper cards-wrapper-main`} >
                                <Card imgUrl={images[10 % images.length].file} fromTop />
                                <Card imgUrl={images[11 % images.length].file} fromTop />
                                <Card imgUrl={images[12 % images.length].file} fromTop main />
                                <Card imgUrl={images[13 % images.length].file} fromTop />
                                <Card imgUrl={images[14 % images.length].file} fromTop />
                            </div>
                            <div className={`${styles['cards-wrapper']} cards-wrapper`} >
                                <Card imgUrl={images[15 % images.length].file} />
                                <Card imgUrl={images[16 % images.length].file} />
                                <Card imgUrl={images[17 % images.length].file} />
                                <Card imgUrl={images[18 % images.length].file} />
                                <Card imgUrl={images[19 % images.length].file} />
                            </div>
                            <div className={`${styles['cards-wrapper']} cards-wrapper`} >
                                <Card imgUrl={images[20 % images.length].file} fromTop />
                                <Card imgUrl={images[21 % images.length].file} fromTop />
                                <Card imgUrl={images[22 % images.length].file} fromTop />
                                <Card imgUrl={images[23 % images.length].file} fromTop />
                                <Card imgUrl={images[24 % images.length].file} fromTop />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}