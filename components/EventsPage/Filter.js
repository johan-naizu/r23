import { ButtonPrimary } from "../Buttons"
import styles from  "@/styles/ListPages.module.css"

const Filter = ({categories,selected,select}) => {



  return (
    <div  className={styles.filterContainer}>
      {
        categories.map(x=> <ButtonPrimary onClick={()=>select(x.name)} className={selected===x.name?styles.selected:styles.primaryBtn} key={x.id}>{x.name}</ButtonPrimary> )
      }
    </div>
  )
}

export default Filter