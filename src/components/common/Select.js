import { useEffect } from "react";

const Select = ({ selectOptions, formik, name, styles }) => {
  return (
    <>
      {/* <label htmlFor="semester">کلاس</label> */}
      <select
        id="semester"
        name="semester"
        {...formik.getFieldProps("semster")}
      >
        {selectOptions.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <p className={styles.error}>{formik.errors[name]}</p>
      )}
    </>
  );
};

export default Select;
