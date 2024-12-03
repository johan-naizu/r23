import styles from "@/styles/Proshow.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProshowCard({ title, date, bg , id}) {

  const router = useRouter();
  // useEffect(() => {
  //   let card = document.getElementById(id)
  //   let cardBefore = window.getComputedStyle(card, '::before')
  //   cardBefore.backgroundImage= bg
  //   console.log(cardBefore)
  // },[])


  
  function buttonClicked(id) {
    router.events.emit("routeChangeStart",  "withDelay");
                    setTimeout(() => {
                        router.push("/proshow"+"#"+id);
                      }, 1000);
    // console.log("/proshow"+"#"+id)
                      // router.push("/proshow"+"#"+id);
                    }


  return (

    <div className={`${styles["card-anim-container"]} proshow-anim`} >
    <div className={`${styles["card-container"]}`} id={id} onClick={() => buttonClicked(id)} >
      <div className={`${styles["card-bg"]}`} id={id} style={{backgroundImage: `url(${bg})`}}/>
      
      <Image
        src={"/images/assets/card arrow.svg"}
        alt={"Proshow"}
        width={50}
        height={50}
        className={styles["card-arrow"]}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles['card-bottom']}>
        <Image
          src={"/images/assets/star.svg"}
          alt={"Proshow"}
          width={50}
          height={50}
          className={styles["card-star"]}
        />
        <h1 className={styles.date}>{date}</h1>
      </div>
    </div>
    </div>
  );
}

ProshowCard.defaultProps = {
  title: "Proshow",
};
