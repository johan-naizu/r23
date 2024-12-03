import Event from "@/components/EventPage"
import Head from 'next/head'



const EventPage = () => {
  return (
    <>
      <Head>
        <title>Ragam 2023</title>
        <meta name="description" content="Ragam 2023 | Events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Event />
    </>
  )
}

export default EventPage