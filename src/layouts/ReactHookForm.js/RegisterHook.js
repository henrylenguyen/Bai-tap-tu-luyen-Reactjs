import React from 'react';
import { useForm } from 'react-hook-form';
import CheckBoxHook from '../../components/checkbox/CheckBoxHook';
import DropdownHook from '../../components/dropdown/DropdownHook';
import InputHook from '../../components/input/InputHook';
import RadioHook from '../../components/radio/RadioHook';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Your password must have at least 8 characters or greater")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.,()#?!@$%^&"_';/[=*-]).{8,}$/,
        {
          message:
            "Your password at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
        }
      ),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female", "You can only select male or female"]),
    // job: yup.string().required("Please select your job"),
    terms: yup.boolean().required("Please accept the terms and conditions"),
  })
  .required();

const RegisterHook = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors,isValid,isSubmitting,isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema),mode:"onChange" });   
  // console.log("errors", errors);
  const onSubmitHandle = (values) => {
    if(!isValid) return;
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
        console.log("values", values);
        reset({
          username: "",
          email: "",
          gender: "",
          job: "",
          terms:false,
        });
      },1000)
    })
    
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandle)}
      className="max-w-[350px] mx-auto my-[50px] text-black"
    >
      <div className="flex flex-col gap-5 w-full mb-5">
        <label className="cursor-pointer text-white" htmlFor="userName">
          Username
        </label>
        <InputHook
          name="username"
          id="username"
          placeholder="Enter your username"
          control={control}
          type="text"
        ></InputHook>
        {/* <input
          className="p-7 boder border-gray-100 rounded-3xl outline-none"
          type="text"
          placeholder="Enter your username"
          id="userName"
        /> */}
        {errors.username && (
          <p className="text-red-500 text-[13px] italic">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-5 w-full mb-5">
        <label className="cursor-pointer text-white" htmlFor="email">
          Email
        </label>
        <InputHook
          name="email"
          id="email"
          placeholder="Enter your email"
          control={control}
          type="email"
        ></InputHook>
        {errors.email && (
          <p className="text-red-500 text-[13px] italic">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-5 w-full mb-5">
        <label className="cursor-pointer text-white" htmlFor="password">
          Password
        </label>
        <InputHook
          name="password"
          id="password"
          placeholder="Enter your password"
          control={control}
          type="password"
        ></InputHook>
        {errors.password && (
          <p className="text-red-500 text-[13px] italic">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-5 w-full mb-5 text-white">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              id="male"
              value={"male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              id="female"
              value={"female"}
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-[13px] italic">
            {errors.gender.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-5 w-full mb-5 text-white">
        <label className="cursor-pointer">Your job</label>
        <DropdownHook
          dropdownLabel={
            isSubmitSuccessful ? "Select your job" : "Select your job"
          }
        ></DropdownHook>
      </div>
      <div>
        <CheckBoxHook
          control={control}
          text="I accept the terms and conditions"
          name="terms"
          id="terms"
        ></CheckBoxHook>
        {errors.terms && (
          <p className="text-red-500 text-[13px] italic">
            {errors.terms.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className={`w-full p-7 bg-blue-500 text-white rounded-xl font-semibold mt-5 ${
          isSubmitting ? "opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-[20px] h-[20px] rounded-full border-2 border-white border-t-2 border-t-transparent mx-auto animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;