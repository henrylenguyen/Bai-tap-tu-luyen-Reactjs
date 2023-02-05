import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

import * as Yup from "yup";
import CheckBoxForm from "./CheckBoxForm";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import TexareaForm from "./TexareaForm";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        //Yup.string() nhập vào là chữ số
        //max(value,error)
        firstName: Yup.string()
          .max(20, "Tên phải ít hơn 20 ký tự")
          .required("Tên không được để trống"),
        lastName: Yup.string()
          .matches("[a-zA-Z]", "Họ không được chứa số")
          .max(10, "Họ phải ít hơn 10 ký tự")
          .required("Họ không được để trống!"),
        email: Yup.string()
          .email("Email phải đúng định dạng")
          .required("Emai không được để trống!"),
        intro: Yup.string().required("Giới thiệu bản thân không được để trống"),
        job: Yup.string().required("Hãy chọn công việc của bạn!"),
        terms: Yup.boolean().oneOf(
          [true],
          "Xác nhận điều khoản và dịch vụ của chúng tôi"
        ),
      })}
      onSubmit={(values,actions) => {
        // console.log(values,actions);
        setTimeout(()=>{
        actions.resetForm({
          firstName: "",
          lastName: "",
          email: "",
          intro: "",
          job: "",
          terms: false,
        });
          actions.setSubmitting(false)
        },2000)
      }}
    >
    {(formik)=>{
      return(
      <Form className="p-14 w-full max-w-[50rem] mx-auto">
        {/* <div className="flex flex-col gap-6 mb-10">
          <label htmlFor="firstName">First Name</label>
          <Field
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            className="p-[14px] rounded-2xl border border-gray-200 text-black "
          ></Field>
          <div className="text-red-500 italic text-xl">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div> */}
        <InputForm
          label="Tên"
          placeholder="Tên của bạn"
          name="firstName"
          id="firstName"
        ></InputForm>
        <InputForm
          label="Họ"
          placeholder="Họ của bạn"
          name="lastName"
          id="lastName"
        ></InputForm>
        <InputForm
          label="Email"
          placeholder="Nhập địa chỉ email"
          name="email"
          id="email"
          type="email"
        ></InputForm>
        <TexareaForm
          label="Giới thiệu bản thân"
          placeholder="Giới thiệu sơ về bản thân của bạn"
          name="intro"
          id="intro"
        ></TexareaForm>
        <SelectForm label="Công việc" name="job" id="job">
          <option value="choose">Choose your job</option>
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="fullstack">Fullstack Developer</option>
        </SelectForm>
        <CheckBoxForm name="terms">
          I accept the terms and conditions
        </CheckBoxForm>
        {/* <div className="flex flex-col gap-6 mb-10">
          <label htmlFor="intro">Introduce yourself</label>
          <Field
            name="intro"
            id="intro"
            placeholder="Enter your introduce yourself"
            className="p-[14px] h-[150px] rounded-2xl border border-gray-200 text-black resize-none "
            as="textarea"
          ></Field>
          <div className="text-red-500 italic text-xl">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-6 mb-10">
          <label htmlFor="intro">Your job</label>
          <Field
            name="job"
            id="job"
            className="p-[14px] rounded-2xl border border-gray-200 text-black resize-none "
            as="select"
          >
            <option value="choose">Choose your job</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
          </Field>
          <div className="text-red-500 italic text-xl">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div> */}
        {/* <div className="flex items-center gap-6 mb-10">
          <Field
            name="terms"
            type="checkbox"
            id="terms"
            className="p-[14px] rounded-2xl border border-gray-200 text-black  "
          ></Field>
          <label htmlFor="terms">I accept the terms and conditions</label>
          <div className="text-red-500 italic text-xl">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div> */}
        <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
          Submit
        </button>
      </Form>
      )
    }}
    </Formik>
  );
};

export default SignUpFormV2;
