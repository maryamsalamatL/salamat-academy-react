import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../provider/AuthProvider";

const Navigation = () => {
  const auth = useAuth();
  const items = [
    { name: "خانه", to: "/", exact: "true" },
    { name: "کلاس ها", to: "/courses" },
    {
      name: auth ? <FaUserCircle /> : "ورود",
      to: auth ? "/profile" : "/login",
    },
  ];
  return (
    <nav>
      <ul className={styles.ul}>
        {items.map((item) => {
          return (
            <li key={item.to} className={styles.li}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive && styles.active}`
                }
                to={item.to}
                exact={item.exact || "false"}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
