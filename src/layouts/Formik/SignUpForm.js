import { useFormik } from "formik";
import React from "react";

import * as Yup from "yup"
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required!";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 charactors or less!";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required!";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 charactors or less!";
//   }
//   return errors;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      //Yup.string() nhập vào là chữ số
      //max(value,error)
      firstName: Yup.string()
        .max(20, "Must be 20 charactors or less!")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 charactors or less!")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-14 w-full max-w-[50rem] mx-auto"
    >
      <div className="flex flex-col gap-6 mb-10">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-[14px] rounded-2xl border border-gray-200 text-black "
          {...formik.getFieldProps("firstName")}
        />
        {/* formik.touched nghĩa là người dùng đã trỏ chuột vào hay chưa (tương tác với field đó) trả về true là đã nhấn vào rồi */}
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500 italic text-xl">
            {formik.errors.firstName}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-6 mb-10">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-[14px] rounded-2xl border border-gray-200 text-black "
          // => getFieldProps tương đương onBlur,Onchange,name,value
          {...formik.getFieldProps("lastName")}
        />
        {/* formik.touched nghĩa là người dùng đã trỏ chuột vào hay chưa (tương tác với field đó) trả về true là đã nhấn vào rồi */}
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500 italic text-xl">
            {formik.errors.lastName}
          </div>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
