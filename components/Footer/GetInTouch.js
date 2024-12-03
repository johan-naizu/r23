import  styles from '../../styles/Footer.module.css'

const GetInTouch = ({email}) => {
  return (
    <a  href='mailto:ragam@nitc.ac.in'    className={`${styles.getInTouchContainer}`}>
        <div    className={`${styles.transition}    ${styles.overlay}`}></div>
        <div    className={`${styles.getInTouch}`}>Get in touch</div>
        <div    className={`${styles.email}`}>{email}</div>
    </a>
  )
}

export default GetInTouch