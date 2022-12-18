import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movieSlice from '../features/movies/movieSlice';

export const movieStore = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
});

export type AppDispatch = typeof movieStore.dispatch;
export type RootState = ReturnType<typeof movieStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
