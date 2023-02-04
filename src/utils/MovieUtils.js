import { SET_LOADING, SET_MOVIE, SET_QUERY } from "../constants/movieConstants";

export const initialState = {
  movies: [],
  query: "",
  loading: true
}

 export const setMovies = (payload)=>{
  return {
    type: SET_MOVIE,
    payload,
  };
}
 export const setQuery = (payload)=>{
  return {
    type: SET_QUERY,
    payload,
  };
}
 export const setLoading = (payload)=>{
  return {
    type: SET_LOADING,
    payload,
  };
}
