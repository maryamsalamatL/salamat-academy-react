import Input from "../../components/common/Input";
import styles from "./LoginPage.module.css";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useAuthActions } from "../../provider/AuthProvider";

const initialValues = {
  IDcode: "",
  password: "",
};
const validationSchema = object({
  IDcode: number().required("لطفا کند ملی خود را وارد کنید"),
  password: string().required("لطفا رمز عبود خود را وارد کنید"),
});

const LoginPage = () => {
  const setAuth = useAuthActions();
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "";
  const navigate = useNavigate();

  const onSubmit = (values) => {
    // loginUser(values)
    //   .then(({ data }) => {
    //     console.log(data);
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
        <h1>ورود</h1>
        <Input name="IDcode" formik={formik} label="کد ملی" type="number" />
        <Input
          name="password"
          formik={formik}
          label="رمز ورود"
          type="password"
        />
        <button type="submit" className={styles.btn} disabled={!formik.isValid}>
          ورود
        </button>
        {error && <p className="error">{error}</p>}

        <Link
          className={styles.link}
          to={`/signup${redirect && `?redirect=${redirect}`}`}
        >
          <p>هنوز حساب کاربری ندارید ؟</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
