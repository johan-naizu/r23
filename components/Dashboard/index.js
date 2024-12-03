import Heading from "../Heading"
import  cover   from "@/public/images/Cover photo.png"
import UserCard from "./UserCard"
import styles from '@/styles/Dashboard.module.css'
import avatar from '@/public/images/avatar.png'
import RegisteredList from "./RegisteredList"
import { useContext } from "react"
import { LoginContext } from "@/contexts/LoginContext"
import { useEffect } from "react"
import { useState } from "react"
import { useRouter } from "next/router"

const Dashboard = () => {

    const router = useRouter();

    const {loginContext}    =   useContext(LoginContext)
    const [registeredEvents, setRegisteredEvents] = useState([])
    const [registeredWorkshops, setRegisteredWorkshops] = useState([])
    const [user, setUser] = useState(
    {name:'',
        ragamId:'',
        avatar}
    )
    // console.log(loginContext.user);
//     const registeredEvents = [
//         {
//         name:'Valorant',
//         id:3,
//         coverImage:{
//             url:'/images/theyyam 2.png'
//         },
//         category:{
//             name:'Ragnarok'
//         },
//         verified:null
//     },
//     {
//         name:'Valorant',
//         id:1,
//         coverImage:{
//             url:'/images/main.png'
//         },
//         category:{
//             name:'Ragnarok'
//         },
//         verified:null
//     },
//     {
//         name:'Valorant',
//         id:2,
//         coverImage:{
//             url:'/images/2.jpg'
//         },
//         category:{
//             name:'Ragnarok'
//         },
//         verified:null
//     },


// ]

    // const registeredWorkshops = [{
    //     id:10,
    //     name:'NFT and Metaverse',
    //     coverImage:'/images/2.jpg',
    //     verified:true
    // }]

    // const user  =   {
    //     name:'Sadhin Saleem',
    //     ragamId:'R23-GCS7S',
    //     avatar
    // }

    useEffect(() => {
        if (loginContext) {
            console.log(loginContext);
            console.log(loginContext.user.registeredWorkshops);
            console.log(loginContext.user.registeredEvents);
            setRegisteredEvents(loginContext.user.registeredEvents)
            setRegisteredWorkshops(loginContext.user.registeredWorkshops)
            setUser(
                {
                    name:loginContext.user.name,
                    ragamId:loginContext.user.ragamId,
                    avatar
                }
            )
        }
        else{
            router.push(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/connect/google`)
        }
        // setRegisteredEvents(loginContext.user.registeredEvents)
    //   setRegisteredEvents(loginContext?.user?.registeredEvents)
    // setRegisteredWorkshops(loginContext?.user?.registeredWorkshops)
    }, [loginContext])
    

    const returnEvents  =   (e)  => e?.map(x =>  ({...x,coverImage:x.coverImage?.url,category:x.category.name}))

  return (
    <div    className={styles.dashboard}>
    {/* <div>hi</div> */}
        <Heading title={'Dashboard'} image={cover}   />
        <UserCard   user={user} />
        <RegisteredList list={returnEvents(registeredEvents)}/>
        <RegisteredList list={registeredWorkshops}/>
        
    </div>
    )
}

export default Dashboard