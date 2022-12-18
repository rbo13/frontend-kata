import { MovieListResponse, MovieResponse } from "./type";

export const defaultState = {
  movies: {} as MovieListResponse,
  movie: {} as MovieResponse,
  fetchStatus: "",
};
