import { LoginContext } from "@/contexts/LoginContext";
import styles from "@/styles/EventPage.module.css";
import Image from "next/image";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ModalPage1 from "./ModalPage1";
import ModalPage2 from "./ModalPage2";

const StatusModal = ({ setOpenTeamModal,isTeamEvent,setOpenQuestionsModal,questionInfo, type, alreadyReg,setOpenRegModal,setOpenStatusModal }) => {
  const refId = alreadyReg.id;
  const [userEventDetail, setUserEventDetail] = useState(null);
  const [verificationText, setVerificationText] = useState('Loading...')
  const {loginContext}  =   useContext(LoginContext)
  const getUserEvent = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-${type}-details/${refId}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${loginContext.token}`,
        },
        method: "GET",
      }
    );
    const value = await response?.json();
    setUserEventDetail(value.data);
    value.data.attributes.verifed?setVerificationText('Your payment has been verified 🥳'):value.data.attributes.verifed===false?setVerificationText(`Your payment has been rejected 🤥 . Please try uploading an original receipt 🙌🏽`):setVerificationText(`Your registration details will undergo verification within 3 days`)
  };

  useEffect(() => {
    if (loginContext) {
        getUserEvent()
    }
  }, [loginContext])

  const onClickRetry =   ()  =>  {
    setOpenRegModal(true)
    setOpenStatusModal(false)
  }

  const onClickQuestions = () =>  {
    setOpenQuestionsModal(true)
    setOpenStatusModal(false)
  }

  const onClickTeam = () =>  {
    setOpenTeamModal(true)
    setOpenStatusModal(false)
  }
  

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
            Registration Status
          </div>
        </h2>
        <div>
        <div
        className={`${styles.description} ${styles.descMargin}`}
      >{verificationText}</div>
        <div className={`${styles.qr} ${styles.receipt}`}>
            <div    className={`${styles.marginTop}`}>Receipt</div>
        {userEventDetail?.attributes?.receipt&&<Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${userEventDetail.attributes.receipt.data.attributes.url}`}
          width={700}
          height={700}
        />}
      </div>
          {questionInfo.length && (
            <div onClick={()=>onClickQuestions()} className={`${styles.register} ${styles.continue}`}>
              Fill additional details
            </div>
          )}
          {userEventDetail?.attributes.verifed == false && (
            <div onClick={()=>onClickRetry()} className={`${styles.register} ${styles.continue}`}>
              Retry registration
            </div>
          )}
          {isTeamEvent && (
            <div onClick={()=>onClickTeam()} className={`${styles.register} ${styles.continue}`}>
              Enter team details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
