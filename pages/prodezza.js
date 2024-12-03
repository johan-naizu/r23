import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProdezzaPage.module.css'
import Head from 'next/head'

const artists = [
    {
        name: 'DABZEE X HRISHI',
        date: '10/03/2023',
        day: 'Friday',
        img: '/images/dabzee.jpg',
        id: "dabzee",
        content: 'Are you among those who feel that Ragam is incomplete without energetic, foot-tapping numbers and rap songs? Let us to fill that void with energetic performance by the gifted artist who rose to fame through "Manavalan Thug", DABZEE!'
    },
    {
        name: 'DANA RAZIK',
        date: '12/03/2023',
        day: 'Sunday',
        img: '/images/dana_razik.jpg',
        id: "dana",
        content: 'Prepare to dive into the depths of soulful music this Ragam, as the poignant and gifted voice whose recreations of famous songs like Madhirakappathi and Pasoori have garnered praise from millions, is waiting to immerse you in the realm of bewitching euphony and enrapture you with the melodies of her most famous songs! Ragam welcomes the young singer Dana Razik to cast the spell of her magical voice on the audience and captivate their hearts.'
    },
    {
        name: 'SULAIMANI NIGHT',
        date: '12/03/2023',
        day: 'Sunday',
        img: '/images/sulaimani_night.jpg',
        id: "sulaimani",
        content: 'As we celebrate the fête of Ragam, join us in appreciation as soulful Sufi melodies fill the air at Sulaimani Nights, where everyone can find the relaxation they deserve, as this time Ragam presents to you the Swasthi Band! Come, witness the magic of the blissful atmosphere charged with the warmth of their songs that will revive and rejuvenate your soul.'
    },
    {
        name: 'SYAM PUSHKARAN',
        date: '10/03/2023',
        day: 'Friday',
        img: '/images/shyam.jpg',
        id: "syam",
        content: 'Lights, camera, and action! Ragam\'23 welcomes one of the biggest writers in the Indian film Industry to add some Salt N\’ Pepper to this Ragam, and give us a peak into his indulging films and scripts, such as Kumblangi Nights, Mayanadhi, Maheshinte prathikaram, Joji and many more. Here is an exclusive chance to meet and interact with the talented and creative Syam Pushkaran himself!'
    },
    {
        name: 'YOUTUBER\'S CONCLAVE',
        date: '11/03/2023',
        day: 'Saturday',
        img: '/images/aswin.jpg',
        id: "aswin",
        content: 'Ever wanted to know the stories and journeys of YouTube creators behind the lenses? Like, share, subscribe, and don\’t forget to drop in when the GEN-Z YouTubers Aswin Ram and Ashwin Bhaskar come to speak at Ragam, both in one frame! Lend your ears as they motivate the audience with their stories of struggle and success, and give a peek into their discography of soulful songs and melodious mashups.'
    },
    {
        name: 'JEO BABY & KRISHAND',
        date: '11/03/2023',
        day: 'Saturday',
        img: '/images/jeo.jpg',
        id: "jeo",
        content: 'Ragam\’23 brings to you the team of the upcoming and highly anticipated Malayalam movie, Purusha Pretham. Join Krishand and Jeo Baby as they describe their candid filmmaking experiences and journey in the film world. Come and experience this opportunity to interact with them and get new insights into the world of the Malayalam film industry!'
    },
    {
        name: 'THE OULALA SHOW',
        date: '10/03/2023 - 12/03/2023',
        day: 'Friday-Sunday',
        img: '/images/circus.jpg',
        id: "circus",
        content: 'For those who enjoy nail-biting stunts and death-defying acts, we have just the thing for you this Ragam! Presenting the evergreen circus with all its pomp and show, where the French showman Sylvain is all set to electrify your evening with numerous power-packed performances and lots of entertainment!'
    },
    {
        name: 'GARUDAN PARAVA',
        date: '11/03/2023',
        day: 'Saturday',
        img: '/images/garudan.jpg',
        id: "garudan",
        content: 'Kerala, the land of rich and diverse traditions and culture is well-known for its rich folk arts. This Ragam, keep your eyes and cameras ready to capture a heretofore unwitnessed spectacle of folk dance, GARUDAN PARAVA! This art form is traditionally practiced in Central Kerala by dancers dressed as Garuda to hail the goddess Bhadrakali. We gladly welcome you all to witness this performance which will charge the atmosphere with positive energy and offer viewers an experience like never before.'
    },
    {
        name: 'THE FIRE NINJA',
        date: '10/03/2023 - 12/03/2023',
        day: 'Friday-Sunday',
        img: '/images/ninja.jpg',
        id: "ninja",
        content: 'Let the fire and spirit of Ragam blaze and glow brighter than ever as we present to you to one of the most anticipated events of Ragam\'23, the breathtaking FIRE SHOW by CHRIZ BLAZE, the fire ninja straight outta Australia! Sit back, as the light of Ragam in our hearts and the mesmerizing dance of flames combine to deliver a performance worth remembering!'
    },

]

export default function Prodezza({ }) {
    return (
        <>
            <Head>
                <title>Ragam 2023</title>
                <meta name="description" content="Ragam 2023 | Prodezza" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>PRODEZZA<br />2023</h2>
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