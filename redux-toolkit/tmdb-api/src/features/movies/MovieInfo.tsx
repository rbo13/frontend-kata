import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchMovie } from "./movieSlice";

const movieId = "550";

export function MovieInfo() {
  const state = useAppSelector((state) => state)
  const { movies: {movie} } = state;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchMovie(movieId))
  }, [dispatch])

  console.log("This is the movie info: ", movie);

  return (
    <div>
      <div className="container movie-info">
        <h1>{movie?.original_title}</h1>
        <p>{movie?.overview}</p>
        <div>
          <a href={movie?.homepage} target="_blank" rel="noopener noreferrer">Movie URL</a>
        </div>
        <div>
          Rating: {movie?.vote_average}
        </div>
      </div>
    </div>
  )
}