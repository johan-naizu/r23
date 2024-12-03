import Coming from '@/components/Coming'
import Head from 'next/head'

export default function Schedule({ }) {
    return (
        <>
            <Head>
                <title>Ragam 2023</title>
                <meta name="description" content="Ragam 2023 | Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Coming />
        </>
    )
}