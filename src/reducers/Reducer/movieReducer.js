import { SET_LOADING, SET_MOVIE, SET_QUERY } from "../../constants/movieConstants";

export const movieReducer = (state,{type,payload})=>{
  switch (type) {
    case SET_MOVIE:
      return {
        ...state,
        movies: payload,
      };
    case SET_QUERY: {
      return {
        ...state,
        query: payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    default:
      return state;
  }
}