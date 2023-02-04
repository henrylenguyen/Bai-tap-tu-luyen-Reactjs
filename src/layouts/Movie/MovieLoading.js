import React from "react";
import LoadingSkeleton from "../../components/loading/LoadingSkeleton";

const MovieLoading = () => {
  return (
    <div className=" rounded-[16px] text-black flex flex-col">
      <div className="p-[1rem] h-[50rem]">
        <LoadingSkeleton borderRadius="8px"></LoadingSkeleton>
      </div>
      <div className="p-[30px]  flex-1 flex flex-col">
        <h3 className="leading-[24px] font-semibold text-[1.6rem]">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </h3>
        <p className="font-normal text-[1.4rem] !leading-[21px] text-[rgba(153,_153,_153,_1);] my-[1.6rem]">
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-3"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-3"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
        </p>
        <div className="flex gap-5 mt-auto">
          <LoadingSkeleton width="15px" height="15px"></LoadingSkeleton>
          <span className="font-semibold text-[rgba(51,_51,_51,_1);] text-[1.4rem] ">
            <LoadingSkeleton width="50px" height="15px"></LoadingSkeleton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieLoading;
