import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProshowPage.module.css'
import Head from 'next/head'

const artists = [
    {
        name: 'MOHAN SISTERS',
        date: '10/03/2023',
        day: 'Friday',
        img: '/images/mohan sisters proshow.png',
        id: "neetimohan",
        content: 'Get ready to witness yourself a night of Ultimate extravaganza of Music & Dance at this season\'s most stunning fest Ragam as we present you Mohan Sisters. The soulful sisters who can captivate your senses with music and dance. Let\'s groove to the beats of Neeti Mohan with electric moves  from the winners of Dance India Dance reality show and Zara Nachke Dikha - Mukti and Shakti Mohan'
    },
    {
        name: 'JUBIN NAUTIYAL',
        date: '11/03/2023',
        day: 'Saturday',
        img: '/images/Jubin proshow.png',
        id: "jubin",
        content: 'It\'s time to put on your dancing shoes and get ready to groove to the beats of the sensational Jubin Nautiyal! Brace yourselves to be mesmerized by his soulful voice, as he takes the stage and sets the vibe for an unforgettable night of music and entertainment. So, mark your calendars and get ready to witness a night of musical bliss!'
    },
    {
        name: 'AMIT TRIVEDI',
        date: '12/03/2023',
        day: 'Sunday',
        img: '/images/Amit proshow.png',
        id: "amittrivedi",
        content: 'Get ready to witness an electrifying performance by the one and only, the renowned Bollywood singer and composer Amit Trivedi at Ragam\'23 - South India\'s  biggest cultural fest! Brace yourselves for an unforgettable evening as Amit Trivedi is all set to set the stage on fire with his scintillating voice and chart-topping hits. So mark your calendars and get ready to groove to his sensational tunes on the 12th of March, as we bring you the biggest musical extravaganza of the year!'
    }
]

const Proshow = function ({ }) {
    return (
        <>
            <Head>
                <title>Ragam 2023</title>
                <meta name="description" content="Ragam 2023 | Proshow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>PROSHOW<br />2023</h2>
                </div>

                <div className={styles['cards-container']}>
                    {
                        artists.map((artist, i) => {
                            return (
                                <ProshowPageCard name={artist.name} id={artist.id} key={i} date={artist.date} day={artist.day} content={artist.content} image={artist.img} rev={i % 2 != 0 ? true : false} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Proshow