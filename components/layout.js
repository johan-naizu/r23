import Navbar from './NavBar'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Transition from './Transition';
import { gsap, Power4, Linear, Power2 } from "gsap";
import { useRouter } from 'next/router';
import Footer from './Footer';
if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

function vwToPixels(vw) {
  return Math.round(window.innerWidth / (100 / vw));
}
export default function Layout({ children }) {

  const [showTransition, setShowTransition] = useState(false);
  const [startComplete, setStartComplete] = useState(false)
  const [endComplete, setEndComplete] = useState(true)
  const [loadingEnd, setLoadingEnd] = useState(true);
  const router = useRouter();
  const aniStart = (url) => {
    console.log("start " + url)
    if(url!=="withDelay"){
      return
    }
    console.log("start", Date.now())
    localStorage.setItem("load", url)
    setLoadingEnd(false)
    setShowTransition(true)
    // setStartComplete(false)

    tl_main_trans_in.current.play(0);
  };
  const aniEnd = () => {
    console.log("end", Date.now())
    setLoadingEnd(true)
    localStorage.removeItem("load")
  };
  useEffect(() => {
    if (loadingEnd && startComplete) {
      console.log("should start end", Date.now())
      tl_main_trans_out.current.invalidate()
      setTimeout(()=>{
        tl_main_trans_out.current.play(0)

      },500)
      // tl_main_trans_in.current.play(0)

    }
  }, [loadingEnd, startComplete])

  
  useEffect(() => {
    router.events.on("routeChangeStart", aniStart);
    router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", aniStart);
      router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
    };
  }, [router]);
  const tl_main_trans_in = useRef();
  const tl_main_trans_out = useRef();

  const el = useRef();
  const tl_main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl_main.current = gsap
        .timeline()
        .delay(6)
        .to(".navbar", {
          y: 0,
          ease: Power4.easeOut,
          duration: 1.2
        });

      tl_main_trans_in.current = gsap
        .timeline({
          paused: true,
          onStart: () => {
            setStartComplete(false)
            setEndComplete(false)
            console.log("transition start start", Date.now())
          },
          onComplete: () => {
            setStartComplete(true)
            console.log("transition start complete", Date.now())
          },
          onReverseComplete: () => {
            setEndComplete(true)
            setShowTransition(false)
            console.log("transition end complete", Date.now())

          }

        })
        .to(".move1", {
          stagger: { // wrap advanced options in an object
            each: 0.2,
            // repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
          },
          x: 0,
          // transformOrigin: "50% 50% -1000px",
          ease: Power2.easeIn,
          duration: 0.65,
        })


      tl_main_trans_out.current = gsap
        .timeline({
          paused: true,
          onStart: () => {
            setEndComplete(false)
            console.log("transition end start", Date.now())
          },
          onComplete: () => {
            setEndComplete(true)
            setShowTransition(false)
            console.log("transition end complete", Date.now())
          }
        })
        .to(".move1", {
          stagger: { // wrap advanced options in an object
            each: 0.2,
            from: "end"

            // repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
          },
          x: -vwToPixels(100),
          // transformOrigin: "50% 50% -1000px",
          ease: Power2.easeOut,
          duration: 0.65,
        })

    }, el);
    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div ref={el}>
      { <Transition hidden={!showTransition} />}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}