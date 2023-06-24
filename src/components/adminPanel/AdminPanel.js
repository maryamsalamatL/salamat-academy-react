import styles from "./AdminPanel.module.css";
import { useEffect, useState, useRef } from "react";
import { postTerm, getTerms, deleteTerm } from "../../sevices/requestService";
import { FaTrashAlt, FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [isFormShow, setIsFormShow] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [terms, setTerms] = useState([]);
  useEffect(() => {
    getTerms()
      .then(({ data }) => {
        setTerms(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const modalHandler = (e, id) => {
    e.preventDefault();

    setIsModalShow(true);
    setDeletedItemId(id);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      await deleteTerm(deletedItemId);
      const { data } = await getTerms();
      setTerms(data);
      setIsModalShow(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topSec}>
        <h3>پنل ادمین</h3>
        <ul>
          <li>
            <p>تعداد کاربر</p>
            <span>100</span>
          </li>
          <li>
            <p>تعداد دانش آموز</p>
            <span>100</span>
          </li>
        </ul>
      </div>
      <section className={styles.termSec}>
        <ul className={styles.termsList}>
          <div>
            <h4>لیست کلاس های در حال برگذاری</h4>
            <button
              onClick={() => {
                setIsFormShow(!isFormShow);
              }}
              className={styles.showBtn}
            >
              {isFormShow ? <FaTimes /> : <FaPlus />}
            </button>
          </div>
          {isFormShow && (
            <TermInformation
              setTerms={setTerms}
              setIsFormShow={setIsFormShow}
            />
          )}
          {terms.length ? (
            terms.map((t) => (
              <li key={t.id}>
                <p>{t.title}</p>
                <p>{t.category}</p>
                <button onClick={(e) => modalHandler(e, t.id)}>
                  <FaTrashAlt />
                </button>
              </li>
            ))
          ) : (
            <p>هیچ کلاسی در حال برگذاری نیست.</p>
          )}
        </ul>
      </section>
      {isModalShow && (
        <Modal setIsModalShow={setIsModalShow} deleteHandler={deleteHandler} />
      )}
      <StudentsList terms={terms} />
    </div>
  );
};

export default AdminPanel;

const TermInformation = ({ setTerms, setIsFormShow }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (inputValue === "" || selectedCategory === "")
      return alert("لطفا ابتدا فرم را تکمیل کنید !");
    else {
      try {
        await postTerm({ title: inputValue, category: selectedCategory });
        const { data } = await getTerms();
        setTerms(data);
      } catch (error) {
        console.log(error.message);
      }
      setInputValue("");
      setSelectedCategory("");
      setIsFormShow(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.termForm}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="نام ترم را وارد کنید"
        ref={inputRef}
      />
      <div className={styles.inputController}>
        <div className={styles.radioInputController}>
          <label htmlFor="minors">خردسالان</label>
          <input
            type="radio"
            value="minors"
            id="minors"
            name="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
            // onClick={(e) => console.log(e.target.previousSibling.textContent)}
          />
        </div>
        <div className={styles.radioInputController}>
          <label htmlFor="children">کودکان</label>
          <input
            type="radio"
            value="children"
            id="children"
            name="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
        </div>
        <div className={styles.radioInputController}>
          <label htmlFor="teenagers">نوجوانان</label>
          <input
            type="radio"
            value="teenagers"
            id="teenagers"
            name="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
        </div>
        <div className={styles.radioInputController}>
          <label htmlFor="adults">بزرگسالان</label>
          <input
            type="radio"
            value="adults"
            id="adults"
            name="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">افزودن</button>
    </form>
  );
};

const StudentsList = ({ terms }) => {
  // const [terms, setTerms] = useState([]);

  // useEffect(() => {
  //   getTerms()
  //     .then(({ data }) => {
  //       setTerms(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <section className={styles.studentsContainer}>
      <p>برای مشاهده اطلاعات دانش اموزان روی کلاس مدنظر کلیک کنید .</p>
      <ul>
        {terms.length
          ? terms.map((term) => (
              <li>
                <Link to="/students-list">
                  لیست دانش اموزان ترم {term.title}
                </Link>
              </li>
            ))
          : "هیچ کلاسی در حال برگذاری نیست."}
      </ul>
    </section>
  );
};

const Modal = ({ setIsModalShow, deleteHandler }) => {
  return (
    <main className={styles.modalContainer}>
      <div className={styles.modal}>
        <p>آیا از حذف کلاس مطمئنید؟</p>
        <p>در صورت حذف تمام اطلاعات حذف خواهد شد.</p>
        <div className={styles.modalBtns}>
          <button
            className={styles.cancel}
            onClick={() => {
              setIsModalShow(false);
            }}
          >
            کنسل
          </button>
          <button className={styles.delete} onClick={deleteHandler}>
            حذف
          </button>
        </div>
      </div>
    </main>
  );
};
