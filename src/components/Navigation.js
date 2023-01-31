import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { AiFillHome } from "react-icons/ai";

const Navigation = () => {
  const items = [
    { name: <AiFillHome />, to: "/", exact: "true" },
    { name: "کلاس ها", to: "/courses" },
    { name: "سفارش کتاب", to: "/order" },
  ];
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                className={styles.link}
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
