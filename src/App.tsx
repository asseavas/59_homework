import MovieForm from './Components/MovieForm/MovieForm';
import {Movie} from './types';
import {useState} from 'react';
import './App.css';
import MovieCard from './Components/MovieCard/MovieCard';

const App = () => {
  const [movie, setMovie] = useState<Movie[]>([
    {name: 'Lol', id: 1},
    {name: 'Test', id: 2},
  ]);

  const addMovie = (movie: Movie) => {
    setMovie((prevState) => [...prevState, movie]);
  };

  const removeMovie = (id: number) => {
    setMovie((prevState) => {
      return prevState.filter((t) => t.id !== id);
    });
  };

  return (
    <>
      <div className="container">
        <div className="row mt-2 justify-content-evenly">
          <div className="col-6">
            <MovieForm onSubmit={addMovie} />
            <div className="pt-4 d-flex flex-column gap-2">
              {movie.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  name={movie.name}
                  removeMovie={removeMovie}
                />
              ))}
            </div>
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
