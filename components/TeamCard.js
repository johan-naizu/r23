import styles from "@/styles/Team.module.css"
import Image from "next/image"
import { useEffect } from "react"

export default function TeamCard({label, name, designation, image, key}){

    // useEffect(()=> {
    //     let card =  document.getElementsByClassName('sus')
    //     // console.log(card)
    //     for(let i=0; i<card.length; i++){
    //         card[i].addEventListener('mouseenter',(e) => {
    //             e.target.children[1].style.opacity='1'
    //             console.log(e.target)
    //         })
    //         card[i].addEventListener('mouseleave',(e) => {
    //             e.target.children[1].style.opacity='0'
    //         })
    //     }
    // }, [])
    // console.log(label)
    
    return(
        <div className={styles.card} key={key}>
            <Image src={image} unoptimized width={280} height={300} className={styles.image} />
            {label==='Leads'?<div className={styles.overlay}></div>:''}
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.designation}>{designation}</p>
            </div>
        </div>
    )
}