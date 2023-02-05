import { useField } from "formik";
import React from "react";

const CheckBoxForm = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("field", field);
  return (
    <div className="flex flex-col gap-6 mb-10">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 italic text-xl">{meta.error} </div>
      ) : null}
    </div>
  );
};
export default CheckBoxForm;
