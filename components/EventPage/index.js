import { useEffect } from "react";
import { useState } from "react";
import Head from "./Heading";
import Content from "./Content";
import styles from "@/styles/EventPage.module.css";
import RegistrationModal from "./RegistrationModal";
import { useContext } from "react";
import { LoginContext } from "@/contexts/LoginContext";
import { useRouter } from "next/router";
import StatusModal from "./StatusModal";
import QuestionsModal from "./QuestionsModal";
import Snackbar from "../snackbar";
import TeamModal from "./TeamModal";

const Event = () => {
  const [event, setEvent] = useState(null);
  const [openRegModal, setOpenRegModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false)
  const [openQuestionsModal, setOpenQuestionsModal] = useState(false)
  const [openTeamModal, setOpenTeamModal] = useState(false)
  const [alreadyReg, setAlreadyReg] = useState(false);
  const [payee, setPayee] = useState({
    name: "Rohit Robin Mampilly",
    paymentId: "9207619833@yb",
    qrcode: "/uploads/qrimg_41430021cc.jpg",
  });
  const {loginContext}  = useContext(LoginContext)
  const router =  useRouter()
  const {slug}  = router.query

  const getEvent = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events/${slug}`
    );
    let value = await res.json();
    setEvent(value.result);
  };

  const getPayee = async () => {
    let res1 = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/current-payee`
    );
    let v1 = await res1.json();
    let res2 = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payees/${v1.data.id}?populate=*`
    );
    let v2 = await res2.json();
    console.log(v2);
    setPayee(formatPayee(v2));
  };

  const formatPayee = (x) => ({
    name: x.data.attributes.name,
    paymentId: x.data.attributes.paymentId,
    qrcode: x.data.attributes.qrcode.data[0].attributes.url,
  });

  const checkReg = async () => {
    console.log(loginContext);
    if (loginContext?.user) {
        let user_workshop_detail = loginContext?.user.registeredEvents.find(x => x.id === event?.id);
        if (user_workshop_detail) {
            console.log(user_workshop_detail)
            setAlreadyReg({ id: user_workshop_detail.ref_id,userResponses:  user_workshop_detail?.userResponses })
        }
    }
}

  useEffect(() => {
    getPayee();
  }, []);
  useEffect(()=>{
    if(loginContext)
    {
      checkReg()
    }
  },[loginContext])
  useEffect(()=>{
    if (router.isReady) {
      getEvent()
    }
  },[router.isReady])

  return (
    <div className={styles.pageStyles}>
      {/* <div className={styles.notification}>
        <Snackbar message={'Successfully registered'}/>
      </div> */}
      <Head name={event?.name} />
      <Content event={event} setOpenRegModal={setOpenRegModal} setOpenStatusModal={setOpenStatusModal} alreadyReg={alreadyReg}/>
      {openRegModal && (
        <RegistrationModal
          alreadyReg={alreadyReg}
          setAlreadyReg={setAlreadyReg}
          setOpenRegModal={setOpenRegModal}
          type={"event"}
          workid={event?.id}
          payee={payee}
          regPrice={event?.regPrice}
          retry={alreadyReg===false?false:true}
        />
      )}
      {
        openStatusModal &&  (
          <StatusModal 
          setOpenQuestionsModal={setOpenQuestionsModal}
          setOpenRegModal={setOpenRegModal}
          setOpenStatusModal={setOpenStatusModal}
          setOpenTeamModal={setOpenTeamModal}
          type={"event"}
          isTeamEvent={event?.isTeamEvent}
          questionInfo={event?.questionInfo}
          alreadyReg={alreadyReg}
          />
        )
      }
      {
        openQuestionsModal  &&  (
          <QuestionsModal 
          setOpenQuestionsModal={setOpenQuestionsModal}
          questionInfo={event?.questionInfo}
          alreadyReg={alreadyReg}
          setAlreadyReg={setAlreadyReg}
          />
        )
      }
      {
        openTeamModal &&  (
          <TeamModal 
          minTeamSize={event?.minTeamSize}
          maxTeamSize={event?.maxTeamSize}
          
          />
        )
      }
    </div>
  );
};

export default Event;
