import '@/styles/globals.css'
import localFont from '@next/font/local';
import { createContext, useState } from 'react';
import { useEffect } from 'react';
import { LoginContext } from '@/contexts/LoginContext';
import Layout from '../components/layout'
import { useRouter } from 'next/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import CustomEase from 'gsap/dist/CustomEase';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);


const NeueMontreal = localFont({
  display: "block",
  src: [
    {
      path: '../public/fonts/Neue_Montreal/neuemontreal-light-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Neue_Montreal/neuemontreal-lightitalic-webfont.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Neue_Montreal/neuemontreal-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Neue_Montreal/neuemontreal-italic-webfont.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Neue_Montreal/neuemontreal-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Neue_Montreal/neuemontreal-mediumitalic-webfont.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Neue_Montreal/neuemontreal-bold-webfont.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Neue_Montreal/neuemontreal-bolditalic-webfont.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
})

const NotoMalayalam = localFont({
  display: "block",
  src: [
    {
      path: '../public/fonts/Noto_Serif_Malayalam/static/NotoSerifMalayalam-Regular.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../public/fonts/Noto_Serif_Malayalam/static/NotoSerifMalayalam-Bold.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
})

const NotoTelugu = localFont({
  display: "block",
  src: [
    {
      path: '../public/fonts/Noto_Serif_Telugu/static/NotoSerifTelugu-Regular.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../public/fonts/Noto_Serif_Telugu/static/NotoSerifTelugu-Bold.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
})


const NotoTamil = localFont({
  display: "block",
  src: [
    {
      path: '../public/fonts/Noto_Serif_Tamil/static/NotoSerifTamil/NotoSerifTamil-Regular.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../public/fonts/Noto_Serif_Tamil/static/NotoSerifTamil/NotoSerifTamil-Bold.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
})

const NotoHindi = localFont({
  display: "block",
  src: [
    {
      path: '../public/fonts/Noto_Serif_Devanagari/static/NotoSerifDevanagari/NotoSerifDevanagari-Regular.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../public/fonts/Noto_Serif_Devanagari/static/NotoSerifDevanagari/NotoSerifDevanagari-Bold.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
})

const KyivType = localFont({
  display: "block",
  src: [
    {
      path: '../public/fonts/KyivType/kyivtypesans-thin-webfont.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/KyivType/kyivtypesans-light3-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/KyivType/kyivtypesans-regular3-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/KyivType/kyivtypesans-medium3-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/KyivType/kyivtypesans-bold3-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/KyivType/kyivtypesans-heavy3-webfont.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/KyivType/kyivtypesans-black3-webfont.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})
const Cutive = localFont({
  display: "block",
  src: [
    {
      path: '../public/fonts/Cutive/cutivemono-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
  ]
})
export default function App({ Component, pageProps }) {

  const [loginContext, setLoginContext] = useState(null)

  const router  = useRouter()
  
  const signOut  = ()  =>  {
    localStorage.removeItem("token")
    localStorage.removeItem("user_details")
    setLoginContext(null)
    router.push('/')
  }

  const refetchUserDetails  = async ()  =>  {
    let _token = localStorage.getItem("token");
    if (_token) {
      let val = await fetchUser(_token);
      setLoginContext({token:_token,user:val})
    }
  }

  const fetchUser = async (_token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/getme?populate=*`, {
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    });
    const value = await res.json()
    if (value?.error?.status == 401) {
      console.log('removed item');
      localStorage.removeItem("token")
      localStorage.removeItem("user_details")
      router.reload()
    }
    
    // console.log("valueee", value)
    return value;
    }

    useEffect(()=>{
      async function onStartup() {
        let _token = localStorage.getItem("token");
        localStorage.removeItem("loginRedirect");
        localStorage.removeItem("profileRedirect");
        if (_token) {
          console.log('reached here hahaha');
          let val = await fetchUser(_token);
          setLoginContext({token:_token,user:val})
        }
      }
      onStartup()
    },[])
    

  return (
    <>
      <style jsx global>{`
        :root {
          /* ... */
          --neue-montreal: ${NeueMontreal.style.fontFamily};
          --kyivtype: ${KyivType.style.fontFamily};
          --cutive: ${Cutive.style.fontFamily};
          --noto-malayalam: ${NotoMalayalam.style.fontFamily};
          --noto-telugu: ${NotoTelugu.style.fontFamily};
          --noto-tamil: ${NotoTamil.style.fontFamily};
          --noto-hindi: ${NotoHindi.style.fontFamily};
        }
      `}</style>
    <LoginContext.Provider value={({loginContext,setLoginContext,signOut,refetchUserDetails})}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginContext.Provider>
    </>
  )
}
