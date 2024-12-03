import React from 'react'
import Events from '@/components/EventsPage'
import Head from 'next/head'


const eventsPage = () => {
  return (
    <>
      <Head>
        <title>Ragam 2023</title>
        <meta name="description" content="Ragam 2023 | Events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Events />
    </>
  )
}

export default eventsPage