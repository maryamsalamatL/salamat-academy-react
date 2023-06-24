import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import { getTerms } from "../../sevices/requestService";
import { useFormik } from "formik";
import { object, string, ref, array, boolean, number } from "yup";
import Input from "../common/Input";
import Select from "../common/Select";
import { FaTimes } from "react-icons/fa";

const initialValues = {
  name: "",
  IDcode: "",
  term: "",
};
const Form = ({ id, setIsShow }) => {
  const [selectOptions, setSelectOptions] = useState([]);
  let category = "";
  if (id === 1) {
    category = "minors";
  } else if (id === 2) {
    category = "children";
  } else if (id === 3) {
    category = "teenagers";
  } else if (id === 4) {
    category = "adults";
  }

  const onSubmit = (values) => {
    // postRegister(level, { ...formik.values, formId: id })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // setIsShow(false);
    console.log(values);
  };
  const validationSchema = object({
    name: string().required("لطفا نام خود را وارد کنید !"),
    IDcode: number().required("لطفا کد ملی خود را وارد کنید !"),
    term: string().required("لطفا کلاس خود را انتخاب کنید !"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    getTerms()
      .then((res) => {
        const data = res.data.filter((item) => item.category === category);
        setSelectOptions(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={formik.handleSubmit}>
          <Input
            formik={formik}
            name="name"
            styles={styles}
            label="نام و نام خانوادگی"
          />

          <Input
            formik={formik}
            name="IDcode"
            styles={styles}
            label="شماره ملی"
            type="number"
          />
          <Select
            selectOptions={selectOptions}
            formik={formik}
            name="term"
            styles={styles}
          />
          <p className={styles.paymentLabel}>
            پرداخت هزینه برای تکمیل فرم ضروری نیست،درصورت تمایل به صورت حضوری
            پرداخت کنید.
          </p>
          <button className={styles.payBtn}>پرداخت</button>
          <div className={styles.btnBox}>
            <button
              type="submit"
              disabled={!formik.isValid}
              className={`${styles.btn} ${styles.register}`}
            >
              ثبت نام
            </button>
            <button
              onClick={() => setIsShow(false)}
              className={`${styles.btn} ${styles.cancel}`}
            >
              کنسل
            </button>
          </div>
        </form>
      </div>
      <div className={styles.bg}></div>
    </>
  );
};

export default Form;
