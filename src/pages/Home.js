import styles from "./Home.module.css";
import TopSec from "../components/homePageCom/TopSec";
import AdvantageSec from "../components/homePageCom/AdvantageSec";
import LevelInfoSec from "../components/homePageCom/LevelInfoSec";

const Home = (props) => {
  console.log(props);
  return (
    <section>
      <TopSec />
      <AdvantageSec />
      <LevelInfoSec />
    </section>
  );
};

export default Home;
