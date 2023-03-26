import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import {
  postRegister,
  getAvailableClasses,
} from "../../sevices/requestService";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../common/Input";
import Select from "../common/Select";
import { FaTimes } from "react-icons/fa";

const initialValues = {
  name: "",
  age: "",
  semester: "",
  IDcode: "",
  phoneNumber: "",
};
const Form = ({ id, setIsShow }) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const onSubmit = () => {
    let level = "";
    if (id === 1) {
      level = "minors";
    } else if (id === 2) {
      level = "children";
    } else if (id === 3) {
      level = "teenagers";
    } else if (id === 4) {
      level = "adults";
    }

    postRegister(level, { ...formik.values, formId: id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setIsShow(false);
  };
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    age: yup.number().required("Age is required").positive().integer(),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10,11}$/, "Phone number is not valid"),
    IDcode: yup.number().required("ID is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    getAvailableClasses()
      .then((res) => {
        setSelectOptions(["انتخاب ترم", ...res.data]);
      })
      .catch();
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
            name="age"
            styles={styles}
            label="سن"
            type="number"
          />
          <Input
            formik={formik}
            name="phoneNumber"
            styles={styles}
            label="شماره تماس"
            type="number"
          />
          <Input
            formik={formik}
            name="IDcode"
            styles={styles}
            label="شماره ملی"
            type="number"
          />
          <Select selectOptions={selectOptions} formik={formik} />

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
