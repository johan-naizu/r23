import styles from "@/styles/Footer.module.css";
import Link from "@/components/Link";
const Links = ({ links }) => {
  var i=0;
  return (
    <div className={styles.LinkContainer}>
      <div className={styles.LinkInnerContainer}>
        {links.map((x) => (
          <Link key={i++} href={x.link} className={styles.link}>{x.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
