import  styles from '@/styles/ListPages.module.css'
import Image from 'next/image'

const Heading = ({title,image}) => {
  return (
    <div    className={`${styles.headingContainer}`}>
        <Image alt='Cover' height={320}  width={1920} src={image}   className={styles.bg}/>
        <div  className={styles.overlay}></div>
        <h1 className={styles.pageTitle}>{title.split(' ')[0]}<br/>{title.split(' ')[1]}</h1>
    </div>
  )
}

export default Heading