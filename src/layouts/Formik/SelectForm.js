import { useField } from "formik";
import React from "react";

const SelectForm = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("field", field);
  return (
    <div className="flex flex-col gap-6 mb-10">
      <label htmlFor={props.name || props.id}>{label}</label>
      <select
        type="text"
        className="p-[14px] rounded-2xl border border-gray-200 text-black "
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 italic text-xl">{meta.error} </div>
      ) : null}
    </div>
  );
};

export default SelectForm;
