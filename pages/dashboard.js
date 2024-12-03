import Head from 'next/head'
import React from 'react'
import Dashboard from '@/components/Dashboard'

const DashboardPage = () => {
  return (
    <>
        <Head>
            <title>Ragam 2023</title>
            <meta name="description" content="Ragam 2023 | Dashboard" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Dashboard />
        </main>
    </>
  )
}

export default DashboardPage