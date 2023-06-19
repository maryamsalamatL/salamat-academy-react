import { useFormik } from "formik";
import { object, string, ref, array, boolean, number } from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthActions } from "../../provider/AuthProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./SignupPage.module.css";
import Input from "../../components/common/Input";

const initialValues = {
  name: "",
  age: "",
  IDcode: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = object({
  name: string().required("لطفا نام خود را به صورت کامل وارد کنید"),
  age: number().required("لطفا سن خود را وارد کنید").positive().integer(),
  phoneNumber: string()
    .required("لطفا شماره تماس خود را وارد کنید")
    .matches(/^[0-9]{10,11}$/, "ساختار شماره تماس قابل قبول نیست !"),
  password: string()
    .required("لطفا رمز وارد کنید")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "رمز شما باید شامل 8 کارکتر، یک حرف بزرگ،یک حرف کوچک،یک عدد،یک کارکتر خاص باشد"
      // "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: string()
    .required("لطفا رمز خود را تکرار کنید")
    .oneOf([ref("password"), null], "رمز تطابق ندارد"),

  IDcode: number().required("لطفا کد ملی خود را وارد کنید"),
});

const SignupPage = () => {
  const [error, setError] = useState(null);
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "";

  const onSubmit = (values) => {
    // const { name, email, password, phoneNumber } = values;
    // const userData = {
    //   name,
    //   email,
    //   password,
    //   phoneNumber,
    // };
    // signupUser(userData)
    //   .then(({ data }) => {
    //     setAuth(data);
    //     localStorage.setItem("authState", JSON.stringify(data));
    //     setError(null);
    //     navigate(`/${redirect}`);
    //   })
    //   .catch((err) => {
    //     if (err.response && err.response.data.message) {
    //       setError(err.response.data.message);
    //     }
    //   });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className={styles.mainContainer}>
      <form onSubmit={formik.handleSubmit}>
        <h1>ثبت نام در سایت</h1>
        <Input name="name" formik={formik} label="نام و نام خانوادگی" />
        <Input name="IDcode" formik={formik} label="شماره ملی" />
        <Input name="age" formik={formik} label="سن" />

        <Input
          name="phoneNumber"
          formik={formik}
          label="شماره تماس"
          type="tel"
        />
        <Input name="password" formik={formik} label="رمز" type="password" />
        <Input
          name="passwordConfirm"
          formik={formik}
          label="تایید رمز"
          type="password"
        />
        <button type="submit" className={styles.btn} disabled={!formik.isValid}>
          ثبت نام
        </button>
        {error && <p className="error">{error}</p>}
        <Link
          className={styles.link}
          to={`/login${redirect && `?redirect=${redirect}`}`}
        >
          <p>قبلا ثبت نام کرده اید ؟</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
