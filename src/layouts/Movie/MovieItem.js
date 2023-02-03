import React from "react";

const MovieItem = () => {
  return (
    <div className=" rounded-[16px] bg-white text-black">
      <div className="p-[1rem]">
        <img
          src="https://images.unsplash.com/photo-1675106251211-1d957477bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt="hinh"
          className="rounded-[8px]"
        />
      </div>
      <div className="p-[30px]">
        <h3 className="leading-[24px] font-semibold text-[1.6rem]">
          Hotel Transylvania: Puppy!
        </h3>
        <p className="font-normal text-[1.4rem] leading-[21px] text-[rgba(153,_153,_153,_1);] mt-[1.6rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          cupiditate velit provident aut harum, libero aliquam magnam voluptatum
          deserunt illo eos aliquid.
        </p>
        <div className="flex gap-5 mt-[2.5rem]">
          <i class="fa-regular fa-star text-[rgba(255,_184,_108,_1);]"></i>
          <span className="font-semibold text-[rgba(51,_51,_51,_1);] text-[1.4rem]">
            6.4
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
