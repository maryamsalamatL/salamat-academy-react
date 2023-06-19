import Navigation from "./Navigation";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navigation />
      <span className={styles.logo}>SALAMAT INSTITUTE</span>
    </header>
  );
};

export default Header;
