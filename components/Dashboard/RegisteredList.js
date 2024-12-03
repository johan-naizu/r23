import styles from '@/styles/Dashboard.module.css'
import { useState } from 'react'
import Image from 'next/image'
import RegisteredEventCard from './RegisteredEventCard'

const RegisteredList = ({list}) => {

  const heading = list.length&&list[0]?.category?'Registered events':'Registered workshops'
  const [open, setOpen] = useState(true)

  return (
    <>
      {list.length&&<div  className={styles.RegisteredListContainer}>
        <h2 className={`${styles.ListHead} ${open?'':styles.closed}`} onClick={()=> setOpen((curr)=> !curr)}>
          <div  className={styles.flexStart}>

          {open ? <Image
                  alt="img-open"
                  width={48}
                  height={32}
                  className={styles.circles}
                  src="/images/assets/circle selected.svg"
              /> : <Image
              alt="img-close"
              width={48}
              height={32}
              className={styles.circles}
              src="/images/assets/circle.svg"
              />}
            {heading}&nbsp;
            {`(${list.length})`}
            </div>
            <Image  className={`${styles.arrow} ${open?'':styles.rotate180}`} alt="arrow-down" width={24} height={24} src={`images/assets/arrow-down.svg`}/>
          </h2>
          <div  className={`${styles.CardList} ${open?'':styles.hideEvents}`}>
            {list.map(
              x=><RegisteredEventCard key={x.id} item={x}/>
            )}
          </div>
        </div>}
    </>
  )
}

export default RegisteredList