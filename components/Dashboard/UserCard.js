import styles from '@/styles/Dashboard.module.css'
import Image from 'next/image'
import { ButtonPrimary } from '../Buttons'

const UserCard = ({user}) => {
  return (
    <div className={styles.userCard}>
        <div    className={styles.flexStart}>
            <Image className={styles.avatar} width={80} height={80} src={user.avatar} alt={'avatar'}/>
            <div    className={styles.flexCol}>
                <div    className={styles.userName}>{user.name}</div>
                <div    className={styles.ragamId}>RAGAM ID: {user.ragamId}</div>
            </div>
        </div>
        <ButtonPrimary  className={styles.editButton}>Edit Profile</ButtonPrimary>
    </div>
  )
}

export default UserCard