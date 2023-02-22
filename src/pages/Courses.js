import { Link } from "react-router-dom";
import styles from "./Courses.module.css";
import img1 from "../images/Vowels-amico.png";
import img2 from "../images/Vowels-pana.png";
import img3 from "../images/reading-pana.png";
import img4 from "../images/Dictionary-pana.png";

const Courses = () => {
  const items = [
    {
      name: "خردسالان",
      to: "/courses/1",
      img: img1,
    },
    { name: "کودکان", to: "/courses/2", img: img2 },
    { name: "نوجوانان و جوانان", to: "/courses/3", img: img3 },
    { name: "بزرگسالان", to: "/courses/4", img: img4 },
  ];
  return (
    <div className={styles.container}>
      <h1>دوره ها</h1>
      <ul className={styles.ul}>
        {items.map((item) => {
          return (
            <li key={item.to} className={styles.li}>
              <img src={item.img}></img>
              <Link to={item.to} className={styles.link}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Courses;
