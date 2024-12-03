
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../../styles/Menu.module.css'
import Link from "@/components/Link";


const MenuItem = ({content,k,link,setShowMenu}) => {
  const router = useRouter();
  const letters = content?.split('')
  const [show,setShow]  = useState(false)
  // console.log(letters);
  useEffect(
    ()=>{setTimeout(()=>setShow(true),Math.floor(Math.sqrt(k**3))*50);},[]
  )
  var i=0;

  const buttonClicked = () => {
    router.events.emit("routeChangeStart",  "withDelay");
                    setTimeout(() => {
                        router.push(link);
                        setShowMenu(false)
                    }, 1000);
  }

  return (
    <li className={`${styles.borderBottom} ${styles.menuItem}`} onClick={buttonClicked}>
      <div  className={`${styles.textContainer} ${show===true?styles['bounce-in-right']:''}`}
      
      // style={show[k]?{opacity:`1`}:{opacity:`0`}}
      >
        <div  className={styles.line}></div>
        {letters.map(
          x=>
          <span  key={i++} className={`${i%2?styles.elevation:''} ${styles.textBorder}`}>{x}</span>
          )}
      </div>
    </li>
  )
}

export default MenuItem