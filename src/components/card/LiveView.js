import React from "react";
import { useParams } from "react-router-dom";
import MovieSearchApp from "../../layouts/Movie/MovieSearchApp";


const LiveView = () => {
  const { slug } = useParams();
  // console.log("slug", slug);
  return (
    <div className="w-full h-full">
      {slug === "movie-search-app" ? (
       <MovieSearchApp></MovieSearchApp>
      ) : (
        ""
      )}
    </div>
  );
};

export default LiveView;
