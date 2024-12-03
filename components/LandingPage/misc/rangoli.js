import styles from '@/styles/Misc.module.css'
import Image from 'next/image'

export default function Rangoli(){

    return(
        <div className={`${styles['rotate-container'] } misc-anim`} >
            <div className={styles.rotate}>
                <Image
                    src='/images/assets/rangoli.png'
                    width='275'
                    height='275'
                    quality={50}
                    className={styles.rangoli}
                    alt={'rangoli'}
                />
            </div>
        </div>
    )
}