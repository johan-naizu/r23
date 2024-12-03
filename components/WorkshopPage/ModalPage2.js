import styles from "@/styles/EventPage.module.css";
import Image from "next/image";
import { useState } from "react";
import Input from "../Input";
import FileDropper from "./FileDropper";

const ModalPage2 = ({payee,setUTR,UTR,setReferalCode,referalCode, utrError,data,dispatch,submit}) => {


  return (
    <div>
      <div
        className={`${styles.description} ${styles.descMargin}  ${styles.descMarginBottom}`}
      >{`Upload the screenshot of the payment containing UTR number or UPI transaction ID below:`}</div>
      <div  className={`${styles.description} ${styles.descMargin} ${styles.center}`}>Drag or choose your file to upload</div>
      <FileDropper data={data} dispatch={dispatch}/>
      
      <Input setInput={setUTR} name={"utr"} value={UTR} label={`Enter UTR number (UPI transaction ID) *`}  placeholder={`e. g. "122543376551"`}/>
      {utrError&&<div>Invalid UTR</div>}
      <Input setInput={setReferalCode} value={referalCode} name={"refCode"} label={`Enter the referral code`} placeholder={`e. g. "R23-XXXX"`}/>
      <div
        onClick={() => submit()}
        className={`${styles.register} ${styles.continue}`}
      >
        Confirm the registration
      </div>
    </div>
  )
}

export default ModalPage2