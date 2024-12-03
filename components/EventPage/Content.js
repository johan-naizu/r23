import eventsPage from '@/pages/events'
import styles from '@/styles/EventPage.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useContext } from "react"
import { LoginContext } from "@/contexts/LoginContext"
import { useRouter } from 'next/router'
import { marked } from 'marked'

const Content = ({event, setOpenRegModal,alreadyReg,setOpenStatusModal}) => {
  const [imageNumber, setImageNumber] = useState(0)
  const [total,setTotal]  = useState(1)
  const {loginContext}    =   useContext(LoginContext)
  const router =  useRouter();

  let refresh;
  let x;
  useEffect(() => {
    if(event?.posterImages?.length)
    {
      setTotal(event.posterImages.length)
      x = setInterval(()=>{setImageNumber(x=>x+1);console.log(imageNumber);},8000)
      console.log(event.posterImages.length+'lol');
      
    }
    else
    {
      setTotal(0)
    }
    return ()=>clearInterval(x)
  }, [event])

  // const onClick = (k)  =>  {
  //   setImageNumber(k)
  //   clearInterval(x)
  //   x=setInterval(()=>{setImageNumber(x=>x+1);console.log(imageNumber);},8000)
  // }
  
  const registerClicked = async () =>{
    let response  = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events?populate=*`)
    let value = await response.json()
    let category  = value.data.filter(x=>x.id === event.id).map(x=>x.attributes.category.data.id)[0]
    
    router.push(`https://reg.ragam.co.in/events/${category}/`+event.id)
    return
    if(loginContext){

      setOpenRegModal(true)
    }
    else{
      // add snackbar here
      router.push(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/connect/google`)
    }
  }

  var i = 0
  return (
    <div    className={styles.contentContainer}>
        <div  className={styles.imageContainer}>
          {event?.posterImages&&total&& event.posterImages.map(x=><Image key={i++}  className={event.posterImages.indexOf(x)===imageNumber%total?styles.show:""} width={600} height={600} alt='poster' src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${x.url}`}/>)  }
          {event?.posterImages&&total>1&&event.posterImages.map(x=> <div  className={`${styles.line} `} key={i}>
            <div  className={`${styles.inner} ${event.posterImages.indexOf(x)===imageNumber%total?styles.active:''}`}></div>
          </div> )}
        </div>
        <div  className={styles.detailsContainer}>
        <div  className={styles.title}>
          <Image
                  alt="img-open"
                  width={36}
                  height={24}
                  className={styles.circles}
                  src="/images/assets/circle selected.svg"
                  />
          About the event
        </div>
        <div>
          <pre  className={styles.description}  dangerouslySetInnerHTML={{__html:marked.parse(event?.description||'')}}>
            {/* {event?.description} */}
          </pre>
        </div>
        <hr />

        {!alreadyReg&&<div  className={styles.register} onClick={registerClicked}>Register now</div>}  
        {alreadyReg&&<div  className={styles.register} onClick={()=>setOpenStatusModal(true)}>Check status</div>}
        </div>
    </div>
  )
}

export default Content