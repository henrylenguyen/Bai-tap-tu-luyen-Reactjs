import React from "react";
import { useParams } from "react-router-dom";
import SignUpFormV2 from "../../layouts/Formik/SignUpFormV2";

import MovieSearchApp from "../../layouts/Movie/MovieSearchApp";
import SignUpFormHook from "../../layouts/reactHookForm/SignUpFormHook";
import PageNotFound from "../layout/PageNotFound";


const LiveView = () => {
  const { slug } = useParams();
  // console.log("slug", slug);
  return (
    <div className="w-full h-full">
      {slug === "movie-search-app" ? (
        <MovieSearchApp></MovieSearchApp>
      ) : slug === "sign-up-form-formik" ? (
        <SignUpFormV2></SignUpFormV2>
      ) : slug === "sign-up-form-react-hook-form" ? (
        <SignUpFormHook></SignUpFormHook>
      ) : (
        <PageNotFound></PageNotFound>
      )}
    </div>
  );
};

export default LiveView;
