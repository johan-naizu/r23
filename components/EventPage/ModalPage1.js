import styles from "@/styles/EventPage.module.css";
import Image from "next/image";

const ModalPage1 = ({ payee, regPrice, nextPage }) => {
  return (
    <div>
      <div
        className={`${styles.description} ${styles.descMargin}`}
      >{`Pay an amount of ₹${regPrice} to the UPI ID: ${payee.paymentId} or using the QR Code below:`}</div>
      <div className={`${styles.qr}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${payee.qrcode}`}
          width={300}
          height={300}
        />
      </div>
      <div
        onClick={() => nextPage()}
        className={`${styles.register} ${styles.continue}`}
      >
        Continue
      </div>
    </div>
  );
};

export default ModalPage1;
