import styles from "./AdvantageSec.module.css";
import conversation from "../../images/Conversation.png";
import kid1 from "../../images/Vowels-amico.png";
import kid2 from "../../images/Vowels-pana.png";
const items = [
  {
    title: "لورم ایپسوم",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    img: conversation,
  },
  {
    title: "لورم ایپسوم",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    img: kid1,
  },
  {
    title: "لورم ایپسوم",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    img: kid2,
  },
];

const AdvantageSec = () => {
  return (
    <div className={styles.container}>
      <h3>چرا باید زبان انگلیسی بیاموزیم؟</h3>
      <div className={styles.list}>
        <ul className={styles.ul}>
          {items.map((i) => {
            return (
              <li className={styles.li}>
                {/* <div className={styles.imgBox}>
                  <img src={i.img} className={styles.img}></img>
                </div> */}
                <h4>{i.title}</h4>
                <p>{i.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdvantageSec;
