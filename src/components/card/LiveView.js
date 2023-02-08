import React from "react";
import { useParams } from "react-router-dom";

import MovieSearchApp from "../../layouts/Movie/MovieSearchApp";
import RegisterHook from "../../layouts/ReactHookForm.js/RegisterHook";
import PageNotFound from "../layout/PageNotFound";


const LiveView = () => {
  const { slug } = useParams();
  // console.log("slug", slug);
  return (
    <div className="w-full h-full">
      {slug === "movie-search-app" ? (
        <MovieSearchApp></MovieSearchApp>
      ) : slug === "sign-up-form-formik" ? (
        <h2>Đang cập nhật</h2>
      ) : slug === "register-form-react-hook-form" ? (
        <RegisterHook></RegisterHook>
      ) : (
        <PageNotFound></PageNotFound>
      )}
    </div>
  );
};

export default LiveView;
