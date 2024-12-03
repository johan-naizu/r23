import styles from '../styles/NavBar.module.css';
import  Menu from './Menu'
import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
// import { ButtonSecondary } from "./Buttons/ButtonSecondary";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { LoginContext } from '@/contexts/LoginContext';
import Link from '@/components/Link'
export default function NavBar() {
    const router = useRouter()
    const signIn =   ()  => router.push(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/connect/google`)
    const goToDash =   ()  => {router.events.emit("routeChangeStart",  "withDelay");
    setTimeout(() => {
        router.push(`/dashboard`)
    }, 1000);}
    const [showMenu, setShowMenu] = useState(false)
    const {loginContext,signOut}    =   useContext(LoginContext)
    useEffect(()=>{
        console.log(router.pathname)
    },[router.pathname])

    const goHome =()    =>  {
        setTimeout(()=>setShowMenu(false),1000)
        
    }

    return (

        <>
        {showMenu&&<Menu setShowMenu={setShowMenu} />}
        <div className={`${styles.NavBar} ${router?.pathname !== "/" && styles.NavBar_normal } navbar`}>
            <div className={`${styles['NavBar-content']}`}>
                <button className={`${styles.HamBurgIcon}`}  onClick={()=>setShowMenu(x=>!x)}>
                    <div className={`${styles.HamburgLine}   ${showMenu ? styles["x-icon1"] : ""
                    }`}></div>
                    <div className={`${styles.HamburgLine}  ${showMenu ? styles["x-icon2"] : ""
                    }`}></div>
                </button>
                <div className={styles.logo} onClick={()=>goHome()}>
                    <Link href='/'>
                        <Image src="/ragam_logo.svg" width={50} height={50} alt="ragam-logo" />
                    </Link>
                </div>

                <div className={styles.loginButton}>
                {loginContext?(router.pathname == "/dashboard"?<ButtonPrimary onClick={()=>signOut()} >
                    Sign Out
                </ButtonPrimary>:
                <ButtonSecondary onClick={()=>goToDash()} >
                Dashboard
            </ButtonSecondary>
                ):
                <ButtonPrimary onClick={()=>signIn()}>Sign In</ButtonPrimary>    
            }
                </div>

            </div>
            <div className={styles['NavBar-after']}></div>
        </div>
        </>
    )
}
