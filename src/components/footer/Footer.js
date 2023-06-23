import styles from "./Footer.module.css";
import { FaPhone, FaVoicemail } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.address}>addres</div>
      <div className={styles.connection}>
        <a href="tel:09143322117">
          09143322117
          <FaPhone className={styles.icon} />
        </a>
        <a href="mailto:maryamsalamat47@gmail.com">
          email
          <FaVoicemail className={styles.icon} />
        </a>
        <a>connection</a>
      </div>
    </footer>
  );
};

export default Footer;
