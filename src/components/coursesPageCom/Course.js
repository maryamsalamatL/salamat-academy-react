import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Course.module.css";
import { useState, useEffect } from "react";
import Form from "./Form";
import { TfiBackRight } from "react-icons/tfi";
import courses from "./courses";
import Table from "../common/Table";
import { useAuth } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const Course = () => {
  const params = useParams();
  const [course, setCourse] = useState({});
  const [isShow, setIsShow] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const findedCourse = courses.find((c) => c.id === parseInt(params.id));
    setCourse(findedCourse);
  }, []);
  const clickHandler = (e) => {
    e.preventDefault();
    if (!auth) {
      navigate(`/login?redirect=courses/${params.id}`);
    } else {
      setIsShow(true);
    }
  };
  return (
    <div className={`${styles.container} ${isShow && styles.isShow}`}>
      <div className={styles.info}>
        <h2>{course.title}</h2>
        <p>{course.desc}</p>
      </div>
      {course.id && <Table course={course} />}
      <button className={styles.btn} onClick={clickHandler}>
        ثبت نام
      </button>
      {isShow && <Form id={course.id} setIsShow={setIsShow} />}
      {/* <Link to="/courses" className={styles.link}>
        <TfiBackRight />
      </Link> */}
    </div>
  );
};

export default Course;
