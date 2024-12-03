import styles from "@/styles/EventPage.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useState, useReducer } from "react";
import ModalPage1 from "./ModalPage1";
import ModalPage2 from "./ModalPage2";

const RegistrationModal = ({retry=false, payee, regPrice,workid,type,setOpenRegModal,setAlreadyReg,alreadyReg }) => {

  const [UTR, setUTR] = useState("")
  const [referalCode, setReferalCode] = useState(localStorage.getItem('refCode')?localStorage.getItem('refCode'):"")
    const [utrError, setUtrError] = useState(false)
    const [loadingResponse, setLoadingResponse] = useState(false)
    const [pageNo, setPageNo] = useState(1);
  const token = localStorage.getItem('token')

  const closeModal  = ()  =>  setOpenRegModal(false)

  const SubmitData = async(refCode="",utr) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-event-details`,{
        method:'POST',
        headers: {
            'Content-Type':"application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            "data":{
                "event":{
                  "id":workid
                },
                "refCode":  referalCode,
                "utr":UTR
            } 
        })
    })
    const   value   =   await response.json()
    return  value.data.id
    
}

    const SubmitVerifiedData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-event-details`, {
          method: 'POST',
          headers: {
              'Content-Type': "application/json",
              Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
              "data": {
                  "event": {
                      "id": workid
                  },
                  "refCode": referalCode
              }
          })
      })
      const value = await response.json()
      return value.data.id

  }

const fileUpload = async () => {
  console.log('hi bro');
  if (UTR?.length !== 12) {
    console.log('entered');
    console.log(UTR);
      setUtrError(true)
      return
  }
  let isnum = /^\d+$/.test(UTR);
  if (!isnum) {
      setUtrError(true)
      return
  }
  else {
      // console.log('hi bro');
      setUtrError(false)
  }
  if (data?.fileList?.length && !loadingResponse) {
      setLoadingResponse(true)
      const workid = await SubmitData(referalCode, UTR)
      const reqBody = new FormData();
      reqBody.append("files", data.fileList[0])
      reqBody.append("ref", `api::user-${type}-detail.user-${type}-detail`)
      reqBody.append("refId", `${workid}`)
      reqBody.append("field", "receipt")
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/upload`, {
          headers: {
              'Authorization': `Bearer ${token}`,
          },
          body: reqBody,
          method: "POST"
      })
      const value = await response.json()
      // console.log(value);
      if (workid && response.status === 200) {
          // messageSuccess()
          setAlreadyReg({ id: workid })
          closeModal()
          // loading =   false
          setLoadingResponse(false)
      }
      else {
          // messageError()
          // loading =   false
          setLoadingResponse(false)
          closeModal()
      }
  }
}

const editFileUpload = async () => {
  console.log('hi guys');
  if(UTR?.length!==12)
  {
      setUtrError(true)
      return
  }
  let isnum = /^\d+$/.test(UTR);
  if(!isnum)
  {
      setUtrError(true)
      return
  }
  else{
      // console.log('hi bro');
      setUtrError(false)
  }
  console.log('reached here');
  if (data?.fileList?.length&&!loadingResponse) {
      console.log('yo');
      setLoadingResponse(true)
      const workid = alreadyReg?.id
      const reqBody = new FormData();
      reqBody.append("files", data.fileList[0])
      // reqBody.append("ref", 'api::user-workshop-detail.user-workshop-detail')
      // reqBody.append("refId", `${workid}`)
      // reqBody.append("field", "receipt")
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/upload`, {
          headers: {
              'Authorization': `Bearer ${token}`,
          },
          body: reqBody,
          method: "POST"
      })
      const value = await response.json()
      // console.log(value);
      const   receiptId   =   value[0].id
      if (workid && response.status === 200) {

          const   response2    =   await   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-${type}-details/${workid}`,
          {

              method:'PUT',
              headers:{
              'Content-Type':"application/json",
              'Authorization': `Bearer ${token}`,
              },
              body:   JSON.stringify({
                  "data":{
                      "receipt":{
                          "id":receiptId
                      },
                      "utr":UTR
                  }
              })
          })
          // setAlreadyReg({id: workid})
          const   value2  =   await   response2.json()

          if (response2.status=== 200) {
              // messageSuccess()
              setLoadingResponse(false)
              closeModal()
              return
          }

      }
      // messageError()
      console.log('Error while editing');
      setLoadingResponse(false)
      closeModal()
  }
}

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: action.files };
      default:
        return state;
    }
  };
  
  
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  const nextPage = () => setPageNo((x) => x + 1);

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
            {retry?`Retry registration`:'Register'}
          </div>
          <div>{pageNo}/2</div>
        </h2>
        {pageNo === 1 && (
          <ModalPage1 payee={payee} regPrice={regPrice} nextPage={nextPage}/>
        )}
        {pageNo === 2 && (
        <ModalPage2 submit={retry?editFileUpload:fileUpload} utrError={utrError} UTR={UTR} data={data} dispatch={dispatch} payee={payee} setUTR={setUTR} setReferalCode={setReferalCode} referalCode={referalCode}/>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
