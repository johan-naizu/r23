import MenuItem from "./MenuItem";
import styles from "../../styles/Menu.module.css";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";


const Menu = ({setShowMenu}) => {
  const router = useRouter()
  const lists = [
    { title: "Home", link: "/" },
    // { title: "Schedule", link: "/schedule" },
    { title: "Certificates", link: "https://certificates23.ragam.co.in" },
    { title: "Workshops", link: "/workshops" },
    { title: "Events", link: "/events" },
    { title: "Proshows", link: "/proshow" },
    // { title: "I-ink", link: "/ink" },
    { title: "Prodezza", link: "/prodezza" },
    { title: "Team", link: "/team" },
    { title: "Sponsors", link: "/sponsors" },

    
    // { title: "Proshows2", link: "/" },
  ];
  


  var i = 0
  return (
    <div className={styles.menuContainer}>
      <nav className={styles.menu}>
        <div className={styles.aside}>
          <span className={`${styles.bottomleftmar}`}>
            NATIONAL INSTITUTE OF TECHNOLOGY CALICUT, NITC
          </span>
        </div>
        <ul className={`${styles.nopad}`}>
          {lists.map((x) => {
            return <MenuItem 
            key={lists.indexOf(x)} 
            k={i++} content={x.title} 
            link={x.link}
            setShowMenu={setShowMenu}
            />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
