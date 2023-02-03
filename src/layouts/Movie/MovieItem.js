
import React from "react";
const MovieItem = ({ data }) => {
  return (
    <div className=" rounded-[16px] bg-white text-black flex flex-col">
      <div className="p-[1rem] h-[50rem]">
        <img
          src={
            data.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
              : "https://img.freepik.com/premium-photo/3d-render-astronaut-holding-magnify-glass-with-404-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-4786.jpg?w=740"
          }
          alt={data.title}
          className="rounded-[8px] w-full h-full object-fill"
        />
      </div>
      <div className="p-[30px]  flex-1 flex flex-col">
        <h3 className="leading-[24px] font-semibold text-[1.6rem]">
          {data.title}
        </h3>
        <p className="font-normal text-[1.4rem] !leading-[21px] text-[rgba(153,_153,_153,_1);] my-[1.6rem]">
          {data.overview}
        </p>
        <div className="flex gap-5 mt-auto">
          <i className="fa-regular fa-star text-[rgba(255,_184,_108,_1);]"></i>
          <span className="font-semibold text-[rgba(51,_51,_51,_1);] text-[1.4rem] ">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
