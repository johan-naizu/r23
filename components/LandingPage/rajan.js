import styles from '@/styles/Rajan.module.css'
import Image from 'next/image'

export default function Rajan(){
    return(
        <div className={`${styles['main-container']} main-container`}>
            <div className={`${styles['container']} rajan-anim`}>
                <div className={styles.title}>
                    <h1>
                        The&nbsp;
                        <span className={styles.burn}>f</span>
                        <span className={styles.fire}>l</span>
                        <span className={styles.burn}>a</span>
                        <span className={styles.fire}>m</span>
                        <span className={styles.burn}>e</span>
                    &nbsp; still <span className={styles.text2}>burns</span>
                    </h1>
                    <a href="https://youtu.be/1GmHRscNl6I?t=114" target="_blank" className={styles.link} rel="noreferrer noopener">
                        Learn more about the legacy
                        {/* <span> */}
                        <svg viewBox="0 0 92 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M87.332 5L5.33203 12M87.332 5L81.332 77M87.332 5L3.33203 85" stroke="#ebe6d080" stroke-width="8"/>
                        </svg>
                        {/* </span> */}
                    </a>
                </div>
                <div className={`${styles['img-container']} img-container`}>
                    <Image
                        src={'/images/Rajan.png'}
                        width={950}
                        height={700}
                        className={styles.img}
                    />
                </div>
            </div>
        </div>
    )
}

