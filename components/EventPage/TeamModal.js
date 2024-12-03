import { LoginContext } from "@/contexts/LoginContext";
import styles from "@/styles/EventPage.module.css";
import Image from "next/image";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormInput from "../FormInput";

const TeamModal = () => {
  return (
    <div className={styles.RegistrationModal}>
    <div className={styles.ModalContainer}>
      <h2 className={`${styles.title} ${styles.margin}`}>
        <div>
          <Image
            alt="img-open"
            width={36}
            height={24}
            className={styles.circles}
            src="/images/assets/circle selected.svg"
          />
          Team Details
        </div>
      </h2>
      <div>
        {/* {questionInfo?.map((x) => (
          <FormInput key={x.id} label={x.question} name={x.id} placeholder={x.question} setInput={setAnswers} value={answers}/>
        ))} */}
        <div onClick={()=>updateAns()} className={`${styles.register} ${styles.continue}`}>Submit</div>
      </div>
    </div>
  </div>
  )
}

export default TeamModal