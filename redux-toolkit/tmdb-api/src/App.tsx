import React from 'react';
import './App.css';
import { Movie } from './features/movies/Movie';
import { MovieInfo } from './features/movies/MovieInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Movie /> */}
        <MovieInfo />
      </header>
    </div>
  );
}

export default App;
