import styles from '@/styles/Misc.module.css'
import LangBox from './misc/langBox'
import Songs from './misc/songs'
import Eyes from './misc/eyes'
import Rangoli from './misc/rangoli'
import HindiText from './misc/hindiText'
import Date from './misc/date'
import Heading from './misc/heading'


function MiscComponent(){

    return(
        <div className={`${styles.container} misc-component`}>
            <div className={styles.row1}>
                <Heading />
                <LangBox />
                <Songs />
            </div>
            <div className={styles['row-mob']}>
                <Songs />
            </div>
            <div className={styles.row2}>
                <Eyes />
                <HindiText />
                <Rangoli />
                <Date />
            </div>
        </div>
    )
}

export default MiscComponent