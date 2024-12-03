import React from 'react'
import Head from 'next/head'
import Workshops from '@/components/WorkshopsPage'

const workshopsPage = () => {
  return (
    <>
      <Head>
        <title>Ragam 2023</title>
        <meta name="description" content="Ragam 2023 | Workshops" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Workshops />
      <div className="done">
        <h2>Done and dusted. Now a part of the Ragam lore.</h2>
      </div>

    </>)
}

export default workshopsPage