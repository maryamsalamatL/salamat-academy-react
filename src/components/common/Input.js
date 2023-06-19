import { useRef } from "react";

const Input = ({ formik, name, label, type = "text" }) => {
  const ref = useRef();
  const focusHandler = () => {
    ref.current.className = "focused";
    console.log(ref.current);
  };
  const blurHandler = (e) => {
    const value = e.target.value;
    if (!value) {
      ref.current.className = "blur";
    }
  };

  return (
    <div style={{ marginBottom: "20px", width: "100%", position: "relative" }}>
      <label htmlFor={name} ref={ref} className="blur">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        {...formik.getFieldProps({ name })}
        onFocus={focusHandler}
        onBlurCapture={blurHandler}
      />
      {formik.errors[name] && formik.touched[name] && (
        <p className="error">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
