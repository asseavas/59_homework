import React from 'react';

interface Props {
  id: number;
  name: string;
  removeMovie: (id: number) => void;
}

const MovieCard: React.FC<Props> = ({name, id, removeMovie}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex gap-3 align-items-center">
          <div>
            <span>{name}</span>
          </div>
          <button className="btn btn-danger ms-auto" onClick={() => removeMovie(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;