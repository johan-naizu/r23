import { LoginContext } from "@/contexts/LoginContext"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useContext } from "react"

const LoginPage = () => {
    const   {loginContext,setLoginContext}  = useContext(LoginContext)  
    const router    =   useRouter()
    
    function checkProfile({ id, name, email, college, district, gender, phone, year, state }) {
        return name && college && district && gender && phone && year && state
      }

    const authdetails = async (usercode) => {
        if (usercode != '') {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google/callback?access_token=${usercode}`)
          const value = await res.json()
          const user_details = await value
          const res2 = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/getme?populate=*`, {
            headers: {
              'Authorization': `Bearer ${user_details.jwt}`
            }
          });
          const v2  = await res2.json()
          if (user_details != null) {
            if (user_details.jwt != null) {
              localStorage.setItem("token", user_details.jwt);
              localStorage.setItem("user_details", user_details.user)
              setLoginContext({token:user_details.jwt,user:v2})
              if (checkProfile(user_details.user)) {
                localStorage.removeItem("loginRedirect");
                    router.push("/dashboard");
              }else{
                  localStorage.setItem("profileRedirect", true)
                  router.push("/dashboard");
              }
    
            }
          }
        }
      }

    useEffect(() => {
        if(router.isReady)
        {
            if(router.query.access_token    !=  null)
            {
                authdetails(router.query.access_token)
            }
            else{
                router.push('/')
            }
        }
    }, [router.isReady])
    
  return (
    <div style={{position:'absolute', width:'100vw',height:'100vh',top:'0',left:'0',backgroundColor:'black',zIndex:10000}}></div>
  )
}

export default LoginPage