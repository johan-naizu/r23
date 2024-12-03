import styles from '@/styles/Footer.module.css'
import Image from 'next/image'

const Socials = ({content}) => {
  return (
    <a  href={content.link}  className={`${styles.Socials}`}>
      <div  className={`${styles.transition} ${styles.overlay2}`}></div>
      <Image alt={`Socials`} className={`${styles.transition} ${styles.SocialsIcon}`} height={48}  width={48}  src={content.logo}/>
    </a>
  )
}

export default Socials