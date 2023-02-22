import { useEffect } from "react";

const Select = ({ selectOptions, formik }) => {
  return (
    <>
      {/* <label htmlFor="semester">کلاس</label> */}
      <select
        id="semester"
        name="semester"
        {...formik.getFieldProps("semster")}
      >
        {selectOptions.map((c) => {
          return <option key={c}>{c}</option>;
        })}
      </select>
    </>
  );
};

export default Select;
