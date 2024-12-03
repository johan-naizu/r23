import { LoginContext } from "@/contexts/LoginContext";
import styles from "@/styles/EventPage.module.css";
import Image from "next/image";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormInput from "../FormInput";
const QuestionsModal = ({ setAlreadyReg,alreadyReg,setOpenQuestionsModal, questionInfo }) => {
    var i=0
    
    const [answers, setAnswers] = useState({})
    const [submitLoading, setSubmitLoading] = useState(false)
    const token =   localStorage.getItem('token')
    useEffect(() => {
      if(alreadyReg.userResponses)
      {
        setAnswers(alreadyReg.userResponses)
      }
    }, [alreadyReg])
    
    const updateAns = async (team) => {
        if(submitLoading)
        return;
        setSubmitLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-workshop-details/${alreadyReg.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': "application/json"
            },
            method: "PUT",
            body: JSON.stringify({ "data": { userResponses: answers } })
        })
        //error / success handling 
        // show messsage?
        let res = await response.json();
        // console.log(res)
        if (res?.error?.status == 400) {
            //show err
            // setErr(res.error.message)
            setSubmitLoading(false)
            return;
        }
        //show succeess
        // messageSuccess("Submitted successfully")
        // refetchDetails();
        setAlreadyReg(x=>({...x,userResponses:answers}))
        setSubmitLoading(false)
        setOpenQuestionsModal(false)

    };

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
            Additional Details
          </div>
        </h2>
        <div>
          {questionInfo?.map((x) => (
            <FormInput key={x.id} label={x.question} name={x.id} placeholder={x.question} setInput={setAnswers} value={answers}/>
          ))}
          <div onClick={()=>updateAns()} className={`${styles.register} ${styles.continue}`}>Submit</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsModal;
