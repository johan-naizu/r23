import Heading from '@/components/Heading'
import Head from 'next/head'
import styles from '@/styles/Team.module.css'
import Image from 'next/image'
import TeamCard from '@/components/TeamCard'
import data from '@/public/sponsors.json'

export default function Sponsors({ }) {
    return (
        <>
            <Head>
                <title>Ragam 2023</title>
                <meta name="description" content="Ragam 2023 | Sponsors" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Heading title={"Sponsors 2023"} image={"/images/sponsors_bg.jpg"} />

            <div className={styles.rowsContainer}>
                {data.map((team,i) => {
                    return(
                    <div className={styles.row} key={i}>
                        <div className={styles.team} >
                            <div className={styles.heading}>
                                <Image src={'/images/assets/circle selected.svg'} width={40} height={40} className={styles.circle}/>
                                <h3 className={styles.label}>{team.label}</h3>
                            </div>
                            <div className={styles.members}>
                                {team.members.map((member,k) => {
                                        return(
                                            <Image  key={k} className={styles.sponsorImg} src={member} width={300} height={200} alt={`sponsor`}/>
                                        )
                                })}
                            </div>
                        </div>
                    </div>
                    )
                })}
                <div className={styles.row}>
                        <div className={styles.team} >
                            <div className={styles.heading}>
                                <Image src={'/images/assets/circle selected.svg'} width={40} height={40} className={styles.circle}/>
                                <h3 className={styles.label}>Hospitality Partner</h3>
                            </div>
                            {/* <div className={styles.members}>
                                {team.members.map((member,k) => {
                                        return(
                                            <Image  key={k} className={styles.sponsorImg} src={member} width={300} height={200} alt={`sponsor`}/>
                                        )
                                })}
                            </div> */}
                            <video controls={true} src='/images/sponsors/lecandles.m4v' height={318} className={styles.video}></video>
                        </div>
                    </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
        data,
        },
    };
}