import styles from "../../styles/Footer.module.css";
import GetInTouch from "./GetInTouch";
import Socials from "./Socials";
import Links from "./Links";
import Instagram from "@/public/images/socials/Vector.svg";
import Facebook from "@/public/images/socials/Vector(2).svg";
import Linkedin from "@/public/images/socials/Vector(3).svg";

const Footer = () => {
  const socials = [
    { logo: Instagram, link: "https://www.instagram.com/ragam_nitc/" },
    { logo: Linkedin, link: "#" },
    { logo: Facebook, link: "https://www.facebook.com/Ragam.nitc/" },
  ];

  const email = "ragam@nitc.ac.in";

  const links = [
    [
      { name: "Home", link: "/" },
      { name: "Team", link: "/team" },
      { name: "Sponsors", link: "/sponsors" },
    ],
    [
      { name: "Certificates", link: "https://certificates23.ragam.co.in" },
      { name: "Events", link: "/events" },
      { name: "Workshops", link: "/workshops" },
      { name: "Sports", link: "/events?category=Sports" },
    ],
    [
      { name: "Ragnarok", link: "/events?category=Ragnarok" },
      { name: "Proshow", link: "/proshow" },
      // { name: "I-ink", link: "/ink" },
      { name: "Prodezza", link: "/prodezza" },
    ],
  ];
  var i=0,j=0;
  return (
    <footer className={styles.footer}>
      <div className={styles.mainSection}>
        <GetInTouch email={email} />
        <div className={styles.SocialsContainer}>
          {socials.map((x) => (
            <Socials  key={i++} content={x} />
          ))}
        </div>
        <div className={styles.LinksContainer}>
          {links.map((x) => (
            <Links key={j++} links={x} />
          ))}
        </div>
      </div>
      <div className={styles.BottomSection}>
        <div>©2023 - Ragam NITC</div>
        <div>Terms & Conditions, Privacy</div>
      </div>
    </footer>
  );
};

export default Footer;
