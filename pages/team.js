import Coming from '@/components/Coming'
import Heading from '@/components/Heading'
import Head from 'next/head'
import styles from '@/styles/Team.module.css'
import Image from 'next/image'
import TeamCard from '@/components/TeamCard'
import Filter from '@/components/EventsPage/Filter'
import { useState } from 'react'
import data from '@/public/team.json'

export default function Team({data}) {

    const [selected, setSelected] = useState('Council')
    // const categories = [{name: 'Council'}, {name: 'Web Team'}]
    let categories = []

    for(let i=0; i<data.length; i++)
        categories[i] = {name: data[i].category}

    // console.log(data.map((d,i) => d.category))

    return (
        <>
            <Head>
                <title>Ragam 2023</title>
                <meta name="description" content="Ragam 2023 | Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Coming /> */}
            <Heading title={"Team 2023"} image={"/images/theyyam team.png"} />

            <Filter categories={categories} selected={selected} select={setSelected} />

            <div className={styles.rowsContainer}>
                {data.filter(x => x.category === selected)[0].teams.map((team,i) => {
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
                                            <TeamCard label={team.label} name={member.name} designation={member.designation} image={member.img} key={`${member.name}-${k}`}/>
                                        )
                                })}
                            </div>
                        </div>
                    </div>
                    )
                })}
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