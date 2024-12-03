import Image from "next/image"
import styles from "@/styles/Dashboard.module.css"


const RegisteredEventCard = ({item}) => {

    const verified  =   item.verified?'Payment Verified':item.verified==false?'Verification Failed':'Not Yet verified'

    return (
    <div    className={styles.RegisteredEventCardContainer}>
        <div    className={styles.EventDetailsContainer}>
            <h3    className={styles.eventName}>
                {item.name}
            </h3>
            <h4 className={styles.others}>
                {item.category?item.category:verified}
            </h4>
            <Image width={25} height={25} src={`/images/assets/cardArrow.svg`} alt={`arrow`} className={styles.topArrow}/>
        </div>
        <Image width={312} height={400} src={item.coverImage?`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.coverImage}`:'/images/main.png'} alt={`cover`} className={styles.CardBg}/>
            <div className={styles.overlay}></div>
    </div>
  )
}

export default RegisteredEventCard