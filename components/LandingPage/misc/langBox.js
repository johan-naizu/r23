import { useState, useEffect } from 'react'
import styles from '@/styles/Misc.module.css'

export default function LangBox(){

    let letters = [['രാ','Ra'],['ഗം','gam'],['రా','Ra'],['గం','gam'],['ரா','Ra'],['கம்','gam']]

    // 0 1 2 3
    const [lang,setLang] = useState(0)

    // For letter switching
    useEffect(()=> {
        let box = document.querySelector('#lang-box');
        box.addEventListener('mousemove', throttled(100, function(e) {
            let text = document.getElementById('text');
            // let left = e.offsetX - 100;
            let left = e.offsetX - box.clientHeight/2;
            let top = e.offsetY - box.clientHeight/2;


            text.style.left = left*0.15+'px'
            text.style.top = top*0.15 +'px'
          }));

        box.addEventListener('mouseleave', function(e) {
        let text = document.getElementById('text');
        text.style.left = 0;
        text.style.top = 0;
        })
        
    },[])

    function cycleLang(){

        let box = document.getElementById('lang-box')

        let newLang = (lang + 1) % 6

        if(newLang==0 || newLang == 1)
            box.style.fontFamily = 'var(--noto-malayalam)'
        else if(newLang==2 || newLang == 3)
            box.style.fontFamily = 'var(--noto-telugu)'
        else if(newLang==4 || newLang == 5)
            box.style.fontFamily = 'var(--noto-tamil)'

        setLang(newLang)
    }

    // Throttle function for smoother animation
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
        <div className={`${styles['languages-container']} misc-anim`} >
            <div className={styles['lang-box']} id='lang-box' onClick={cycleLang} >
                <p id='text'>{letters[lang][0]}</p>
                <p className={styles.subtext}>{letters[lang][1]}</p>
            </div>
        </div>
    )
}