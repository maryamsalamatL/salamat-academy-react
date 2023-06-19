import styles from "./Home.module.css";
import TopSec from "../../components/homePageCom/TopSec";
import AdvantageSec from "../../components/homePageCom/AdvantageSec";

const Home = (props) => {
  return (
    <section>
      <TopSec />
      <AdvantageSec />
    </section>
  );
};

export default Home;
