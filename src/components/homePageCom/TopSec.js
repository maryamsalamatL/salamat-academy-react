import styles from "./TopSec.module.css";
import EnglishTeacherImg from "../../images/EnglishTeacher.png";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const TopSec = () => {
  return (
    <div className={styles.topSection}>
      <div className={styles.title}>
        <h2>
          آموزشگاه زبان انگلیسی <span>سلامت</span>
        </h2>
        <p>
          طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
          ایج
        </p>
        <Link className={styles.link} to="/courses">
          <button className={styles.btn}>
            {" "}
            مشاهده دوره ها <BiChevronLeft className={styles.chevronIcon} />
          </button>
        </Link>
      </div>
      <div className={styles.img}>
        <img alt="English.png" src={EnglishTeacherImg}></img>
      </div>
    </div>
  );
};

export default TopSec;
