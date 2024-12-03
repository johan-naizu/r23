import styles from '@/styles/Buttons.module.css';

export default function ButtonPrimary(props) {
   

    return (
       <button className={styles.primaryBtn} {...props}>
            {props.children}    
       </button>
    )
}
