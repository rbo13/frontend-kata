import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { APP_CONFIG } from "./config";
import { fetchAllMovies } from "./movieSlice";

const API_KEY = APP_CONFIG.API_KEY;

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

export function Movie() {
  const state = useAppSelector((state) => state)
  const { movies: {movies} } = state;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchAllMovies(URL))
  }, [dispatch])

  console.log("This is the movies: ", movies);

  return (
    <div>
      <div className="container movie-list">
        <h1>This is movie list</h1>
        <ul>
          {movies?.results?.map((result) => {
            return (
              <li key={result?.id}>{result?.original_title}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}