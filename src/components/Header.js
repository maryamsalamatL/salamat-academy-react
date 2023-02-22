import Navigation from "./Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Navigation />
      <span className={styles.logo}>SALAMAT ACADEMY</span>
    </header>
  );
};

export default Header;
