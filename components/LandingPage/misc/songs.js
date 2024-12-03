import { useState, useEffect } from 'react'
import gsap from 'gsap'
import styles from '@/styles/Misc.module.css'

export default function Songs(){

    const [arr, setArr] = useState([1,2,3,4,5,6])
    const [lineVar, setLineVar] = useState(9)
    const [noteNum, setNoteNum] = useState(0)
    const notes = ['30','28','30','28','30','28','30','28','30','33','42','40','42','40','42','40','42','40','42','45']
    
    // change song symbols
    function changeArr(){
        let newArr = []
        for(let i=0; i<5; i++)
            newArr[i] = 1
        setArr(newArr)

        if(lineVar > 2.1){
            let newLineVar= lineVar-0.2
            setLineVar(newLineVar)
        }else
            setLineVar(9)

        // play sounds
        let sound = new Audio(`/sounds/${notes[noteNum]}.mp3`)
        sound.play()
        setNoteNum((n) => (n + 1) % 20)
    }

    // For random rotation of symbols
    useEffect(() => {
        let symbols = document.getElementsByClassName(styles.symbols)
        let symbolsArr = []

        // for(let i=0; i< symbols.length; i++){
        //     symbolsArr[i] = symbols[i]
        // }

        for(let i=0; i< symbols.length; i++)
            symbols[i].style.transform = `rotate(${gsap.utils.random(-25,25)}deg)`


    })

    // For increasing line count
    useEffect(()=> {
        let box1 = document.getElementsByClassName(styles.waves)[0]
        let box2 = document.getElementsByClassName(styles.waves)[1]

        box1.style.background=`repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 1px, black 0, black ${lineVar.toFixed(2)}%)`
        box2.style.background=`repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 1px, black 0, black ${lineVar.toFixed(2)}%)`
    },[lineVar])

    return(
        <div className={`${styles.waves } misc-anim`} onClick={changeArr} >
            {
                [1,2,3].map((num,index)=> {
                    return(
                        <div className={styles['song-row']} key={index}>
                        {
                            arr.map((num,i)=> {
                                return(
                                    <img
                                    src={`/images/assets/resize_song${Math.ceil(gsap.utils.random(0,6))}.png`}
                                    width='40px'
                                    height='60px'
                                    key={i}
                                    className={styles.symbols}
                                /> 
                                )
                            })
                        }
                        </div>
                    )
                })
            }      
        </div>
    )
}