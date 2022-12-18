import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APP_CONFIG } from "./config";
import { defaultState } from "./state";
import { MovieListResponse, MovieResponse } from "./type";

const API_KEY = APP_CONFIG.API_KEY

export const fetchAllMovies = createAsyncThunk('fetch-all-movies', async (URL: string): Promise<MovieListResponse> => {
  const response = await fetch(URL, {
    method: "GET",
  })
  const data: MovieListResponse = await response.json();
  return data;
})

// fetches a movie by a given ID.
export const fetchMovie = createAsyncThunk('fetch-movie', async (id: string): Promise<MovieResponse> => {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const response = await fetch(URL, {
    method: "GET",
  })
  const data: MovieResponse = await response.json();
  return data;
})

const movieSlice = createSlice({
  name: "products",
  initialState: defaultState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.movies = action.payload
        state.fetchStatus = 'success';
      })
      .addCase(fetchAllMovies.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchAllMovies.rejected, (state) => {
        state.movies = {} as MovieListResponse;
        state.fetchStatus = 'error';
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.movie = action.payload
        state.fetchStatus = 'success';
      })
      .addCase(fetchMovie.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchMovie.rejected, (state) => {
        state.movie = {} as MovieResponse;
        state.fetchStatus = 'error';
      })
  },
})

export default movieSlice;