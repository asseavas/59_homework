import { useState } from 'react';
import MovieForm from './Components/MovieForm/MovieForm';
import { Movie } from './types';
import MovieCard from './Components/MovieCard/MovieCard';
import Jokes from './Containers/Jokes/Jokes';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([
    { name: 'Alice in Borderland', id: 1 },
    { name: 'Harry Potter', id: 2 },
    { name: 'Dune', id: 3 },
  ]);

  const addMovie = (movie: Movie) => {
    setMovies((prevState) => [...prevState, movie]);
  };

  const removeMovie = (id: number) => {
    setMovies((prevState) => {
      return prevState.filter((m) => m.id !== id);
    });
  };

  const updateMovieName = (id: number, newName: string) => {
    setMovies((prevState) =>
      prevState.map((movie) =>
        movie.id === id ? { ...movie, name: newName } : movie
      )
    );
  };

  return (
    <>
      <div className="container">
        <div className="row mt-2 justify-content-evenly">
          <div className="col-6">
            <MovieForm onSubmit={addMovie} />
            <div className="pt-4 d-flex flex-column gap-2">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  name={movie.name}
                  removeMovie={removeMovie}
                  updateMovieName={updateMovieName}
                />
              ))}
            </div>
          </div>
          <div className="col-6">
            <Jokes />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
