import styles from '@/styles/Buttons.module.css';

export default function ButtonSecondary(props) {
   

    return (
       <button className={styles.secBtn} {...props}>
            {props.children}    
       </button>
    )
}
