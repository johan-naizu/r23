import Workshop from "@/components/WorkshopPage"
import Head from 'next/head'



const WorkshopPage = () => {
  return (
    <>
    <Head>
        <title>Ragam 2023</title>
        <meta name="description" content="Ragam 2023 | Workshops" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Workshop />
    </>
  )
}

export default WorkshopPage