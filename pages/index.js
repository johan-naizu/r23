import Head from 'next/head'
// import { Inter } from '@next/font/google'
import LandingPage from '@/components/LandingPage'
import Faq from '@/components/FAQ'
import MiscComponent from '@/components/LandingPage/miscComponent'
import Link from "@/components/Link"
import Explore from '@/components/Explore'
import Proshow from '@/components/Proshow'
import gsap, { Back, Bounce, Elastic, Linear, Power2, Power4 } from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Rajan from '@/components/LandingPage/rajan'
import Transition from '@/components/Transition'
import Loading from '@/components/Loading'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const el = useRef();
  const hero_tl = useRef();
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {


    const ctx = gsap.context(() => {
      gsap.to(".misc-anim", {
        scrollTrigger: {
          trigger: ".misc-component",
        },
        stagger: 0.2,
        y: 0,
        delay: 0,
        duration: 1.5,
        ease: Power2.easeOut
      })

      gsap.to(".proshow-anim", {
        scrollTrigger: {
          trigger: ".proshow-anim",
        },
        stagger: 0.1,
        scale: 1,
        // delay: 0.3,
        // delay: 0.5,
        duration: 4,
        ease: Elastic.easeOut.config(1, 0.3)
      })
      gsap.to(".rajan-anim", {
        scrollTrigger: {
          trigger: ".main-container",
        },
        opacity: 1,
        y: 0,
        // delay: 0.3,
        delay: 0.6,
        duration: 1.25,
        ease: Power2.easeOut
      })
      const heroduration = 2;
      const heroDelay = 2;
      hero_tl.current = gsap.timeline({
        repeat: -1,
        delay: 4.3
      })
        .addLabel("start")
        .to("#text1", {
          opacity: 1,
          filter: "blur(0px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "power2.out"
        }, "start")
        .fromTo("#text5", {
          opacity: 1,
          filter: "blur(0px)",
        }, {
          opacity: 0.1,
          filter: "blur(100px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "expo.inOut"
        }, "start")
        .addLabel("switch1")
        .to("#text1", {
          opacity: 0.1,
          filter: "blur(100px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "expo.inOut"
        }, "switch1")
        .to("#text2", {
          opacity: 1,
          filter: "blur(0px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "power2.out"
        }, "switch1")
        .addLabel("switch2")
        .to("#text2", {
          opacity: 0.1,
          filter: "blur(100px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "expo.inOut"
        }, "switch2")
        .to("#text3", {
          opacity: 1,
          filter: "blur(0px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "power2.out"
        }, "switch2")
        .addLabel("switch3")
        .to("#text3", {
          opacity: 0.1,
          filter: "blur(100px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "expo.inOut"
        }, "switch3")
        .to("#text4", {
          opacity: 1,
          filter: "blur(0px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "power2.out"
        }, "switch3")
        .addLabel("switch4")
        .to("#text4", {
          opacity: 0.1,
          filter: "blur(100px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "expo.inOut"
        }, "switch4")
        .to("#text5", {
          opacity: 1,
          filter: "blur(0px)",
          duration: heroduration,
          delay: heroDelay,
          ease: "power2.out"
        }, "switch4")
        .delay(heroDelay, "switch4")



    }, el);
    return () => ctx.revert(); // cleanup
  }, []);

  useEffect(() => {
    let u = localStorage.getItem("load")
    if (u) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }

  }, [])

  return (
    <>
      <Head>
        <title>Ragam 2023</title>
        <meta name="description" content="Ragam 2023 | Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={el}>
        {loading ?
          <Loading /> : ""}
        <div style={{ overflow: "hidden", height: `${loading ? "100vh" : "auto"}` }}>
          <LandingPage />
          {/* <CategoryCard/> */}
          <MiscComponent />
          <Rajan />
          <Explore />
          <Proshow />
          <Faq />
        </div>
      </main>
    </>
  )
}
