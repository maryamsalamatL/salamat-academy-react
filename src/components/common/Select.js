import { useEffect } from "react";

const Select = ({ selectOptions, formik, name, styles }) => {
  return (
    <div style={{ marginBottom: "20px", width: "100%" }}>
      <select
        id={name}
        name={name}
        {...formik.getFieldProps({ name })}
        onClick={(e) => console.log(e.target.value)}
      >
        <option value="">انتخاب کلاس</option>
        {selectOptions.map((option) => {
          return (
            <option key={option.id} value={option.title}>
              {option.title}
            </option>
          );
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <p className="error">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Select;
