const Input = ({ formik, styles, name, label, type = "text" }) => {
  return (
    <div style={{ marginBottom: "10px", width: "100%" }}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        {...formik.getFieldProps({ name })}
      />
      {formik.errors[name] && formik.touched[name] && (
        <p className={styles.error}>{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
