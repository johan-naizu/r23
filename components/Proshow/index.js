import styles from '@/styles/Proshow.module.css'
import Image from 'next/image'
import ProshowCard from './proshowCard'

const artists = [
    {
        name: 'Mohan Sisters',
        date: '10 Mar.',
        img: 'images/sisters.jpg',
        div_id: 'neetimohan'
    },
    {
        name: 'Jubin Nautiyal',
        date: '11 Mar.',
        img: 'images/Jubin-Nautiyal-compressed.jpg',
        div_id: 'jubin'
    },
    {
        name: 'Amit Trivedi',
        date: '12 Mar.',
        img: 'images/Amit-Trivedi-compressed.jpg',
        div_id: 'amittrivedi'
    }
]

function Proshow(){
    return(
        <div className={`${styles.container} proshow-section` }>
            <div className={styles.marquee}>
                <ul className={styles['marquee-content']}>
                    <li className={styles.stroke}>JUBIN NAUTIYAL</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        height={100}
                        alt={'Proshow'}
                        />
                    </li>
                    <li >AMIT TRIVEDI</li>
                    <li >NEETI MOHAN</li>
                </ul>

                <ul className={`${styles['marquee-content']} marquee-proshow`} aria-hidden="true">
                    <li className={styles.stroke}>JUBIN NAUTIYAL</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        alt={'Proshow'}
                        height={100}
                        />
                    </li>
                    <li>AMIT TRIVEDI</li>
                    <li >NEETI MOHAN</li>
                </ul>
            </div>
            <div className={styles.marquee}>
                <ul className={styles['marquee-content']}>
                    <li>AMIT TRIVEDI</li>
                    <li className={styles.stroke}>NEETI MOHAN</li>
                    <li><Image 
                        src={'/images/assets/union2.svg'}
                        alt={'Proshow'}
                        width={100}
                        height={100}
                        />
                    </li>
                    <li className={styles.stroke}>JUBIN NAUTIYAL</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        alt={'Proshow'}
                        height={100}
                        />
                    </li>
                </ul>

                <ul className={styles['marquee-content']} aria-hidden="true">
                    <li>AMIT TRIVEDI</li>
                    <li className={styles.stroke}>NEETI MOHAN</li>
                    <li><Image 
                        src={'/images/assets/union2.svg'}
                        alt={'Proshow'}
                        width={100}
                        height={100}
                        />
                    </li>
                    <li className={styles.stroke}>JUBIN NAUTIYAL</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        alt={'Proshow'}
                        width={100}
                        height={100}
                        />
                    </li>
                </ul>
            </div>

            <div className={styles.marquee}>
                <ul className={styles['marquee-content']}>
                    <li >AMIT TRIVEDI</li>
                    <li className={styles.stroke}>JUBIN NAUTIYAL</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        alt={'Proshow'}
                        height={100}
                        />
                    </li>
                    <li >NEETI MOHAN</li>
                </ul>

                <ul className={styles['marquee-content']} aria-hidden="true">
                    <li>AMIT TRIVEDI</li>
                    <li className={styles.stroke}>JUBIN NAUTIYAL</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        alt={'Proshow'}
                        height={100}
                        />
                    </li>
                    <li >NEETI MOHAN</li>
                </ul>
            </div>
            
            <div className={styles['cards-container']}>
                <div className={styles['web-cards']}>
                    {artists.map((artist,key)=> {
                        return(
                            <ProshowCard title={artist.name} key={key} id={artist.div_id} date={artist.date} bg={artist.img} />
                        )
                })}
                </div>
                <div className={styles['mob-card']}>
                    <ProshowCard title={artists[1].name} date={artists[1].date} id={artists[1].div_id} bg={artists[1].img} />
                </div>
                {/* <ProshowCard />
                <ProshowCard title={"Ankit"}/>
                <ProshowCard /> */}
            </div>
        </div>
    )
}

export default Proshow