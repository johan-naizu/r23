import { useEffect } from 'react'
import gsap from 'gsap'
import styles from '@/styles/Misc.module.css'

export default function Eyes(){

     // For eyes follow
     useEffect(()=> {
        
        let eyeLeft = document.getElementById('el')
        let eyeRight= document.getElementById('er')
        let pl = document.getElementById('pl')
        let pr = document.getElementById('pr')
        let bgText = document.getElementsByClassName(styles['bg-text'])[0]

        let mouseX,mouseY

        let box = document.getElementById('eye-container')
        box.addEventListener('mousemove', throttled(100, function(e){
            mouseX = ( box.clientWidth/2 - e.offsetX )*0.06;
            mouseY = ( box.clientHeight/2 - e.offsetY )*0.07;

            gsap.to(eyeLeft, {duration: 0.5, x: -mouseX*2, y:-mouseY*2})
            gsap.to(eyeRight, {duration: 0.5, x: -mouseX*2, y:-mouseY*2})
            gsap.to(bgText, {duration: 0.5, x:mouseX*0.5, y:mouseY*0.5 })

            gsap.to(pl, {duration: 0.3, x: -mouseX*2.6, y: -mouseY*2.6 })
            gsap.to(pr, {duration: 0.3, x: -mouseX*2.6, y: -mouseY*2.6 })
        }))

        // Need to move eyes back to initial position
        // box.addEventListener('mouseleave', function(){
            // gsap.set(eyeLeft,{x: 0, y: 0})
            // gsap.set(eyeRight,{x: 0, y: 0})
        // })

        // for gyro effect eyes
        window.addEventListener('deviceorientation', (e) => gyroEye(e,box,eyeLeft,pl,bgText))

        return(() => window.removeEventListener('deviceorientation', (e) => gyroEye(e,box,eyeLeft,pl,bgText))
        )
    },[])

    // function for gyro effect on eye
    const gyroEye = throttled(100, function (e,box,eyeLeft,pl,bgText){
        const beta = e.beta
        const gamma = e.gamma

        let left = gamma*8 - box.clientHeight/2;
        let top = beta*3 - box.clientHeight/2;
        
        eyeLeft.style.left = left*0.09+'px'
        eyeLeft.style.top = top*0.09 +'px'

        gsap.to(bgText, {duration: 0.5, x:-left*0.2, y:-top*0.2 })

        pl.style.left=left*0.065+'px'
        pl.style.top=top*0.15+'px'

    })

    function blink(){
        let el = document.getElementById('el')
        gsap.to(el, {duration: 0.001, scaleY: 0})
        setTimeout(()=> gsap.to(el,{duration: 0.001, scaleY: 1}), 350)
    }

    // throttle function for smoother animations
    function throttled(delay, fn) {
        let lastCall = 0;
        return function (...args) {
          const now = (new Date).getTime();
          if (now - lastCall < delay) {
            return;
          }
          lastCall = now;
          return fn(...args);
        }
    }

    return(
        <div className={`${styles['eyes-container']} misc-anim`} id='eye-container'>

            <div className={styles.eyes} id='el' onClick={blink}>
                <div className={styles.pupil} id='pl'>
                    <div className={styles.reflection}></div>
                </div>
            </div>

            <div className={styles['bg-text']}>
                AN EYE<br />FOR ART
            </div>

        </div>
    )
}

