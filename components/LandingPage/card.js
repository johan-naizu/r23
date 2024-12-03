import styles from '@/styles/card.module.css';
import Image from "next/image";

export default function Card({ imgUrl, fromTop, main }) {

    return (
        <div className={`${styles['card']} card ${main && styles['card-main']} ${fromTop ? styles['card-fromTop'] : styles['card-fromBottom']}`}>
            <div className={`${styles['card-main-overlay']} overlay`}>

            </div>
            {main ?
                <img className={`${styles['card-img'] +" "+ styles['card-img-main']} card-img`} src={imgUrl.src}  width={320} height={180} alt={imgUrl + " alt"} />

                :
                <Image className={`${styles['card-img']} card-img`} src={imgUrl} width={320} height={180} alt={imgUrl + " alt"} />

            }
        </div>

    )
}
