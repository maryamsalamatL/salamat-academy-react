import styles from "./UserPanel.module.css";
import { useAuth } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
const UserPanel = () => {
  const userData = useAuth();
  const render = () => {
    return userData ? (
      <div className={styles.mainContainer}>
        <h2>پروفایل من</h2>
        <div className={styles.profileSec}>
          <div className={styles.topSec}>
            <div className={styles.icon}>
              {userData.name.slice(0, 1).toUpperCase()}
            </div>
            <h4>{userData.name}</h4>
          </div>
          <div className={styles.info}>
            <h5>اطلاعات</h5>
            <ul>
              <li>
                <p>نام :</p>
                <span> {userData.name}</span>
              </li>
              <li>
                <p>کد ملی :</p>
                <span> {userData.IDcode}</span>
              </li>
              <li>
                <p>شماره تماس :</p>
                <span> {userData.phoneNumber}</span>
              </li>
              <li>
                <p>سن :</p>
                <span> {userData.age}</span>
              </li>
              <li>
                <p>کلاس :</p>
                <span>{}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <Link to="/login" className={styles.link}>
        Not login yet?
      </Link>
    );
  };
  return render();
};

export default UserPanel;
