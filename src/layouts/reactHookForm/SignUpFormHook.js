
import React from "react";

const SignUpFormHook = () => {
  return (
    <form
      className="p-14 w-full max-w-[50rem] mx-auto"
    >
      <div className="flex flex-col gap-6 mb-10">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-[14px] rounded-2xl border border-gray-200 text-black "
        />
          <div className="text-red-500 italic text-xl">
          </div>
      </div>
      <div className="flex flex-col gap-6 mb-10">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-[14px] rounded-2xl border border-gray-200 text-black "
        />
          <div className="text-red-500 italic text-xl">
          </div>

      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUpFormHook;
