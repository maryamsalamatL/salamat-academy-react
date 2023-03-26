import styles from "./Table.module.css";

const Table = ({ course }) => {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.title}>
          <h2>{course.book.title}</h2>
        </div>

        <section className={styles.divisionBox}>
          {course.book.books.map((b) => (
            <div className={styles.division}>
              <div className={styles.name}>{b.name}</div>
              <div className={styles.lists}>
                {b.term.map((t) => (
                  <ul className={styles.ul}>
                    <li className={`${styles.li} ${styles.liTitle}`}>
                      {t.title}
                    </li>
                    <li className={styles.li}>{t.units}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Table;
