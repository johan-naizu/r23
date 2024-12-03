import EventCard from "./EventCard";
import styles from "@/styles/ListPages.module.css"

const EventList = ({list}) => {
  return (
    <div className={`${styles.CardList}`}>
      {list.map((x) => (
        <EventCard key={x.id} item={x} />
      ))}
    </div>
  );
};

export default EventList;
