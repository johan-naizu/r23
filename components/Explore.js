import React, { useEffect, useState } from "react"
import styles from "@/styles/Explore.module.css"
import { Router, useRouter } from "next/router";
import Link from "@/components/Link"
import Image from "next/image";


export default function Explore() {

    const router  =  useRouter();
    const [position,setPosition] = useState(undefined);

    const stylearr = [
        {opacity: "0", zIndex: "4", transform: "translate(-257.143%, -42.8571%) rotate(-60deg)"},
        {opacity: "100", zIndex: "5", transform: "translate(-171.429%, -28.5714%) rotate(-40deg)"},
        {opacity: "100", zIndex: "6", transform: "translate(-85.7143%, -14.2857%) rotate(-20deg)"},
        {opacity: "100", zIndex: "7", transform: "translate(0%, 0%) rotate(0deg)"},
        {opacity: "100", zIndex: "6", transform: "translate(85.7143%, 14.2857%) rotate(20deg)"},
        {opacity: "100", zIndex: "5", transform: "translate(171.429%, 28.5714%) rotate(40deg)"},
        {opacity: "0", zIndex: "4", transform: "translate(257.143%, 42.8571%) rotate(60deg)"} 
    ]

    const data = [
        {
            title: "Events",
            img: "/images/events.jpg",
            link: "/events",
        },
        {
            title: "Workshops",
            img: "/images/workshop.png",
            link: "/workshops",
        },
        {
            title: "Ragnarok",
            img: "/images/ragnarok.jpg",
            link: "/events?category=Ragnarok",
            
        },
        {
            title: "I-ink",
            img: "/images/iink.jpg",
            link: "/ink",
        },
        {
            title: "Sports",
            img: "/images/sports.png",
            link: "/events?category=Sports",
        },
        {
            title: "Prodezza",
            img: "/images/prodezza.jpg",
            link: "/prodezza",
        },
        {
            title: "Proshow",
            img: "/images/proshow.jpg",
            link: "/proshow",
        },
    ]

    useEffect(() => {
        /*--------------------
        Vars
        --------------------*/
        const c_el = document.getElementById("carousel");
        const b_l = document.getElementById("button-l");
        const b_r = document.getElementById("button-r");
        
        // /*--------------------
        // Contants
        // --------------------*/
        // const speedWheel = 0.02
        // const speedDrag = -0.1

        // /*--------------------
        // Get Z
        // --------------------*/
        // const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

        // /*--------------------
        // Items
        // --------------------*/
        // const items = document.querySelectorAll('.carousel-item')
        // const arrows = document.querySelectorAll('.open-window')
        // const $cursors = document.querySelectorAll('.cursor')
        // let progress = 4* 100 / items.length


        // const displayItems = (item, index, active) => {
        //     const zIndex = getZindex([...items], active)[index]
        //     // item.style.setProperty('--zIndex', zIndex)
        //     item.style.zIndex = zIndex
        //     item.style.transform = `translate(${(index - active) / items.length * 600}%,${(index - active) / items.length * 100}%) 
        // rotate(${(index - active) / items.length * 140}deg)`
        //     // item.style.opacity = (zIndex / 7 * 3 - 2)
        // }

        // /*--------------------
        // Animate
        // --------------------*/
        // const animate = () => {
        //     progress = Math.max(0, Math.min(progress, 100))
        //     active = Math.floor(progress / 100 * (items.length - 1))
        //     // c_el.style.backgroundImage = `radial-gradient(${data[active].bg} 15%, black)`
        //     // c_el.style.backgroundImage = `radial-gradient(farthest-corner at 40px 40px,${data[active].bg}af 15%,#000 100%)`
        //     items.forEach((item, index) => displayItems(item, index, active))
        // }
        // // animate()

        // /*--------------------
        // Click on Items
        // --------------------*/
        // items.forEach((item, i) => {
        //     item.addEventListener('click', (e) => {
        //         if(active == i){
        //             // router.push(data[i].link)
        //             router.events.emit("routeChangeStart",  "withDelay");
        //             setTimeout(() => {
        //                 router.push(data[i].link);
        //             }, 1000);
        //         }
        //         progress = (i / items.length) * 100 + 15
        //         animate()
        //     })
        //     item.addEventListener('mouseenter',()=>{
        //         if(active == i){
        //             arrows[i].style.opacity = 1;
        //         }
        //     })
        //     item.addEventListener('mouseleave',()=>{
        //         if(active == i){
        //             arrows[i].style.opacity = 0;
        //         }
        //     })
        // })

        // /*--------------------
        // Handlers
        // --------------------*/
        // const handleWheel = e => {
        //     const wheelProgress = e.deltaX * speedWheel * 5
        //     progress = progress + wheelProgress
        //     animate()
        // }

        // const handleMouseMove = (e) => {
        //     if (!isDown) return
        //     const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
        //     const mouseProgress = (x - startX) * speedDrag
        //     progress = progress + mouseProgress
        //     startX = x
        //     animate()
        // }

        // const handleMouseDown = e => {
        //     isDown = true
        //     startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
        // }

        // const handleMouseUp = () => {
        //     isDown = false
        // }

        // const handleLeft = () => {
        //     progress = Math.max(progress - (100 / (items.length ) ), 100 / items.length);
        //     animate();
        // }
        // const handleRight = () => {
            
        //     progress = Math.min(progress+(100 / (items.length )) , 100);
        //     animate();
            
        // }

        // /*--------------------
        // Listeners
        // --------------------*/
        // c_el.addEventListener('mousewheel', handleWheel)
        // c_el.addEventListener('mousedown', handleMouseDown)
        // c_el.addEventListener('mousemove', handleMouseMove)
        // c_el.addEventListener('mouseup', handleMouseUp)
        // c_el.addEventListener('touchstart', handleMouseDown)
        // c_el.addEventListener('touchmove', handleMouseMove)
        // c_el.addEventListener('touchend', handleMouseUp)
        // b_l.addEventListener('click', handleLeft)
        // b_r.addEventListener('click', handleRight)
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            if(entry.isIntersecting){
                setPosition(0)
            //   animate()
            }
          });
        observer.observe(b_l)
        // animate();
    }, [])



    function getStyle(i){
        let len = stylearr.length

        if(position+i >= len)
            return ((position+i)% len)
        else if(position+i < 0)
            return (len + (position + i)% len)%len
        else
            return position+i
    }

    const rightClicked = () => {
        setPosition((pos)=>pos-1)
    }
    const leftClicked = () => {
        setPosition((pos)=>pos+1)
    }
    
    const routeToPath = (link) => {
        router.events.emit("routeChangeStart",  "withDelay");
        console.log(link)
        setTimeout(() => {
            router.push(link);
        }, 850);
    }

    const divClicked = (link, i) => {
        if(position == 3-i)
            routeToPath(link)
        else{
            setPosition(3-i)
        }
    }

    function setStyle(i){
        if(position==undefined){
            if(i==3)
                return {display: "flex", zIndex: "10"}
            return {display: "flex"}
        }
        return stylearr[getStyle(i)]
    }

    return (
        <>
            <div className={`${styles['carousel-wrapper']}`}>
                    {/* <div className={`${styles['button-container']}`}> */}
                        <button className={`${styles['arrow']} ${styles['arrow-l']}`} onClick={leftClicked}
                            id = "button-l"
                        >
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"/>
                            </svg>
                        </button>
                        <button className={`${styles['arrow']} ${styles['arrow-r']}`} onClick={rightClicked}
                            id = "button-r"
                        >
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/>
                            </svg>
                        </button>
                    {/* </div> */}
                <div className={`${styles['explore-t']} `}>
                    <span><em>DIVE</em>&nbsp;</span>
                    <span className={`${styles['explore-t-strk']} `}>
                        IN
                    </span>
                </div>
                <div className={`${styles['carousel']}`} id="carousel">
                    {data.map((d, i) => {
                        return (

                            <div className={`${styles['carousel-item']}
                                            carousel-item }`} 
                            style={setStyle(i)} key={i}
                            onClick={() =>{
                                    divClicked(d.link, i)
                                }
                            }
                            >

                                <div className={`${styles['open-window']}
                                                ${position==3-i?styles['shadow']:''} 
                                                
                                                open-window`}
                                 key = {i}>
                                    {/* <Image width="25" height="25" src={`/images/assets/cardArrow.svg`} alt={`arrow`} className={styles.arrowimg}/> */}
                                    
                                </div>
                                <div className={`${styles['carousel-box']}`}>
                                    <div className={`${styles['title']}`}>{d.title}</div>
                                    <div className={`${styles['card-arrow']}`}>
                                        <Image width="25" height="25" src={`/images/assets/card arrow.svg`} alt={`arrow`} className={styles.arrowimg}/>
                                    </div>
                                    <div className={`${styles['num']}`}>{'0' + (i + 1)}</div>
                                    <Image fill src={d.img} className={`${styles['bg-image']} bg-image`} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}