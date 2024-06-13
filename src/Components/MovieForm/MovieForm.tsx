import React, {useState} from 'react';
import {Movie} from '../../types';

interface Props {
  onSubmit: (movie: Movie) => void;
}

const MovieForm: React.FC<Props> = ({onSubmit}) => {
  const [movieData, setMovieData] = useState({
    name: '',
  });

  const changeMovie = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMovieData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random(),
      name: movieData.name,
    });

    setMovieData({
      name: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="row align-items-center">
        <div className="col-10">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Movie name"
            value={movieData.name}
            onChange={changeMovie}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary w-100">Add</button>
        </div>
      </div>
    </form>
  );
};

export default MovieForm;