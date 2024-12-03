import React, { useEffect, useState } from "react"
import styles from "@/styles/Faq.module.css"
import Image from "next/image"
const questions = [
    {
        question: "How can I get my certificates?",
        answer: "Click on the hamburger icon on the top left hand side of the page and select certificates. Enter your Ragam ID to download your certificates.", 
    },
    {
        question: "I forgot my Ragam ID. What do I do to obtain the certificates?",
        answer: "Please contact the workshops/events POC and share your Name, College and event/workshop that you participated in.", 
    }
]


export default function Faq() {
    const [data, setData] = useState(null)

    const getQuestions = async () => {
        // let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faqs`)
        // let val = await res.json();
        // setData(val.data)
        setData(questions)
      }

      useEffect(() => {
        getQuestions();
      }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>FAQs</h1>
            <div className={styles.questions}>
                {data?.map((q, i) => {
                    return (
                        <Question question={q?.question} answer={q?.answer} key={i} index={i} />
                    )
                })}
            </div>
        </div>
    )
}

function Question({ question, answer, index }) {
    const [open, setOpen] = useState(false)


    return (
        <div className={styles['question-wrapper']} onClick={()=> setOpen((curr)=> !curr)}>
            {open ? <Image
                alt="img-open"
                width={40}
                height={40}
                className={styles.circles}
                src="/images/assets/circle selected.svg"
            /> : <Image
                alt="img-close"
                width={40}
                height={40}
                className={styles.circles}
                src="/images/assets/circle.svg"
            />}
            <p className={styles.index}>00{index + 1}</p>
            <div className={styles.question} >
                <div
                    className={styles["question-heading-wrapper"]}
                >
                    <h4 className={`${open ? styles.questionActive :""}`}>{question}</h4>
                </div>
                {<p className={styles.answer} aria-expanded={open}>{answer}</p>}
                {/* <p className={styles.answer} id={String(index)}>{answer}</p> */}
                {/* {open && <p className={styles.answer}>{answer}</p>} */}
            </div>
            <Image
                alt="img-arrow-down"
                width={40}
                height={40}
                className={`${styles["faq-drop-icon"]} ${open ? styles["up-down"] : ""
            }`}
            src="/images/assets/down arrow white.svg"
            // onClick={() => setOpen((curr) => !curr)}
            />
        </div>
    )
}