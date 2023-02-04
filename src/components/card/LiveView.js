import React from "react";
import { useParams } from "react-router-dom";
import MovieSearchApp from "../../layouts/Movie/MovieSearchApp";
import PageNotFound from "../layout/PageNotFound";


const LiveView = () => {
  const { slug } = useParams();
  // console.log("slug", slug);
  return (
    <div className="w-full h-full">
      {slug === "movie-search-app" ? (
       <MovieSearchApp></MovieSearchApp>
      ) : (
        <PageNotFound></PageNotFound>
      )}
    </div>
  );
};

export default LiveView;
