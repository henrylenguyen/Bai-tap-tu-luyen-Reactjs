import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { movieReducer } from "../../reducers/Reducer/movieReducer";
import { initialState, setMovies, setQuery } from "../../utils/MovieUtils";
import MovieItem from "./MovieItem";

const MovieSearchApp = () => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const { movies, query } = state;
  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=77becd787af72c80307f0877b3a400f4&query='${query}'`,
      });
      if (response.data.results) {
        dispatch(setMovies(response.data.results));
      }
    }

    fetchData();
  }, [query]);
  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto">
        <input
          type="text"
          className="w-full p-[20px] rounded-xl border border-purple-500 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2);] text-black"
          placeholder="search movie...."
          onChange={handleChange}
        />
      </div>
      <div className="grid  gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;
