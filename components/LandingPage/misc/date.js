import styles from '@/styles/Misc.module.css'

export default function Date(){
    return(
            <div className={`${styles['date-container']} misc-anim`}>
                <h2 className={styles.date}>10, 11, 12</h2>
                <h2 className={styles.date}>March 2023</h2>
            </div>
    )
}