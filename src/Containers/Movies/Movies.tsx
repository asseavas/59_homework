import {useState} from 'react';
import {Movie} from '../../types';
import MovieForm from '../../Components/MovieForm/MovieForm';
import MovieCard from '../../Components/MovieCard/MovieCard';

const Movies = () => {
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
    <div>
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
  );
};

export default Movies;