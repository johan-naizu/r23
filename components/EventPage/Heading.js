import styles from '@/styles/EventPage.module.css'

const Head = ({name}) => {
  
  return (
      <div  className={styles.headingContainer}>
        <div  className={styles.presents}>Ragam 2023 presents</div>
          <div  className={styles.head}>{name}</div>
      </div>
  )
}

export default Head