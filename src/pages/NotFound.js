import { Link } from "react-router-dom";
import img from "../images/404error.png";
import styles from "./NotFound.module.css";
import { FaLevelUpAlt } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={img} className={styles.img} alt="404error"></img>
      </div>
      <Link to="/" className={styles.link}>
        <FaLevelUpAlt />
        بازگشت به خانه
      </Link>
    </div>
  );
};

export default NotFound;
