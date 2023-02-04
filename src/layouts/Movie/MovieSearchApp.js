import axios from "axios";
import React, { useEffect, useReducer } from "react";
import useDebounce from "../../hooks/useDebounce";
import { movieReducer } from "../../reducers/Reducer/movieReducer";
import {
  initialState,
  setLoading,
  setMovies,
  setQuery,
} from "../../utils/MovieUtils";
import MovieItem from "./MovieItem";
import MovieLoading from "./MovieLoading";

const MovieSearchApp = () => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const { movies, query, loading } = state;
  const queryDebounce = useDebounce(query, 500);
  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      const response = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=77becd787af72c80307f0877b3a400f4&query='${queryDebounce}'`,
      });
      if (response.data.results) {
        dispatch(setMovies(response.data.results));
        dispatch(setLoading(false));
      }
    }

    fetchData();
  }, [queryDebounce]);
  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };
  return (
    <div className={`p-10 ${loading && "bg-white"} `}>
      <div className="w-full max-w-[500px] mx-auto">
        <input
          type="text"
          className="w-full p-[20px] rounded-xl border border-purple-500 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2);] text-black"
          placeholder="search movie...."
          onChange={handleChange}
        />
      </div>
      {loading && (
        <div className="grid  gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 ">
          <MovieLoading></MovieLoading>
          <MovieLoading></MovieLoading>
          <MovieLoading></MovieLoading>
        </div>
      )}
      <div className="grid  gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;
