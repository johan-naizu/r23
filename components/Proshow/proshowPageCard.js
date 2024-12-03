import styles from '@/styles/ProshowPage.module.css'
import Image from 'next/image'

export default function ProshowPageCard({name, date, content, image, rev, day, id}){


    return(
        <div className={rev?`${styles['card-container']} ${styles.reverse}`:styles['card-container']}
            id = {id}>
            <div className={styles['img-container']}>
                <Image
                    src={image}
                    unoptimized
                    width={460}
                    height={460}
                    alt={name}
                    className={styles.img}
                />
            </div>
            <div className={styles.details}>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.content}><p>{content}</p></div>
                <div className={styles['date-container']}>
                    <div className={styles.date}>
                        <Image
                            src={'/images/assets/calender.svg'}
                            width={25}
                            height={25}
                            alt='calender'
                        />
                        <div className={styles['date-day']}>
                            <p>{date}</p>
                            <p>{day}</p>
                        </div>
                    </div>
                    <Image
                        src={'/images/assets/arrow right down.svg'}
                        width={75}
                        height={75}
                        alt='arrow'
                        className={styles.arrow}
                    />
                </div>
            </div>
        </div>
    )

}

