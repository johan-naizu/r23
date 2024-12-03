import styles from '@/styles/Misc.module.css'

export default function Heading(){
    return(
        <div className={`${styles['heading-container'] } misc-anim`}>
            <h2 className={styles.heading}>Largest Cultural Fest in South India</h2>
        </div>
    )
}