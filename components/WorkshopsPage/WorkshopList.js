import WorkshopCard from "./WorkshopCard";
import styles from "@/styles/ListPages.module.css"

const WorkshopList = ({list}) => {
  return (
    <div className={`${styles.CardList}`}>
      {list.map((x) => (
        <WorkshopCard key={x.id} item={x} />
      ))}
    </div>
  );
};

export default WorkshopList;
